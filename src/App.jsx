import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AppProvider, useApp } from './context/AppContext'
import Layout from './components/Layout'

import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import StudyPlan from './pages/StudyPlan'
import Practice from './pages/Practice'
import Reading from './pages/Reading'
import Listening from './pages/Listening'
import Speaking from './pages/Speaking'
import Writing from './pages/Writing'
import Vocabulary from './pages/Vocabulary'
import Progress from './pages/Progress'

function AppRoutes() {
  const { state } = useApp()

  if (!state.isOnboarded) {
    return (
      <Routes>
        <Route path="*" element={<Onboarding />} />
      </Routes>
    )
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/study-plan" element={<StudyPlan />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/reading" element={<Reading />} />
        <Route path="/listening" element={<Listening />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/onboarding" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/Toefl/">
        <AppRoutes />
      </BrowserRouter>
    </AppProvider>
  )
}
