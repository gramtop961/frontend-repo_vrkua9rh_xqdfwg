import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-[#EAF1FF]">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#0049E9] to-[#53C2FF]" />
          <span className="font-medium text-[#000000]" style={{fontFamily: 'Poppins'}}>Pivoo</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm" style={{fontFamily: 'Poppins'}}>
          <a href="#about" className="text-slate-700 hover:text-[#0049E9]">About</a>
          <a href="#services" className="text-slate-700 hover:text-[#0049E9]">Services</a>
          <a href="#work" className="text-slate-700 hover:text-[#0049E9]">Portfolio</a>
          <a href="#contact" className="text-slate-700 hover:text-[#0049E9]">Contact</a>
        </nav>
        <a href="#contact" className="hidden md:inline-flex rounded-full bg-[#000000] text-white px-4 py-2 text-sm" style={{fontFamily: 'Poppins'}}>Let’s talk</a>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-[#EAF1FF]">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-sm" style={{fontFamily: 'Poppins'}}>
          © {new Date().getFullYear()} Pivoo. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm" style={{fontFamily: 'Poppins'}}>
          <a href="#" className="text-slate-600 hover:text-[#0049E9]">Privacy</a>
          <a href="#" className="text-slate-600 hover:text-[#0049E9]">Imprint</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div id="top" className="min-h-screen bg-white">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
