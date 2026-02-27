export default function Contact() {
  return (
    <div className="page-enter">

      {/* ── HERO ──────────────────────────────────────── */}
      <div className="relative py-36 overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0d2137 0%, #1a3d5c 40%, #2d6090 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(168,209,231,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,1) 1px,transparent 1px)', backgroundSize:'50px 50px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,209,231,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#A8D1E7]" />
            <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">Contact</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight"
            style={{ textShadow:'0 2px 24px rgba(0,0,0,0.4)' }}>
            Get in<br />
            <span className="font-semibold" style={{ color:'#A8D1E7' }}>touch.</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl font-normal leading-loose"
            style={{ textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}>
            Questions about our formulations, partnership enquiries, or press requests
            — we'd love to hear from you.
          </p>
        </div>
      </div>

      {/* ── FORM + INFO ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">

          {/* Left — company info */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-[#336699]" />
              <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">Our Details</span>
            </div>

            <div className="space-y-0 mb-12">
              {[
                { l:'Company',   v:'Biotech Solutions Private Limited' },
                { l:'Location',  v:'Kathmandu, Nepal' },
                { l:'Enquiries', v:'Brand, Partnership & Press' },
                { l:'Brand',     v:'SEUSU SKIN' },
              ].map(({l,v}) => (
                <div key={l} className="flex gap-8 py-4 border-b border-[#D2D2D2]/40">
                  <span className="text-black/45 text-[10px] tracking-[0.2em] uppercase w-24 shrink-0 font-semibold">{l}</span>
                  <span className="text-black/80 text-[14px] font-normal">{v}</span>
                </div>
              ))}
            </div>

            <div className="p-8 border-l-4 border-[#336699] bg-[#336699]/[0.03]">
              <p className="text-black/70 text-[14px] leading-relaxed">
                SEUSU SKIN is the flagship skincare brand of Biotech Solutions Private Limited,
                a biotech company based in Kathmandu, Nepal focused on science-driven personal
                care formulations.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-10">
              <p className="text-black/45 text-[10px] tracking-[0.4em] uppercase font-semibold mb-4">Follow Us</p>
              <div className="flex flex-wrap gap-3">
                {['Instagram','TikTok','Facebook','LinkedIn'].map(s => (
                  <a key={s} href="#"
                    className="px-4 py-2 border border-[#D2D2D2]/60 text-[10px] font-bold tracking-[0.25em] uppercase text-black/55 hover:border-[#336699] hover:text-[#336699] transition-all duration-300">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-[#336699]" />
              <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">Send a Message</span>
            </div>

            <div className="space-y-5">
              {[
                { l:'Full Name',      p:'Your full name',                              type:'text'  },
                { l:'Email Address',  p:'your@email.com',                              type:'email' },
                { l:'Subject',        p:'Brand enquiry / Press / Partnership / Other', type:'text'  },
              ].map(({l,p,type}) => (
                <div key={l}>
                  <label className="block text-black/60 text-[10px] tracking-[0.3em] uppercase mb-2 font-semibold">{l}</label>
                  <input type={type} placeholder={p}
                    className="w-full border border-[#D2D2D2]/60 px-4 py-3.5 text-[14px] text-black placeholder:text-black/30 focus:outline-none focus:border-[#336699] transition-colors duration-300 bg-white" />
                </div>
              ))}

              <div>
                <label className="block text-black/60 text-[10px] tracking-[0.3em] uppercase mb-2 font-semibold">Message</label>
                <textarea rows={5} placeholder="Tell us what you're looking for..."
                  className="w-full border border-[#D2D2D2]/60 px-4 py-3.5 text-[14px] text-black placeholder:text-black/30 focus:outline-none focus:border-[#336699] transition-colors duration-300 bg-white resize-none" />
              </div>

              <button
                className="w-full py-4 bg-[#336699] text-white text-[11px] tracking-[0.35em] uppercase font-bold hover:bg-[#1a3d5c] transition-all duration-300">
                Send Message
              </button>

              <p className="text-black/35 text-[10px] tracking-[0.2em] text-center">
                We typically respond within 1–2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}