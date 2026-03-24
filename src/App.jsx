import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Propiedades from './pages/Propiedades'
import PropiedadDetalle from './pages/PropiedadDetalle'
import Perfil from './pages/Perfil'
import Mapa from './pages/Mapa'
import Contacto from './pages/Contacto'
import Login from './pages/Login'
import AdminDashboard from './pages/AdminDashboard'
import AdminPropiedades from './pages/AdminPropiedades'
import AdminPerfil from './pages/AdminPerfil'
import { db } from './services/firebase'

export default function App() {
  const location = useLocation()
  const hideLayout = location.pathname.startsWith('/admin') || location.pathname === '/login'
  console.log('Firebase conectado:', db)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {!hideLayout && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/propiedades" element={<Propiedades />} />
          <Route path="/propiedades/:id" element={<PropiedadDetalle />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/mapa" element={<Mapa />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/propiedades"
            element={
              <ProtectedRoute>
                <AdminPropiedades />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/perfil"
            element={
              <ProtectedRoute>
                <AdminPerfil />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AnimatePresence>
      {!hideLayout && <Footer />}
    </div>
  )
}
