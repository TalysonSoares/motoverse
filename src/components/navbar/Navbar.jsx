import { NavLink } from "react-router-dom"

const Navbar = () => {
  return <nav>
    <NavLink to="/">
        Moto<span>verse</span>
    </NavLink>
    <ul>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
    </ul>
  </nav>
}

export default Navbar