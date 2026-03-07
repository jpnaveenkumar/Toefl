import React, { useState, useMemo } from 'react'
import { useApp } from '../context/AppContext'
import { VOCABULARY, WORD_LEVELS } from '../data/vocabulary'
import ProgressBar from '../components/ProgressBar'
import { BookOpen, RotateCcw, ChevronRight, Check, X, Star, Search, Filter } from 'lucide-react'

export default function Vocabulary() {
  const { state, dispatch } = useApp()
  const { vocabulary } = state

  const [view, setView] = useState('home') // home | flashcard | browse | quiz
  const [filter, setFilter] = useState('all') // all | new | reviewing | mastered
  const [levelFilter, setLevelFilter] = useState(0) // 0 = all
  const [searchQuery, setSearchQuery] = useState('')
  const [cardIndex, setCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [sessionWords, setSessionWords] = useState([])
  const [sessionResults, setSessionResults] = useState([])
  const [sessionDone, setSessionDone] = useState(false)

  const totalMastered = vocabulary.mastered.length
  const totalLearned = vocabulary.learned.length
  const totalReviewing = vocabulary.reviewing.length
  const totalWords = VOCABULARY.length
  const overallProgress = Math.round(((totalMastered + totalLearned) / totalWords) * 100)

  const filteredWords = useMemo(() => {
    let words = VOCABULARY
    if (levelFilter > 0) words = words.filter(w => w.level === levelFilter)
    if (filter === 'mastered') words = words.filter(w => vocabulary.mastered.includes(w.id))
    else if (filter === 'learned') words = words.filter(w => vocabulary.learned.includes(w.id))
    else if (filter === 'reviewing') words = words.filter(w => vocabulary.reviewing.includes(w.id))
    else if (filter === 'new') words = words.filter(w => !vocabulary.mastered.includes(w.id) && !vocabulary.learned.includes(w.id) && !vocabulary.reviewing.includes(w.id))
    if (searchQuery) words = words.filter(w => w.word.toLowerCase().includes(searchQuery.toLowerCase()) || w.definition.toLowerCase().includes(searchQuery.toLowerCase()))
    return words
  }, [vocabulary, filter, levelFilter, searchQuery])

  const startFlashcards = (wordSet) => {
    const shuffled = [...wordSet].sort(() => Math.random() - 0.5).slice(0, 15)
    setSessionWords(shuffled)
    setSessionResults([])
    setCardIndex(0)
    setIsFlipped(false)
    setSessionDone(false)
    setView('flashcard')
  }

  const rateCard = (rating) => {
    // rating: 'easy' | 'hard' | 'forgot'
    const word = sessionWords[cardIndex]
    const newResults = [...sessionResults, { wordId: word.id, rating }]
    setSessionResults(newResults)

    // Update vocabulary status
    let newStatus = vocabulary.reviewing.includes(word.id) ? 'reviewing' : 'reviewing'
    if (rating === 'easy') {
      const reviews = (vocabulary.cardReviews[word.id]?.reps || 0) + 1
      newStatus = reviews >= 3 ? 'mastered' : 'learned'
    } else if (rating === 'forgot') {
      newStatus = 'reviewing'
    }

    dispatch({
      type: 'UPDATE_VOCABULARY',
      payload: {
        wordId: word.id,
        status: newStatus,
        reviewData: { lastReview: new Date().toISOString(), reps: (vocabulary.cardReviews[word.id]?.reps || 0) + 1 },
      }
    })

    if (cardIndex < sessionWords.length - 1) {
      setCardIndex(i => i + 1)
      setIsFlipped(false)
    } else {
      setSessionDone(true)
      const minutes = Math.ceil(sessionWords.length * 0.5)
      dispatch({ type: 'LOG_STUDY_SESSION', payload: { minutes, section: 'vocabulary' } })
      dispatch({ type: 'EARN_XP', payload: newResults.filter(r => r.rating === 'easy').length * 5 + 10 })
    }
  }

  const currentWord = sessionWords[cardIndex]

  const posColors = {
    'noun': 'bg-blue-100 text-blue-700',
    'verb': 'bg-green-100 text-green-700',
    'adjective': 'bg-purple-100 text-purple-700',
    'adverb': 'bg-orange-100 text-orange-700',
    'noun/verb': 'bg-teal-100 text-teal-700',
    'adjective/noun': 'bg-indigo-100 text-indigo-700',
    'verb/noun': 'bg-teal-100 text-teal-700',
    'verb/adjective': 'bg-rose-100 text-rose-700',
    'noun/adjective': 'bg-violet-100 text-violet-700',
  }

  if (view === 'home') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <BookOpen size={22} className="text-pink-600" />
          <div>
            <h1 className="font-bold text-gray-900 text-lg">Vocabulary</h1>
            <p className="text-xs text-gray-400">200 academic TOEFL words</p>
          </div>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Progress overview */}
          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <span className="font-semibold text-gray-800">Overall Progress</span>
              <span className="text-sm text-gray-500">{totalMastered + totalLearned}/{totalWords}</span>
            </div>
            <ProgressBar value={totalMastered + totalLearned} max={totalWords} color="pink" height="h-3" />
            <div className="grid grid-cols-3 gap-2 mt-4">
              <div className="text-center">
                <div className="text-xl font-bold text-pink-600">{totalWords - totalMastered - totalLearned - totalReviewing}</div>
                <div className="text-xs text-gray-400">New</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-blue-600">{totalLearned + totalReviewing}</div>
                <div className="text-xs text-gray-400">Learning</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-green-600">{totalMastered}</div>
                <div className="text-xs text-gray-400">Mastered</div>
              </div>
            </div>
          </div>

          {/* Study options */}
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                const newWords = VOCABULARY.filter(w => !vocabulary.mastered.includes(w.id) && !vocabulary.learned.includes(w.id))
                startFlashcards(newWords.slice(0, 20))
              }}
              className="card bg-pink-50 border-pink-200 text-left active:scale-95 transition-all"
            >
              <div className="text-2xl mb-2">✨</div>
              <p className="font-bold text-pink-700 text-sm">Learn New Words</p>
              <p className="text-xs text-pink-500 mt-0.5">{Math.max(0, totalWords - totalMastered - totalLearned - totalReviewing)} remaining</p>
            </button>

            <button
              onClick={() => {
                const reviewWords = VOCABULARY.filter(w => vocabulary.reviewing.includes(w.id) || vocabulary.learned.includes(w.id))
                if (reviewWords.length > 0) startFlashcards(reviewWords)
                else alert('No words to review yet! Learn some new words first.')
              }}
              className="card bg-blue-50 border-blue-200 text-left active:scale-95 transition-all"
            >
              <div className="text-2xl mb-2">🔁</div>
              <p className="font-bold text-blue-700 text-sm">Review Words</p>
              <p className="text-xs text-blue-500 mt-0.5">{totalLearned + totalReviewing} to review</p>
            </button>

            <button
              onClick={() => startFlashcards(VOCABULARY)}
              className="card bg-purple-50 border-purple-200 text-left active:scale-95 transition-all"
            >
              <div className="text-2xl mb-2">🎲</div>
              <p className="font-bold text-purple-700 text-sm">Random Mix</p>
              <p className="text-xs text-purple-500 mt-0.5">Random 15 words</p>
            </button>

            <button
              onClick={() => setView('browse')}
              className="card bg-green-50 border-green-200 text-left active:scale-95 transition-all"
            >
              <div className="text-2xl mb-2">📖</div>
              <p className="font-bold text-green-700 text-sm">Browse All</p>
              <p className="text-xs text-green-500 mt-0.5">Search & filter</p>
            </button>
          </div>

          {/* Level breakdown */}
          <div className="card">
            <p className="font-semibold text-gray-800 mb-3">Words by Level</p>
            {[1, 2, 3].map(level => {
              const levelWords = VOCABULARY.filter(w => w.level === level)
              const masteredCount = levelWords.filter(w => vocabulary.mastered.includes(w.id)).length
              const learnedCount = levelWords.filter(w => vocabulary.learned.includes(w.id)).length
              const levelColors = { 1: 'green', 2: 'yellow', 3: 'red' }
              return (
                <div key={level} className="mb-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Level {level}: {WORD_LEVELS[level]}</span>
                    <span className="text-xs text-gray-400">{masteredCount + learnedCount}/{levelWords.length}</span>
                  </div>
                  <ProgressBar value={masteredCount + learnedCount} max={levelWords.length} color={levelColors[level]} height="h-2" />
                </div>
              )
            })}
          </div>

          {/* Tips */}
          <div className="bg-yellow-50 border border-yellow-100 rounded-2xl p-4">
            <p className="text-yellow-800 font-semibold text-sm mb-1">💡 Vocabulary Tips</p>
            <ul className="text-yellow-700 text-xs space-y-1">
              <li>• Review words daily—spaced repetition is key</li>
              <li>• Learn words in context, not in isolation</li>
              <li>• Use new words in sentences to make them stick</li>
              <li>• Aim to learn 10-15 new words per day</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  if (view === 'flashcard') {
    if (sessionDone) {
      const easy = sessionResults.filter(r => r.rating === 'easy').length
      const hard = sessionResults.filter(r => r.rating === 'hard').length
      const forgot = sessionResults.filter(r => r.rating === 'forgot').length

      return (
        <div className="animate-fade-in px-4 py-6">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900">Session Complete!</h2>
            <p className="text-gray-500 mt-1">{sessionWords.length} words reviewed</p>
          </div>

          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="card bg-green-50 border-green-200 text-center">
              <div className="text-2xl font-bold text-green-600">{easy}</div>
              <div className="text-xs text-green-600">Easy ✓</div>
            </div>
            <div className="card bg-yellow-50 border-yellow-200 text-center">
              <div className="text-2xl font-bold text-yellow-600">{hard}</div>
              <div className="text-xs text-yellow-600">Hard</div>
            </div>
            <div className="card bg-red-50 border-red-200 text-center">
              <div className="text-2xl font-bold text-red-500">{forgot}</div>
              <div className="text-xs text-red-500">Forgot</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                const forgotWords = sessionWords.filter((_, i) => sessionResults[i]?.rating === 'forgot')
                if (forgotWords.length > 0) startFlashcards(forgotWords)
                else setView('home')
              }}
              className="flex-1 btn-secondary flex items-center justify-center gap-2"
            >
              <RotateCcw size={16} /> Review Missed
            </button>
            <button onClick={() => setView('home')} className="flex-1 btn-primary">
              Done
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('home')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <X size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <ProgressBar value={cardIndex} max={sessionWords.length} color="pink" height="h-1.5" />
          </div>
          <span className="text-sm text-gray-500 ml-2">{cardIndex + 1}/{sessionWords.length}</span>
        </div>

        <div className="px-4 py-6">
          {/* Flashcard */}
          <div className="flashcard-container mb-6" onClick={() => setIsFlipped(f => !f)}>
            <div className={`flashcard relative w-full ${isFlipped ? 'flipped' : ''}`} style={{ height: 280 }}>
              {/* Front */}
              <div className="flashcard-front absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl flex flex-col items-center justify-center p-6 cursor-pointer">
                <span className="text-white/60 text-sm mb-2">Word</span>
                <h2 className="text-white text-4xl font-bold text-center mb-3">{currentWord?.word}</h2>
                <span className={`section-badge ${posColors[currentWord?.pos] || 'bg-white/20 text-white'} bg-white/20 text-white`}>
                  {currentWord?.pos}
                </span>
                <p className="text-white/50 text-sm mt-6">Tap to reveal definition</p>
              </div>
              {/* Back */}
              <div className="flashcard-back absolute inset-0 bg-white rounded-3xl shadow-lg flex flex-col justify-between p-6 cursor-pointer border-2 border-pink-100">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <h2 className="text-gray-900 text-2xl font-bold">{currentWord?.word}</h2>
                    <span className={`section-badge ${posColors[currentWord?.pos] || 'bg-gray-100 text-gray-500'}`}>{currentWord?.pos}</span>
                  </div>
                  <p className="text-gray-700 text-base leading-6 mb-4">{currentWord?.definition}</p>
                  <div className="bg-gray-50 rounded-xl p-3">
                    <p className="text-xs text-gray-400 mb-1">Example:</p>
                    <p className="text-gray-600 text-sm italic">"{currentWord?.example}"</p>
                  </div>
                </div>
                <div className={`text-xs text-center ${vocabulary.mastered.includes(currentWord?.id) ? 'text-green-600' : vocabulary.learned.includes(currentWord?.id) ? 'text-blue-600' : 'text-gray-400'}`}>
                  {vocabulary.mastered.includes(currentWord?.id) ? '⭐ Mastered' : vocabulary.learned.includes(currentWord?.id) ? '✓ Learned' : '● New word'}
                </div>
              </div>
            </div>
          </div>

          {/* Rating buttons */}
          {isFlipped ? (
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => rateCard('forgot')}
                className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-red-50 border-2 border-red-200 active:scale-95 transition-all"
              >
                <X size={20} className="text-red-500" />
                <span className="text-red-600 text-xs font-semibold">Forgot</span>
              </button>
              <button
                onClick={() => rateCard('hard')}
                className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-yellow-50 border-2 border-yellow-200 active:scale-95 transition-all"
              >
                <Star size={20} className="text-yellow-500" />
                <span className="text-yellow-600 text-xs font-semibold">Hard</span>
              </button>
              <button
                onClick={() => rateCard('easy')}
                className="flex flex-col items-center gap-1 py-3 rounded-2xl bg-green-50 border-2 border-green-200 active:scale-95 transition-all"
              >
                <Check size={20} className="text-green-500" />
                <span className="text-green-600 text-xs font-semibold">Easy</span>
              </button>
            </div>
          ) : (
            <div className="text-center">
              <button
                onClick={() => setIsFlipped(true)}
                className="btn-primary flex items-center gap-2 mx-auto"
              >
                Reveal Definition <ChevronRight size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (view === 'browse') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('home')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <X size={20} className="text-gray-600" />
          </button>
          <h1 className="font-bold text-gray-900">Browse Words</h1>
          <span className="text-sm text-gray-400">{filteredWords.length}</span>
        </div>

        <div className="px-4 py-3 space-y-3 sticky top-14 bg-gray-50 z-10 border-b border-gray-100">
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search words..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="input-field pl-9 text-sm py-2"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { val: 'all', label: 'All' },
              { val: 'new', label: 'New' },
              { val: 'learned', label: 'Learning' },
              { val: 'mastered', label: 'Mastered' },
            ].map(f => (
              <button
                key={f.val}
                onClick={() => setFilter(f.val)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${filter === f.val ? 'bg-pink-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              >
                {f.label}
              </button>
            ))}
            {[0, 1, 2, 3].map(l => (
              <button
                key={l}
                onClick={() => setLevelFilter(l)}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${levelFilter === l ? 'bg-purple-600 text-white' : 'bg-white border border-gray-200 text-gray-600'}`}
              >
                {l === 0 ? 'All Levels' : `L${l}`}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 py-2 space-y-2 pb-6">
          {filteredWords.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <BookOpen size={40} className="mx-auto mb-3 opacity-30" />
              <p>No words match your filters</p>
            </div>
          )}
          {filteredWords.map(word => {
            const isMastered = vocabulary.mastered.includes(word.id)
            const isLearned = vocabulary.learned.includes(word.id)
            const isReviewing = vocabulary.reviewing.includes(word.id)
            return (
              <div key={word.id} className="card">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-gray-900">{word.word}</span>
                      <span className={`section-badge ${posColors[word.pos] || 'bg-gray-100 text-gray-500'}`}>{word.pos}</span>
                      {isMastered && <span className="text-xs text-green-600 font-semibold">⭐ Mastered</span>}
                      {isLearned && !isMastered && <span className="text-xs text-blue-600 font-semibold">✓ Learned</span>}
                    </div>
                    <p className="text-gray-600 text-sm">{word.definition}</p>
                    <p className="text-gray-400 text-xs mt-1 italic">"{word.example}"</p>
                  </div>
                  <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${isMastered ? 'bg-green-500' : isLearned ? 'bg-blue-500' : isReviewing ? 'bg-yellow-500' : 'bg-gray-200'}`} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
