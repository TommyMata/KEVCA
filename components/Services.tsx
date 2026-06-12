import { Servicio } from '@/types'

const ICON_MAP: Record<string, React.ReactNode> = {
  alarm: (
    <svg viewBox="0 0 24 24">
      <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 01-3.46 0"/>
      <circle cx="12" cy="2" r="1"/>
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24">
      <rect x="2" y="6" width="16" height="12" rx="2"/>
      <path d="M22 8l-4 2v4l4 2V8z"/>
    </svg>
  ),
  fence: (
    <svg viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="18" rx="1"/>
      <rect x="14" y="3" width="7" height="18" rx="1"/>
      <path d="M10 8h4M10 16h4M6.5 3v18M17.5 3v18"/>
    </svg>
  ),
  sensor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4.93 4.93a10 10 0 0114.14 0"/>
      <path d="M7.76 7.76a6 6 0 018.49 0"/>
      <path d="M10.6 10.6a2 2 0 012.8 0"/>
      <circle cx="12" cy="14" r="2" fill="currentColor" stroke="none"/>
      <path d="M12 16v3"/>
      <path d="M9 19h6"/>
    </svg>
  ),
}

const DELAY_CLASSES = ['reveal-delay-1', 'reveal-delay-2', 'reveal-delay-3', 'reveal-delay-4'] as const
const getDelay = (i: number) => DELAY_CLASSES[i % DELAY_CLASSES.length]

export default function Services({ servicios }: { servicios: Servicio[] }) {
  return (
    <section className="services" id="servicios">
      <div className="container">
        <div className="services-header">
          <span className="section-label reveal">Nuestros Servicios</span>
          <h2 className="reveal reveal-delay-1">Soluciones integrales en seguridad</h2>
          <p className="reveal reveal-delay-2">
            Diseñamos, instalamos y mantenemos sistemas de protección adaptados a sus necesidades.
          </p>
        </div>
        <div className="services-grid">
          {servicios.map((s, i) => (
            <div key={s.id} className={`service-card reveal ${getDelay(i)}`}>
              <div className="service-icon">
                {ICON_MAP[s.icono] ?? ICON_MAP.sensor}
              </div>
              <h3>{s.titulo}</h3>
              <p>{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
