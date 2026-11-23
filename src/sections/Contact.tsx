import { BriefcaseBusiness, CodeXml, Mail, Phone } from 'lucide-react';
import { links } from '../config/links';

export function Contact() {
  return (
    <footer id="contato" className="contact-section hebbia-footer">
      <div className="container footer-container">
        <div className="footer-top">
          <h2 className="footer-title">Entre em contato</h2>
          <div className="contact-links-row">
            <a className="contact-link" href={links.email}>
              <Mail aria-hidden="true" size={20} strokeWidth={1.75} />
              <span>matheus.galdino.souza@ccc.ufcg.edu.br</span>
            </a>
            <a className="contact-link" href={links.phone}>
              <Phone aria-hidden="true" size={20} strokeWidth={1.75} />
              <span>(83) 9 9162-3789</span>
            </a>
            <a className="contact-link" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              <BriefcaseBusiness aria-hidden="true" size={20} strokeWidth={1.75} />
              <span>LinkedIn</span>
            </a>
            <a className="contact-link" href={links.github} target="_blank" rel="noopener noreferrer">
              <CodeXml aria-hidden="true" size={20} strokeWidth={1.75} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="footer-watermark-wrap" aria-hidden="true">
          <svg className="footer-watermark" viewBox="0 0 1000 130" role="presentation">
            <text x="0" y="100" textLength="1000" lengthAdjust="spacingAndGlyphs">MATHEUS GALDINO</text>
          </svg>
        </div>

        <div className="footer-bottom-bar">
          <small>© {new Date().getFullYear()} Matheus Galdino de Souza</small>
        </div>
      </div>
    </footer>
  );
}
