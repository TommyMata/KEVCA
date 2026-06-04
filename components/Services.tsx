import { Servicio } from '@/types'

const ICON_MAP: Record<string, React.ReactNode> = {
  alarm: (
    <svg viewBox="0 0 24 24">
      <path d="M12 2a4 4 0 014 4v6a4 4 0 01-8 0V6a4 4 0 014-4z"/>
      <path d="M18 10v2a6 6 0 01-12 0v-2"/>
      <path d="M8 21h8"/>
      <path d="M12 17v4"/>
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
    <svg viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
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
