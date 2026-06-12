import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'KEVCA Security Protection | Sistemas de Seguridad en Costa Rica',
  description:
    'Instalación profesional de alarmas, cámaras CCTV, cercas eléctricas y sensores. 10+ años protegiendo hogares y negocios en Costa Rica.',
  keywords: 'alarmas, cámaras CCTV, cercas eléctricas, seguridad, Costa Rica, KEVCA',
  openGraph: {
    title: 'KEVCA Security Protection',
    description: 'Instalación profesional de sistemas de seguridad en Costa Rica.',
    type: 'website',
    images: [{ width: 1200, height: 630, alt: 'KEVCA Security Protection' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KEVCA Security Protection',
    description: 'Instalación profesional de sistemas de seguridad en Costa Rica.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
