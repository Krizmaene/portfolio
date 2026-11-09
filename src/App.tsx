import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useTheme } from './hooks/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="min-h-screen bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <section id="about" className="mx-auto min-h-[70vh] max-w-5xl scroll-mt-20 px-6 py-20">
          <h2 className="text-2xl font-bold">About</h2>
        </section>
        <section id="about" className="mx-auto min-h-[70vh] max-w-5xl scroll-mt-20 px-6 py-20">
          <h2 className="text-2xl font-bold">Skills</h2>
        </section>
        <section id="about" className="mx-auto min-h-[70vh] max-w-5xl scroll-mt-20 px-6 py-20">
          <h2 className="text-2xl font-bold">Projects</h2>
        </section>
        <section id="about" className="mx-auto min-h-[70vh] max-w-5xl scroll-mt-20 px-6 py-20">
          <h2 className="text-2xl font-bold">Contact</h2>
        </section>
      </main>
    </div>
  )
}

export default App