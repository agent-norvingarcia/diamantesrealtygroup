import { Link, useNavigate } from 'react-router-dom'
import { logoutAdmin } from '../services/firebase'

export default function AdminDashboard() {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logoutAdmin()
    navigate('/login')
  }

  return (
    <main className="section-wrap pt-16">
      <h1 className="mb-6 text-4xl font-semibold">Panel de Administración</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Link className="rounded-2xl border border-white/10 bg-slate-900/60 p-6" to="/admin/propiedades">Gestionar propiedades</Link>
        <Link className="rounded-2xl border border-white/10 bg-slate-900/60 p-6" to="/admin/perfil">Gestionar perfil</Link>
        <button className="rounded-2xl border border-red-400/20 bg-red-500/10 p-6 text-left text-red-200" onClick={handleLogout}>Cerrar sesión</button>
      </div>
    </main>
  )
}
