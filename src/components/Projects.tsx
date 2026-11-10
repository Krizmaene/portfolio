import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                Projects
            </h2>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects