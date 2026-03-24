import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function PropertyCard({ property }) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.01 }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 shadow-soft"
    >
      <img
        src={property.images?.[0] || 'https://placehold.co/800x600'}
        alt={property.titulo}
        loading="lazy"
        className="h-56 w-full object-cover"
      />
      <div className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-widest text-brand.gold">{property.ubicacion}</p>
        <h3 className="text-xl font-semibold">{property.titulo}</h3>
        <p className="text-2xl font-bold text-brand.gold">US$ {Number(property.precio || 0).toLocaleString()}</p>
        <p className="line-clamp-2 text-sm text-slate-300">{property.descripcion}</p>
        <div className="flex gap-3 text-xs text-slate-400">
          <span>{property.habitaciones || 0} hab.</span>
          <span>{property.banos || 0} baños</span>
          <span>{property.tamano || 0} m²</span>
        </div>
        <Link to={`/propiedades/${property.id}`} className="inline-block rounded-xl bg-brand.gold px-4 py-2 text-sm font-semibold text-slate-900">
          Ver detalle
        </Link>
      </div>
    </motion.article>
  )
}
