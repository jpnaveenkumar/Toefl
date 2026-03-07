import React from 'react'
import { useApp } from '../context/AppContext'
import ProgressBar from '../components/ProgressBar'
import {
  Trophy, Flame, Clock, BookOpen, Headphones, Mic, PenLine,
  Star, TrendingUp, Calendar, Target, Zap, Award
} from 'lucide-react'

const ACHIEVEMENTS = [
  { id: 'first_day', icon: '🌱', title: 'First Day', desc: 'Completed your first study session', condition: s => s.progress.totalDaysStudied >= 1 },
  { id: 'streak_3', icon: '🔥', title: 'On Fire', desc: '3-day study streak', condition: s => s.progress.currentStreak >= 3 },
  { id: 'streak_7', icon: '⚡', title: 'Week Warrior', desc: '7-day study streak', condition: s => s.progress.currentStreak >= 7 },
  { id: 'streak_30', icon: '💎', title: 'Diamond', desc: '30-day study streak', condition: s => s.progress.currentStreak >= 30 },
  { id: 'vocab_25', icon: '📚', title: 'Word Collector', desc: 'Learned 25 vocabulary words', condition: s => (s.vocabulary.learned.length + s.vocabulary.mastered.length) >= 25 },
  { id: 'vocab_100', icon: '🎓', title: 'Word Master', desc: 'Mastered 100 vocabulary words', condition: s => s.vocabulary.mastered.length >= 100 },
  { id: 'reading_5', icon: '👁️', title: 'Reader', desc: 'Completed 5 reading passages', condition: s => s.progress.sectionsCompleted.reading >= 5 },
  { id: 'speaking_5', icon: '🎙️', title: 'Speaker', desc: 'Practiced speaking 5 times', condition: s => s.progress.sectionsCompleted.speaking >= 5 },
  { id: 'writing_5', icon: '✍️', title: 'Writer', desc: 'Completed 5 writing tasks', condition: s => s.progress.sectionsCompleted.writing >= 5 },
  { id: 'hours_10', icon: '⏱️', title: 'Dedicated', desc: 'Studied for 10 total hours', condition: s => s.progress.totalMinutesStudied >= 600 },
  { id: 'hours_50', icon: '🏆', title: 'Champion', desc: 'Studied for 50 total hours', condition: s => s.progress.totalMinutesStudied >= 3000 },
  { id: 'xp_500', icon: '⚡', title: 'Power User', desc: 'Earned 500 XP', condition: s => s.xp >= 500 },
  { id: 'xp_2000', icon: '🚀', title: 'Rocket', desc: 'Earned 2000 XP', condition: s => s.xp >= 2000 },
]

