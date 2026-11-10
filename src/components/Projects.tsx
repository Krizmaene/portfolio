import { useRef, useState } from 'react'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'

function Projects() {
    const scroller = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState<Project | null>(null)

    const scrollBy = (direction: 1 | -1) => {
        const el = scroller.current
        if (!el) return
        el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
    }

    const arrowClass =
        'absolute top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center ' +
        'justify-center rounded-full border border-brand text-white ' +
        'hover:bg-brand md:flex'

    return (
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12 md:py-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                My work
            </p>
            <h2 className="text-3xl font-bold">Projects</h2>

            <div className="relative mt-8 md:px-14">
                <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll left"
                        className={`${arrowClass} left-0`}>
                    ←
                </button>

                <div
                    ref={scroller}
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
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
                    →
                </button>
            </div>

            {/* The key resets the photo counter to 1 whenever a different project opens */}
            {selected && (
                <ProjectModal
                    key={selected.title}
                    project={selected}
                    onClose={() => setSelected(null)}
                />
            )}
        </section>
    )
}

export default Projects