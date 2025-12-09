import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [consumption, setConsumption] = useState("");
  const [fraction, setFraction] = useState("");
  const [savings, setSavings] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de cálculo simplificada com custo fixo de R$ 1.00/kWh
    const monthlySavings = (consumption * 1 * fraction ).toFixed(2);
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
          <label htmlFor="fraction">Fração do Consórcio</label>
          <input
            type="number"
            id="fraction"
            step="0.01"
            value={fraction}
            onChange={(e) => setFraction(e.target.value)}
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
