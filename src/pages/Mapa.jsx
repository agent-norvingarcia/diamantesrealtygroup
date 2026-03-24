import { useEffect, useRef, useState } from 'react'
import L from 'leaflet'
import { fetchProperties } from '../services/properties'

export default function Mapa() {
  const mapRef = useRef(null)
  const containerRef = useRef(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true

    const bootMap = async () => {
      try {
        const properties = await fetchProperties()
        if (!mounted || !containerRef.current) return

        mapRef.current = L.map(containerRef.current).setView([20.67, -103.35], 11)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(mapRef.current)

        properties.forEach((p) => {
          if (!Number.isFinite(Number(p.lat)) || !Number.isFinite(Number(p.lng))) return

          L.marker([Number(p.lat), Number(p.lng)])
            .addTo(mapRef.current)
            .bindPopup(`<strong>${p.title || 'Propiedad'}</strong><br/>${p.location || ''}<br/>$${Number(p.price || 0).toLocaleString('en-US')}`)
        })
      } catch {
        setError('No se pudo cargar el mapa por un error al consultar propiedades.')
      }
    }

    bootMap()

    return () => {
      mounted = false
      if (mapRef.current) {
        mapRef.current.remove()
      }
    }
  }, [])

  return (
    <section className="stack">
      <h2>Mapa de propiedades</h2>
      {error && <p className="panel">{error}</p>}
      <div ref={containerRef} className="map" />
    </section>
  )
}
