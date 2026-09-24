import { useState } from 'react'
import { FaGithub, FaArrowUp } from 'react-icons/fa'
import useReveal from '../../hooks/useReveal.js'
import './Projects.css'

function TodoPreview() {
  return (
    <img
      src="/images/todo-list.png"
      alt="To-Do List project screenshot"
      className="project-row__img"
      loading="lazy"
    />
  )
}

function InstaPreview() {
  return (
    <img
      src="/images/instagram-login.png"
      alt="Instagram login clone project screenshot"
      className="project-row__img"
      loading="lazy"
    />
  )
}

function CakePreview() {
  return (
    <img
      src="/images/cake-shop.png"
      alt="Cake shop project screenshot"
      className="project-row__img"
      loading="lazy"
    />
  )
}

function PortfolioPreview() {
  return (
    <img
      src="/images/portfolio.png"
      alt="Portfolio project screenshot"
      className="project-row__img"
      loading="lazy"
    />
  )
}

const PROJECTS = [
  {
    title: 'Instagram clone',
    description:
      'An Instagram-inspired React experience exploring reusable components across feeds, stories, reels, search and messaging.',
    tech: ['React', 'React Router', 'Components'],
    preview: <InstaPreview />,
    live: 'https://instagram-rho-azure.vercel.app/',
    github: 'https://github.com/rvasu297-creator/Instagram',
  },
  {
    title: 'Cake Shop',
    description:
      'A responsive bakery storefront with product discovery, a practical cart flow, and a warm, detail-led interface.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    preview: <CakePreview />,
    live: 'https://vasucakeshop.netlify.app/',
    github: 'https://github.com/rvasu297-creator/cake_shop',
  },
  {
    title: 'Portfolio',
    description:
      'My own portfolio site — a responsive single-page build with scroll reveal animations, section-based navigation and a custom design system.',
    tech: ['React', 'CSS', 'Vite', 'React Icons'],
    preview: <PortfolioPreview />,
    live: 'https://vasuuportfolio.netlify.app/',
    github: 'https://github.com/rvasu297-creator/Portfolio',
  },
  {
    title: 'To-Do List',
    description:
      'A simple and responsive task manager for organising daily tasks — add, complete and clear work in one clean flow.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    preview: <TodoPreview />,
    live: 'https://vasuto-do-list.netlify.app/',
    github: 'https://github.com/rvasu297-creator/To-do-list',
  },
]

function ProjectRow({ project, index, active, onSelect }) {
  const [ref, visible] = useReveal({ threshold: 0.12 })
  const num = String(index + 1).padStart(2, '0')

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect()
    }
  }

  return (
    <article
      ref={ref}
      role="button"
      tabIndex={0}
      aria-pressed={active}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      className={`project-row ${index % 2 === 1 ? 'project-row--flip' : ''} ${
        active ? 'project-row--active' : ''
      } reveal reveal-up ${visible ? 'reveal-in' : ''}`}
      style={{ transitionDelay: `${index * 130}ms` }}
    >
      <div className="project-row__media">
        {project.label && <span className="project-row__label">{project.label}</span>}
        {project.preview}
      </div>

      <div className="project-row__body">
        <div className="project-row__index">
          <span>{num}</span>
          <span className="project-row__index-line" />
        </div>

        <h3 className="project-row__title">{project.title}</h3>
        <p className="project-row__desc">{project.description}</p>

        <div className="project-row__tags">
          {project.tech.map((tech) => (
            <span className="project-row__tag" key={tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className="project-row__actions">
          
            <a href={project.live}
            className="project-row__study"
            onClick={(event) => event.stopPropagation()}
          >
            Live <FaArrowUp className="project-row__study-arrow" />
          </a>
          
            <a href={project.github}
            className="project-row__icon-btn"
            aria-label={`${project.title} GitHub repository`}
            onClick={(event) => event.stopPropagation()}
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="projects__header">
          <p className="section-kicker">Selected work</p>
          <h2 className="section-heading">Projects in focus</h2>
        </div>

        <div className="projects__list">
          {PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={index}
              active={activeIndex === index}
              onSelect={() => setActiveIndex((prev) => (prev === index ? null : index))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects