import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Arrow({ direction }) {
  return (
    <svg
      viewBox="0 0 48 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-8 w-14 ${direction === 'right' ? 'rotate-180' : ''}`}
    >
      <path d="M46 12H3M13 2 3 12l10 10" />
    </svg>
  )
}

function Projects() {
  const scroller = useRef(null)
  const [selected, setSelected] = useState(null) // project whose viewer is open

  // Scroll the row left or right by most of its visible width
  const scrollBy = (direction) => {
    const el = scroller.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  const arrowClass =
    'absolute top-1/2 z-10 hidden -translate-y-1/2 text-brand transition-colors ' +
    'hover:text-accent md:block'

  return (
    <section id="projects" className="bg-projects min-h-screen pb-16 pt-32">
      <div className="container-x">
        <p className="text-base text-accent">My Work</p>
        <h2 className="mt-1 text-4xl font-bold">Projects</h2>

        {/* Arrows sit on the sides on larger screens; on phones you just swipe */}
        <div className="relative mt-10 md:px-20">
          <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll left"
                  className={`${arrowClass} left-0`}>
            <Arrow direction="left" />
          </button>

          <div
            ref={scroller}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 pt-2
                       scrollbar-none [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                onOpen={() => setSelected(project)}
              />
            ))}
          </div>

          <button type="button" onClick={() => scrollBy(1)} aria-label="Scroll right"
                  className={`${arrowClass} right-0`}>
            <Arrow direction="right" />
          </button>
        </div>

        {selected && (
          <ProjectModal
            key={selected.title}
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </div>
    </section>
  )
}

export default Projects