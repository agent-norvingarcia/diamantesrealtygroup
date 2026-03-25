import PropertyCard from '../components/PropertyCard'
import { properties } from '../data/properties'

export default function Propiedades() {
  return (
    <section className="stack">
      <div>
        <h2>Propiedades disponibles</h2>
        <p className="muted">Catálogo estático de ejemplo para navegación frontend sin backend.</p>
      </div>

      <div className="grid">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  )
}
