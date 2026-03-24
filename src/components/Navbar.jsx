import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/propiedades', label: 'Propiedades' },
  { to: '/mapa', label: 'Mapa' },
  { to: '/perfil', label: 'Perfil' },
  { to: '/admin', label: 'Admin' }
]

export default function Navbar() {
  return (
    <header className="navbar-wrap">
      <nav className="navbar">
        <span className="brand">Diamantes Realty Group</span>
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
