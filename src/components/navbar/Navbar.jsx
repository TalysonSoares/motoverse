import styles from "./Navbar.module.css"

import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

import { useAuthValue } from "../../context/AuthContext";

const Navbar = () => {
  const [isAdmin, setIsAdmin] = useState(false)
  const { user } = useAuthValue();
  const {logout} = useAuthentication();

  useEffect(() => {
    if (user && user.uid === "r1BWzRIjVJX0NMyLtEMpIcufXq13") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  return <nav className={styles.navbar}>
    <NavLink to="/" className={styles.brandLogo}>
        Moto<span>verse</span>
    </NavLink>
    <ul className={styles.links_list}>
        <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login" className={({ isActive }) => (isActive ? styles.active : "")}>Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink>
            </li>
          </>
        )}
        {isAdmin && (
          <>
            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/products/create" className={({ isActive }) => (isActive ? styles.active : "")}>Adicionar</NavLink>
            </li>
          </>
        )}
        {user && (
          <li>
            <button onClick={logout}>Sair</button>
          </li>
        )}
    </ul>
  </nav>
}

export default Navbar