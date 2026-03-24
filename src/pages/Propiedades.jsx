import { useEffect, useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import { fetchProperties } from '../services/properties'

export default function Propiedades() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProperties()
        setProperties(data)
      } catch {
        setError('No se pudieron cargar las propiedades. Verifica permisos de Firestore.')
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  if (loading) return <section className="panel">Cargando propiedades...</section>
  if (error) return <section className="panel">{error}</section>

  return (
    <section className="stack">
      <h2>Propiedades disponibles</h2>
      <div className="grid">
        {properties.length === 0 ? (
          <p className="panel">No hay propiedades disponibles todavía.</p>
        ) : (
          properties.map((property) => <PropertyCard key={property.id} property={property} />)
        )}
      </div>
    </section>
  )
}
