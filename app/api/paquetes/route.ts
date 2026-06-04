import { NextResponse } from 'next/server'
import { getPaquetes } from '@/lib/data'

export async function GET() {
  try {
    const paquetes = await getPaquetes()
    return NextResponse.json(paquetes)
  } catch {
    return NextResponse.json({ error: 'Error al obtener paquetes' }, { status: 500 })
  }
}
