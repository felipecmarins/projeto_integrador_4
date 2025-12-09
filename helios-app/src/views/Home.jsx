import { NavLink } from "react-router-dom";
import Map from "../components/Map"; // Importando o componente do mapa
import "./Home.css";

// Função para gerar coordenadas aleatórias próximas a um ponto
const generateRandomPoints = (center, count, radius) => {
  const points = [];
  for (let i = 0; i < count; i++) {
    const lat = center[0] + (Math.random() - 0.5) * radius;
    const lng = center[1] + (Math.random() - 0.5) * radius;
    points.push({
      position: [lat, lng],
      name: `Unidade Solar SP-${i + 1}`,
      price: (Math.random() * (1.00 - 0.50) + 0.50).toFixed(2),
    });
  }
  return points;
};

// Coordenadas de São Paulo
const saoPauloCenter = [-23.55052, -46.633308];

// Gerar 30 pins aleatórios em São Paulo (raio de aprox. 0.2 graus)
const saoPauloPoints = generateRandomPoints(saoPauloCenter, 30, 0.2);

// Dados das fazendas solares (Principais capitais + Pontos de SP)
const solarFarms = [
  ...saoPauloPoints,
  {
    position: [-23.55052, -46.633308],
    name: "Matriz Helios São Paulo",
    price: "0.65",
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
