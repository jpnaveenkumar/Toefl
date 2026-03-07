import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { STUDY_PLAN, getWeek, SECTION_COLORS } from '../data/studyPlan'
import ProgressBar from '../components/ProgressBar'
import {
  Flame, Target, Clock, BookOpen, Headphones, Mic, PenLine,
  ChevronRight, Star, Zap, Trophy, Calendar
} from 'lucide-react'

const SECTION_INFO = [
  { key: 'reading', label: 'Reading', icon: BookOpen, route: '/reading', color: 'blue' },
  { key: 'listening', label: 'Listening', icon: Headphones, route: '/listening', color: 'green' },
  { key: 'speaking', label: 'Speaking', icon: Mic, route: '/speaking', color: 'purple' },
  { key: 'writing', label: 'Writing', icon: PenLine, route: '/writing', color: 'orange' },
]

export default function Dashboard() {
  const navigate = useNavigate()
  const { state } = useApp()
  const { profile, progress, studyPlan, xp, level } = state

  const today = new Date()
  const greeting = today.getHours() < 12 ? 'Good morning' : today.getHours() < 17 ? 'Good afternoon' : 'Good evening'

  const currentWeek = getWeek(studyPlan.currentWeek)
  const currentDayData = currentWeek?.days.find(d => d.dayNumber === studyPlan.currentDay)
  const todayTasks = currentDayData?.tasks || []
  const completedToday = todayTasks.filter(t => studyPlan.completedTasks.includes(t.id))
  const todayProgress = todayTasks.length > 0 ? (completedToday.length / todayTasks.length) * 100 : 0

  // Daily minutes progress
  const todayDate = today.toDateString()
  const todayMinutes = progress.lastStudyDate === todayDate
    ? (progress.weeklyMinutes[today.getDay()] || 0)
    : 0
  const minutesPct = Math.min(100, (todayMinutes / profile.dailyGoalMinutes) * 100)

  // Days until exam
  const daysUntilExam = profile.examDate
    ? Math.ceil((new Date(profile.examDate) - today) / 86400000)
    : null

  // XP to next level
  const xpForNextLevel = level * 500
  const xpProgress = (xp % 500) / 500 * 100

  const weeklyData = progress.weeklyMinutes
  const maxWeekly = Math.max(...weeklyData, 30)

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 px-5 pt-safe pb-8">
        <div className="pt-4 mb-5">
          <p className="text-blue-200 text-sm">{greeting}!</p>
          <h1 className="text-white text-2xl font-bold">{profile.name || 'Learner'} 👋</h1>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/15 rounded-2xl p-3 text-center">
            <Flame size={20} className="text-orange-300 mx-auto mb-1" />
            <div className="text-white text-xl font-bold">{progress.currentStreak}</div>
            <div className="text-blue-200 text-xs">Day Streak</div>
          </div>
          <div className="bg-white/15 rounded-2xl p-3 text-center">
            <Zap size={20} className="text-yellow-300 mx-auto mb-1" />
            <div className="text-white text-xl font-bold">{xp}</div>
            <div className="text-blue-200 text-xs">Total XP</div>
          </div>
          <div className="bg-white/15 rounded-2xl p-3 text-center">
            <Target size={20} className="text-green-300 mx-auto mb-1" />
            <div className="text-white text-xl font-bold">{profile.targetScore}</div>
            <div className="text-blue-200 text-xs">Target Score</div>
          </div>
        </div>
      </div>

      {/* Pulled-up content card */}
      <div className="-mt-4 bg-gray-50 rounded-t-3xl px-4 pt-5 space-y-4">

        {/* Daily Goal Progress */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-blue-500" />
              <span className="font-semibold text-gray-800">Today's Goal</span>
            </div>
            <span className="text-sm text-gray-500">{todayMinutes}/{profile.dailyGoalMinutes} min</span>
          </div>
          <ProgressBar value={todayMinutes} max={profile.dailyGoalMinutes} color="blue" height="h-3" />
          {minutesPct >= 100 && (
            <div className="mt-2 text-center text-green-600 text-sm font-semibold">🎉 Daily goal reached!</div>
          )}
        </div>

        {/* Today's Tasks */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Star size={18} className="text-yellow-500" />
              <div>
                <span className="font-semibold text-gray-800">Today's Tasks</span>
                {currentDayData && (
                  <p className="text-xs text-gray-400">Week {studyPlan.currentWeek} · Day {studyPlan.currentDay}: {currentDayData.title}</p>
                )}
              </div>
            </div>
            <span className="text-sm text-gray-500">{completedToday.length}/{todayTasks.length}</span>
          </div>

          <ProgressBar value={completedToday.length} max={Math.max(todayTasks.length, 1)} color="green" height="h-2" />

          <div className="mt-3 space-y-2">
            {todayTasks.slice(0, 4).map(task => {
              const done = studyPlan.completedTasks.includes(task.id)
              const colors = SECTION_COLORS[task.section] || SECTION_COLORS.general
              return (
                <div
                  key={task.id}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${done ? 'bg-gray-50 border-gray-100 opacity-60' : `${colors.bg} ${colors.border}`}`}
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${done ? 'bg-green-500 border-green-500' : colors.border}`}>
                    {done && <span className="text-white text-xs">✓</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-medium text-sm truncate ${done ? 'text-gray-400 line-through' : 'text-gray-800'}`}>{task.title}</p>
                    <p className="text-xs text-gray-400">{task.duration} min · +{task.xp} XP</p>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={() => navigate('/study-plan')}
            className="w-full mt-3 flex items-center justify-center gap-1 text-blue-600 text-sm font-semibold py-2"
          >
            View full study plan <ChevronRight size={16} />
          </button>
        </div>

        {/* Quick Practice */}
        <div>
          <h2 className="font-bold text-gray-800 mb-3 px-1">Quick Practice</h2>
          <div className="grid grid-cols-2 gap-3">
            {SECTION_INFO.map(({ key, label, icon: Icon, route, color }) => {
              const sectionColors = SECTION_COLORS[key]
              const completed = progress.sectionsCompleted[key] || 0
              return (
                <button
                  key={key}
                  onClick={() => navigate(route)}
                  className={`card text-left active:scale-95 transition-all ${sectionColors.bg} border-2 ${sectionColors.border}`}
                >
                  <Icon size={24} className={sectionColors.text} />
                  <div className="mt-2">
                    <p className={`font-bold text-sm ${sectionColors.text}`}>{label}</p>
                    <p className="text-xs text-gray-500">{completed} completed</p>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Weekly Activity */}
        <div className="card">
          <div className="flex items-center gap-2 mb-4">
            <Calendar size={18} className="text-blue-500" />
            <span className="font-semibold text-gray-800">This Week</span>
          </div>
          <div className="flex items-end justify-between gap-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => {
              const mins = weeklyData[i] || 0
              const pct = (mins / maxWeekly) * 100
              const isToday = i === today.getDay()
              return (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div className="w-full flex items-end justify-center" style={{ height: 48 }}>
                    <div
                      className={`w-full rounded-t-md transition-all ${isToday ? 'bg-blue-500' : mins > 0 ? 'bg-blue-200' : 'bg-gray-100'}`}
                      style={{ height: `${Math.max(pct, mins > 0 ? 10 : 4)}%` }}
                    />
                  </div>
                  <span className={`text-xs ${isToday ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>{day}</span>
                  {mins > 0 && <span className="text-xs text-gray-400">{mins}m</span>}
                </div>
              )
            })}
          </div>
        </div>

        {/* Level + XP */}
        <div className="card">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-yellow-500" />
              <span className="font-semibold text-gray-800">Level {level}</span>
            </div>
            <span className="text-sm text-gray-500">{xp % 500}/{500} XP</span>
          </div>
          <ProgressBar value={xp % 500} max={500} color="yellow" height="h-2" />
          <p className="text-xs text-gray-400 mt-2">{500 - (xp % 500)} XP to Level {level + 1}</p>
        </div>

        {/* Exam countdown */}
        {daysUntilExam !== null && daysUntilExam > 0 && (
          <div className="card bg-gradient-to-r from-indigo-50 to-blue-50 border-blue-200">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">{daysUntilExam}</span>
              </div>
              <div>
                <p className="font-bold text-blue-800">Days Until Exam</p>
                <p className="text-blue-600 text-sm">Exam: {new Date(profile.examDate).toLocaleDateString()}</p>
                <p className="text-blue-500 text-xs mt-0.5">
                  {daysUntilExam >= 84 ? 'Great! Plenty of time.' :
                   daysUntilExam >= 42 ? 'On track. Keep it up!' :
                   daysUntilExam >= 14 ? 'Crunch time! Intensify practice.' :
                   'Final stretch! Focus on your weak areas.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom padding */}
        <div className="h-4" />
      </div>
    </div>
  )
}
