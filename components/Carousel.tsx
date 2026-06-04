'use client'
import { useState, useEffect, useCallback, useRef } from 'react'
import Image from 'next/image'

const IMAGES = [
  { src: '/images/team/01.jpg', alt: 'Equipo KEVCA Security Protection' },
  { src: '/images/team/02.jpg', alt: 'Instalación de cerca eléctrica' },
  { src: '/images/team/03.jpg', alt: 'Instalación en campo' },
  { src: '/images/team/04.jpg', alt: 'Sistema de seguridad' },
  { src: '/images/team/05.jpg', alt: 'Instalación profesional' },
  { src: '/images/team/06.jpg', alt: 'Trabajo en campo' },
  { src: '/images/team/07.jpg', alt: 'Cerca eléctrica instalada' },
  { src: '/images/team/08.jpg', alt: 'Cámara CCTV instalada' },
  { src: '/images/team/09.jpg', alt: 'Sistema CCTV' },
  { src: '/images/team/10.jpg', alt: 'Instalación de seguridad' },
  { src: '/images/team/11.jpg', alt: 'Proyecto completado' },
  { src: '/images/team/12.jpg', alt: 'Instalación profesional KEVCA' },
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
              style={{ objectFit: 'cover', objectPosition: 'center' }}
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
