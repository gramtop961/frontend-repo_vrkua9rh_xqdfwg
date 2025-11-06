import { motion } from 'framer-motion'

const PivooLogoOutline = () => {
  return (
    <svg viewBox="0 0 200 80" className="w-full max-w-[520px] h-auto">
      <defs>
        <linearGradient id="pivooStroke" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#0049E9" />
          <stop offset="100%" stopColor="#53C2FF" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#pivooStroke)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {/* P shape */}
        <motion.path
          d="M20 15 L20 65 M20 15 H55 C70 15 75 22 75 30 C75 38 68 45 55 45 H20"
          initial={{ pathLength: 0, opacity: 0.8 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        />
        {/* i dot */}
        <motion.circle
          cx="92" cy="20" r="6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, type: 'spring', stiffness: 120 }}
        />
        {/* i stem */}
        <motion.line
          x1="92" y1="30" x2="92" y2="60"
          initial={{ y2: 30, opacity: 0.8 }}
          animate={{ y2: 60, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        />
        {/* double "o"s */}
        <motion.circle
          cx="130" cy="45" r="16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        />
        <motion.circle
          cx="165" cy="45" r="16"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.55, duration: 0.9 }}
        />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#EBF3FF] via-white to-white" />
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#E1ECFF] bg-white/60 px-3 py-1 text-xs md:text-sm text-[#0049E9]">
            <span className="h-2 w-2 rounded-full bg-[#53C2FF]" />
            Pivoo — Modern web agency
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl leading-tight font-semibold text-[#000000]" style={{fontFamily: 'Tschich, Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            We build authentic digital experiences.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-slate-600" style={{fontFamily: 'Poppins, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif'}}>
            Friendly, focused and collaborative. We turn ideas into clear, accessible products that people trust.
          </p>
          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-[#0049E9] text-white px-6 py-3 md:px-8 md:py-4 text-sm md:text-base font-medium shadow-sm hover:bg-[#0a57ff] focus:outline-none focus:ring-2 focus:ring-[#53C2FF]"
          >
            Discover how we can grow together
            <svg className="h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </a>

          <div className="mt-12 w-full flex justify-center">
            <PivooLogoOutline />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0049E9]/10 via-transparent to-transparent" />
    </section>
  )
}
