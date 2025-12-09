import { NavLink } from "react-router-dom";
import "./BecomeMember.css";

export default function BecomeMember() {
  return (
    <div className="become-member-page">
      {/* 1. Hero Section */}
      <div className="hero-section">
        <h1>Energia Solar por Assinatura: Reduza sua conta sem instalar painéis.</h1>
        <p>Economia imediata garantida através do modelo de compensação de créditos. Ideal para apartamentos, casas alugadas e pequenos comércios.</p>
        <NavLink to="/calculadora" className="cta-button">
          Simular Minha Economia
        </NavLink>
      </div>

      {/* 2. O Modelo de Negócio */}
      <div className="business-model-section">
        <h2>Como Funciona</h2>
        <div className="steps">
          <div className="step">
            <h3>01. Adesão Digital</h3>
            <p>Você adquire uma assinatura (fração) da nossa usina solar remota compatível com seu consumo médio.</p>
          </div>
          <div className="step">
            <h3>02. Geração Remota</h3>
            <p>Nossos painéis geram energia limpa e injetam diretamente na rede da concessionária.</p>
          </div>
          <div className="step">
            <h3>03. Compensação Automática</h3>
            <p>A energia injetada vira créditos que são abatidos automaticamente na sua conta de luz mensal.</p>
          </div>
        </div>
      </div>

      {/* 3. Diferenciais Técnicos e Financeiros */}
      <div className="differentiators-section">
        <h2>Diferenciais Técnicos e Financeiros</h2>
        <div className="differentiators">
          <div className="differentiator">
            <h4>Zero Investimento (CAPEX)</h4>
            <p>Não há compra de equipamentos, obras no telhado ou custos de manutenção.</p>
          </div>
          <div className="differentiator">
            <h4>Independência</h4>
            <p>Proteção parcial contra bandeiras tarifárias e aumentos inflacionários das distribuidoras.</p>
          </div>
          <div className="differentiator">
            <h4>Flexibilidade Imobiliária</h4>
            <p>A solução atende imóveis alugados e apartamentos sem telhado disponível.</p>
          </div>
          <div className="differentiator">
            <h4>Sustentabilidade Auditável</h4>
            <p>Redução de até 80% na emissão de GEE comparado a fontes fósseis.</p>
          </div>
        </div>
      </div>

      {/* 4. Simulação Financeira */}
      <div className="simulation-section">
        <h2>Simulação Financeira (Prova de Conceito)</h2>
        <div className="simulation">
          <h4>Exemplo Real de Economia:</h4>
          <ul>
            <li>Cenário Atual: Conta de R$ 280,00 (Consumo aprox. 180 kWh).</li>
          </ul>
          <h4>Modelo Cooperativa:</h4>
          <ul>
            <li>Custo Energia Cooperativa (90% do consumo): R$ 113,40.</li>
            <li>Custo Concessionária (Taxa mínima/resíduo): R$ 18,90.</li>
            <li>Taxa Administrativa: R$ 12,90.</li>
            <li>Novo Custo Total: R$ 145,20.</li>
          </ul>
          <p className="result">Resultado: Economia mensal superior a 45% neste cenário.</p>
        </div>
      </div>

      {/* 5. Quem Pode Aderir */}
      <div className="who-can-join-section">
        <h2>Quem Pode Aderir</h2>
        <ul>
          <li>Residências (Próprias ou Alugadas).</li>
          <li>Apartamentos e Condomínios.</li>
          <li>Pequenos Comércios (Padarias, Escritórios, Mercados).</li>
          <li>Consumidores de Baixa e Média Tensão.</li>
        </ul>
      </div>

      {/* 6. FAQ Técnica */}
      <div className="faq-section">
        <h2>FAQ Técnica</h2>
        <div className="faq-item">
          <h4>Preciso trocar meu medidor?</h4>
          <p>Não. O processo é puramente contábil via sistema de compensação da concessionária.</p>
        </div>
        <div className="faq-item">
          <h4>Existe fidelidade?</h4>
          <p>O modelo preza pela adesão simples e transparente, com foco em pagamentos proporcionais ao uso.</p>
        </div>
        <div className="faq-item">
          <h4>Como pago?</h4>
          <p>O cooperado paga uma mensalidade proporcional à fração contratada e taxa de adesão, recebendo o desconto na fatura original.</p>
        </div>
      </div>

      {/* 7. Rodapé / Contato */}
      <div className="footer-section">
        <div className="support">
          <h4>Suporte</h4>
          <p>Atendimento humano via WhatsApp. {/* WhatsApp Icon */}</p>
        </div>
        <div className="transparency">
          <h4>Transparência</h4>
          <p>Acesso a relatórios mensais de geração e economia via App/Web.</p>
        </div>
      </div>
    </div>
  );
}
