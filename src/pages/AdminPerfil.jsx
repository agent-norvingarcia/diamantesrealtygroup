import { useEffect, useState } from 'react'
import { getProfile, saveProfile } from '../services/profile'

const defaults = {
  nombre: 'Norvin García',
  bio: '',
  foto: '',
  telefono: '',
  email: '',
  facebook: '',
  instagram: '',
  whatsapp: '',
}

export default function AdminPerfil() {
  const [form, setForm] = useState(defaults)

  useEffect(() => {
    getProfile().then((data) => data && setForm((previous) => ({ ...previous, ...data })))
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    await saveProfile(form)
    alert('Perfil actualizado')
  }

  return (
    <main className="section-wrap pt-16">
      <h1 className="mb-6 text-4xl font-semibold">Perfil del Agente</h1>
      <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
        {Object.keys(defaults).map((key) => (
          <label key={key} className="text-sm capitalize text-slate-300">
            {key}
            <input
              value={form[key]}
              onChange={(event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))}
              className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2"
            />
          </label>
        ))}
        <button className="w-fit rounded-xl bg-brand.gold px-5 py-2 font-semibold text-slate-900">Guardar cambios</button>
      </form>
    </main>
  )
}
