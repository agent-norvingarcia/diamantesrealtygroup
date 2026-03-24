import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginAdmin } from '../services/firebase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await loginAdmin(email, password)
      navigate('/admin')
    } catch {
      setError('Credenciales inválidas')
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded-2xl border border-white/10 bg-slate-900/80 p-8">
        <h1 className="text-3xl font-semibold">Acceso Admin</h1>
        {error && <p className="text-red-400">{error}</p>}
        <input type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2" value={email} onChange={(event) => setEmail(event.target.value)} required />
        <input type="password" placeholder="Contraseña" className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2" value={password} onChange={(event) => setPassword(event.target.value)} required />
        <button className="w-full rounded-xl bg-brand.gold px-4 py-2 font-semibold text-slate-900">Ingresar</button>
      </form>
    </main>
  )
}
