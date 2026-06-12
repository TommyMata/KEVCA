'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/images/team/01.png', alt: 'Equipo KEVCA Security Protection', pos: 'center 55%' },
  { src: '/images/team/02.jpg', alt: 'Residencia protegida por KEVCA', pos: 'center center' },
  { src: '/images/team/03.jpg', alt: 'Cámaras bullet Dahua instaladas', pos: 'center center' },
  { src: '/images/team/04.jpg', alt: 'Cámaras en poste contra el cielo', pos: 'center 35%' },
  { src: '/images/team/05.jpg', alt: 'Cerca eléctrica perimetral instalada', pos: 'center bottom' },
  { src: '/images/team/06.jpg', alt: 'Cámara CCTV en poste exterior', pos: 'center 40%' },
  { src: '/images/team/07.jpg', alt: 'Cámara PTZ Dahua en poste', pos: 'center 30%' },
  { src: '/images/team/08.jpg', alt: 'Cámaras domo en pared de piedra', pos: 'center center' },
  { src: '/images/team/09.jpg', alt: 'Cerca eléctrica en fachada', pos: 'center bottom' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)

  const next = useCallback(() => setCurrent((c) => (c + 1) % IMAGES.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + IMAGES.length) % IMAGES.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 4000)
    return () => clearInterval(id)
  }, [paused, next])

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
    touchStartX.current = null
  }

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {IMAGES.map((img, i) => (
          <div key={i} className="carousel-slide">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: img.pos ?? 'center' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      <button className="carousel-btn carousel-btn--prev" onClick={prev} aria-label="Anterior">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M15 18l-6-6 6-6"/>
        </svg>
      </button>
      <button className="carousel-btn carousel-btn--next" onClick={next} aria-label="Siguiente">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <path d="M9 18l6-6-6-6"/>
        </svg>
      </button>

      <div className="carousel-dots">
        {IMAGES.map((_, i) => (
          <button
            key={i}
            className={`carousel-dot${i === current ? ' active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