export default function Progress() {
  const { state } = useApp()
  const { progress, vocabulary, xp, level, profile } = state

  const totalHours = Math.floor(progress.totalMinutesStudied / 60)
  const totalMinutes = progress.totalMinutesStudied % 60

  const sections = [
    { key: 'reading', label: 'Reading', Icon: BookOpen, color: 'blue' },
    { key: 'listening', label: 'Listening', Icon: Headphones, color: 'green' },
    { key: 'speaking', label: 'Speaking', Icon: Mic, color: 'purple' },
    { key: 'writing', label: 'Writing', Icon: PenLine, color: 'orange' },
  ]

  const colorMap = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', solid: 'bg-blue-500' },
    green: { bg: 'bg-green-50', text: 'text-green-700', solid: 'bg-green-500' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', solid: 'bg-purple-500' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', solid: 'bg-orange-500' },
  }

  const getLatestScore = (section) => {
    const scores = progress.scores[section] || []
    if (scores.length === 0) return null
    return scores[scores.length - 1].score
  }

  const getAverageScore = (section) => {
    const scores = progress.scores[section] || []
    if (scores.length === 0) return null
    return Math.round(scores.reduce((s, r) => s + r.score, 0) / scores.length)
  }

  const unlockedAchievements = ACHIEVEMENTS.filter(a => a.condition(state))

  const vocabTotal = vocabulary.mastered.length + vocabulary.learned.length + vocabulary.reviewing.length

  // Days until exam
  const daysUntilExam = profile.examDate
    ? Math.max(0, Math.ceil((new Date(profile.examDate) - new Date()) / 86400000))
    : null

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <Trophy size={22} className="text-yellow-500" />
        <div>
          <h1 className="font-bold text-gray-900 text-lg">Progress</h1>
          <p className="text-xs text-gray-400">Track your TOEFL preparation</p>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Top stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="card bg-gradient-to-br from-orange-400 to-red-500 text-white">
            <Flame size={24} className="text-white/80 mb-2" />
            <div className="text-3xl font-bold">{progress.currentStreak}</div>
            <div className="text-white/80 text-sm">Day Streak</div>
            {progress.longestStreak > 0 && (
              <div className="text-white/60 text-xs mt-1">Best: {progress.longestStreak}</div>
            )}
          </div>
          <div className="card bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <Zap size={24} className="text-white/80 mb-2" />
            <div className="text-3xl font-bold">{xp}</div>
            <div className="text-white/80 text-sm">Total XP</div>
            <div className="text-white/60 text-xs mt-1">Level {level}</div>
          </div>
        </div>

        {/* Study time */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Clock size={18} className="text-blue-500" />
            <span className="font-semibold text-gray-800">Study Time</span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{progress.totalDaysStudied}</div>
              <div className="text-xs text-gray-400">Days Studied</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{totalHours}h {totalMinutes}m</div>
              <div className="text-xs text-gray-400">Total Time</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">
                {progress.totalDaysStudied > 0 ? Math.round(progress.totalMinutesStudied / progress.totalDaysStudied) : 0}m
              </div>
              <div className="text-xs text-gray-400">Avg/Day</div>
            </div>
          </div>
        </div>

        {/* Section scores */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={18} className="text-blue-500" />
            <span className="font-semibold text-gray-800">Section Performance</span>
          </div>
          <div className="space-y-3">
            {sections.map(({ key, label, Icon, color }) => {
              const latest = getLatestScore(key)
              const avg = getAverageScore(key)
              const completed = progress.sectionsCompleted[key] || 0
              const c = colorMap[color]

              return (
                <div key={key} className={`p-3 rounded-xl ${c.bg}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon size={16} className={c.text} />
                      <span className={`font-semibold text-sm ${c.text}`}>{label}</span>
                    </div>
                    <div className="text-right">
                      {latest !== null ? (
                        <span className={`text-sm font-bold ${c.text}`}>{latest}/30</span>
                      ) : (
                        <span className="text-xs text-gray-400">Not practiced</span>
                      )}
                    </div>
                  </div>
                  {latest !== null && (
                    <ProgressBar value={latest} max={30} color={color} height="h-1.5" />
                  )}
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-gray-400">{completed} sessions</span>
                    {avg !== null && <span className="text-xs text-gray-400">Avg: {avg}/30</span>}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="mt-3 p-3 bg-gray-50 rounded-xl">
            <p className="text-xs text-gray-500 text-center">
              TOEFL target: {profile.targetScore}/120 ({Math.round(profile.targetScore / 4)}/30 per section avg)
            </p>
          </div>
        </div>

        {/* Score history chart */}
        {Object.values(progress.scores).some(s => s.length > 0) && (
          <div className="card">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp size={18} className="text-green-500" />
              <span className="font-semibold text-gray-800">Score History</span>
            </div>
            {sections.map(({ key, label, color }) => {
              const scores = progress.scores[key] || []
              if (scores.length === 0) return null
              const c = colorMap[color]
              return (
                <div key={key} className="mb-3">
                  <p className={`text-xs font-semibold ${c.text} mb-1`}>{label}</p>
                  <div className="flex items-end gap-1" style={{ height: 40 }}>
                    {scores.slice(-10).map((s, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t ${c.solid} opacity-80`}
                        style={{ height: `${(s.score / 30) * 100}%` }}
                        title={`${s.score}/30`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0</span>
                    <span>30</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Vocabulary progress */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Star size={18} className="text-pink-500" />
            <span className="font-semibold text-gray-800">Vocabulary</span>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="text-center p-2 bg-pink-50 rounded-xl">
              <div className="text-xl font-bold text-pink-600">{vocabulary.mastered.length}</div>
              <div className="text-xs text-gray-400">Mastered</div>
            </div>
            <div className="text-center p-2 bg-blue-50 rounded-xl">
              <div className="text-xl font-bold text-blue-600">{vocabulary.learned.length}</div>
              <div className="text-xs text-gray-400">Learned</div>
            </div>
            <div className="text-center p-2 bg-yellow-50 rounded-xl">
              <div className="text-xl font-bold text-yellow-600">{vocabulary.reviewing.length}</div>
              <div className="text-xs text-gray-400">Reviewing</div>
            </div>
          </div>
          <ProgressBar value={vocabTotal} max={200} color="pink" showLabel label="Total Progress" height="h-2" />
        </div>

        {/* Exam countdown */}
        {daysUntilExam !== null && (
          <div className="card bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="flex items-center gap-3">
              <Calendar size={24} className="text-white/80" />
              <div>
                <p className="font-bold text-lg">{daysUntilExam} Days Until Exam</p>
                <p className="text-blue-200 text-sm">
                  {daysUntilExam === 0 ? 'Exam day is today! Good luck! 🍀' :
                   daysUntilExam <= 7 ? 'Final week — review & stay calm' :
                   daysUntilExam <= 30 ? 'Final month — intensive practice time' :
                   'Keep up the daily habit!'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Achievements */}
        <div className="card">
          <div className="flex items-center gap-2 mb-3">
            <Award size={18} className="text-yellow-500" />
            <span className="font-semibold text-gray-800">Achievements</span>
            <span className="text-xs text-gray-400 ml-auto">{unlockedAchievements.length}/{ACHIEVEMENTS.length}</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {ACHIEVEMENTS.map(ach => {
              const unlocked = ach.condition(state)
              return (
                <div
                  key={ach.id}
                  className={`flex flex-col items-center p-3 rounded-xl text-center ${unlocked ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50 opacity-40'}`}
                >
                  <div className="text-2xl mb-1">{ach.icon}</div>
                  <p className={`text-xs font-semibold ${unlocked ? 'text-gray-800' : 'text-gray-400'}`}>{ach.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5 leading-tight">{ach.desc}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Projected score */}
        {progress.totalDaysStudied >= 3 && (
          <div className="card bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
            <div className="flex items-center gap-2 mb-2">
              <Target size={18} className="text-green-600" />
              <span className="font-semibold text-green-800">Target vs Actual</span>
            </div>
            <div className="space-y-2">
              {sections.map(({ key, label, color }) => {
                const avg = getAverageScore(key)
                const targetSection = Math.round(profile.targetScore / 4)
                const c = colorMap[color]
                return (
                  <div key={key} className="flex items-center gap-2">
                    <span className="text-xs w-16 text-gray-600">{label}</span>
                    <div className="flex-1 relative">
                      <div className="bg-gray-100 rounded-full h-2">
                        {avg !== null && (
                          <div className={`${c.solid} h-2 rounded-full`} style={{ width: `${(avg / 30) * 100}%` }} />
                        )}
                      </div>
                      {/* Target marker */}
                      <div
                        className="absolute top-0 w-0.5 h-2 bg-gray-400"
                        style={{ left: `${(targetSection / 30) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 w-12 text-right">
                      {avg !== null ? `${avg}/30` : '--'} <span className="text-gray-300">|</span> {targetSection}
                    </span>
                  </div>
                )
              })}
              <p className="text-xs text-gray-400 mt-2">Bar = Your score · Line = Target</p>
            </div>
          </div>
        )}

        <div className="h-4" />
      </div>
    </div>
  )
}
