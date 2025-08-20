import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-left">
        <h3><b>Kontakt</b></h3>
        <div className="footer-contact">
          <span>📞 0177 2150910</span>
        </div>
        <div className="footer-contact">
          <span>📧 ritarist@googlemail.com</span>
        </div>
      </div>
      <div className="footer-right">
        <Link to="/agb">AGB</Link>
        <Link to="/datenschutz">Datenschutz</Link>
      </div>
    </footer>
  );
}
