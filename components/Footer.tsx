import { CONTACT, WA_URL } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#inicio" className="nav-logo">
              <svg viewBox="0 0 48 56" width="36" height="42" fill="none">
                <path d="M24 2L4 12v16c0 14 10 22 20 26 10-4 20-12 20-26V12L24 2z" fill="#0C006E" stroke="#3b2fff" strokeWidth="1.2"/>
                <text x="24" y="36" textAnchor="middle" fontFamily="Helvetica Neue, Helvetica, Arial, sans-serif" fontWeight="800" fontSize="22" fill="white" letterSpacing="1">K</text>
              </svg>
              <div className="nav-logo-text">KEVCA<span>Security Protection</span></div>
            </a>
          </div>

          <div style={{ textAlign: 'center' }}>
            <h4>Contacto</h4>
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
            <div className="footer-social">
              <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label="Email">
                <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} KEVCA Security Protection. Todos los derechos reservados.</span>
          <span>Protegiendo lo que más importa</span>
        </div>
      </div>
    </footer>
  )
}
