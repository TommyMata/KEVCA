'use client'
import { useState, useEffect, useCallback } from 'react'

import { WA_URL } from '@/lib/constants'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (!target) return
    const navHeight = 72
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight
    window.scrollTo({ top, behavior: 'smooth' })
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="mainNav">
      <div className="nav-inner">
        <a href="/" className="nav-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/brand/kevca-logo-dark.svg" alt="KEVCA Security Protection" className="nav-logo-img" />
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
          {[
            { href: '#inicio', label: 'Inicio' },
            { href: '#servicios', label: 'Servicios' },
            { href: '#nosotros', label: 'Nosotros' },
            { href: '#contacto', label: 'Contacto' },
          ].map(({ href, label }) => (
            <li key={href}>
              <a href={href} onClick={(e) => handleNavClick(e, href)}>{label}</a>
            </li>
          ))}
          <li>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.11.546 4.093 1.502 5.818L0 24l6.335-1.662A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.86 0-3.632-.5-5.17-1.394l-.37-.22-3.834 1.006 1.024-3.738-.242-.385A9.72 9.72 0 012.25 12 9.75 9.75 0 0112 2.25 9.75 9.75 0 0121.75 12 9.75 9.75 0 0112 21.75z"/>
              </svg>
              WhatsApp
            </a>
          </li>
        </ul>

        <button
          className="nav-toggle"
          aria-label="Menú"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span style={menuOpen ? { transform: 'rotate(45deg) translate(5px, 5px)' } : {}} />
          <span style={menuOpen ? { opacity: 0 } : {}} />
          <span style={menuOpen ? { transform: 'rotate(-45deg) translate(5px, -5px)' } : {}} />
        </button>
      </div>
    </nav>
  )
}
