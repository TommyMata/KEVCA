import Carousel from './Carousel'

export default function About() {
  return (
    <section className="about" id="nosotros">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <Carousel />
          </div>
          <div className="about-content">
            <span className="section-label reveal">Sobre Nosotros</span>
            <h2 className="reveal reveal-delay-1">Su socio estratégico en seguridad electrónica</h2>
            <p className="reveal reveal-delay-2">
              En KEVCA Security Protection nos especializamos en brindar soluciones de seguridad confiables y tecnológicamente avanzadas. Nuestro equipo de profesionales certificados garantiza instalaciones de calidad y un servicio post-venta que nos distingue.
            </p>
            <div className="about-features reveal reveal-delay-3">
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h4>Profesionales certificados</h4>
                  <p>Técnicos con experiencia comprobada</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h4>Respuesta rápida</h4>
                  <p>Atención en el menor tiempo posible</p>
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
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Cobertura GAM</h4>
                  <p>Servicio en toda el Área Metropolitana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
