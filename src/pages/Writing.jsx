import React, { useState, useEffect, useRef } from 'react'
import { useApp } from '../context/AppContext'
import { WRITING_TASKS, WRITING_PHRASES } from '../data/writing'
import Timer from '../components/Timer'
import { PenLine, ChevronRight, ArrowLeft, Clock, FileText, CheckCircle, Star, BookOpen } from 'lucide-react'

export default function Writing() {
  const { dispatch } = useApp()
  const [view, setView] = useState('list') // list | task | writing | review
  const [selectedTask, setSelectedTask] = useState(null)
  const [taskPhase, setTaskPhase] = useState('reading') // reading | listening | writing
  const [essayText, setEssayText] = useState('')
  const [showOutline, setShowOutline] = useState(false)
  const [showPhrases, setShowPhrases] = useState(false)
  const [startTime, setStartTime] = useState(null)
  const textareaRef = useRef(null)

  const wordCount = essayText.trim().split(/\s+/).filter(Boolean).length

  const startTask = (task) => {
    setSelectedTask(task)
    setEssayText('')
    setShowOutline(false)
    setShowPhrases(false)
    if (task.taskType === 1 && task.readingPassage) {
      setTaskPhase('reading')
    } else {
      setTaskPhase('writing')
      setStartTime(Date.now())
    }
    setView('task')
  }

  const submitEssay = () => {
    const elapsed = startTime ? Math.ceil((Date.now() - startTime) / 60000) : selectedTask.timeMinutes
    dispatch({ type: 'LOG_STUDY_SESSION', payload: { minutes: elapsed, section: 'writing' } })
    dispatch({ type: 'EARN_XP', payload: Math.min(wordCount, 100) })
    dispatch({ type: 'ADD_SCORE', payload: { section: 'writing', score: Math.min(5, Math.max(1, Math.floor(wordCount / 60))) } })
    setView('review')
  }

  const typeColors = {
    1: { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200', solid: 'bg-indigo-600' },
    2: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', solid: 'bg-orange-600' },
  }

  if (view === 'list') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <PenLine size={22} className="text-orange-600" />
          <div>
            <h1 className="font-bold text-gray-900 text-lg">Writing</h1>
            <p className="text-xs text-gray-400">Integrated & Independent writing tasks</p>
          </div>
        </div>

        {/* Tips */}
        <div className="mx-4 mt-4 bg-orange-50 border border-orange-100 rounded-2xl p-4 mb-4">
          <p className="text-orange-800 font-semibold text-sm mb-1">✍️ TOEFL Writing Overview</p>
          <div className="space-y-2 text-xs text-orange-700">
            <div className="flex items-start gap-2">
              <span className="font-bold">Task 1:</span>
              <span>Integrated — Read (3 min) + Listen + Write 150-225 words (20 min)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">Task 2:</span>
              <span>Independent — State your opinion 300+ words (30 min)</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-bold">Scored:</span>
              <span>0-5 scale per task; contributes to Writing section score (0-30)</span>
            </div>
          </div>
        </div>

        <div className="px-4 space-y-3 pb-6">
          {WRITING_TASKS.map(task => {
            const colors = typeColors[task.taskType] || typeColors[2]
            return (
              <button
                key={task.id}
                onClick={() => startTask(task)}
                className="card w-full text-left active:scale-98 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl ${colors.solid} flex items-center justify-center flex-shrink-0`}>
                    <PenLine size={18} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`section-badge ${colors.bg} ${colors.text} ${colors.border} border`}>
                        {task.taskName}
                      </span>
                    </div>
                    <p className="text-gray-800 font-medium text-sm line-clamp-2">
                      {task.prompt?.slice(0, 80) || task.readingPassage?.title || 'Writing Practice'}...
                    </p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Clock size={12} /> {task.timeMinutes} min</span>
                      <span>•</span>
                      <span>{task.targetWords} words</span>
                    </div>
                  </div>
                  <ChevronRight size={18} className="text-gray-300 flex-shrink-0 mt-1" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  if (view === 'task') {
    const task = selectedTask

    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('list')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-gray-900 text-base">{task.taskName}</h1>
            <p className="text-xs text-gray-400">{task.timeMinutes} min · {task.targetWords} words</p>
          </div>
          {taskPhase === 'writing' && (
            <div className={`text-xs font-bold px-2 py-1 rounded-full ${
              wordCount < 150 ? 'bg-red-100 text-red-600' :
              wordCount < 300 ? 'bg-yellow-100 text-yellow-700' :
              'bg-green-100 text-green-700'
            }`}>
              {wordCount}w
            </div>
          )}
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Reading phase for integrated */}
          {taskPhase === 'reading' && task.readingPassage && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={16} className="text-blue-600" />
                <h3 className="font-bold text-gray-800">Read the Passage (3 minutes)</h3>
              </div>
              <Timer totalSeconds={180} onComplete={() => setTaskPhase('listening')} autoStart />
              <div className="card bg-blue-50 border-blue-100 mt-3">
                <p className="font-bold text-blue-800 mb-2">{task.readingPassage.title}</p>
                <p className="text-gray-700 text-sm leading-6">{task.readingPassage.content}</p>
              </div>
              <button onClick={() => setTaskPhase('listening')} className="w-full mt-4 btn-primary">
                Continue to Listening
              </button>
            </div>
          )}

          {/* Listening phase for integrated */}
          {taskPhase === 'listening' && task.lectureScript && (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">🎧</span>
                <h3 className="font-bold text-gray-800">Lecture Notes</h3>
              </div>
              <div className="card bg-green-50 border-green-100">
                <p className="text-xs text-green-600 font-semibold uppercase mb-2">Lecture Transcript</p>
                <p className="text-gray-700 text-sm leading-6 italic">"{task.lectureScript}"</p>
              </div>
              <button
                onClick={() => { setTaskPhase('writing'); setStartTime(Date.now()) }}
                className="w-full mt-4 btn-primary"
              >
                Start Writing ({task.timeMinutes} min)
              </button>
            </div>
          )}

          {/* Writing phase */}
          {taskPhase === 'writing' && (
            <div>
              {/* Prompt */}
              <div className="card bg-orange-50 border-orange-100 mb-3">
                <p className="font-medium text-sm text-gray-800 leading-6">
                  {task.question || task.prompt}
                </p>
              </div>

              {/* Timer */}
              <Timer totalSeconds={task.timeMinutes * 60} onComplete={submitEssay} autoStart compact />

              {/* Writing area */}
              <div className="mt-3">
                <textarea
                  ref={textareaRef}
                  value={essayText}
                  onChange={e => setEssayText(e.target.value)}
                  placeholder="Start writing your response here..."
                  className="input-field min-h-52 resize-none text-sm leading-7"
                  autoFocus
                />
                <div className="flex justify-between text-xs mt-1 px-1">
                  <span className="text-gray-400">Target: {task.targetWords} words</span>
                  <span className={`font-semibold ${wordCount < 150 ? 'text-red-500' : wordCount < 250 ? 'text-yellow-600' : 'text-green-600'}`}>
                    {wordCount} words
                  </span>
                </div>
              </div>

              {/* Helpful tools */}
              <div className="space-y-2 mt-3">
                {task.outlineTemplate && (
                  <div>
                    <button
                      onClick={() => setShowOutline(s => !s)}
                      className="w-full flex items-center justify-between p-3 bg-indigo-50 border border-indigo-100 rounded-xl"
                    >
                      <span className="text-indigo-700 font-semibold text-sm">📋 Essay Outline</span>
                      <ChevronRight size={14} className={`text-indigo-400 transition-transform ${showOutline ? 'rotate-90' : ''}`} />
                    </button>
                    {showOutline && (
                      <div className="mt-1 p-3 bg-indigo-50 border border-indigo-100 rounded-xl space-y-2">
                        {Object.entries(task.outlineTemplate).map(([key, val]) => (
                          <div key={key}>
                            <span className="text-indigo-600 font-bold text-xs capitalize">{key}: </span>
                            <span className="text-gray-700 text-xs">{val}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                <div>
                  <button
                    onClick={() => setShowPhrases(s => !s)}
                    className="w-full flex items-center justify-between p-3 bg-yellow-50 border border-yellow-100 rounded-xl"
                  >
                    <span className="text-yellow-700 font-semibold text-sm">💬 Useful Phrases</span>
                    <ChevronRight size={14} className={`text-yellow-500 transition-transform ${showPhrases ? 'rotate-90' : ''}`} />
                  </button>
                  {showPhrases && (
                    <div className="mt-1 p-3 bg-yellow-50 border border-yellow-100 rounded-xl">
                      {Object.entries(WRITING_PHRASES).map(([cat, phrases]) => (
                        <div key={cat} className="mb-2">
                          <p className="text-yellow-700 font-semibold text-xs capitalize mb-1">{cat.replace('_', ' ')}:</p>
                          <div className="flex flex-wrap gap-1">
                            {phrases.map(p => (
                              <button
                                key={p}
                                onClick={() => setEssayText(t => t + (t.endsWith(' ') || !t ? '' : ' ') + p + ', ')}
                                className="text-xs bg-white border border-yellow-200 px-2 py-0.5 rounded-full text-gray-700"
                              >
                                {p}
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={submitEssay}
                disabled={wordCount < 50}
                className="w-full mt-4 bg-orange-600 text-white font-bold py-3 rounded-xl disabled:opacity-40"
              >
                Submit Essay ({wordCount} words)
              </button>
            </div>
          )}
        </div>
      </div>
    )
  }

  if (view === 'review') {
    const task = selectedTask
    const targetMin = parseInt(task.targetWords?.split('-')[0]) || 150
    const isGoodLength = wordCount >= targetMin

    return (
      <div className="animate-fade-in px-4 py-6">
        <h2 className="font-bold text-gray-900 text-xl mb-1">Essay Submitted! ✍️</h2>
        <p className="text-gray-500 text-sm mb-5">Review your work against the scoring guide</p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="card text-center">
            <div className={`text-2xl font-bold ${isGoodLength ? 'text-green-600' : 'text-red-500'}`}>{wordCount}</div>
            <div className="text-xs text-gray-400">Words</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-blue-600">{task.targetWords}</div>
            <div className="text-xs text-gray-400">Target</div>
          </div>
          <div className="card text-center">
            <div className={`text-2xl font-bold ${isGoodLength ? 'text-green-600' : 'text-yellow-600'}`}>
              {isGoodLength ? '✓' : '⚡'}
            </div>
            <div className="text-xs text-gray-400">{isGoodLength ? 'Target Met' : 'Need More'}</div>
          </div>
        </div>

        {/* Your essay */}
        <div className="card bg-gray-50 mb-4">
          <p className="text-xs font-semibold text-gray-500 mb-2">Your Response:</p>
          <p className="text-gray-700 text-sm leading-6">{essayText}</p>
        </div>

        {/* Scoring guide */}
        {task.scoringGuide && (
          <div className="card mb-4">
            <p className="font-semibold text-gray-800 mb-3">📊 Scoring Guide (1-5)</p>
            <div className="space-y-2">
              {Object.entries(task.scoringGuide).sort((a, b) => b[0] - a[0]).map(([score, desc]) => (
                <div key={score} className={`p-2 rounded-lg ${parseInt(score) >= 4 ? 'bg-green-50' : parseInt(score) >= 3 ? 'bg-yellow-50' : 'bg-red-50'}`}>
                  <span className={`font-bold text-sm ${parseInt(score) >= 4 ? 'text-green-700' : parseInt(score) >= 3 ? 'text-yellow-700' : 'text-red-600'}`}>
                    Score {score}: </span>
                  <span className="text-gray-700 text-xs">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tips */}
        <div className="card bg-orange-50 border-orange-100 mb-5">
          <p className="text-orange-800 font-semibold text-sm mb-2">💡 Writing Tips</p>
          {task.tips?.map((tip, i) => (
            <p key={i} className="text-orange-700 text-xs mb-1">• {tip}</p>
          ))}
        </div>

        <div className="flex gap-3">
          <button onClick={() => { setEssayText(''); setTaskPhase(task.taskType === 1 ? 'reading' : 'writing'); setStartTime(null); setView('task') }} className="flex-1 btn-secondary">
            Try Again
          </button>
          <button onClick={() => setView('list')} className="flex-1 btn-primary">
            More Tasks
          </button>
        </div>
      </div>
    )
  }
}
