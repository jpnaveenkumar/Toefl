import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../context/AppContext'
import { BookOpen, Target, Calendar, Clock, ChevronRight, ChevronLeft, Star } from 'lucide-react'

const STEPS = ['welcome', 'name', 'level', 'score', 'schedule', 'done']

export default function Onboarding() {
  const navigate = useNavigate()
  const { dispatch } = useApp()
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '',
    currentLevel: 'beginner',
    targetScore: 100,
    examDate: '',
    dailyGoalMinutes: 60,
  })

  const advance = () => {
    if (step < STEPS.length - 1) setStep(s => s + 1)
  }
  const back = () => {
    if (step > 0) setStep(s => s - 1)
  }

  const finish = () => {
    dispatch({ type: 'COMPLETE_ONBOARDING', payload: form })
    navigate('/')
  }

  const stepPct = ((step) / (STEPS.length - 1)) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col">
      {/* Progress bar */}
      {step > 0 && step < STEPS.length - 1 && (
        <div className="pt-safe px-6 pt-4">
          <div className="flex items-center gap-3 mb-6">
            <button onClick={back} className="p-2 rounded-full bg-white/20 text-white">
              <ChevronLeft size={20} />
            </button>
            <div className="flex-1 bg-white/20 rounded-full h-1.5">
              <div
                className="bg-white rounded-full h-1.5 transition-all duration-500"
                style={{ width: `${stepPct}%` }}
              />
            </div>
            <span className="text-white/70 text-sm">{step}/{STEPS.length - 2}</span>
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8 animate-fade-in">
        {/* Step 0: Welcome */}
        {step === 0 && (
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <BookOpen size={48} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-3">TOEFL Prep</h1>
            <p className="text-blue-100 text-lg mb-2">Your complete TOEFL preparation companion</p>
            <p className="text-blue-200 text-sm mb-10 max-w-xs mx-auto">
              Structured daily lessons across all 4 sections: Reading, Listening, Speaking & Writing
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10 text-left">
              {[
                { icon: '📚', title: '12-Week Plan', desc: 'Structured daily pathway' },
                { icon: '🎯', title: 'All 4 Sections', desc: 'Complete preparation' },
                { icon: '📝', title: '200+ Words', desc: 'Academic vocabulary' },
                { icon: '📊', title: 'Progress Tracking', desc: 'See your improvement' },
              ].map(f => (
                <div key={f.title} className="bg-white/10 rounded-2xl p-3">
                  <div className="text-2xl mb-1">{f.icon}</div>
                  <div className="text-white font-semibold text-sm">{f.title}</div>
                  <div className="text-blue-200 text-xs">{f.desc}</div>
                </div>
              ))}
            </div>
            <button onClick={advance} className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg active:scale-95 transition-all">
              Get Started
            </button>
          </div>
        )}

        {/* Step 1: Name */}
        {step === 1 && (
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-2">What's your name?</h2>
            <p className="text-blue-200 mb-8">We'll personalize your experience</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full bg-white/20 border border-white/30 rounded-2xl px-5 py-4 text-white placeholder-white/50 text-lg focus:outline-none focus:ring-2 focus:ring-white/50 mb-8"
              autoFocus
            />
            <button
              onClick={advance}
              disabled={!form.name.trim()}
              className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg disabled:opacity-40 active:scale-95 transition-all"
            >
              Continue <ChevronRight className="inline" size={20} />
            </button>
          </div>
        )}

        {/* Step 2: Current Level */}
        {step === 2 && (
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-2">Your English level?</h2>
            <p className="text-blue-200 mb-6">This helps us personalize your study plan</p>
            <div className="space-y-3 mb-8">
              {[
                { value: 'beginner', label: 'Beginner', desc: 'TOEFL score below 60 or just starting', icon: '🌱' },
                { value: 'intermediate', label: 'Intermediate', desc: 'TOEFL score 60-85, some experience', icon: '📈' },
                { value: 'advanced', label: 'Advanced', desc: 'TOEFL score 85+, need fine-tuning', icon: '🚀' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setForm(f => ({ ...f, currentLevel: opt.value }))}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                    form.currentLevel === opt.value
                      ? 'bg-white border-white text-blue-700'
                      : 'bg-white/10 border-white/20 text-white'
                  }`}
                >
                  <span className="text-2xl">{opt.icon}</span>
                  <div>
                    <div className="font-bold">{opt.label}</div>
                    <div className={`text-sm ${form.currentLevel === opt.value ? 'text-blue-500' : 'text-blue-200'}`}>{opt.desc}</div>
                  </div>
                  {form.currentLevel === opt.value && (
                    <div className="ml-auto w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </button>
              ))}
            </div>
            <button onClick={advance} className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg active:scale-95 transition-all">
              Continue <ChevronRight className="inline" size={20} />
            </button>
          </div>
        )}

        {/* Step 3: Target Score */}
        {step === 3 && (
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-2">Target TOEFL score?</h2>
            <p className="text-blue-200 mb-8">TOEFL iBT is scored 0-120 (30 per section)</p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                { score: 80, label: 'Good', desc: 'Most universities' },
                { score: 90, label: 'Very Good', desc: 'Top-tier programs' },
                { score: 100, label: 'Excellent', desc: 'Competitive schools' },
                { score: 110, label: 'Outstanding', desc: 'Elite programs' },
              ].map(opt => (
                <button
                  key={opt.score}
                  onClick={() => setForm(f => ({ ...f, targetScore: opt.score }))}
                  className={`p-4 rounded-2xl border-2 transition-all text-center ${
                    form.targetScore === opt.score
                      ? 'bg-white border-white text-blue-700'
                      : 'bg-white/10 border-white/20 text-white'
                  }`}
                >
                  <div className="text-2xl font-bold">{opt.score}</div>
                  <div className="font-semibold text-sm">{opt.label}</div>
                  <div className={`text-xs ${form.targetScore === opt.score ? 'text-blue-500' : 'text-blue-200'}`}>{opt.desc}</div>
                </button>
              ))}
            </div>
            <div className="bg-white/10 rounded-2xl p-4 mb-6">
              <div className="flex items-center gap-2 mb-1">
                <Star size={16} className="text-yellow-300" />
                <span className="text-white text-sm font-medium">Custom score</span>
              </div>
              <input
                type="number"
                min="0" max="120"
                value={form.targetScore}
                onChange={e => setForm(f => ({ ...f, targetScore: parseInt(e.target.value) || 0 }))}
                className="w-full bg-transparent text-white text-xl font-bold focus:outline-none"
                placeholder="Enter score (0-120)"
              />
            </div>
            <button onClick={advance} className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg active:scale-95 transition-all">
              Continue <ChevronRight className="inline" size={20} />
            </button>
          </div>
        )}

        {/* Step 4: Schedule */}
        {step === 4 && (
          <div className="w-full">
            <h2 className="text-3xl font-bold text-white mb-2">Daily study goal</h2>
            <p className="text-blue-200 mb-6">How many minutes can you study each day?</p>
            <div className="space-y-3 mb-6">
              {[
                { minutes: 30, label: '30 minutes', desc: 'Light prep — vocabulary + quick practice' },
                { minutes: 60, label: '1 hour', desc: 'Recommended — covers all sections' },
                { minutes: 90, label: '1.5 hours', desc: 'Intensive — fast progress' },
                { minutes: 120, label: '2 hours', desc: 'Full commitment — exam in &lt;8 weeks' },
              ].map(opt => (
                <button
                  key={opt.minutes}
                  onClick={() => setForm(f => ({ ...f, dailyGoalMinutes: opt.minutes }))}
                  className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all text-left ${
                    form.dailyGoalMinutes === opt.minutes
                      ? 'bg-white border-white text-blue-700'
                      : 'bg-white/10 border-white/20 text-white'
                  }`}
                >
                  <Clock size={24} className={form.dailyGoalMinutes === opt.minutes ? 'text-blue-600' : 'text-white/70'} />
                  <div>
                    <div className="font-bold">{opt.label}</div>
                    <div className={`text-sm ${form.dailyGoalMinutes === opt.minutes ? 'text-blue-500' : 'text-blue-200'}`} dangerouslySetInnerHTML={{ __html: opt.desc }} />
                  </div>
                </button>
              ))}
            </div>

            <div className="bg-white/10 rounded-2xl p-4 mb-6">
              <label className="text-white/70 text-sm mb-1 block">Exam date (optional)</label>
              <input
                type="date"
                value={form.examDate}
                onChange={e => setForm(f => ({ ...f, examDate: e.target.value }))}
                className="w-full bg-transparent text-white focus:outline-none"
              />
            </div>

            <button onClick={advance} className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg active:scale-95 transition-all">
              Continue <ChevronRight className="inline" size={20} />
            </button>
          </div>
        )}

        {/* Step 5: Done */}
        {step === 5 && (
          <div className="text-center">
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-5xl">
              🎯
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">You're all set, {form.name}!</h2>
            <p className="text-blue-200 mb-4">Your personalized 12-week TOEFL study plan is ready.</p>
            <div className="bg-white/10 rounded-2xl p-5 mb-8 text-left space-y-3">
              <div className="flex items-center gap-3">
                <Target size={18} className="text-blue-200" />
                <span className="text-white">Target Score: <strong>{form.targetScore}/120</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-blue-200" />
                <span className="text-white">Daily Goal: <strong>{form.dailyGoalMinutes} minutes</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-blue-200" />
                <span className="text-white">Level: <strong className="capitalize">{form.currentLevel}</strong></span>
              </div>
              {form.examDate && (
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-blue-200" />
                  <span className="text-white">Exam: <strong>{new Date(form.examDate).toLocaleDateString()}</strong></span>
                </div>
              )}
            </div>
            <button onClick={finish} className="w-full bg-white text-blue-700 font-bold py-4 rounded-2xl text-lg active:scale-95 transition-all">
              Start Studying! 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
