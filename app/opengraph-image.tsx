import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'KEVCA Security Protection'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#08080e',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background orbs */}
        <div style={{
          position: 'absolute',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,47,255,0.18) 0%, transparent 70%)',
          top: '-250px',
          left: '-150px',
          display: 'flex',
        }} />
        <div style={{
          position: 'absolute',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(79,195,247,0.12) 0%, transparent 70%)',
          bottom: '-150px',
          right: '50px',
          display: 'flex',
        }} />

        {/* Shield icon */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '90px',
          height: '90px',
          borderRadius: '20px',
          background: 'rgba(59,47,255,0.2)',
          border: '1.5px solid rgba(59,47,255,0.4)',
          marginBottom: '28px',
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#4fc3f7" strokeWidth="1.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
        </div>

        {/* Brand name */}
        <div style={{
          display: 'flex',
          alignItems: 'baseline',
          gap: '0px',
          fontSize: '96px',
          fontWeight: '900',
          letterSpacing: '-3px',
          lineHeight: 1,
        }}>
          <span style={{ color: '#4fc3f7' }}>K</span>
          <span style={{ color: 'white' }}>EVCA</span>
        </div>

        {/* Subtitle */}
        <div style={{
          fontSize: '26px',
          color: '#94a3b8',
          marginTop: '14px',
          letterSpacing: '6px',
          textTransform: 'uppercase',
          display: 'flex',
        }}>
          Security Protection
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '19px',
          color: '#475569',
          marginTop: '28px',
          display: 'flex',
        }}>
          Sistemas de Seguridad en Costa Rica
        </div>
      </div>
    ),
    { ...size }
  )
}
