import { FaGraduationCap, FaCode } from 'react-icons/fa'
import useReveal from '../../hooks/useReveal.js'
import './Education.css'

const TIMELINE = [
  {
    icon: <FaGraduationCap />,
    title: 'B.Sc. Computer Science',
    place: 'Sri Parasakthi College for Women',
    tag: 'Graduate',
  },
  {
    icon: <FaCode />,
    title: ' Python Full Stack Developer',
    place: 'Code Purple Academy',
    tag: 'Fresher — ready for new opportunities',
  },
]

function Education() {
  return (
    <section id="education" className="education">
      <div className="container">
        <div className="education__header">
          <p className="section-kicker">My journey</p>
          <h2 className="section-heading">Education</h2>
        </div>

        <div className="education__timeline">
          {TIMELINE.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  const [ref, visible] = useReveal()
  const direction = index % 2 === 0 ? 'reveal-left' : 'reveal-right'
  const isCurrent = item.tag === 'Current'

  return (
    <div
      ref={ref}
      className={`education__item reveal ${direction} ${visible ? 'reveal-in' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <span className="education__dot">{item.icon}</span>
      <div className={`education__card ${isCurrent ? 'education__card--current' : ''}`}>
        <span className="education__tag">{item.tag}</span>
        <h3 className="education__title">{item.title}</h3>
        <p className="education__place">{item.place}</p>
      </div>
    </div>
  )
}

export default Education
