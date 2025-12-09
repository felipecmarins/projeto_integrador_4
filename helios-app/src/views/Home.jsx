import { NavLink } from "react-router-dom";
import Map from "../components/Map"; // Importando o componente do mapa
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>Junte-se ao Movimento Solar</h1>
        <p>
          A Helios é uma startup dedicada a tornar a energia solar mais acessível
          e transparente para todos. Explore nossos recursos, calcule sua
          economia e junte-se à nossa comunidade.
        </p>
        <NavLink to="/calculadora" className="cta-button">
          Calcule sua Economia
        </NavLink>
      </div>

      <div className="map-section">
        <h2>Nossa Localização</h2>
        <p>Encontre-nos no mapa abaixo e veja onde estamos transformando o futuro da energia.</p>
        <Map />
      </div>
    </>
  );
}
