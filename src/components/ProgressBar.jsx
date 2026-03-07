import React from 'react'

export default function ProgressBar({ value, max = 100, color = 'blue', height = 'h-2', showLabel = false, label = '' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  const colorMap = {
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    purple: 'bg-purple-500',
    orange: 'bg-orange-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500',
    pink: 'bg-pink-500',
    teal: 'bg-teal-500',
  }

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{label}</span>
          <span>{Math.round(pct)}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-100 rounded-full ${height} overflow-hidden`}>
        <div
          className={`${height} ${colorMap[color] || 'bg-blue-500'} rounded-full progress-bar-fill`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
