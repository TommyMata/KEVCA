const PARTICLES = [
  { top: '12%', left: '8%',  size: 3, duration: 8,  delay: 0,    tx: 30,  ty: -20, opacity: 0.5 },
  { top: '28%', left: '15%', size: 2, duration: 11, delay: 1.5,  tx: -20, ty: 30,  opacity: 0.35 },
  { top: '55%', left: '5%',  size: 4, duration: 9,  delay: 0.5,  tx: 25,  ty: -35, opacity: 0.4 },
  { top: '75%', left: '12%', size: 2, duration: 13, delay: 3,    tx: -15, ty: 20,  opacity: 0.3 },
  { top: '18%', left: '88%', size: 3, duration: 10, delay: 2,    tx: -30, ty: 25,  opacity: 0.45 },
  { top: '42%', left: '92%', size: 2, duration: 7,  delay: 0.8,  tx: 20,  ty: -30, opacity: 0.35 },
  { top: '68%', left: '85%', size: 3, duration: 12, delay: 4,    tx: -25, ty: 15,  opacity: 0.4 },
  { top: '85%', left: '78%', size: 2, duration: 9,  delay: 1,    tx: 15,  ty: -25, opacity: 0.3 },
  { top: '8%',  left: '45%', size: 2, duration: 14, delay: 2.5,  tx: -20, ty: 30,  opacity: 0.25 },
  { top: '90%', left: '35%', size: 3, duration: 8,  delay: 3.5,  tx: 30,  ty: -20, opacity: 0.35 },
  { top: '35%', left: '55%', size: 2, duration: 11, delay: 0.3,  tx: -15, ty: -25, opacity: 0.2  },
  { top: '60%', left: '48%', size: 3, duration: 10, delay: 5,    tx: 20,  ty: 20,  opacity: 0.3  },
]

export default function HeroParticles() {
  return (
    <div className="hero-particles" aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="hero-particle"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--tx': `${p.tx}px`,
            '--ty': `${p.ty}px`,
            '--opacity': p.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  )
}
