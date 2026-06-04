const CARDS = [
  {
    label: 'Misión',
    title: 'Proteger con excelencia',
    desc: 'Brindar soluciones integrales de seguridad electrónica a hogares y empresas en Costa Rica, instalando y manteniendo sistemas confiables con tecnología de punta y personal certificado, para garantizar la tranquilidad y protección de nuestros clientes en todo momento.',
  },
  {
    label: 'Visión',
    title: 'Ser el referente en seguridad',
    desc: 'Ser la empresa líder en seguridad electrónica en Costa Rica, reconocida por la excelencia en nuestros servicios, la innovación tecnológica y el compromiso con la protección de cada familia y negocio que deposita su confianza en nosotros.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="section-label reveal">Misión &amp; Visión</span>
          <h2 className="reveal reveal-delay-1">Nuestra filosofía de trabajo</h2>
          <p className="reveal reveal-delay-2">Los principios que guían cada instalación y cada servicio que brindamos.</p>
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
