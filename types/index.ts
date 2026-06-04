export interface Servicio {
  id: string
  titulo: string
  descripcion: string
  icono: string
  orden: number
  activo: boolean
}

export interface Paquete {
  id: string
  nombre: string
  descripcion: string | null
  precio: number | null
  moneda: string
  caracteristicas: string[]
  popular: boolean
  activo: boolean
  orden: number
}

export interface Lead {
  nombre: string
  telefono: string
  email?: string
  servicio?: string
  mensaje?: string
}

export interface ContactFormState {
  nombre: string
  telefono: string
  email: string
  servicio: string
  mensaje: string
}
