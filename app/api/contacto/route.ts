import { NextRequest, NextResponse } from 'next/server'
import { saveLead } from '@/lib/data'
import { sendContactEmail } from '@/lib/email'
import { Lead } from '@/types'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { nombre, telefono, email, servicio, mensaje } = body

    if (!nombre?.trim() || !telefono?.trim()) {
      return NextResponse.json({ error: 'Nombre y teléfono son requeridos' }, { status: 400 })
    }

    const lead: Lead = {
      nombre: nombre.trim(),
      telefono: telefono.trim(),
      email: email?.trim() || undefined,
      servicio: servicio?.trim() || undefined,
      mensaje: mensaje?.trim() || undefined,
    }

    const [leadResult, emailResult] = await Promise.allSettled([
      saveLead(lead),
      sendContactEmail(lead),
    ])

    if (leadResult.status === 'rejected') console.error('Lead save failed:', leadResult.reason)
    if (emailResult.status === 'rejected') console.error('Email send failed:', emailResult.reason)

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 })
  }
}
