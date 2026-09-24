"use client"

import { useEffect, useState } from "react"

// October 1, 2026 at 12:00 PM UTC-6
// = October 1, 2026 at 18:00 UTC
const OPENING_TIMESTAMP = Date.UTC(2026, 9, 1, 18, 0, 0)

type TimeRemaining = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function getTimeRemaining(): TimeRemaining {
  const difference = Math.max(0, OPENING_TIMESTAMP - Date.now())

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

function pad(value: number) {
  return value.toString().padStart(2, "0")
}

export function Countdown() {
  const [time, setTime] = useState<TimeRemaining | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const updateCountdown = () => {
      const now = Date.now()

      if (now >= OPENING_TIMESTAMP) {
        setIsOpen(true)
        setTime(null)
        return
      }

      setTime(getTimeRemaining())
    }

    // Run immediately
    updateCountdown()

    // Update every second
    const interval = window.setInterval(updateCountdown, 1000)

    return () => window.clearInterval(interval)
  }, [])

  /*
   * Once the server has opened, replace the countdown
   * with the post-opening content.
   */
  if (isOpen) {
    return (
      <section className="border-y border-blue-400/10 bg-blue-500/[0.03] px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
            The world is open
          </p>

          <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
            STARSOUL is now open.
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-white/50">
            The server is live and ready for you to start building.
          </p>

          <a
            href="/docs/modrinth"
            className="mt-8 inline-flex rounded-xl bg-blue-500 px-7 py-3.5 font-medium text-white transition hover:bg-blue-400"
          >
            Start Playing
          </a>
        </div>
      </section>
    )
  }

  /*
   * Prevent a flash of 00:00:00:00 while the component
   * is waiting for the client-side clock to initialize.
   */
  if (!time) {
    return null
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-20">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-400">
          Opening October 1
        </p>

        <h2 className="mt-3 text-4xl font-semibold sm:text-5xl">
          Server Kickoff
        </h2>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-4 gap-2 sm:gap-4">
          <CountdownUnit
            value={time.days}
            label="Days"
          />

          <CountdownUnit
            value={time.hours}
            label="Hours"
          />

          <CountdownUnit
            value={time.minutes}
            label="Minutes"
          />

          <CountdownUnit
            value={time.seconds}
            label="Seconds"
          />
        </div>

        <p className="mt-8 text-sm text-white/35">
          October 1, 2026 · 12:00 PM UTC−6
        </p>
      </div>
    </section>
  )
}

function CountdownUnit({
  value,
  label,
}: {
  value: number
  label: string
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/40 px-3 py-5 sm:px-6 sm:py-6">
      <div className="font-mono text-3xl font-medium tracking-tight text-white text-shadow-[0px_0px_20px_rgba(96,165,250,0.35)] sm:text-5xl">
        {pad(value)}
      </div>

      <div className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/30 sm:text-xs">
        {label}
      </div>
    </div>
  )
}
