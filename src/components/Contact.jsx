const contactLinks = [
    {
        label: 'Email',
        value: 'krizmaenemagbojos@gmail.com',
        href: 'mailto:krizmaenemagbojos@gmail.com',
    },
    {
        label: 'GitHub',
        value: 'github.com/Krizmaene',
        href: 'https://github.com/Krizmaene',
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/krizmaene-airizh-magbojos',
        href: 'https://www.linkedin.com/in/krizmaene-airizh-magbojos-36874a389',
    },
]

function Contact() {
  return (
    <section id="contact" className="bg-contact min-h-screen pb-16 pt-32">
      <div className="container-x">
        <p className="text-base text-accent">Get in touch</p>
        <h2 className="mt-1 text-4xl font-bold">Contact</h2>

        <p className="mt-4 max-w-3xl text-base">
          I’m looking for an OJT placement in UI/UX design or front-end
          development. Feel free to reach out.
        </p>

        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {contactLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.label === 'Email' ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={`${link.label}: ${link.value}`}
                title={link.value}
                className="group flex h-40 flex-col justify-between rounded-4xl border-[3px]
                           border-brand p-6 transition hover:-translate-y-1
                           hover:border-accent"
              >
                <span className="text-lg font-semibold uppercase text-accent">
                  {link.label}
                </span>
                <span className="text-lg font-medium group-hover:underline">
                  {link.label === 'Email' ? 'Send an email' : 'Open'} →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Contact