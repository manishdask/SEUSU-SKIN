export default function Philosophy() {
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
            <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">Philosophy</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight"
            style={{ textShadow:'0 2px 24px rgba(0,0,0,0.4)' }}>
            Science doesn't<br />
            <span className="font-semibold" style={{ color:'#A8D1E7' }}>compromise.</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-loose font-normal"
            style={{ textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}>
            Our founding principles define every decision — from formulation to packaging to who we are.
          </p>
        </div>
      </div>

      {/* ── PRINCIPLES ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-0 border border-[#D2D2D2]/50 divide-y lg:divide-y-0 lg:divide-x divide-[#D2D2D2]/50">
            {[
              {
                icon:'◈', title:'K-Beauty Science',
                desc:'Rooted in Korean skincare methodology — rigorous formulation, minimal irritation, maximum results. We study the best of Seoul\'s dermatology labs and build on top of it.',
                detail:'K-Beauty is not a trend for us. It is a scientific framework. The 10-step philosophy isn\'t about product quantity — it\'s about layered, precise delivery of actives. SEUSU SKIN compresses that science into fewer, more powerful products.'
              },
              {
                icon:'◎', title:'Derma-Level Efficacy',
                desc:'Every formula penetrates beyond the epidermis, delivering actives where they create real, measurable change at the cellular level.',
                detail:'Cosmetic efficacy claims are often surface-level — literally. We hold ourselves to a higher standard: does the active reach the dermis? Does it change a measurable biomarker? If the answer isn\'t yes, the formula isn\'t finished.'
              },
              {
                icon:'◇', title:'Zero Compromise',
                desc:'Paraben-free. Fragrance-free. No fillers. No marketing actives at concentrations too low to work. Just bioactive compounds designed with precision.',
                detail:'Industry-standard concentrations are often set for cost, not efficacy. We set ours based on clinical literature. If an active requires 5% to work, we use 5%. If fragrance would compromise the barrier, it\'s out.'
              },
              {
                icon:'◉', title:'Science First',
                desc:'We don\'t market a feeling. We prove a mechanism. Every product claim is backed by penetration studies and verifiable dermatological data.',
                detail:'The skincare industry has a trust problem. Vague terms like "nourishing" or "rejuvenating" fill labels where data should be. We refuse this. Every SEUSU SKIN claim points to a mechanism, a study, or a measurable outcome.'
              },
            ].map((v, i) => (
              <div key={i}
                className="p-10 hover:bg-[#336699]/[0.025] transition-colors duration-300 group">
                <div className="text-3xl text-[#D2D2D2] group-hover:text-[#336699] transition-colors duration-300 mb-6">
                  {v.icon}
                </div>
                <h3 className="text-xl font-semibold text-black tracking-[0.1em] uppercase mb-3">{v.title}</h3>
                <p className="text-black/75 text-[15px] leading-loose mb-4">{v.desc}</p>
                <p className="text-black/50 text-[13px] leading-relaxed border-t border-[#D2D2D2]/40 pt-4">{v.detail}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="mt-16 border-l-4 border-[#336699] pl-10 py-6 bg-[#336699]/[0.02]">
            <p className="text-3xl lg:text-4xl font-light text-black/85 leading-relaxed">
              "The skin is not a wall. It is a gateway. Our job is to learn its language,
              speak it precisely, and carry what matters through."
            </p>
            <p className="text-black/40 text-[10px] tracking-[0.35em] uppercase mt-6 font-bold">
              — SEUSU SKIN Founding Principle · Biotech Solutions Pvt. Ltd., Kathmandu
            </p>
          </div>

          {/* Target audience */}
          <div className="mt-16 grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#336699]" />
                <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">Who We're For</span>
              </div>
              <div className="space-y-4">
                {[
                  ['Age Range',       '22–38'],
                  ['Primary Interest','K-Beauty Science & Derma-level efficacy'],
                  ['Income Level',    'Mid-to-High — willing to invest in quality'],
                  ['Digital Habit',   'Instagram and TikTok (social media buying)'],
                  ['Buying Trigger',  'Scientific proof and high-end unboxing'],
                  ['Location',        'Primarily urban hubs'],
                ].map(([k,v]) => (
                  <div key={k} className="flex gap-8 py-3 border-b border-[#D2D2D2]/40">
                    <span className="text-black/45 text-[10px] tracking-[0.2em] uppercase w-36 shrink-0 font-semibold">{k}</span>
                    <span className="text-black/80 text-[14px] font-normal">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-10 relative overflow-hidden" style={{ background:'#f5f7fa' }}>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                <span className="text-[200px] font-bold leading-none" style={{ color:'rgba(51,102,153,0.04)' }}>S</span>
              </div>
              <p className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold mb-4">Our Promise</p>
              <p className="text-black/75 text-[16px] leading-loose font-light">
                We build for people who read the ingredient label. Who know the difference between 0.5% retinol
                and 0.01%. Who are tired of paying premium prices for surface-level results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}