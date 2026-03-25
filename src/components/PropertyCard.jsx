export default function PropertyCard({ property }) {
  return (
    <article className="property-card panel">
      <img src={property.imagen} alt={property.titulo} />
      <div className="property-body">
        <h3>{property.titulo}</h3>
        <p className="price">US$ {property.precio.toLocaleString('en-US')}</p>
        <p className="location">📍 {property.ubicacion}</p>
        <p>{property.descripcion}</p>
        <p className="details">
          {property.habitaciones} hab · {property.banos} baños · {property.area} m²
        </p>
      </div>
    </article>
  )
}
