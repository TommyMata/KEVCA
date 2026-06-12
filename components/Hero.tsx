'use client'
import { useState, useEffect } from 'react'
import HeroParticles from './HeroParticles'

const WORDS = ['Alarmas', 'Cámaras CCTV', 'Cercas Eléctricas', 'Sensores']

function TypeWriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const word = WORDS[idx]
    let t: ReturnType<typeof setTimeout>
    if (!del && text.length < word.length) {
      t = setTimeout(() => setText(word.slice(0, text.length + 1)), 85)
    } else if (!del && text.length === word.length) {
      t = setTimeout(() => setDel(true), 2200)
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 45)
    } else {
      setDel(false)
      setIdx((i) => (i + 1) % WORDS.length)
    }
    return () => clearTimeout(t)
  }, [text, del, idx])

  return (
    <span className="hero-typed-word">
      {text}<span className="hero-cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <div className="hero-grid" />
      </div>
      <HeroParticles />

      <svg className="hero-shield" viewBox="0 0 200 240" fill="none">
        <path d="M100 8L12 48v68c0 60 40 96 88 116 48-20 88-56 88-116V48L100 8z" stroke="#3b2fff" strokeWidth="0.5" fill="none"/>
        <path d="M100 24L24 58v58c0 52 34 82 76 100 42-18 76-48 76-100V58L100 24z" stroke="#3b2fff" strokeWidth="0.3" fill="none"/>
        <path d="M100 40L36 68v48c0 44 28 70 64 86 36-16 64-42 64-86V68L100 40z" stroke="#3b2fff" strokeWidth="0.2" fill="none"/>
      </svg>

      <div className="container">
        <div className="hero-content">
          <span className="section-label reveal">KEVCA Security Protection</span>
          <h1 className="reveal reveal-delay-1">
            Protegemos lo que <span className="accent">más te importa</span>
          </h1>
          <div className="hero-typed-line reveal reveal-delay-2">
            Expertos en: <TypeWriter />
          </div>
          <p className="reveal reveal-delay-2">
            Instalación y mantenimiento profesional de sistemas de seguridad para hogares y negocios.
          </p>
          <div className="hero-buttons reveal reveal-delay-3">
            <a href="#contacto" className="btn-primary">
              Solicita Cotización Gratuita
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#servicios" className="btn-secondary">Ver Servicios</a>
          </div>
        </div>
      </div>
    </section>
  )
}
