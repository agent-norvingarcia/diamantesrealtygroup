import { useEffect, useState } from 'react'
import PropertyForm from '../components/PropertyForm'
import {
  createPropiedad,
  editPropiedad,
  removePropiedad,
  subscribePropiedades,
  uploadPropiedadImage,
} from '../services/firebase'

export default function AdminPropiedades() {
  const [properties, setProperties] = useState([])
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const unsubscribe = subscribePropiedades(setProperties)
    return unsubscribe
  }, [])

  const handleSubmit = async (form, files) => {
    const urls = files.length ? await Promise.all(files.map(uploadPropiedadImage)) : []
    const payload = {
      ...form,
      precio: Number(form.precio),
      lat: Number(form.lat),
      lng: Number(form.lng),
      habitaciones: Number(form.habitaciones),
      banos: Number(form.banos),
      tamano: Number(form.tamano),
      images: selected?.images?.length ? [...selected.images, ...urls] : urls,
      updatedAt: new Date().toISOString(),
    }

    if (selected) {
      await editPropiedad(selected.id, payload)
      setSelected(null)
    } else {
      await createPropiedad({ ...payload, createdAt: new Date().toISOString() })
    }
  }

  return (
    <main className="section-wrap pt-16">
      <h1 className="mb-6 text-4xl font-semibold">Gestión de Propiedades</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <PropertyForm initialValues={selected || undefined} onSubmit={handleSubmit} submitLabel={selected ? 'Actualizar' : 'Crear'} />
        <div className="space-y-4">
          {properties.map((item) => (
            <article key={item.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4">
              <div>
                <p className="font-semibold">{item.titulo}</p>
                <p className="text-xs text-slate-400">US$ {Number(item.precio).toLocaleString()}</p>
              </div>
              <div className="flex gap-2">
                <button className="rounded-lg border border-white/20 px-3 py-1" onClick={() => setSelected(item)}>Editar</button>
                <button className="rounded-lg border border-red-500/40 px-3 py-1 text-red-300" onClick={() => removePropiedad(item.id)}>Eliminar</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
