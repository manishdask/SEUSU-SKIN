import { Link } from 'react-router-dom'

const steps = [
  { n:'01', phase:'Surface',       depth:'0–5μm',   color:'#A8D1E7',
    desc:'The Hydro-Lock Molecule detects skin pH and temperature upon application. Surface tension begins shifting within milliseconds of contact.' },
  { n:'02', phase:'Activation',    depth:'5–15μm',  color:'#336699',
    desc:'Surface tension reduces by 60%, dissolving the natural resistance of the intercellular lipid matrix. The formula finds pathways through.' },
  { n:'03', phase:'Penetration',   depth:'15–30μm', color:'#8E7CC3',
    desc:'High-performance actives are carried deep into the stratum corneum layers — arriving in under 30 seconds of application.' },
  { n:'04', phase:'Replenishment', depth:'30μm+',   color:'#8FBC8F',
    desc:'Actives anchor to skin proteins, creating permanent structural bonds. This is not temporary moisture — it is cellular repair.' },
]

export default function Science() {
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
            <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">The Science</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight"
            style={{ textShadow:'0 2px 24px rgba(0,0,0,0.4)' }}>
            The Hydro-Lock<br />
            <span className="font-semibold" style={{ color:'#A8D1E7' }}>Molecule.</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-loose font-normal"
            style={{ textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}>
            A proprietary biotech compound engineered to work with your skin's natural chemistry — not against it.
          </p>
        </div>
      </div>

      {/* ── INTRO ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px] bg-[#336699]" />
              <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">How It Works</span>
            </div>
            <p className="text-black/75 text-[15px] leading-loose mb-5">
              Most penetration enhancers work by <strong className="text-black font-semibold">damaging</strong> the skin's
              lipid barrier — essentially burning a hole to let actives through. The results are inflammation,
              sensitisation, and long-term barrier compromise.
            </p>
            <p className="text-black/75 text-[15px] leading-loose mb-5">
              The Hydro-Lock Molecule works differently. It reads the skin's natural pH and temperature,
              then <strong className="text-black font-semibold">reduces its own surface tension</strong> to match the
              intercellular environment — creating a frictionless pathway inward.
            </p>
            <p className="text-black/75 text-[15px] leading-loose mb-8">
              No damage. No inflammation. Just precise, science-backed delivery at the cellular level.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#D2D2D2]/50">
              {[
                { v:'<30s', l:'Absorption'   },
                { v:'60%',  l:'Tension Drop' },
                { v:'5×',   l:'Deeper'       },
              ].map(s => (
                <div key={s.l} className="text-center p-4 border border-[#D2D2D2]/50">
                  <p className="text-3xl font-light text-[#336699] mb-1">{s.v}</p>
                  <p className="text-black/60 text-[9px] tracking-[0.25em] uppercase font-bold">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Depth bars */}
          <div className="space-y-3">
            <p className="text-black/55 text-[10px] tracking-[0.4em] uppercase font-bold mb-6">
              Penetration Depth Model
            </p>
            {steps.map((s) => (
              <div key={s.n} className="flex items-center gap-5">
                <span className="text-black/50 text-[10px] w-14 font-mono shrink-0 font-semibold">{s.depth}</span>
                <div className="flex-1 relative h-12 overflow-hidden rounded-sm" style={{ background:'#f5f7fa' }}>
                  <div className="absolute left-0 top-0 bottom-0 transition-all duration-700"
                    style={{ width:`${parseInt(s.n)*23}%`, background:`linear-gradient(90deg,${s.color}65,${s.color}25)`, borderLeft:`3px solid ${s.color}` }} />
                  <div className="absolute inset-0 flex items-center px-4 gap-3">
                    <span className="text-black/35 text-[9px] font-mono font-bold">{s.n}</span>
                    <span className="text-black/80 text-[11px] tracking-[0.2em] uppercase font-bold">{s.phase}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4-PHASE DETAIL ────────────────────────────── */}
      <section className="py-24" style={{ background:'#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-[2px] bg-[#336699]" />
            <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">4-Phase Penetration</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s) => (
              <div key={s.n}
                className="bg-white border border-[#D2D2D2]/50 p-8 relative overflow-hidden hover:border-[#336699]/40 hover:shadow-lg transition-all duration-300 group">
                <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background:s.color }} />
                <div className="absolute top-5 right-5 w-3 h-3 rounded-full" style={{ background:s.color }} />
                <p className="text-5xl font-light mb-4 transition-colors duration-300 text-[#D2D2D2] group-hover:text-[#336699]">
                  {s.n}
                </p>
                <p className="text-black text-[11px] tracking-[0.2em] uppercase font-bold mb-1">{s.phase}</p>
                <p className="text-[11px] tracking-[0.2em] uppercase font-bold mb-4" style={{ color:s.color }}>{s.depth}</p>
                <p className="text-black/70 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON ────────────────────────────────── */}
      <section className="py-24 bg-white border-t border-[#D2D2D2]/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#336699]" />
                <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">Why It Matters</span>
              </div>
              <h2 className="text-4xl font-light text-black mb-6 leading-tight">
                Standard formulas <span className="text-[#336699] font-semibold">never arrive.</span>
              </h2>
              <p className="text-black/75 text-[15px] leading-loose mb-4">
                The average skincare molecule is 500–1000 daltons. The skin's natural pore size only allows
                passage of molecules under 500 daltons. Most products sit on top — creating the illusion of
                hydration without the substance.
              </p>
              <p className="text-black/75 text-[15px] leading-loose mb-8">
                The Hydro-Lock Molecule doesn't rely on molecular size. It uses pH-responsive surface chemistry
                to <strong className="text-black font-semibold">open intercellular channels</strong> — the same pathways
                the skin uses to regulate its own moisture.
              </p>
              <Link to="/products"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#336699] text-white text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#1a3d5c] transition-colors duration-300">
                See It In Action →
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { label:'Standard Formula',   pct:15, color:'#D2D2D2', desc:'Sits on surface. Evaporates within hours.' },
                { label:'Hydro-Lock System',  pct:92, color:'#336699', desc:'Penetrates to dermis. Permanent replenishment.' },
              ].map((row) => (
                <div key={row.label} className="p-6 border border-[#D2D2D2]/50">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-black/75">{row.label}</span>
                    <span className="text-[11px] font-bold" style={{ color: row.color === '#D2D2D2' ? '#999' : row.color }}>
                      {row.pct}% Effective
                    </span>
                  </div>
                  <div className="h-3 bg-[#f5f7fa] rounded-full overflow-hidden mb-3">
                    <div className="h-full rounded-full" style={{ width:`${row.pct}%`, background:row.color }} />
                  </div>
                  <p className="text-black/55 text-[13px]">{row.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────── */}
      <section className="py-20"
        style={{ background:'linear-gradient(135deg, #0d2137 0%, #1a3d5c 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-[#A8D1E7] text-[10px] tracking-[0.5em] uppercase font-bold mb-2">Ready to try it?</p>
            <h3 className="text-3xl font-light text-white mb-1">See the science in every product.</h3>
            <p className="text-white/65 text-[14px]">Every formulation in our collection uses the Hydro-Lock Molecule.</p>
          </div>
          <Link to="/products"
            className="flex-shrink-0 px-10 py-5 bg-white text-[#336699] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#A8D1E7] hover:text-white transition-all duration-300">
            Explore Products →
          </Link>
        </div>
      </section>
    </div>
  )
}