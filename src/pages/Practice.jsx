import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, Headphones, Mic, PenLine, ChevronRight, Star } from 'lucide-react'

const SECTIONS = [
  {
    key: 'reading',
    label: 'Reading',
    icon: BookOpen,
    route: '/reading',
    color: 'blue',
    desc: '5 academic passages with full questions',
    details: ['Inference & factual questions', 'Vocabulary in context', 'Prose summary practice', '~18 min per passage'],
    emoji: '📖',
  },
  {
    key: 'listening',
    label: 'Listening',
    icon: Headphones,
    route: '/listening',
    color: 'green',
    desc: 'Lectures & conversations with note-taking',
    details: ['Gist & detail questions', 'Speaker attitude & function', 'Note-taking practice', '2 lectures + 1 conversation'],
    emoji: '🎧',
  },
  {
    key: 'speaking',
    label: 'Speaking',
    icon: Mic,
    route: '/speaking',
    color: 'purple',
    desc: 'All 4 speaking task types with sample responses',
    details: ['Task 1: Independent (45 sec)', 'Task 2: Campus situation (60 sec)', 'Task 3: Academic concept (60 sec)', 'Task 4: Lecture summary (60 sec)'],
    emoji: '🎙️',
  },
  {
    key: 'writing',
    label: 'Writing',
    icon: PenLine,
    route: '/writing',
    color: 'orange',
    desc: 'Integrated & independent writing tasks',
    details: ['Task 1: Integrated (20 min)', 'Task 2: Independent (30 min)', 'Word count tracker', 'Essay outline templates'],
    emoji: '✍️',
  },
]

const colorMap = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200', solid: 'bg-blue-600', light: 'bg-blue-100' },
  green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200', solid: 'bg-green-600', light: 'bg-green-100' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200', solid: 'bg-purple-600', light: 'bg-purple-100' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200', solid: 'bg-orange-600', light: 'bg-orange-100' },
}

export default function Practice() {
  const navigate = useNavigate()

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <Star size={22} className="text-blue-600" />
        <div>
          <h1 className="font-bold text-gray-900 text-lg">Practice</h1>
          <p className="text-xs text-gray-400">All 4 TOEFL sections</p>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* TOEFL overview card */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-4 text-white">
          <p className="font-bold text-lg mb-1">TOEFL iBT Format</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>📖 Reading: 35 min</div>
            <div>🎧 Listening: 36 min</div>
            <div>🎙️ Speaking: 17 min</div>
            <div>✍️ Writing: 50 min</div>
          </div>
          <div className="mt-2 pt-2 border-t border-white/20 text-white/70 text-xs">
            Total score: 0-120 (30 points per section)
          </div>
        </div>

        {/* Section cards */}
        {SECTIONS.map(({ key, label, icon: Icon, route, color, desc, details, emoji }) => {
          const c = colorMap[color]
          return (
            <button
              key={key}
              onClick={() => navigate(route)}
              className={`w-full card text-left border-2 ${c.border} active:scale-98 transition-all`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-14 h-14 rounded-2xl ${c.solid} flex items-center justify-center flex-shrink-0 text-2xl`}>
                  {emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className={`font-bold text-lg ${c.text}`}>{label}</h3>
                  </div>
                  <p className="text-gray-500 text-sm mb-2">{desc}</p>
                  <div className="grid grid-cols-1 gap-0.5">
                    {details.map(d => (
                      <div key={d} className="flex items-center gap-1">
                        <div className={`w-1 h-1 rounded-full ${c.solid}`} />
                        <span className="text-xs text-gray-400">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ChevronRight size={20} className="text-gray-300 flex-shrink-0 mt-1" />
              </div>
            </button>
          )
        })}

        {/* TOEFL score scale */}
        <div className="card">
          <p className="font-semibold text-gray-800 mb-3">📊 Score Scale Reference</p>
          <div className="space-y-2">
            {[
              { range: '96-120', label: 'Advanced', color: 'bg-green-500', desc: 'Native-like proficiency' },
              { range: '72-95', label: 'High Intermediate', color: 'bg-blue-500', desc: 'Strong academic English' },
              { range: '42-71', label: 'Intermediate', color: 'bg-yellow-500', desc: 'Developing academic skills' },
              { range: '0-41', label: 'Basic', color: 'bg-red-400', desc: 'Foundation level' },
            ].map(s => (
              <div key={s.range} className="flex items-center gap-3">
                <div className={`w-14 h-6 ${s.color} rounded-md flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{s.range}</span>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">{s.label}</span>
                  <span className="text-xs text-gray-400 ml-2">{s.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-4" />
      </div>
    </div>
  )
}
