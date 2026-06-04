export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-bg">
        <div className="hero-grid" />
      </div>

      <svg className="hero-shield" viewBox="0 0 200 240" fill="none">
        <path d="M100 8L12 48v68c0 60 40 96 88 116 48-20 88-56 88-116V48L100 8z" stroke="#3b2fff" strokeWidth="0.5" fill="none"/>
        <path d="M100 24L24 58v58c0 52 34 82 76 100 42-18 76-48 76-100V58L100 24z" stroke="#3b2fff" strokeWidth="0.3" fill="none"/>
        <path d="M100 40L36 68v48c0 44 28 70 64 86 36-16 64-42 64-86V68L100 40z" stroke="#3b2fff" strokeWidth="0.2" fill="none"/>
      </svg>

      <div className="container">
        <div className="hero-content">
          <span className="section-label reveal">KEVCA Security Protection</span>
          <h1 className="reveal reveal-delay-1">
            Protegemos lo que <span className="accent">más importa</span>
          </h1>
          <p className="reveal reveal-delay-2">
            Instalación y mantenimiento profesional de sistemas de seguridad. Alarmas, cámaras CCTV, cercas perimetrales y sensores de última generación.
          </p>
          <div className="hero-buttons reveal reveal-delay-3">
            <a href="#contacto" className="btn-primary">
              Solicitar Cotización
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
