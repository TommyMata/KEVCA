'use client'
import { useState } from 'react'
import { CONTACT } from '@/lib/constants'

const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Sobre Nosotros' },
  { href: '#contacto', label: 'Contacto' },
]

function AccordionSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="footer-accordion">
      <button className="footer-accordion-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <h4>{title}</h4>
        <svg
          className={`footer-accordion-chevron${open ? ' open' : ''}`}
          width="16" height="16" viewBox="0 0 24 24"
          fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
        >
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </button>
      <div className={`footer-accordion-content${open ? ' open' : ''}`}>
        {children}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand — always visible */}
          <div className="footer-brand">
            <a href="/">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/brand/kevca-logo-dark.svg" alt="KEVCA Security Protection" className="footer-logo-img" />
            </a>
            <p>Su socio de confianza en soluciones de seguridad electrónica. Protegemos hogares y negocios en todo Costa Rica.</p>
            <div className="footer-social">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <AccordionSection title="Navegación">
            <ul className="footer-links">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><a href={href}>{label}</a></li>
              ))}
            </ul>
          </AccordionSection>

          {/* Contacto */}
          <AccordionSection title="Contacto">
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>{CONTACT.phonesDisplay}</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="none" stroke="currentColor" strokeWidth="1.5"/><path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>{CONTACT.email}</span>
            </div>
            <div className="footer-contact-item">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" fill="none" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              <span>{CONTACT.location}</span>
            </div>
          </AccordionSection>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KEVCA Security Protection. Todos los derechos reservados.</span>
          <span>Protegiendo lo que más importa</span>
        </div>
      </div>
    </footer>
  )
}
