import { Servicio, Paquete, Lead } from '@/types'
import { createPublicClient, createAdminClient } from './supabase'

const DEFAULT_SERVICIOS: Servicio[] = [
  {
    id: '1',
    titulo: 'Alarmas',
    descripcion: 'Sistemas de alarma inteligentes para hogares y negocios con monitoreo en tiempo real y notificaciones instantáneas.',
    icono: 'alarm',
    orden: 1,
    activo: true,
  },
  {
    id: '2',
    titulo: 'Cámaras CCTV',
    descripcion: 'Videovigilancia de alta definición con grabación continua, visión nocturna y acceso remoto desde su celular.',
    icono: 'camera',
    orden: 2,
    activo: true,
  },
  {
    id: '3',
    titulo: 'Cercas Eléctricas',
    descripcion: 'Cercos eléctricos y perimetrales de alta tensión con detección de intrusión y alertas automáticas.',
    icono: 'fence',
    orden: 3,
    activo: true,
  },
  {
    id: '4',
    titulo: 'Sensores',
    descripcion: 'Sensores de movimiento, humo, apertura y vibración. Detección temprana de amenazas para su tranquilidad.',
    icono: 'sensor',
    orden: 4,
    activo: true,
  },
]

export async function getServicios(): Promise<Servicio[]> {
  const supabase = createPublicClient()
  if (!supabase) return DEFAULT_SERVICIOS

  const { data, error } = await supabase
    .from('servicios')
    .select('*')
    .eq('activo', true)
    .order('orden')

  if (error || !data || data.length === 0) return DEFAULT_SERVICIOS
  return data as Servicio[]
}

export async function getPaquetes(): Promise<Paquete[]> {
  const supabase = createPublicClient()
  if (!supabase) return []

  const { data, error } = await supabase
    .from('paquetes')
    .select('*')
    .eq('activo', true)
    .order('orden')

  if (error || !data) return []
  return data as Paquete[]
}

export async function saveLead(lead: Lead): Promise<void> {
  const supabase = createAdminClient()
  if (!supabase) {
    console.warn('Supabase not configured — lead not saved.')
    return
  }

  const { error } = await supabase.from('leads').insert([lead])
  if (error) throw new Error(`Failed to save lead: ${error.message}`)
}
