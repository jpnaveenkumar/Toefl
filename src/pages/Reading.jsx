import React, { useState, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { READING_PASSAGES } from '../data/reading'
import Timer from '../components/Timer'
import ProgressBar from '../components/ProgressBar'
import { BookOpen, ChevronRight, ChevronLeft, CheckCircle, XCircle, Clock, Award, ArrowLeft, RotateCcw } from 'lucide-react'

export default function Reading() {
  const { dispatch } = useApp()
  const [view, setView] = useState('list') // list | passage | quiz | results
  const [selectedPassage, setSelectedPassage] = useState(null)
  const [showFullPassage, setShowFullPassage] = useState(true)
  const [currentQ, setCurrentQ] = useState(0)
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const [elapsedMinutes, setElapsedMinutes] = useState(0)

  const startPassage = (passage) => {
    setSelectedPassage(passage)
    setAnswers({})
    setSubmitted(false)
    setCurrentQ(0)
    setShowFullPassage(true)
    setStartTime(Date.now())
    setView('passage')
  }

  const goToQuiz = () => {
    setView('quiz')
  }

  const selectAnswer = (qId, idx) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [qId]: idx }))
  }

  const submitQuiz = () => {
    const elapsed = Math.ceil((Date.now() - startTime) / 60000)
    setElapsedMinutes(elapsed)
    setSubmitted(true)

    const correct = selectedPassage.questions.filter(q => answers[q.id] === q.correct).length
    const total = selectedPassage.questions.length
    const score = Math.round((correct / total) * 30) // TOEFL Reading is 0-30

    dispatch({ type: 'ADD_SCORE', payload: { section: 'reading', score } })
    dispatch({ type: 'LOG_STUDY_SESSION', payload: { minutes: elapsed, section: 'reading' } })
    dispatch({ type: 'EARN_XP', payload: correct * 10 + 20 })

    setView('results')
  }

  const resetPassage = () => {
    setAnswers({})
    setSubmitted(false)
    setCurrentQ(0)
    setView('quiz')
  }

  const difficultyColors = {
    easy: 'bg-green-100 text-green-700',
    medium: 'bg-yellow-100 text-yellow-700',
    hard: 'bg-red-100 text-red-700',
  }

  const typeLabels = {
    factual: 'Factual Info',
    vocabulary: 'Vocabulary',
    inference: 'Inference',
    rhetorical: 'Rhetorical Purpose',
    negative_factual: 'Negative Factual',
    organization: 'Text Organization',
  }

  if (view === 'list') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <BookOpen size={22} className="text-blue-600" />
          <div>
            <h1 className="font-bold text-gray-900 text-lg">Reading</h1>
            <p className="text-xs text-gray-400">Academic passages with comprehension questions</p>
          </div>
        </div>

        {/* Tips banner */}
        <div className="mx-4 mt-4 bg-blue-50 border border-blue-100 rounded-2xl p-4">
          <p className="text-blue-800 font-semibold text-sm mb-1">📖 TOEFL Reading Tips</p>
          <ul className="text-blue-700 text-xs space-y-1">
            <li>• Read the passage first, then tackle questions</li>
            <li>• Skim for main ideas, scan for specific details</li>
            <li>• For vocabulary questions, use context clues</li>
            <li>• Time: ~18 minutes per passage</li>
          </ul>
        </div>

        <div className="px-4 mt-4 space-y-3 pb-6">
          <h2 className="font-semibold text-gray-700">Select a Passage</h2>
          {READING_PASSAGES.map((passage, i) => (
            <button
              key={passage.id}
              onClick={() => startPassage(passage)}
              className="card w-full text-left active:scale-98 transition-all"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`section-badge ${difficultyColors[passage.difficulty]}`}>
                      {passage.difficulty}
                    </span>
                    <span className="text-xs text-gray-400">{passage.topic}</span>
                  </div>
                  <p className="font-bold text-gray-800">{passage.title}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={12} /> {passage.timeMinutes} min</span>
                    <span>•</span>
                    <span>{passage.questions.length} questions</span>
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 flex-shrink-0 mt-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (view === 'passage') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('list')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-gray-900 text-base truncate">{selectedPassage.title}</h1>
            <p className="text-xs text-gray-400">{selectedPassage.topic}</p>
          </div>
          <Timer totalSeconds={selectedPassage.timeMinutes * 60} compact onComplete={goToQuiz} autoStart />
        </div>

        <div className="px-4 py-4">
          <div className="card">
            <p className="text-gray-800 leading-7 text-sm whitespace-pre-line">
              {selectedPassage.passage}
            </p>
          </div>

          <button
            onClick={goToQuiz}
            className="w-full mt-4 btn-primary flex items-center justify-center gap-2"
          >
            Continue to Questions <ChevronRight size={18} />
          </button>
          <p className="text-center text-xs text-gray-400 mt-2">You can refer back to the passage during questions</p>
        </div>
      </div>
    )
  }

  if (view === 'quiz') {
    const q = selectedPassage.questions[currentQ]
    const totalQ = selectedPassage.questions.length
    const answeredCount = Object.keys(answers).length

    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('passage')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <ProgressBar value={currentQ + 1} max={totalQ} color="blue" height="h-1.5" />
          </div>
          <span className="text-sm text-gray-500 ml-2">{currentQ + 1}/{totalQ}</span>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Question type badge */}
          <div className="flex items-center gap-2">
            <span className="section-badge bg-blue-100 text-blue-700">
              {typeLabels[q.type] || q.type}
            </span>
          </div>

          {/* Question */}
          <div className="card bg-blue-50 border-blue-100">
            <p className="text-gray-800 font-medium leading-6">{q.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-2">
            {q.options.map((opt, idx) => {
              const selected = answers[q.id] === idx
              return (
                <button
                  key={idx}
                  onClick={() => selectAnswer(q.id, idx)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all active:scale-98 ${
                    selected
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                      selected ? 'border-white bg-white text-blue-600' : 'border-gray-300 text-gray-400'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm leading-5">{opt}</span>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Navigation */}
          <div className="flex gap-3">
            <button
              onClick={() => setCurrentQ(c => Math.max(0, c - 1))}
              disabled={currentQ === 0}
              className="flex-1 btn-secondary flex items-center justify-center gap-2 disabled:opacity-30"
            >
              <ChevronLeft size={18} /> Prev
            </button>
            {currentQ < totalQ - 1 ? (
              <button
                onClick={() => setCurrentQ(c => c + 1)}
                className="flex-1 btn-primary flex items-center justify-center gap-2"
              >
                Next <ChevronRight size={18} />
              </button>
            ) : (
              <button
                onClick={submitQuiz}
                disabled={answeredCount < totalQ}
                className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-xl disabled:opacity-50"
              >
                Submit ({answeredCount}/{totalQ})
              </button>
            )}
          </div>

          {/* Question dots */}
          <div className="flex flex-wrap gap-2 justify-center">
            {selectedPassage.questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQ(i)}
                className={`w-8 h-8 rounded-full text-xs font-semibold transition-all ${
                  i === currentQ ? 'bg-blue-600 text-white' :
                  answers[selectedPassage.questions[i].id] !== undefined ? 'bg-blue-200 text-blue-700' :
                  'bg-gray-100 text-gray-400'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (view === 'results') {
    const correct = selectedPassage.questions.filter(q => answers[q.id] === q.correct).length
    const total = selectedPassage.questions.length
    const pct = Math.round((correct / total) * 100)
    const scaledScore = Math.round((correct / total) * 30)

    return (
      <div className="animate-fade-in px-4 py-6">
        {/* Score card */}
        <div className={`rounded-3xl p-6 text-center mb-6 ${
          pct >= 80 ? 'bg-green-500' : pct >= 60 ? 'bg-yellow-500' : 'bg-red-500'
        }`}>
          <Award size={48} className="text-white mx-auto mb-3" />
          <div className="text-white text-5xl font-bold mb-1">{correct}/{total}</div>
          <div className="text-white/90 text-lg">{pct}% correct</div>
          <div className="text-white/70 mt-1">Scaled: {scaledScore}/30</div>
          <div className="text-white/70 text-sm">{elapsedMinutes} minutes used</div>
        </div>

        {/* Question review */}
        <h3 className="font-bold text-gray-800 mb-3">Question Review</h3>
        <div className="space-y-3 mb-6">
          {selectedPassage.questions.map((q, i) => {
            const userAnswer = answers[q.id]
            const isCorrect = userAnswer === q.correct
            return (
              <div key={q.id} className={`card ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
                <div className="flex items-start gap-2 mb-2">
                  {isCorrect
                    ? <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    : <XCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                  }
                  <p className="font-medium text-sm text-gray-800">{q.question}</p>
                </div>
                {!isCorrect && (
                  <div className="ml-6 space-y-1">
                    <p className="text-xs text-red-600">Your answer: {q.options[userAnswer] ?? 'Not answered'}</p>
                    <p className="text-xs text-green-700 font-medium">Correct: {q.options[q.correct]}</p>
                  </div>
                )}
                <div className="ml-6 mt-2">
                  <p className="text-xs text-gray-500 italic">{q.explanation}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex gap-3">
          <button onClick={resetPassage} className="flex-1 btn-secondary flex items-center justify-center gap-2">
            <RotateCcw size={16} /> Retry
          </button>
          <button onClick={() => setView('list')} className="flex-1 btn-primary">
            More Passages
          </button>
        </div>
      </div>
    )
  }
}
