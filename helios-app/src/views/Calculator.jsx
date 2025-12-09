import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [consumption, setConsumption] = useState("");
  const [cost, setCost] = useState("");
  const [sunlight, setSunlight] = useState("");
  const [savings, setSavings] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cálculo (exemplo simples)
    const monthlySavings = (consumption * cost * sunlight * 0.1).toFixed(2);
    setSavings(monthlySavings);
  };

  return (
    <div className="calculator-page">
      <h1>Calculadora Solar</h1>
      <form className="calculator-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="consumption">Consumo Mensal de Energia (kWh)</label>
          <input
            type="number"
            id="consumption"
            value={consumption}
            onChange={(e) => setConsumption(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cost">Custo da Energia (R$/kWh)</label>
          <input
            type="number"
            id="cost"
            step="0.01"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="sunlight">Horas de Sol por Dia</label>
          <input
            type="number"
            id="sunlight"
            value={sunlight}
            onChange={(e) => setSunlight(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="calculate-button">
          Calcular Economia
        </button>
      </form>
      {savings !== null && (
        <div className="results">
          <h2>Sua economia mensal estimada é:</h2>
          <p>R$ {savings}</p>
        </div>
      )}
    </div>
  );
}
