import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/perfil', label: 'Perfil' },
  { to: '/mapa', label: 'Mapa' },
  { to: '/contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled ? 'bg-slate-950/95 shadow-soft' : 'bg-slate-900/30'} backdrop-blur-xl`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-xl font-semibold tracking-tight text-brand.gold">
          Norvin García
        </Link>
        <nav className="flex gap-4 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition hover:bg-white/10 ${isActive ? 'bg-white/10 text-brand.gold' : 'text-slate-100'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
