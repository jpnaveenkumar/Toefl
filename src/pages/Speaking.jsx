import React, { useState, useRef, useEffect } from 'react'
import { useApp } from '../context/AppContext'
import { SPEAKING_TASKS } from '../data/speaking'
import Timer from '../components/Timer'
import { Mic, MicOff, ChevronRight, ArrowLeft, Play, Square, Volume2, BookOpen, Headphones, Star } from 'lucide-react'

const TASK_TYPE_INFO = [
  { type: 1, label: 'Task 1', sublabel: 'Independent', icon: '💬', color: 'purple', desc: 'State and support your opinion on a familiar topic' },
  { type: 2, label: 'Task 2', sublabel: 'Campus Situation', icon: '🏫', color: 'blue', desc: 'Read an announcement, listen to a reaction, then speak' },
  { type: 3, label: 'Task 3', sublabel: 'Academic Concept', icon: '📚', color: 'green', desc: 'Read a concept, listen to a lecture, then explain' },
  { type: 4, label: 'Task 4', sublabel: 'Academic Lecture', icon: '🎓', color: 'orange', desc: 'Listen to a lecture and summarize it' },
]

export default function Speaking() {
  const { dispatch } = useApp()
  const [view, setView] = useState('list') // list | task | prep | record | review
  const [selectedTask, setSelectedTask] = useState(null)
  const [taskPhase, setTaskPhase] = useState('reading') // reading | listening | prep | recording
  const [isRecording, setIsRecording] = useState(false)
  const [recordedTime, setRecordedTime] = useState(0)
  const [notes, setNotes] = useState('')
  const [showSample, setShowSample] = useState(false)
  const recordInterval = useRef(null)

  const startTask = (task) => {
    setSelectedTask(task)
    setNotes('')
    setShowSample(false)
    setIsRecording(false)
    setRecordedTime(0)
    if (task.taskType === 1) {
      setTaskPhase('prep')
    } else if (task.readingPassage) {
      setTaskPhase('reading')
    } else {
      setTaskPhase('listening')
    }
    setView('task')
  }

  const startRecording = () => {
    setIsRecording(true)
    setRecordedTime(0)
    recordInterval.current = setInterval(() => {
      setRecordedTime(t => t + 1)
    }, 1000)
  }

  const stopRecording = () => {
    setIsRecording(false)
    clearInterval(recordInterval.current)
    dispatch({ type: 'LOG_STUDY_SESSION', payload: { minutes: 5, section: 'speaking' } })
    dispatch({ type: 'EARN_XP', payload: 40 })
    setView('review')
  }

  useEffect(() => {
    return () => clearInterval(recordInterval.current)
  }, [])

  const colorMap = {
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', solid: 'bg-purple-600', light: 'bg-purple-100' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', solid: 'bg-blue-600', light: 'bg-blue-100' },
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', solid: 'bg-green-600', light: 'bg-green-100' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', solid: 'bg-orange-600', light: 'bg-orange-100' },
  }

  if (view === 'list') {
    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <Mic size={22} className="text-purple-600" />
          <div>
            <h1 className="font-bold text-gray-900 text-lg">Speaking</h1>
            <p className="text-xs text-gray-400">Practice all 4 TOEFL speaking tasks</p>
          </div>
        </div>

        <div className="px-4 mt-4">
          {/* Tips */}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 mb-4">
            <p className="text-purple-800 font-semibold text-sm mb-1">🎙️ Speaking Scoring Criteria</p>
            <div className="grid grid-cols-2 gap-2 text-xs text-purple-700">
              <div>• Delivery (pronunciation, pace)</div>
              <div>• Language Use (grammar, vocab)</div>
              <div>• Topic Development (content)</div>
              <div>• Coherence (organization)</div>
            </div>
          </div>

          {TASK_TYPE_INFO.map(taskType => {
            const tasks = SPEAKING_TASKS.filter(t => t.taskType === taskType.type)
            const colors = colorMap[taskType.color]
            return (
              <div key={taskType.type} className="mb-4">
                <div className={`rounded-2xl border-2 ${colors.border} overflow-hidden`}>
                  <div className={`${colors.bg} px-4 py-3`}>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{taskType.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${colors.text}`}>{taskType.label}</span>
                          <span className={`section-badge ${colors.light} ${colors.text}`}>{taskType.sublabel}</span>
                        </div>
                        <p className="text-xs text-gray-500">{taskType.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white divide-y divide-gray-50">
                    {tasks.map(task => (
                      <button
                        key={task.id}
                        onClick={() => startTask(task)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left active:bg-gray-50"
                      >
                        <div>
                          <p className="font-medium text-sm text-gray-800">
                            {task.readingPassage?.title || task.lectureScript?.slice(0, 50) + '...' || task.prompt?.slice(0, 60) + '...'}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5">
                            Prep: {task.prepTime}s · Response: {task.responseTime}s
                          </p>
                        </div>
                        <ChevronRight size={18} className="text-gray-300 flex-shrink-0 ml-2" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  if (view === 'task') {
    const task = selectedTask
    const colors = colorMap[TASK_TYPE_INFO.find(t => t.type === task.taskType)?.color || 'purple']

    return (
      <div className="animate-fade-in">
        <div className="page-header">
          <button onClick={() => setView('list')} className="p-1.5 rounded-lg hover:bg-gray-100">
            <ArrowLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex-1">
            <h1 className="font-bold text-gray-900">Task {task.taskType}</h1>
            <p className="text-xs text-gray-400">{task.taskName}</p>
          </div>
        </div>

        <div className="px-4 py-4 space-y-4">
          {/* Phase indicator */}
          <div className="flex gap-2">
            {task.readingPassage && (
              <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${taskPhase === 'reading' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                <BookOpen size={12} /> Read
              </div>
            )}
            {(task.conversationScript || task.lectureScript) && (
              <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${taskPhase === 'listening' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-400'}`}>
                <Headphones size={12} /> Listen
              </div>
            )}
            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${taskPhase === 'prep' ? 'bg-yellow-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
              📝 Prep
            </div>
            <div className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold ${taskPhase === 'recording' ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
              <Mic size={12} /> Speak
            </div>
          </div>

          {/* Reading Phase */}
          {taskPhase === 'reading' && task.readingPassage && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800">📖 Reading Passage</h3>
                <span className="text-xs text-gray-400">~45 seconds</span>
              </div>
              <div className="card bg-blue-50 border-blue-100">
                <p className="font-semibold text-blue-800 mb-2">{task.readingPassage.title}</p>
                <p className="text-gray-700 text-sm leading-6">{task.readingPassage.content}</p>
              </div>
              <button
                onClick={() => setTaskPhase(task.conversationScript || task.lectureScript ? 'listening' : 'prep')}
                className="w-full mt-4 btn-primary"
              >
                Continue to {task.conversationScript || task.lectureScript ? 'Listening' : 'Preparation'}
              </button>
            </div>
          )}

          {/* Listening Phase */}
          {taskPhase === 'listening' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-bold text-gray-800">🎧 Audio Transcript</h3>
                <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">Read carefully</span>
              </div>
              <div className="card bg-green-50 border-green-100">
                {task.conversationScript && (
                  <div className="space-y-3">
                    <p className="text-xs text-green-600 font-semibold uppercase">Conversation</p>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">S1</div>
                      <p className="text-gray-700 text-sm italic">"{task.conversationScript.speaker1}"</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs flex-shrink-0 mt-0.5">S2</div>
                      <p className="text-gray-700 text-sm italic">"{task.conversationScript.speaker2}"</p>
                    </div>
                  </div>
                )}
                {task.lectureScript && (
                  <div>
                    <p className="text-xs text-green-600 font-semibold uppercase mb-2">Lecture Transcript</p>
                    <p className="text-gray-700 text-sm leading-6 italic">"{task.lectureScript}"</p>
                  </div>
                )}
              </div>

              {/* Note-taking area */}
              <div className="mt-3">
                <p className="text-xs font-semibold text-gray-600 mb-1.5">📝 Take notes:</p>
                <textarea
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Write key points while listening..."
                  className="input-field h-20 text-sm resize-none"
                />
              </div>

              <button onClick={() => setTaskPhase('prep')} className="w-full mt-4 btn-primary">
                Continue to Preparation
              </button>
            </div>
          )}

          {/* Prep Phase */}
          {taskPhase === 'prep' && (
            <div>
              <div className="mb-3">
                <h3 className="font-bold text-gray-800 mb-2">📋 Question</h3>
                <div className="card bg-yellow-50 border-yellow-100">
                  <p className="text-gray-800 font-medium text-sm leading-6">
                    {task.question || task.prompt}
                  </p>
                </div>
              </div>

              {/* Prep timer */}
              <div className="mb-3">
                <Timer
                  totalSeconds={task.prepTime}
                  onComplete={() => setTaskPhase('recording')}
                />
              </div>

              {/* Tips */}
              <div className="card bg-purple-50 border-purple-100 mb-4">
                <p className="text-purple-800 font-semibold text-xs mb-2">💡 Quick Tips:</p>
                <ul className="space-y-1">
                  {task.tips?.map((tip, i) => (
                    <li key={i} className="text-purple-700 text-xs">• {tip}</li>
                  ))}
                </ul>
              </div>

              {/* Notes for integrated tasks */}
              {notes && (
                <div className="card bg-gray-50 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Your Notes:</p>
                  <p className="text-gray-700 text-xs">{notes}</p>
                </div>
              )}

              <button onClick={() => setTaskPhase('recording')} className="w-full btn-primary">
                Skip Prep & Start Speaking
              </button>
            </div>
          )}

          {/* Recording Phase */}
          {taskPhase === 'recording' && (
            <div>
              <div className="card bg-yellow-50 border-yellow-100 mb-4">
                <p className="font-medium text-sm text-gray-800">
                  {task.question || task.prompt}
                </p>
              </div>

              <Timer totalSeconds={task.responseTime} onComplete={stopRecording} autoStart />

              <div className="mt-4">
                <div className={`relative w-24 h-24 mx-auto ${isRecording ? 'cursor-pointer' : ''}`}>
                  {isRecording && (
                    <div className="absolute inset-0 rounded-full bg-red-400 animate-ping opacity-30" />
                  )}
                  <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all ${
                      isRecording ? 'bg-red-500 shadow-lg shadow-red-200' : 'bg-purple-600 shadow-lg shadow-purple-200'
                    }`}
                  >
                    {isRecording
                      ? <Square size={32} className="text-white" fill="white" />
                      : <Mic size={32} className="text-white" />
                    }
                  </button>
                </div>

                <p className="text-center mt-3 text-sm font-medium text-gray-600">
                  {isRecording
                    ? `Recording... ${recordedTime}s (tap to stop)`
                    : 'Tap the mic to simulate speaking'
                  }
                </p>
                <p className="text-center text-xs text-gray-400 mt-1">
                  (Practice your response aloud — this app helps you prepare your content and timing)
                </p>
              </div>

              {notes && (
                <div className="card bg-gray-50 mt-4">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Your Notes:</p>
                  <p className="text-gray-700 text-xs">{notes}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }

  if (view === 'review') {
    const task = selectedTask
    return (
      <div className="animate-fade-in px-4 py-6">
        <h2 className="font-bold text-gray-900 text-xl mb-2">Practice Complete! 🎙️</h2>
        <p className="text-gray-500 text-sm mb-5">Compare your response to the sample below</p>

        {/* Question */}
        <div className="card bg-yellow-50 border-yellow-100 mb-4">
          <p className="font-medium text-sm text-gray-800">{task.question || task.prompt}</p>
        </div>

        {/* Checklist */}
        <div className="card mb-4">
          <p className="font-semibold text-gray-800 mb-3">✅ Self-Evaluation Checklist</p>
          {[
            'I stated my main point clearly in the first sentence',
            'I gave 2-3 specific supporting details or examples',
            'I used appropriate transition words (First, Also, In conclusion)',
            'My speech was fluent with minimal hesitation',
            'I completed my response within the time limit',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 mb-2">
              <input type="checkbox" className="mt-0.5 accent-purple-600" id={`check-${i}`} />
              <label htmlFor={`check-${i}`} className="text-sm text-gray-700">{item}</label>
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="card bg-purple-50 border-purple-100 mb-4">
          <p className="text-purple-800 font-semibold text-sm mb-2">💡 Response Tips</p>
          {task.tips?.map((tip, i) => (
            <p key={i} className="text-purple-700 text-xs mb-1">• {tip}</p>
          ))}
        </div>

        {/* Sample response */}
        {task.sampleResponse && (
          <div className="mb-4">
            <button
              onClick={() => setShowSample(s => !s)}
              className="w-full flex items-center justify-between p-4 bg-green-50 border border-green-100 rounded-2xl"
            >
              <div className="flex items-center gap-2">
                <Star size={16} className="text-green-600" />
                <span className="font-semibold text-green-700 text-sm">Sample Strong Response</span>
              </div>
              <ChevronRight size={16} className={`text-green-400 transition-transform ${showSample ? 'rotate-90' : ''}`} />
            </button>
            {showSample && (
              <div className="mt-2 p-4 bg-green-50 border border-green-100 rounded-2xl">
                <p className="text-gray-700 text-sm leading-6 italic">"{task.sampleResponse}"</p>
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <button onClick={() => { setTaskPhase('prep'); setView('task') }} className="flex-1 btn-secondary">
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
