export default function Portfolio() {
  const items = [
    { id: 1, title: 'Horizon Labs', img: 'https://images.unsplash.com/photo-1529336953121-a9b47b7f7c72?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, title: 'Northwind', img: 'https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, title: 'Kindred', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, title: 'Lumen', img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000000]" style={{fontFamily: 'Tschich, Poppins'}}>
            Selected work
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl" style={{fontFamily: 'Poppins'}}>
            A minimal showcase. Clean canvases, brand gradients, and thoughtful motion.
          </p>
        </div>
        <a href="#contact" className="hidden md:inline-flex text-[#0049E9] hover:underline" style={{fontFamily: 'Poppins'}}>Start a project →</a>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(item => (
          <div key={item.id} className="group rounded-2xl overflow-hidden border border-[#E1ECFF] bg-white">
            <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#0049E9]/10 to-[#53C2FF]/10">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-[#000000] font-medium" style={{fontFamily: 'Poppins'}}>{item.title}</h3>
              <span className="text-[#0049E9] group-hover:translate-x-0.5 transition-transform">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
