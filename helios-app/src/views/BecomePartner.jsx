import { useState } from "react";
import "./BecomePartner.css";

export default function BecomePartner() {
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para se tornar parceiro
    console.log("Novo parceiro em potencial:", {
      companyName,
      contactName,
      email,
      phone,
      message,
    });
  };

  return (
    <div className="become-partner-page">
      <h1>Seja um Parceiro</h1>
      <form className="become-partner-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="companyName">Nome da Empresa</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactName">Nome do Contato</label>
          <input
            type="text"
            id="contactName"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensagem</label>
          <textarea
            id="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="become-partner-button">
          Enviar Proposta
        </button>
      </form>
    </div>
  );
}
