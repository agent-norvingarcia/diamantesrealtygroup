import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import PropertyCard from '../components/PropertyCard'
import { subscribeProperties } from '../services/properties'

export default function Propiedades() {
  const [properties, setProperties] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = subscribeProperties((items) => {
      setProperties(items)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <main className="section-wrap pt-28">
      <h1 className="mb-8 text-4xl font-semibold">Propiedades destacadas</h1>
      {loading ? (
        <p className="animate-pulse text-slate-300">Cargando propiedades...</p>
      ) : (
        <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>
      )}
    </main>
  )
}
