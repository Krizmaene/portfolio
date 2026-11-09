import { skillGroups } from '../data/skills'

function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                Skills
            </h2>

            {/* One card per group; 1 column on phones, 2 on larger screens */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {skillGroups.map((group) => (
                    <div
                        key={group.title}
                        className="rounded-xl border border-stone-200 p-5 dark:border-stone-800"
                    >
                        <h3 className="font-semibold text-stone-900 dark:text-stone-50">
                            {group.title}
                        </h3>

                        {/* Each skill is a small tag */}
                        <ul className="mt-4 flex flex-wrap gap-2">
                            {group.items.map((skill) => (
                                <li
                                    key={skill}
                                    className="rounded-full bg-stone-100 px-3 py-1 text-sm text-stone-700 dark:bg-stone-800 dark:text-stone-200"
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