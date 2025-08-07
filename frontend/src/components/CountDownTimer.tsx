import React, { useEffect, useState } from 'react'

interface CountdownTimerProps {
  startTimestamp: number
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ startTimestamp }) => {
  const [timeLeft, setTimeLeft] = useState<number>(0)

  useEffect(() => {
    const targetTime = startTimestamp + 60 * 60 * 1000 // 1 hour later

    const updateTimer = () => {
      const now = Date.now()
      const diff = targetTime - now
      setTimeLeft(Math.max(diff, 0))
    }

    updateTimer() // run immediately
    const interval = setInterval(updateTimer, 1000) // update every second

    return () => clearInterval(interval)
  }, [startTimestamp])

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000)
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = totalSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  return (
    <div>
      {timeLeft > 0 ? (
        <span>
          <div style={{ transform: 'none', direction: 'ltr' }}>
            {formatTime(timeLeft)}
          </div>
        </span>
      ) : (
        <span>00:00</span>
      )}
    </div>
  )
}

export default CountdownTimer
