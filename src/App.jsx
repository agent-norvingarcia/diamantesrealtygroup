import { NavLink, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Propiedades from './pages/Propiedades'
import Mapa from './pages/Mapa'
import Perfil from './pages/Perfil'
import Admin from './pages/Admin'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/admin" element={<Admin />} />
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
