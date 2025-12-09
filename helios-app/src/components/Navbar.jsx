import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <NavLink to="/">Helios</NavLink>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/equipe">Equipe</NavLink>
        </li>
        <li>
          <NavLink to="/calculadora">Calculadora</NavLink>
        </li>
        <li>
          <NavLink to="/sejamembro">Seja Membro</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      <NavLink to="/sejaumparceiro" className="cta-button">
        Seja um Parceiro
      </NavLink>
    </nav>
  );
}
