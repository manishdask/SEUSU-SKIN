import { Link } from 'react-router-dom'

export default function Story() {
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
            <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">Our Story</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight mb-6"
            style={{ textShadow:'0 2px 24px rgba(0,0,0,0.4)' }}>
            Solving the<br />
            <span className="font-semibold" style={{ color:'#A8D1E7' }}>Evaporation Gap.</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-loose font-normal"
            style={{ textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}>
            Most skincare products never reach where they need to go. SEUSU SKIN was built to change that permanently.
          </p>
        </div>
      </div>

      {/* ── CONTENT ───────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">
          <div className="grid gap-16">

            {/* The Problem */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#336699]" />
                <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">The Problem</span>
              </div>
              <h2 className="text-4xl font-light text-black mb-6">
                Most skincare <span className="font-semibold text-[#336699]">evaporates</span> before it works.
              </h2>
              <p className="text-black/75 text-[15px] leading-loose mb-4">
                The molecules in most skincare products are too large to penetrate the skin's natural barrier.
                They sit on the surface, create a temporary sensation of moisture, then evaporate —
                taking your money with them.
              </p>
              <p className="text-black/75 text-[15px] leading-loose">
                This is the <strong className="text-black font-semibold">Evaporation Gap</strong>. The distance between what
                a product promises and what the skin actually absorbs. It's been the dirty secret of the skincare
                industry for decades.
              </p>
            </div>

            {/* Pull quote */}
            <div className="border-l-4 border-[#336699] pl-8 py-4 bg-[#336699]/[0.025]">
              <p className="text-2xl font-light text-black/90 leading-relaxed italic">
                "The skin is not a wall. It is a gateway. Our job is to learn its language,
                speak it precisely, and carry what matters through."
              </p>
              <p className="text-black/45 text-[10px] tracking-[0.3em] uppercase mt-4 font-bold">
                — SEUSU SKIN Founding Principle
              </p>
            </div>

            {/* The Solution */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#336699]" />
                <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">The Solution</span>
              </div>
              <h2 className="text-4xl font-light text-black mb-6">
                The <span className="font-semibold text-[#336699]">Hydro-Lock Molecule.</span>
              </h2>
              <p className="text-black/75 text-[15px] leading-loose mb-4">
                By utilizing a proprietary <strong className="text-black font-semibold">Hydro-Lock Molecule</strong>,
                our products change their physical surface tension upon contact with skin.
              </p>
              <p className="text-black/75 text-[15px] leading-loose mb-4">
                This allows the formula to move from the surface into the deeper layers of the stratum corneum
                in under <strong className="text-black font-semibold">30 seconds</strong>. It is not just moisture —
                it is a permanent structural replenishment.
              </p>
              <p className="text-black/75 text-[15px] leading-loose">
                Founded by <strong className="text-black font-semibold">Biotech Solutions Private Limited</strong> in
                Kathmandu, SEUSU SKIN combines K-Beauty methodology with cutting-edge biotech research to
                deliver actives where they actually work.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 py-10 border-t border-b border-[#D2D2D2]/50">
              {[
                { v:'<30s', l:'Absorption time'   },
                { v:'100%', l:'Paraben free'        },
                { v:'5×',   l:'Deeper penetration'  },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-5xl font-light text-[#336699] mb-2">{s.v}</p>
                  <p className="text-black/60 text-[10px] tracking-[0.25em] uppercase font-bold">{s.l}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to="/science"
                className="px-8 py-4 bg-[#336699] text-white text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#1a3d5c] transition-all duration-300">
                Explore the Science →
              </Link>
              <Link to="/products"
                className="px-8 py-4 border-2 border-[#D2D2D2] text-black text-[11px] tracking-[0.25em] uppercase font-bold hover:border-[#336699] hover:text-[#336699] transition-all duration-300">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}