import { useEffect, useState } from 'react'
import { getPerfil } from '../services/firebase'

const fallback = {
  nombre: 'Norvin García',
  bio: 'Agente inmobiliario especializado en propiedades premium y oportunidades de inversión.',
  foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80',
  whatsapp: 'https://wa.me/18090000000',
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  email: 'norvin@email.com',
  telefono: '+1 (809) 000-0000',
}

export default function Perfil() {
  const [perfil, setPerfil] = useState(fallback)

  useEffect(() => {
    getPerfil().then((data) => data && setPerfil((prev) => ({ ...prev, ...data })))
  }, [])

  return (
    <main className="section-wrap pt-28">
      <div className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-8 shadow-soft md:grid-cols-3">
        <img src={perfil.foto} alt={perfil.nombre} className="h-80 w-full rounded-2xl object-cover" />
        <div className="space-y-4 md:col-span-2">
          <h1 className="text-4xl font-semibold">{perfil.nombre}</h1>
          <p className="text-slate-300">{perfil.bio}</p>
          <p>Email: {perfil.email}</p>
          <p>Tel: {perfil.telefono}</p>
          <div className="flex flex-wrap gap-3">
            <a href={perfil.facebook} className="rounded-xl border border-white/20 px-4 py-2" target="_blank" rel="noreferrer">Facebook</a>
            <a href={perfil.instagram} className="rounded-xl border border-white/20 px-4 py-2" target="_blank" rel="noreferrer">Instagram</a>
            <a href={perfil.whatsapp} className="rounded-xl border border-white/20 px-4 py-2" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
    </main>
  )
}
