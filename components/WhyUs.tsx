const CARDS = [
  {
    label: 'Visión',
    title: 'Nuestra Visión',
    desc: 'Ser una empresa líder en seguridad y tecnología en Costa Rica, reconocida por nuestra excelencia, innovación y compromiso con la protección y tranquilidad de nuestros clientes, ofreciendo soluciones modernas y confiables para cada necesidad.',
  },
  {
    label: 'Misión',
    title: 'Nuestra Misión',
    desc: 'Brindar soluciones integrales de seguridad con tecnología avanzada, servicio profesional y atención personalizada, creando entornos más seguros para familias, hogares y empresas mediante sistemas eficientes y de alta calidad.',
  },
  {
    label: 'Valores',
    title: 'Más que Seguridad',
    desc: 'En KEVCA Security creemos que la seguridad va más allá de instalar equipos; se trata de proteger sueños, familias y negocios. Nuestro propósito es brindar tranquilidad y confianza, acompañando a nuestros clientes cada día.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="section-label reveal">Nuestra Empresa</span>
          <h2 className="reveal reveal-delay-1">Misión, Visión y Valores</h2>
          <p className="reveal reveal-delay-2">Los principios que guían nuestro trabajo y nuestro compromiso con cada cliente.</p>
        </div>
        <div className="why-grid">
          {CARDS.map((card, i) => (
            <div key={card.label} className={`why-card reveal reveal-delay-${i + 1}`}>
              <div className="why-number">{card.label}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
