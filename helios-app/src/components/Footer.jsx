import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Helios</div>
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">Sobre Nós</a>
          <a href="/services">Serviços</a>
          <a href="/contact">Contato</a>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Helios. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
