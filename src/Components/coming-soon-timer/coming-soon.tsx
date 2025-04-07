"use client"

import { useEffect, useState } from "react"

export default function ComingSoonTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to 3 days from now for demonstration
    const now = new Date()
    let targetDate = new Date(2025, 4, 3, 23, 59, 59)
    
        if (now > targetDate) {
            const now = new Date("2025-04-01T00:00:00")
    
          targetDate = new Date(now.getFullYear() + 1, 3, 15)
        }
    
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center  text-white p-4">

      <div className="flex items-center justify-center gap-2 md:gap-6">
        <TimeUnit value={timeLeft.days} label="DÍAS" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="HORAS" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="MINUTOS" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="SEGUNDOS" />
      </div>

   
    </div>
  )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#152a47] rounded-lg px-4 py-3 max-w-[200px] md:min-w-[80px] flex items-center justify-center">
        <span className="text-xl md:text-4xl font-bold text-[#3b82f6]">{value.toString().padStart(2, "0")}</span>
      </div>
      <div className="text-[10px] md:text-xs text-gray-400 mt-2">{label}</div>
    </div>
  )
}

function Separator() {
  return <div className="text-[1px] md:text-4xl font-bold text-[#3b82f6]">:</div>
}

