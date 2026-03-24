import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero panel">
      <p className="eyebrow">Inmobiliaria Premium</p>
      <h1>Encuentra propiedades exclusivas con asesoría profesional.</h1>
      <p>
        Compra, vende o renta con un equipo experto. Plataforma conectada con Firebase para gestión ágil de inventario.
      </p>
      <div className="hero-actions">
        <Link to="/propiedades" className="btn-primary">Ver propiedades</Link>
        <Link to="/perfil" className="btn-secondary">Conoce al agente</Link>
      </div>
    </section>
  )
}
