'use client'
import { useState } from 'react'
import { ContactFormState } from '@/types'
import { WA_NUMBER, CONTACT, SERVICIOS_OPCIONES } from '@/lib/constants'

const EMPTY_FORM: ContactFormState = {
  nombre: '',
  telefono: '',
  email: '',
  servicio: '',
  mensaje: '',
}

export default function Contact() {
  const [form, setForm] = useState<ContactFormState>(EMPTY_FORM)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Error al enviar')
      }

      setSuccess(true)
      setForm(EMPTY_FORM)

      let waMsg = `Hola KEVCA, mi nombre es ${form.nombre}.`
      if (form.servicio) waMsg += ` Me interesa el servicio de ${form.servicio}.`
      if (form.mensaje) waMsg += ` ${form.mensaje}`
      if (form.email) waMsg += ` Mi correo es: ${form.email}.`
      waMsg += ` Mi teléfono es: ${form.telefono}.`

      setTimeout(() => {
        window.location.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(waMsg)}`
      }, 1200)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocurrió un error. Intente de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="contact" id="contacto">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-label reveal">Contáctenos</span>
            <h2 className="reveal reveal-delay-1">Estamos aquí para ayudarle</h2>
            <div className="contact-items reveal reveal-delay-2">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <strong>{CONTACT.phonesDisplay}</strong>
                  <span>Llámenos o escríbanos por WhatsApp</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
                </div>
                <div>
                  <strong>{CONTACT.email}</strong>
                  <span>Respuesta en menos de 24 horas</span>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <strong>{CONTACT.location}</strong>
                  <span>Cobertura en todo el país</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Su nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">Teléfono</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="8888-8888"
                  required
                  value={form.telefono}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="su@correo.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="servicio">Servicio de interés</label>
              <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange}>
                <option value="">Seleccionar...</option>
                {SERVICIOS_OPCIONES.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Cuéntenos sobre su proyecto o necesidad..."
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>
            {error && <p className="form-error">{error}</p>}
            <button
              type="submit"
              className={`btn-submit${success ? ' success' : ''}`}
              disabled={loading}
            >
              {loading ? 'Enviando...' : success ? '¡Enviado! Redirigiendo a WhatsApp...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
