import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import './Footer.css'

const SOCIALS = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:vasunthara@example.com' },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__name">R. Vasunthara</p>
          <p className="footer__role">Full Stack Developer</p>
        </div>

        <div className="footer__socials">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="footer__social-btn"
              aria-label={social.label}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="footer__copy">© 2026 R. Vasunthara. All rights reserved.</p>
    </footer>
  )
}

export default Footer
