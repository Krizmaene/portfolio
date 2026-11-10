import { skillGroups } from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12 md:py-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                Whay I work with
            </p>
            <h2 className="text-3xl font-bold">
                Skills
            </h2>

            {/* One card per group; 1 column on phones, 2 on larger screens */}
            <div className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <div key={group.title}>
                        <h3 className="text-lg font-semibold">
                            {group.title}
                        </h3>

                        {/* Each skill is a small tag */}
                        <ul className="mt-4 flex flex-wrap gap-3">
                            {group.items.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full bg-brand px-4 py-1.5 text-sm text-white"
                                >
                                    {skill}
                                </li>    
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills