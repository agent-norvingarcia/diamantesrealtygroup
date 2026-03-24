export default function PropertyCard({ property }) {
  return (
    <article className="property-card">
      <img
        src={property.imageUrl || 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200'}
        alt={property.title || 'Propiedad'}
      />
      <div className="property-body">
        <h3>{property.title || 'Propiedad destacada'}</h3>
        <p className="price">${Number(property.price || 0).toLocaleString('en-US')}</p>
        <p className="location">📍 {property.location || 'Ubicación no disponible'}</p>
        <p>{property.description || 'Sin descripción'}</p>
      </div>
    </article>
  )
}
