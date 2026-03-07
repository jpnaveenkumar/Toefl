import React from 'react'
import { useLocation } from 'react-router-dom'
import BottomNav from './BottomNav'

export default function Layout({ children }) {
  const location = useLocation()
  const hideNav = ['/onboarding'].includes(location.pathname)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative">
      <main className={`flex-1 overflow-y-auto ${!hideNav ? 'pb-20' : ''}`}>
        {children}
      </main>
      {!hideNav && <BottomNav />}
    </div>
  )
}
