import { useEffect, useState } from 'react'
import MapComponent from '../components/MapComponent'
import { getPropiedades } from '../services/firebase'

export default function Mapa() {
  const [properties, setProperties] = useState([])

  useEffect(() => {
    getPropiedades().then(setProperties)
  }, [])

  return (
    <main className="section-wrap pt-28">
      <h1 className="mb-6 text-4xl font-semibold">Mapa de propiedades</h1>
      <MapComponent properties={properties} />
    </main>
  )
}
