import { NavLink, Route, Routes } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Propiedades from './pages/Propiedades'
import Mapa from './pages/Mapa'
import Perfil from './pages/Perfil'
import Admin from './pages/Admin'

const transition = { duration: 0.35, ease: 'easeInOut' }

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={transition}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
            <Route path="/propiedades" element={<AnimatedPage><Propiedades /></AnimatedPage>} />
            <Route path="/mapa" element={<AnimatedPage><Mapa /></AnimatedPage>} />
            <Route path="/perfil" element={<AnimatedPage><Perfil /></AnimatedPage>} />
            <Route path="/admin" element={<AnimatedPage><Admin /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
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
