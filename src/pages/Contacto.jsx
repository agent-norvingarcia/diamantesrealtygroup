import { useState } from 'react'

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Gracias por contactarnos. Te responderemos pronto.')
    setForm({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <main className="section-wrap pt-28">
      <h1 className="mb-6 text-4xl font-semibold">Contacto</h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2" placeholder="Nombre" value={form.nombre} onChange={(event) => setForm({ ...form, nombre: event.target.value })} required />
        <input className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2" type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} required />
        <textarea className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2" rows={5} placeholder="Mensaje" value={form.mensaje} onChange={(event) => setForm({ ...form, mensaje: event.target.value })} required />
        <button className="rounded-xl bg-brand.gold px-4 py-2 font-semibold text-slate-900">Enviar</button>
        <a className="ml-3 inline-block rounded-xl bg-green-500 px-4 py-2 font-semibold" href="https://wa.me/18090000000" target="_blank" rel="noreferrer">
          WhatsApp directo
        </a>
      </form>
    </main>
  )
}
