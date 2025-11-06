export default function About() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000000]" style={{fontFamily: 'Tschich, Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            Who we are
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed" style={{fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            We believe in the simplicity that connects. Clarity over clutter. Collaboration over ego. Trust that grows with every delivery.
          </p>
          <p className="mt-3 text-slate-600 leading-relaxed" style={{fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            Our process is transparent and human. We listen carefully, prototype early, and iterate with you until the result feels effortless.
          </p>
        </div>
        <div className="rounded-2xl p-6 bg-gradient-to-br from-[#E7F1FF] to-white border border-[#E1ECFF]">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#0049E9]" />
              <p className="text-slate-700"><span className="font-medium text-[#000000]">Clarity:</span> plain language and purposeful design.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#0049E9]" />
              <p className="text-slate-700"><span className="font-medium text-[#000000]">Collaboration:</span> we shape the work together.</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#0049E9]" />
              <p className="text-slate-700"><span className="font-medium text-[#000000]">Trust:</span> reliable delivery, continuous care.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
