import { Rocket, Palette, Target } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Web Design',
    desc: 'Accessible, responsive interfaces that load fast and feel natural on any device.'
  },
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'A clear visual system—logo, color, type—that speaks with confidence and warmth.'
  },
  {
    icon: Target,
    title: 'Digital Strategy',
    desc: 'Focused roadmaps to reach the right people with the right message at the right time.'
  }
]

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] text-center" style={{fontFamily: 'Tschich, Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
        Services
      </h2>
      <p className="mt-3 text-center max-w-2xl mx-auto text-slate-600" style={{fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
        We design with intention and ship with care. Here’s how we can help.
      </p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-[#E1ECFF] bg-white p-6 shadow-[0_1px_0_#EAF1FF] hover:shadow-[0_6px_24px_rgba(0,73,233,0.08)] transition-shadow">
            <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-[#0049E9] to-[#53C2FF] text-white">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-medium text-[#000000]" style={{fontFamily: 'Tschich, Poppins'}}>{title}</h3>
            <p className="mt-2 text-slate-600" style={{fontFamily: 'Poppins'}}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
