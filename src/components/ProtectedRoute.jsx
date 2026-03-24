import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { watchAuthUser } from '../services/auth'

export default function ProtectedRoute({ children }) {
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    const unsubscribe = watchAuthUser((user) => setStatus(user ? 'ok' : 'blocked'))
    return unsubscribe
  }, [])

  if (status === 'loading') {
    return <p className="flex min-h-screen items-center justify-center">Cargando...</p>
  }

  return status === 'ok' ? children : <Navigate to="/login" replace />
}
