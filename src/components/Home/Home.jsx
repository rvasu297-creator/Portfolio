import useReveal from '../../hooks/useReveal.js'
import './Home.css'

function Home() {
  const [ref, visible] = useReveal()

  return (
    <section id="home" className="home">
      <div ref={ref} className={`home__inner reveal reveal-up ${visible ? 'reveal-in' : ''}`}>
        <div className="home__right">
          <p className="home__eyebrow">I am Vasunthara</p>
          <h1 className="home__title">
            <span className="home__title-line home__title-line--top">
              <span className="home__title-fresher">FRESHER</span>{' '}
              <span className="home__title-full">FULL</span>{' '}
              <span className="home__title-stack">STACK</span>
            </span>
            <span className="home__title-dev">DEVELOPER</span>
          </h1>
          <p className="home__intro">
            I'm a Full Stack Developer based in Coimbatore, India. I build clean, responsive
            web applications and I'm always excited to take on new opportunities and
            collaborate on interesting projects.
          </p>
          <div className="home__actions">
            <a href="#contact" className="home__cta">
              Hire Me
            </a>
            <a href="/resume.pdf" className="home__cta home__cta--outline" download>
              Download Resume
            </a>
          </div>
        </div>

        <div className="home__left">
          <div className="home__photo-wrap">
            <img src="/images/photo.png" alt="Vasunthara" className="home__photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
