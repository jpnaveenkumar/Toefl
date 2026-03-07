import React, { useState, useEffect, useCallback } from 'react'
import { Clock, Pause, Play, RotateCcw } from 'lucide-react'

export default function Timer({ totalSeconds, onComplete, autoStart = false, compact = false }) {
  const [remaining, setRemaining] = useState(totalSeconds)
  const [running, setRunning] = useState(autoStart)
  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setRemaining(totalSeconds)
    setCompleted(false)
    setRunning(autoStart)
  }, [totalSeconds, autoStart])

  useEffect(() => {
    if (!running || completed) return
    const interval = setInterval(() => {
      setRemaining(prev => {
        if (prev <= 1) {
          clearInterval(interval)
          setCompleted(true)
          setRunning(false)
          onComplete?.()
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [running, completed, onComplete])

  const minutes = Math.floor(remaining / 60)
  const seconds = remaining % 60
  const pct = ((totalSeconds - remaining) / totalSeconds) * 100
  const isUrgent = remaining <= 30 && remaining > 0

  const reset = useCallback(() => {
    setRemaining(totalSeconds)
    setCompleted(false)
    setRunning(false)
  }, [totalSeconds])

  if (compact) {
    return (
      <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full ${
        isUrgent ? 'bg-red-100 text-red-600 timer-urgent' : completed ? 'bg-gray-100 text-gray-500' : 'bg-blue-50 text-blue-700'
      }`}>
        <Clock size={14} />
        <span className="font-mono font-bold text-sm">
          {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
        </span>
        <button onClick={() => setRunning(r => !r)} className="ml-1">
          {running ? <Pause size={12} /> : <Play size={12} />}
        </button>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Clock size={18} className={isUrgent ? 'text-red-500' : 'text-blue-500'} />
          <span className="font-semibold text-gray-700">Timer</span>
        </div>
        <button onClick={reset} className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-400">
          <RotateCcw size={16} />
        </button>
      </div>

      {/* Circular progress */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-28 h-28">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e7eb" strokeWidth="8" />
            <circle
              cx="50" cy="50" r="42" fill="none"
              stroke={isUrgent ? '#ef4444' : '#3b82f6'}
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 42}`}
              strokeDashoffset={`${2 * Math.PI * 42 * (1 - pct / 100)}`}
              style={{ transition: 'stroke-dashoffset 1s linear' }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className={`font-mono font-bold text-2xl ${isUrgent ? 'text-red-500' : 'text-gray-800'}`}>
              {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
            </span>
            {completed && <span className="text-xs text-gray-400">Done!</span>}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setRunning(r => !r)}
            disabled={completed}
            className={`flex items-center gap-2 px-5 py-2 rounded-xl font-semibold text-sm transition-all ${
              running
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-blue-600 text-white'
            } disabled:opacity-40`}
          >
            {running ? <><Pause size={16} /> Pause</> : <><Play size={16} /> {completed ? 'Done' : 'Start'}</>}
          </button>
        </div>
      </div>
    </div>
  )
}
