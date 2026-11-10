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
        <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-50">
                Contact
            </h2>

            <p className="mt-4 max-w-2xl text-stone-600 dark:text-stone-300">
                I’m looking for an OJT placement in UI/UX design or front-end development. Feel free to reach out.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                {contactLinks.map((link) => (
                    <li key={link.label}>
                        <a
                            href={link.href}
                            target={link.label === 'Email' ? undefined : '_blank'}
                            rel="noreferrer"
                            className="block rounded-xl border border-stone-200 p-5 hover:border-amber-700 dark:border-stone-800 dark:hover:border-amber-400"
                        >
                            <span className="block text-sm font-medium text-stone-500 dark:text-stone-400">
                                {link.label}
                            </span>
                            <span className="mt-1 block break-all text-stone-900 dark:text-stone-50">
                                {link.value}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Contact