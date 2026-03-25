import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="hero panel">
      <p className="eyebrow">Diamantes Realty Group</p>
      <h1>Tu próximo hogar comienza con una asesoría confiable.</h1>
      <p>
        Descubre oportunidades inmobiliarias destacadas en Nicaragua con acompañamiento personalizado de
        Norvin García.
      </p>
      <div className="hero-actions">
        <Link to="/propiedades" className="btn-primary">Explorar propiedades</Link>
        <Link to="/perfil" className="btn-secondary">Ver perfil</Link>
      </div>
    </section>
  )
}
