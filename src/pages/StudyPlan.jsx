import React, { useState } from 'react'
import { useApp } from '../context/AppContext'
import { STUDY_PLAN, getWeek, SECTION_COLORS } from '../data/studyPlan'
import { CheckCircle, Circle, ChevronDown, ChevronUp, Lock, BookOpen, Headphones, Mic, PenLine, Star, Zap } from 'lucide-react'
import ProgressBar from '../components/ProgressBar'

const TYPE_ICONS = {
  reading: BookOpen,
  listening: Headphones,
  speaking: Mic,
  writing: PenLine,
  vocabulary: Star,
  study: BookOpen,
  review: Zap,
}

export default function StudyPlan() {
  const { state, dispatch } = useApp()
  const { studyPlan } = state
  const [expandedWeek, setExpandedWeek] = useState(studyPlan.currentWeek)
  const [expandedDay, setExpandedDay] = useState(studyPlan.currentDay)

  const completeTask = (taskId) => {
    dispatch({ type: 'COMPLETE_TASK', payload: { taskId } })
    dispatch({ type: 'LOG_STUDY_SESSION', payload: { minutes: 1, section: 'general' } })
    dispatch({ type: 'EARN_XP', payload: 50 })
  }

  const phaseColors = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    red: 'from-red-500 to-red-600',
    teal: 'from-teal-500 to-teal-600',
    indigo: 'from-indigo-500 to-indigo-600',
    yellow: 'from-yellow-500 to-yellow-600',
    pink: 'from-pink-500 to-pink-600',
    rose: 'from-rose-500 to-rose-600',
    emerald: 'from-emerald-500 to-emerald-600',
  }

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="page-header">
        <BookOpen size={22} className="text-blue-600" />
        <div>
          <h1 className="font-bold text-gray-900 text-lg">Study Plan</h1>
          <p className="text-xs text-gray-400">12-Week TOEFL Preparation Pathway</p>
        </div>
      </div>

      {/* Progress overview */}
      <div className="px-4 py-4">
        <div className="card bg-gradient-to-r from-blue-600 to-indigo-600 text-white mb-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-blue-100 text-sm">Current Position</p>
              <p className="font-bold text-lg">Week {studyPlan.currentWeek}, Day {studyPlan.currentDay}</p>
            </div>
            <div className="text-right">
              <p className="text-blue-100 text-sm">Overall</p>
              <p className="font-bold text-lg">{Math.round((studyPlan.currentDay / 84) * 100)}% Complete</p>
            </div>
          </div>
          <ProgressBar value={studyPlan.currentDay} max={84} color="blue" height="h-2" />
          <p className="text-blue-200 text-xs mt-2">Day {studyPlan.currentDay} of 84</p>
        </div>

        {/* Week selector */}
        <div className="space-y-3">
          {STUDY_PLAN.weeks.map(week => {
            const isCurrentWeek = week.weekNumber === studyPlan.currentWeek
            const isExpanded = expandedWeek === week.weekNumber
            const isPast = week.weekNumber < studyPlan.currentWeek
            const isFuture = week.weekNumber > studyPlan.currentWeek + 1

            // Count completed tasks in this week
            const allWeekTasks = week.days.flatMap(d => d.tasks)
            const completedInWeek = allWeekTasks.filter(t => studyPlan.completedTasks.includes(t.id))
            const weekProgress = allWeekTasks.length > 0 ? (completedInWeek.length / allWeekTasks.length) * 100 : 0

            const gradClass = phaseColors[week.phaseColor] || phaseColors.blue

            return (
              <div key={week.weekNumber} className={`rounded-2xl overflow-hidden border ${isCurrentWeek ? 'border-blue-300 shadow-md' : 'border-gray-100'}`}>
                {/* Week header */}
                <button
                  onClick={() => setExpandedWeek(isExpanded ? null : week.weekNumber)}
                  className="w-full text-left"
                >
                  <div className={`flex items-center gap-3 p-4 ${isCurrentWeek ? `bg-gradient-to-r ${gradClass} text-white` : isPast ? 'bg-green-50' : isFuture ? 'bg-gray-50' : 'bg-white'}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                      isCurrentWeek ? 'bg-white/20 text-white' :
                      isPast ? 'bg-green-500 text-white' :
                      'bg-gray-200 text-gray-500'
                    }`}>
                      {isPast ? '✓' : `W${week.weekNumber}`}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className={`font-bold text-sm ${isCurrentWeek ? 'text-white' : isPast ? 'text-green-700' : 'text-gray-700'}`}>
                          Week {week.weekNumber}: {week.theme}
                        </p>
                        {isCurrentWeek && (
                          <span className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">Current</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex-1 bg-white/20 rounded-full h-1">
                          <div className="bg-white rounded-full h-1 transition-all" style={{ width: `${weekProgress}%` }} />
                        </div>
                        <span className={`text-xs ${isCurrentWeek ? 'text-white/70' : 'text-gray-400'}`}>
                          {completedInWeek.length}/{allWeekTasks.length}
                        </span>
                      </div>
                    </div>
                    {isFuture ? (
                      <Lock size={16} className="text-gray-300 flex-shrink-0" />
                    ) : (
                      isExpanded ? <ChevronUp size={18} className={isCurrentWeek ? 'text-white/70' : 'text-gray-400'} /> : <ChevronDown size={18} className={isCurrentWeek ? 'text-white/70' : 'text-gray-400'} />
                    )}
                  </div>
                </button>

                {/* Week goal */}
                {isExpanded && (
                  <div className="bg-white">
                    <div className="px-4 py-2 border-b border-gray-50 bg-gray-50">
                      <p className="text-xs text-gray-500 italic">🎯 Goal: {week.goal}</p>
                    </div>

                    {/* Days */}
                    <div className="divide-y divide-gray-50">
                      {week.days.map(day => {
                        const isDayExpanded = expandedDay === day.dayNumber
                        const dayTasksDone = day.tasks.filter(t => studyPlan.completedTasks.includes(t.id))
                        const isDayComplete = dayTasksDone.length === day.tasks.length
                        const isCurrentDay = day.dayNumber === studyPlan.currentDay && isCurrentWeek
                        const isDayPast = day.dayNumber < studyPlan.currentDay || !isCurrentWeek && isPast
                        const isDayFuture = isFuture || (isCurrentWeek && day.dayNumber > studyPlan.currentDay + 1)

                        return (
                          <div key={day.dayNumber}>
                            <button
                              onClick={() => !isDayFuture && setExpandedDay(isDayExpanded ? null : day.dayNumber)}
                              className={`w-full flex items-center gap-3 px-4 py-3 text-left ${isCurrentDay ? 'bg-blue-50' : ''}`}
                            >
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                                isDayComplete ? 'bg-green-500 text-white' :
                                isCurrentDay ? 'bg-blue-600 text-white' :
                                isDayFuture ? 'bg-gray-100 text-gray-300' :
                                'bg-gray-100 text-gray-500'
                              }`}>
                                {isDayComplete ? '✓' : day.dayNumber}
                              </div>
                              <div className="flex-1">
                                <p className={`font-medium text-sm ${isDayFuture ? 'text-gray-300' : isCurrentDay ? 'text-blue-700' : 'text-gray-700'}`}>
                                  Day {day.dayNumber}: {day.title}
                                </p>
                                <p className="text-xs text-gray-400">
                                  {dayTasksDone.length}/{day.tasks.length} tasks · {day.tasks.reduce((s, t) => s + t.duration, 0)} min
                                </p>
                              </div>
                              {!isDayFuture && (isDayExpanded ? <ChevronUp size={16} className="text-gray-300" /> : <ChevronDown size={16} className="text-gray-300" />)}
                              {isDayFuture && <Lock size={14} className="text-gray-200" />}
                            </button>

                            {/* Day tasks */}
                            {isDayExpanded && !isDayFuture && (
                              <div className="px-4 pb-3 space-y-2">
                                {day.tasks.map(task => {
                                  const done = studyPlan.completedTasks.includes(task.id)
                                  const colors = SECTION_COLORS[task.section] || SECTION_COLORS.general
                                  const Icon = TYPE_ICONS[task.type] || BookOpen

                                  return (
                                    <div
                                      key={task.id}
                                      className={`flex items-start gap-3 p-3 rounded-xl border ${done ? 'bg-gray-50 border-gray-100' : `${colors.bg} ${colors.border}`}`}
                                    >
                                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${done ? 'bg-gray-200' : colors.solid}`}>
                                        <Icon size={14} className={done ? 'text-gray-400' : 'text-white'} />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className={`font-semibold text-sm ${done ? 'text-gray-400' : 'text-gray-800'}`}>{task.title}</p>
                                        <p className={`text-xs mt-0.5 ${done ? 'text-gray-300' : 'text-gray-500'}`}>{task.description}</p>
                                        <div className="flex items-center gap-2 mt-1.5">
                                          <span className="text-xs text-gray-400">⏱ {task.duration} min</span>
                                          <span className="text-xs text-yellow-600">⚡ +{task.xp} XP</span>
                                        </div>
                                      </div>
                                      <button
                                        onClick={() => !done && completeTask(task.id)}
                                        className={`flex-shrink-0 mt-0.5 ${done ? 'text-green-500' : 'text-gray-300'}`}
                                      >
                                        {done ? <CheckCircle size={22} className="text-green-500" /> : <Circle size={22} />}
                                      </button>
                                    </div>
                                  )
                                })}
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="h-4" />
      </div>
    </div>
  )
}
