import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, BookOpen, Headphones, Mic, PenLine, Trophy } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/', label: 'Home', Icon: Home },
  { to: '/study-plan', label: 'Plan', Icon: BookOpen },
  { to: '/vocabulary', label: 'Words', Icon: PenLine },
  { to: '/practice', label: 'Practice', Icon: Headphones },
  { to: '/progress', label: 'Progress', Icon: Trophy },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200 bottom-nav z-50">
      <div className="flex items-center justify-around px-2 pt-2 pb-2">
        {NAV_ITEMS.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-all duration-150 ${
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-400 active:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`p-1.5 rounded-xl transition-all ${isActive ? 'bg-blue-50' : ''}`}>
                  <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span className={`text-xs font-medium ${isActive ? 'text-blue-600' : 'text-gray-400'}`}>
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
