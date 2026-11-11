import { skillGroups } from '../data/skills'

// Tags alternate between filled and outlined, like the Figma.
// Both have a 3px border so they stay the same size.
const tagClass = (i) =>
  i % 2 === 0 ? 'border-[3px] border-brand bg-brand' : 'border-[3px] border-brand'

function Skills() {
  return (
    <section id="skills" className="bg-skills min-h-screen pb-16 pt-32 xl:pt-44">
      <div className="container-x">
        <p className="text-base text-accent xl:text-2xl">What I work with</p>
        <h2 className="mt-1 text-4xl font-bold xl:text-6xl">Skills</h2>

        {/* First group takes the full row; the other three share the next row */}
        <div className="mt-8 grid gap-x-16 gap-y-10 lg:grid-cols-3 xl:mt-12">
          {skillGroups.map((group, g) => (
            <div key={group.title} className={g === 0 ? 'lg:col-span-3' : ''}>
              <h3 className="text-xl font-medium xl:text-3xl">{group.title}</h3>

              {group.logos ? (
                <ul className="mt-5 flex flex-wrap items-center gap-6 xl:gap-8">
                  {group.logos.map((logo) => (
                    <li key={logo.name}>
                      <img
                        src={logo.src}
                        alt={logo.name}
                        title={logo.name}
                        className={`h-14 w-14 object-contain xl:h-24 xl:w-24 ${
                          logo.white ? 'brightness-0 invert' : ''
                        }`}
                      />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="mt-5 flex flex-wrap gap-3 xl:gap-5">
                  {group.items.map((skill, i) => (
                    <li
                      key={skill}
                      className={`rounded-full px-5 py-2 text-base xl:px-8 xl:py-4 xl:text-2xl ${tagClass(i)}`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills