import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/perfil', label: 'Perfil' }
]

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <span className="brand">Norvin García · Agente Inmobiliario</span>
        <div className="nav-links">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  )
}
