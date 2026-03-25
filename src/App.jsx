import { NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Propiedades from './pages/Propiedades'
import Perfil from './pages/Perfil'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

function NotFound() {
  return (
    <section className="panel center">
      <h2>Página no encontrada</h2>
      <p>La ruta no existe. Regresa al inicio para continuar.</p>
      <NavLink to="/" className="btn-primary">Ir al inicio</NavLink>
    </section>
  )
}
