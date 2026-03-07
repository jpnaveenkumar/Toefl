import React, { createContext, useContext, useReducer, useEffect } from 'react'

const AppContext = createContext(null)

const initialState = {
  // Onboarding
  isOnboarded: false,
  profile: {
    name: '',
    targetScore: 100,
    examDate: '',
    dailyGoalMinutes: 60,
    currentLevel: 'beginner', // beginner, intermediate, advanced
  },

  // Progress tracking
  progress: {
    totalDaysStudied: 0,
    currentStreak: 0,
    longestStreak: 0,
    lastStudyDate: null,
    totalMinutesStudied: 0,
    sectionsCompleted: {
      reading: 0,
      listening: 0,
      speaking: 0,
      writing: 0,
      vocabulary: 0,
    },
    scores: {
      reading: [],
      listening: [],
      speaking: [],
      writing: [],
    },
    weeklyMinutes: [0, 0, 0, 0, 0, 0, 0], // Sun-Sat
  },

  // Vocabulary
  vocabulary: {
    learned: [],      // word ids marked as known
    reviewing: [],    // word ids in review queue
    mastered: [],     // word ids mastered (seen 5+ times correctly)
    cardReviews: {},  // { wordId: { nextReview, interval, ease, reps } }
  },

  // Study plan
  studyPlan: {
    currentWeek: 1,
    currentDay: 1,
    completedTasks: [], // task ids completed
  },

  // Daily activity
  dailyActivity: {
    date: null,
    minutesStudied: 0,
    tasksCompleted: [],
    xpEarned: 0,
  },

  // XP and achievements
  xp: 0,
  level: 1,
  achievements: [],
}

function appReducer(state, action) {
  switch (action.type) {
    case 'COMPLETE_ONBOARDING':
      return {
        ...state,
        isOnboarded: true,
        profile: { ...state.profile, ...action.payload },
      }

    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
      }

    case 'LOG_STUDY_SESSION': {
      const { minutes, section } = action.payload
      const today = new Date().toDateString()
      const lastDate = state.progress.lastStudyDate
      const isNewDay = lastDate !== today

      const newStreak = isNewDay
        ? (lastDate === new Date(Date.now() - 86400000).toDateString()
            ? state.progress.currentStreak + 1
            : 1)
        : state.progress.currentStreak

      const dayOfWeek = new Date().getDay()
      const weeklyMinutes = [...state.progress.weeklyMinutes]
      weeklyMinutes[dayOfWeek] = (weeklyMinutes[dayOfWeek] || 0) + minutes

      const sectionsCompleted = { ...state.progress.sectionsCompleted }
      if (section) sectionsCompleted[section] = (sectionsCompleted[section] || 0) + 1

      return {
        ...state,
        progress: {
          ...state.progress,
          totalDaysStudied: isNewDay ? state.progress.totalDaysStudied + 1 : state.progress.totalDaysStudied,
          currentStreak: newStreak,
          longestStreak: Math.max(newStreak, state.progress.longestStreak),
          lastStudyDate: today,
          totalMinutesStudied: state.progress.totalMinutesStudied + minutes,
          sectionsCompleted,
          weeklyMinutes,
        },
        xp: state.xp + Math.floor(minutes * 2),
      }
    }

    case 'ADD_SCORE': {
      const { section, score } = action.payload
      const scores = { ...state.progress.scores }
      scores[section] = [...(scores[section] || []), { score, date: new Date().toISOString() }].slice(-20)
      return {
        ...state,
        progress: { ...state.progress, scores },
      }
    }

    case 'UPDATE_VOCABULARY': {
      const { wordId, status, reviewData } = action.payload
      const vocab = { ...state.vocabulary }

      // Remove from all lists first
      vocab.reviewing = vocab.reviewing.filter(id => id !== wordId)
      vocab.learned = vocab.learned.filter(id => id !== wordId)
      vocab.mastered = vocab.mastered.filter(id => id !== wordId)

      if (status === 'reviewing') vocab.reviewing = [...vocab.reviewing, wordId]
      if (status === 'learned') vocab.learned = [...vocab.learned, wordId]
      if (status === 'mastered') vocab.mastered = [...vocab.mastered, wordId]

      if (reviewData) {
        vocab.cardReviews = { ...vocab.cardReviews, [wordId]: reviewData }
      }

      return { ...state, vocabulary: vocab }
    }

    case 'COMPLETE_TASK': {
      const { taskId } = action.payload
      const completedTasks = state.studyPlan.completedTasks.includes(taskId)
        ? state.studyPlan.completedTasks
        : [...state.studyPlan.completedTasks, taskId]
      return {
        ...state,
        studyPlan: { ...state.studyPlan, completedTasks },
        xp: state.xp + 50,
      }
    }

    case 'ADVANCE_STUDY_PLAN': {
      return {
        ...state,
        studyPlan: {
          ...state.studyPlan,
          currentDay: action.payload.day,
          currentWeek: action.payload.week,
        },
      }
    }

    case 'EARN_XP': {
      const newXp = state.xp + action.payload
      const newLevel = Math.floor(newXp / 500) + 1
      return { ...state, xp: newXp, level: newLevel }
    }

    case 'UNLOCK_ACHIEVEMENT': {
      if (state.achievements.includes(action.payload)) return state
      return { ...state, achievements: [...state.achievements, action.payload] }
    }

    case 'LOAD_STATE':
      return { ...initialState, ...action.payload }

    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('toefl-prep-state')
      if (saved) {
        const parsed = JSON.parse(saved)
        dispatch({ type: 'LOAD_STATE', payload: parsed })
      }
    } catch (e) {
      console.error('Failed to load state:', e)
    }
  }, [])

  // Save to localStorage on state change
  useEffect(() => {
    try {
      localStorage.setItem('toefl-prep-state', JSON.stringify(state))
    } catch (e) {
      console.error('Failed to save state:', e)
    }
  }, [state])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

// Helper hooks
export function useProgress() {
  const { state } = useApp()
  return state.progress
}

export function useVocabulary() {
  const { state } = useApp()
  return state.vocabulary
}
