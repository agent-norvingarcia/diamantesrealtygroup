import { useState } from 'react'
import { createProperty } from '../services/properties'

const initialState = {
  title: '',
  price: '',
  location: '',
  description: '',
  lat: '',
  lng: '',
  imageFile: null
}

export default function Admin() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState('')
  const [loading, setLoading] = useState(false)

  const onChange = (event) => {
    const { name, value, files } = event.target
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setStatus('')

    try {
      await createProperty(form)
      setStatus('Propiedad creada correctamente.')
      setForm(initialState)
      event.target.reset()
    } catch {
      setStatus('Error al crear propiedad. Revisa permisos de Firebase.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="panel stack">
      <h2>Panel Admin</h2>
      <p>Crear propiedades en Firestore y subir imagen a Firebase Storage.</p>
      <form onSubmit={onSubmit} className="form-grid">
        <input name="title" placeholder="Título" required onChange={onChange} />
        <input name="price" placeholder="Precio" type="number" required onChange={onChange} />
        <input name="location" placeholder="Ubicación" required onChange={onChange} />
        <textarea name="description" placeholder="Descripción" rows="3" required onChange={onChange} />
        <input name="lat" placeholder="Latitud" type="number" step="any" required onChange={onChange} />
        <input name="lng" placeholder="Longitud" type="number" step="any" required onChange={onChange} />
        <input name="imageFile" type="file" accept="image/*" onChange={onChange} />
        <button className="btn-primary" type="submit" disabled={loading}>{loading ? 'Guardando...' : 'Crear propiedad'}</button>
      </form>
      {status && <p>{status}</p>}
    </section>
  )
}
