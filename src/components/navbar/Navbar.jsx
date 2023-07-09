import styles from "./Navbar.module.css"

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return <nav className={styles.navbar}>
    <NavLink to="/" className={styles.brand}>
        Moto<span>verse</span>
    </NavLink>
    <ul className={styles.links_list}>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastro</NavLink>
        </li>
    </ul>
  </nav>
}

export default Navbar