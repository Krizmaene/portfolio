import { useEffect, useState } from 'react'

const links = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)   // mobile menu
  const [active, setActive] = useState('')  // section currently on screen

  // Watches the sections; the one crossing the middle of the screen becomes "active"
  useEffect(() => {
    const ids = ['home', ...links.map((l) => l.id)]
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id === 'home' ? '' : entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const linkClass = (id) =>
    `font-semibold transition-colors hover:text-accent ${
      active === id ? 'text-accent' : 'text-white'
    }`

  return (
    // Fixed at the top, slightly see-through so each section's gradient shows behind it
    <header className="fixed inset-x-0 top-0 z-50 bg-black/20 backdrop-blur-md">
      <nav className="container-x flex items-center justify-between py-5">
        <a href="#home" className="text-2xl font-medium text-white">
          Krizmaene
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={`${linkClass(link.id)} text-sm`}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="rounded-full border-2 border-brand px-4 py-1 text-sm font-medium md:hidden"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </nav>

      {/* Mobile links */}
      {open && (
        <ul className="container-x flex flex-col gap-4 border-t border-brand py-5 md:hidden">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}

export default Navbar