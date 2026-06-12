'use client'
import { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 20,  prefix: '+', suffix: '',   label: 'Años de experiencia' },
  { value: 500, prefix: '+', suffix: '',   label: 'Instalaciones realizadas' },
  { value: 24,  prefix: '',  suffix: '/7', label: 'Soporte disponible' },
  { value: 100, prefix: '',  suffix: '%',  label: 'Clientes satisfechos' },
]

function useCounter(target: number, triggered: boolean) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!triggered) return
    let start = 0
    const duration = 1800
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [triggered, target])

  return count
}

function StatCard({ value, prefix, suffix, label, triggered }: typeof STATS[0] & { triggered: boolean }) {
  const count = useCounter(value, triggered)
  return (
    <div className="stat-card">
      <div className="stat-number">
        <span className="stat-prefix">{prefix}</span>
        {count}
        <span className="stat-suffix">{suffix}</span>
      </div>
      <p className="stat-label">{label}</p>
    </div>
  )
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div className="stats-bar" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} triggered={triggered} />
          ))}
        </div>
      </div>
    </div>
  )
}
