import { FaGraduationCap, FaLaptopCode, FaServer, FaMobileAlt } from 'react-icons/fa'
import useReveal from '../../hooks/useReveal.js'
import './About.css'

const HIGHLIGHTS = [
  {
    icon: <FaGraduationCap />,
    title: 'B.Sc Computer Science',
    text: 'Sri Parasakthi College for Women',
  },
  {
    icon: <FaLaptopCode />,
    title: 'Frontend Development',
    text: 'HTML, CSS, React & Tailwind CSS',
  },
  {
    icon: <FaServer />,
    title: 'Backend Development',
    text: 'Python, Django & MySQL',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive Builds',
    text: 'Interfaces that work on every screen',
  },
]

function About() {
  const [textRef, textVisible] = useReveal()
  const [cardRef, cardVisible] = useReveal()

  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div
          ref={textRef}
          className={`about__text reveal reveal-left ${textVisible ? 'reveal-in' : ''}`}
        >
          <p className="section-kicker">Get to know me</p>
          <h2 className="section-heading">About Me</h2>
          <p className="about__paragraph">
          I'm Vasunthara, a Computer Science graduate and a Full Stack Developer. I'm interested in web development and enjoy learning by building projects.
          </p>
          <p className="about__paragraph">
          I have worked with technologies like React, HTML, CSS, Python, Django, and MySQL. I'm still growing my skills and looking for opportunities where I can learn, contribute, and gain real-world experience as a developer.
          </p>
        </div>

        <div
          ref={cardRef}
          className={`about__grid reveal reveal-right ${cardVisible ? 'reveal-in' : ''}`}
        >
          {HIGHLIGHTS.map((item, index) => (
            <div
              className="about__card"
              key={item.title}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <span className="about__card-icon">{item.icon}</span>
              <h3 className="about__card-title">{item.title}</h3>
              <p className="about__card-text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
