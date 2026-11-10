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
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-12 md:py-16">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                Get in touch
            </p>
            <h2 className="text-3xl font-bold">
                Contact
            </h2>

            <p className="mt-4 max-w-2xl leading-relaxed text-white/90">
                I’m looking for an OJT placement in UI/UX design or front-end development. Feel free to reach out.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {contactLinks.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target={link.label === 'Email' ? undefined : '_blank'}
                            rel="noreferrer"
                            className="group block rounded-2xl border border-brand bg-brand/20 p-5 transition hover:-translate-y-1 hover:border-accent"
                        >
                            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                                {link.label}
                            </span>
                            <span className="mt-2 block break-all text-white">
                                {link.label === 'Email' ? 'Send an email →' : 'Open →'}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Contact