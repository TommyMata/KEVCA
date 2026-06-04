import { NextResponse } from 'next/server'
import { getServicios } from '@/lib/data'

export async function GET() {
  try {
    const servicios = await getServicios()
    return NextResponse.json(servicios)
  } catch {
    return NextResponse.json({ error: 'Error al obtener servicios' }, { status: 500 })
  }
}
