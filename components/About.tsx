'use client'
import { useState, useEffect, useRef } from 'react'
import Carousel from './Carousel'

function useCounter(target: number, triggered: boolean, duration = 1600) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!triggered) return
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [triggered, target, duration])
  return count
}

export default function About() {
  const featuresRef = useRef<HTMLDivElement>(null)
  const [triggered, setTriggered] = useState(false)
  const years = useCounter(20, triggered)

  useEffect(() => {
    const el = featuresRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setTriggered(true); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <Carousel />
          </div>
          <div className="about-content">
            <span className="section-label reveal">Sobre Nosotros</span>
            <h2 className="reveal reveal-delay-1">Comprometidos con su protección y tranquilidad</h2>
            <p className="reveal reveal-delay-2">
              Ubicados en Cartago, Costa Rica, en KEVCA Security trabajamos con el compromiso de brindar protección, tranquilidad y tecnología de seguridad avanzada para hogares, negocios y empresas. Nacimos con el objetivo de ofrecer soluciones confiables que permitan a nuestros clientes sentirse seguros en todo momento.
            </p>
            <p className="reveal reveal-delay-2" style={{ marginBottom: '32px', color: 'var(--text-secondary)', fontSize: '1rem' }}>
              Nos especializamos en instalación y mantenimiento de cámaras de seguridad, alarmas, cercas eléctricas, controles de acceso y sistemas inteligentes diseñados para proteger lo que más valoras. Nuestro equipo combina experiencia, innovación y atención personalizada para garantizar un servicio de calidad y confianza.
            </p>
            <div
              className={`about-features reveal reveal-delay-3${triggered ? ' features-triggered' : ''}`}
              ref={featuresRef}
            >
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>Profesionales certificados</h4>
                  <p>+{years} años de experiencia</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>
                </div>
                <div>
                  <h4>Garantía en trabajos</h4>
                  <p>Respaldamos cada instalación</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h4>Atención personalizada</h4>
                  <p>Soluciones adaptadas a cada cliente</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Cobertura nacional</h4>
                  <p>Servicio en todo Costa Rica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
