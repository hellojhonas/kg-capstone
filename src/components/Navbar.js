import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/Dashboard" className="nav-brand">KodeGoers</Link>
      <ul>
          <CustomLink to="/Dashboard">Dashboard</CustomLink>
          <CustomLink to="/Attendance">Attendance</CustomLink>
          <CustomLink to="/Exercises">Exercises</CustomLink>
          <CustomLink to="/Notes">Notes</CustomLink>
          <CustomLink to="/Files">Files</CustomLink>
      </ul>
    </nav>
    )
}

function CustomLink({ to, children,...props }) {
  const resolvePath = useResolvedPath(to)
  const isActive = useMatch ({ path: resolvePath.pathname, end: true})
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
        </Link>
    </li>
  )
}