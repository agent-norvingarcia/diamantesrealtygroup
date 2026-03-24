import { useState } from 'react'

const emptyForm = {
  titulo: '',
  precio: '',
  ubicacion: '',
  lat: '',
  lng: '',
  descripcion: '',
  habitaciones: '',
  banos: '',
  tamano: '',
}

export default function PropertyForm({ initialValues, onSubmit, submitLabel = 'Guardar' }) {
  const [form, setForm] = useState(initialValues || emptyForm)
  const [files, setFiles] = useState([])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(form, Array.from(files))
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
      {Object.entries({
        titulo: 'Título',
        precio: 'Precio',
        ubicacion: 'Ubicación',
        lat: 'Latitud',
        lng: 'Longitud',
        habitaciones: 'Habitaciones',
        banos: 'Baños',
        tamano: 'Tamaño m²',
      }).map(([name, label]) => (
        <label key={name} className="text-sm text-slate-300">
          {label}
          <input
            required={['titulo', 'precio', 'ubicacion'].includes(name)}
            name={name}
            value={form[name]}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2"
          />
        </label>
      ))}
      <label className="text-sm text-slate-300">
        Descripción
        <textarea
          name="descripcion"
          value={form.descripcion}
          onChange={handleChange}
          rows={4}
          className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2"
        />
      </label>
      <label className="text-sm text-slate-300">
        Imágenes
        <input type="file" multiple accept="image/*" onChange={(event) => setFiles(event.target.files)} className="mt-1 w-full" />
      </label>
      <button className="rounded-xl bg-brand.gold px-4 py-2 font-semibold text-slate-900">{submitLabel}</button>
    </form>
  )
}
