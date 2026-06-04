const CARDS = [
  {
    num: '01',
    title: 'Asesoría personalizada',
    desc: 'Evaluamos su propiedad y diseñamos un sistema a la medida de sus necesidades y presupuesto.',
  },
  {
    num: '02',
    title: 'Tecnología de punta',
    desc: 'Trabajamos con las marcas líderes del mercado para garantizar la máxima calidad y durabilidad.',
  },
  {
    num: '03',
    title: 'Mantenimiento preventivo',
    desc: 'Planes de mantenimiento programado para que sus sistemas funcionen siempre al máximo rendimiento.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us-header">
          <span className="section-label reveal">¿Por qué elegirnos?</span>
          <h2 className="reveal reveal-delay-1">Más que seguridad, tranquilidad</h2>
          <p className="reveal reveal-delay-2">Cada proyecto es una promesa de protección que cumplimos con excelencia.</p>
        </div>
        <div className="why-grid">
          {CARDS.map((card, i) => (
            <div key={card.num} className={`why-card reveal reveal-delay-${i + 1}`}>
              <div className="why-number">{card.num}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
