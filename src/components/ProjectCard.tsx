import type { Project } from '../data/projects'

function ProjectCard({ project }: { project: Project }) {
    const { title, description, image, github } = project

    return (
        <article
            className="flex flex-col overflow-hidden rounded-xl border border-stone-200 dark:border-stone-800"
        >
            {image ? (
                <img
                    src={image}
                    alt={`Screenshot of ${title}`}
                    className="h-48 w-full bg-stone-100 object-cover object-top dark:bg-stone-900"
                />
            ) : (
                <div
                    className="flex h-48 w-full items-center justify-center bg-stone-100 text-sm text-stone-500 dark:bg-stone-900 dark:text-stone-400"
                >
                    Screenshot coming soon
                </div>
            )}

            <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-50">
                    {title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
                    {description}
                </p>
                <div className="mt-auto flex gap-3 pt-5">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-lg border border-stone-300 px-4 py-2 text-sm font-medium text-stone-800 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-100 dark:hover:bg-stone-800"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard