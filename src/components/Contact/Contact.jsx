import { useState } from 'react'
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa'
import useReveal from '../../hooks/useReveal.js'
import './Contact.css'

const SOCIALS = [
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/' },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://linkedin.com/' },
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:rvasu297@gmail.com' },
]

function Contact() {
  const [ref, visible] = useReveal()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData(function (prev) {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus('sent')
    setFormData({ name: '', email: '', subject: '', message: '' })
    setTimeout(function () {
      setStatus('idle')
    }, 4000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div ref={ref} className={`contact__panel reveal reveal-up ${visible ? 'reveal-in' : ''}`}>
          <div className="contact__top">
            <h2 className="contact__title">
              Contact Me<span className="contact__title-bar">|</span>
            </h2>

            <div className="contact__details">
              <div className="contact__detail-item">
                <span className="contact__detail-icon">
                  <FaMapMarkerAlt />
                </span>
                <p>
                  <strong>Address :</strong> Coimbatore, Tamil Nadu, India
                </p>
              </div>

              <div className="contact__detail-item">
                <span className="contact__detail-icon">
                  <FaPhoneAlt />
                </span>
                <p>
                  <strong>Phone :</strong> +91 7695987854
                </p>
              </div>

              <div className="contact__detail-item">
                <span className="contact__detail-icon">
                  <FaEnvelope />
                </span>
                <p>
                  <strong>E-Mail :</strong>{' '}
                  <a href="mailto:rvasu297@gmail.com">rvasu297@gmail.com</a>
                </p>
              </div>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-left">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your e-mail address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <button type="submit" className="contact__submit">
                {status === 'sent' ? 'Sent!' : 'Send!'} <FaPaperPlane />
              </button>
            </div>

            <div className="contact__form-right">
              <textarea
                name="message"
                placeholder="Type here your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
          </form>

          <div className="contact__socials">
            {SOCIALS.map(function (social) {
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="contact__social-btn"
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.icon}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact