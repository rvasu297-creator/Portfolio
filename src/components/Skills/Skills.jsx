import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaPython } from 'react-icons/fa'
import { SiTailwindcss, SiDjango, SiMysql, SiPostman , SiFirebase } from 'react-icons/si'
import useReveal from '../../hooks/useReveal.js'
import './Skills.css'

const ALL_SKILLS = [
  { name: 'HTML', icon: <FaHtml5 />, color: '#e44d26', bg: '#fdeee9', motion: 'float' },
  { name: 'CSS', icon: <FaCss3Alt />, color: '#264de4', bg: '#eaedfb', motion: 'pulse' },
  { name: 'JavaScript', icon: <FaJs />, color: '#a3820a', bg: '#fdf6df', motion: 'bounce' },
  { name: 'React', icon: <FaReact />, color: '#0f7ea3', bg: '#e6f6fc', motion: 'spin' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#0c7fae', bg: '#e4f6fc', motion: 'float' },
  { name: 'Python', icon: <FaPython />, color: '#3776ab', bg: '#eaf1f7', motion: 'bounce' },
  { name: 'Django', icon: <SiDjango />, color: '#0c4b33', bg: '#e7f0ea', motion: 'float' },
  { name: 'MySQL', icon: <SiMysql />, color: '#00758f', bg: '#e5f2f5', motion: 'pulse' },
  { name: 'Postman', icon: <SiPostman />, color: '#c95322', bg: '#fff0ea', motion: 'float' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFA000', bg: '#fff8e1', motion: 'float' },
]

function Skills() {
  const [ref, visible] = useReveal({ threshold: 0.15 })

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills__header">
          <p className="section-kicker">What I work with</p>
          <h2 className="section-heading">Skills</h2>
        </div>

        <div ref={ref} className="skills__grid">
          {ALL_SKILLS.map((skill, index) => (
            <article
              key={skill.name}
              className={`skill-card ${visible ? 'is-visible' : ''}`}
              style={{
                '--accent': skill.color,
                '--accent-bg': skill.bg,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <div className="skill-card__icon-wrap">
                <span className={`skill-card__icon skill-card__icon--${skill.motion}`}>
                  {skill.icon}
                </span>
              </div>
              <p className="skill-card__name">{skill.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
