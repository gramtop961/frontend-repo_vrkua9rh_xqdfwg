export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#F3F8FF] via-white to-white" />
      <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24">
        <div className="rounded-3xl border border-[#E1ECFF] bg-white p-8 md:p-10 shadow-[0_1px_0_#EAF1FF]">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#000000] text-center" style={{fontFamily: 'Tschich, Poppins'}}>Write to us — we’ll reply soon.</h2>
          <p className="mt-3 text-center text-slate-600" style={{fontFamily: 'Poppins'}}>
            Tell us a little about your project and how we can help.
          </p>
          <form className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" placeholder="Your name" className="rounded-xl border border-[#E1ECFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#53C2FF]" />
              <input type="email" placeholder="Email" className="rounded-xl border border-[#E1ECFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#53C2FF]" />
            </div>
            <input type="text" placeholder="Company (optional)" className="rounded-xl border border-[#E1ECFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#53C2FF]" />
            <textarea placeholder="What would you like to build?" rows="5" className="rounded-xl border border-[#E1ECFF] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#53C2FF]"></textarea>
            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-slate-600 text-sm">
                <input type="checkbox" className="rounded border-[#E1ECFF]" />
                I agree to the privacy policy.
              </label>
              <button type="submit" className="rounded-full bg-[#0049E9] text-white px-6 py-3 font-medium hover:bg-[#0a57ff] focus:outline-none focus:ring-2 focus:ring-[#53C2FF]">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
