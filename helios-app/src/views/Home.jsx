import { NavLink } from "react-router-dom";
import Map from "../components/Map"; // Importando o componente do mapa
import "./Home.css";

// Dados das fazendas solares
const solarFarms = [
  {
    position: [-23.55052, -46.633308],
    name: "Fazenda Solar de São Paulo",
    price: (Math.random() * (1.00 - 0.50) + 0.50).toFixed(2),
  },
  {
    position: [-22.906847, -43.172896],
    name: "Fazenda Solar do Rio de Janeiro",
    price: (Math.random() * (1.00 - 0.50) + 0.50).toFixed(2),
  },
  {
    position: [-19.916681, -43.934493],
    name: "Fazenda Solar de Belo Horizonte",
    price: (Math.random() * (1.00 - 0.50) + 0.50).toFixed(2),
  },
  {
    position: [-15.794229, -47.882166],
    name: "Fazenda Solar de Brasília",
    price: (Math.random() * (1.00 - 0.50) + 0.50).toFixed(2),
  },
  {
    position: [-25.428954, -49.267137],
    name: "Fazenda Solar de Curitiba",
    price: (Math.random() * (1.00 - 0.50) + 0.50).toFixed(2),
  },
];

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
        <h2>Nossas Fazendas Solares</h2>
        <p>Explore nossas fazendas solares e veja o preço do kWh em tempo real.</p>
        <Map markers={solarFarms} />
      </div>
    </>
  );
}
