const pkgs = [
  {
    name:'Serum Bottle',  subtitle:'30ml Dropper Bottle',    color:'#A8D1E7',
    desc:'Frosted glass with glass dropper dispenser. Acid-etched tactile finish with screen print and foil decoration. Precision-crafted for the daily serum ritual.',
    specs:[ ['Primary Material','Frosted Glass'], ['Dispenser','Glass Dropper'], ['Decoration','Screen Print + Foil'], ['Tactile Finish','Acid Etched (Frost)'], ['Volume','30ml'] ]
  },
  {
    name:'Toner Bottle',  subtitle:'100ml+ Orifice Format',  color:'#8FBC8F',
    desc:'Frosted PET or glass construction with orifice reducer for precise dispensing. Chrome cap detail signals premium quality at first touch.',
    specs:[ ['Primary Material','Frosted PET / Glass'], ['Dispenser','Orifice Reducer'], ['Decoration','UV Print + Chrome Cap'], ['Tactile Finish','Smooth Frost'], ['Volume','100ml+'] ]
  },
  {
    name:'Face Wash Tube', subtitle:'150ml Soft-Touch Tube', color:'#E88B4D',
    desc:'5-layer PE + EVOH construction for maximum product integrity. Offset gradient decoration using all five product colours. Soft-touch matte finish for premium hand-feel.',
    specs:[ ['Primary Material','5-Layer PE + EVOH'], ['Dispenser','Flip-top Cap'], ['Decoration','Offset Gradient'], ['Tactile Finish','Soft-Touch Matte'], ['Volume','150ml'] ]
  },
  {
    name:'Glass Vessel',  subtitle:'Grade A Cream Jar',      color:'#8E7CC3',
    desc:'Grade A frosted glass vessel with high-gloss silver chrome lid. GCMI 53/400 neck finish. White PE pull-tab shive seal for hygiene assurance.',
    specs:[ ['Material','Grade A Frosted Glass'], ['Finish','Soft-Touch Matte Frost'], ['Lid Finish','High-Gloss Silver Chrome'], ['Gasket','White PE Pull-tab Shive'], ['Neck Finish','GCMI 53/400'] ]
  },
  {
    name:'Soap Box',      subtitle:'100g Bar with Outer Box', color:'#D3D3D3',
    desc:'120gsm uncoated FSC paper inner wrap with 350gsm white kraft paperboard outer box. Soft-touch matte finish with UV spot varnish on the logo for tactile brand recognition.',
    specs:[ ['Inner Wrap','120gsm Uncoated FSC Paper'], ['Outer Box','350gsm White Kraft'], ['Tactile Finish','Soft Matte + UV Spot Varnish'], ['Size','Standard 100g / 3.5oz Bar'] ]
  },
  {
    name:'Body Lotion',   subtitle:'Daily Pump Bottle',      color:'#336699',
    desc:'Frosted PETG / PET construction with standard dip-tube pump. 1.5ml per stroke for controlled dispensing. Available with clip-lock or screw-lock safety seal.',
    specs:[ ['Material','Frosted PETG / PET'], ['Pump Type','Standard Dip-Tube Pump'], ['Output Volume','1.5ml per stroke'], ['Neck Size','24/410 or 28/410'], ['Safety Seal','Clip-Lock or Screw-Lock'] ]
  },
]

export default function Packaging() {
  return (
    <div className="page-enter">

      {/* ── HERO ──────────────────────────────────────── */}
      <div className="relative py-36 overflow-hidden"
       style={{ background: 'linear-gradient(145deg, #0d2137 0%, #1a3d5c 40%, #2d6090 100%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)' }} />
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage:'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize:'50px 50px' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-white/80" />
            <span className="text-white/85 text-[11px] tracking-[0.5em] uppercase font-bold">Packaging</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight"
            style={{ textShadow:'0 2px 24px rgba(0,0,0,0.4)' }}>
            Crafted to<br />
            <span className="font-semibold text-white">be held.</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-loose font-normal"
            style={{ textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}>
            Every vessel is designed with the same precision as the formula inside — frosted glass,
            acid-etched finishes, and chrome accents that communicate quality before you even open the cap.
          </p>
        </div>
      </div>

      {/* ── PACKAGING GRID ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pkgs.map((pkg, i) => (
              <div key={i}
                className="border border-[#D2D2D2]/50 hover:border-[#336699]/35 hover:shadow-xl transition-all duration-400 overflow-hidden product-card group bg-white">
                {/* Color bar */}
                <div className="h-1.5" style={{ background:pkg.color }} />

                {/* Illustration */}
                <div className="h-60 flex items-center justify-center relative overflow-hidden py-8"
                  style={{ background:`linear-gradient(160deg, ${pkg.color}16 0%, #f9fafb 60%, white 100%)` }}>
                  {/* Color dot */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full"
                    style={{ background:pkg.color, boxShadow:`0 2px 8px ${pkg.color}60` }} />
                  <PackagingIllustration name={pkg.name} color={pkg.color} />
                </div>

                {/* Info */}
                <div className="p-7">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-black text-[15px] font-semibold tracking-[0.08em] uppercase mb-1">{pkg.name}</h3>
                      <p className="text-black/50 text-[10px] tracking-[0.25em] uppercase font-semibold">{pkg.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-black/70 text-[13px] leading-relaxed mb-5">{pkg.desc}</p>

                  {/* Specs */}
                  <div className="space-y-2.5 pt-4 border-t border-[#D2D2D2]/40">
                    {pkg.specs.map(([k,v]) => (
                      <div key={k} className="flex justify-between gap-4">
                        <span className="text-black/45 text-[9px] tracking-[0.15em] uppercase shrink-0 font-semibold">{k}</span>
                        <span className="text-black/75 text-[11px] text-right leading-tight font-normal">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN PHILOSOPHY ─────────────────────────── */}
      <section className="py-16 bg-white border-t border-[#D2D2D2]/40">
        <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
          <p className="text-black/45 text-[11px] tracking-[0.5em] uppercase font-bold mb-4">Design Philosophy</p>
          <p className="text-2xl lg:text-3xl font-light text-black/80 leading-relaxed">
            "Packaging is the first skin contact. It should feel like a promise being kept."
          </p>
          <p className="text-black/35 text-[10px] tracking-[0.3em] uppercase mt-4 font-semibold">
            — SEUSU SKIN Design Brief
          </p>
        </div>
      </section>
    </div>
  )
}

/* ─── Packaging Illustrations ──────────────────────────────── */
function PackagingIllustration({ name, color }: { name: string; color: string }) {
  const textColor = color === '#D3D3D3' ? 'rgba(60,60,60,0.9)' : 'rgba(255,255,255,0.95)'
  const subColor  = color === '#D3D3D3' ? 'rgba(60,60,60,0.6)'  : 'rgba(255,255,255,0.65)'

  const bottleBase = {
    background: `linear-gradient(155deg, ${color} 0%, ${color}dd 45%, ${color}99 80%, ${color}77 100%)`,
    border: `1.5px solid ${color === '#D3D3D3' ? 'rgba(185,185,185,0.8)' : `${color}cc`}`,
    boxShadow: `0 18px 44px ${color}45, 0 4px 12px ${color}30, inset 0 1px 0 rgba(255,255,255,0.45)`,
  }

  if (name === 'Serum Bottle') return (
    <div className="flex flex-col items-center animate-float">
      <div className="w-7 h-7 rounded-full mb-0.5"
        style={{ background:'linear-gradient(135deg,rgba(255,255,255,0.35),rgba(200,200,200,0.25))', boxShadow:'0 3px 10px rgba(0,0,0,0.16)' }} />
      <div className="w-1 h-8 opacity-70" style={{ background:'linear-gradient(180deg,rgba(210,210,210,0.7),rgba(180,180,180,0.5))' }} />
      <div className="w-12 h-4 rounded-t-full"
        style={{ background:'rgba(210,210,210,0.5)', boxShadow:'0 -2px 6px rgba(0,0,0,0.08)' }} />
      <div className="w-[76px] h-40 rounded-2xl overflow-hidden relative" style={bottleBase}>
        <div className="absolute top-0 left-3 w-2.5 bottom-0 rounded-full opacity-28"
          style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.2) 50%,transparent 100%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-10" style={{ background:'rgba(0,0,0,0.1)' }} />
        <div className="absolute bottom-4 left-0 right-0 px-2 text-center">
          <p className="text-[7px] tracking-[0.4em] uppercase font-bold" style={{ color: subColor }}>SEUSU SKIN</p>
          <div className="w-8 h-px mx-auto my-1 opacity-40" style={{ background: textColor }} />
          <p className="text-[10px] font-bold" style={{ color: textColor }}>Hydration Core</p>
          <p className="text-[6.5px] mt-0.5" style={{ color: subColor }}>30ml · HA 5%</p>
        </div>
      </div>
      <div className="w-12 h-1.5 rounded-full mt-0.5 opacity-15" style={{ background:color, filter:'blur(4px)' }} />
    </div>
  )

  if (name === 'Toner Bottle') return (
    <div className="flex items-end gap-3">
      {[{ c:'#A8D1E7', l:'Hydration' }, { c:color, l:'Toner' }, { c:'#8E7CC3', l:'Night' }].map(({ c, l }, i) => (
        <div key={i} className="flex flex-col items-center" style={{ animationDelay:`${i*0.3}s` }}>
          <div className="w-8 h-8 rounded-full mb-0.5"
            style={{ background:'linear-gradient(135deg,rgba(200,200,200,0.5),rgba(170,170,170,0.3))', boxShadow:'0 2px 6px rgba(0,0,0,0.12)' }} />
          <div className="w-[52px] h-28 rounded-lg overflow-hidden relative"
            style={{ background:`linear-gradient(155deg,${c},${c}bb,${c}77)`, border:`1.5px solid ${c}cc`, boxShadow:`0 10px 28px ${c}40` }}>
            <div className="absolute top-0 left-2 w-2 bottom-0 rounded-full opacity-25"
              style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,transparent 60%)' }} />
            <div className="absolute bottom-2 left-0 right-0 text-center">
              <p className="text-[5.5px] font-bold tracking-widest uppercase"
                style={{ color: c === '#D3D3D3' ? 'rgba(60,60,60,0.8)' : 'rgba(255,255,255,0.85)' }}>{l}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (name === 'Face Wash Tube') return (
    <div className="flex items-end gap-3">
      {[{ c:'#A8D1E7', l:'Hydration' }, { c:color, l:'Calming Cica' }, { c:'#8E7CC3', l:'Night' }].map(({ c, l }, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-11 h-4 rounded-t-lg"
            style={{ background:'linear-gradient(135deg,#d8d8d8,#a8a8a8)' }} />
          <div className="w-[52px] h-28 rounded-b-2xl overflow-hidden relative"
            style={{ background:`linear-gradient(155deg,${c},${c}bb,${c}88)`, border:`1.5px solid ${c}cc`, boxShadow:`0 10px 28px ${c}40` }}>
            <div className="absolute top-0 left-2 w-2 bottom-0 rounded-full opacity-25"
              style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,transparent 60%)' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 text-center px-1">
              <p className="text-[5.5px] font-bold tracking-widest uppercase"
                style={{ color: c === '#D3D3D3' ? 'rgba(60,60,60,0.8)' : 'rgba(255,255,255,0.85)' }}>SEUSU</p>
              <p className="text-[5px] leading-tight"
                style={{ color: c === '#D3D3D3' ? 'rgba(60,60,60,0.6)' : 'rgba(255,255,255,0.65)' }}>{l}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (name === 'Glass Vessel') return (
    <div className="flex items-end gap-4">
      {[{ c:'#A8D1E7', l:'Hydration' }, { c:color, l:'Night Repair' }, { c:'#8FBC8F', l:'Cica' }].map(({ c, l }, i) => (
        <div key={i} className="flex flex-col items-center">
          {/* Chrome lid */}
          <div className="w-[52px] h-6 rounded-sm mb-0.5"
            style={{ background:'linear-gradient(135deg,#e0e0e0,#b0b0b0,#d5d5d5)', boxShadow:'0 2px 6px rgba(0,0,0,0.18)' }} />
          {/* Jar */}
          <div className="w-[52px] h-14 rounded-b-2xl overflow-hidden relative"
            style={{ background:`linear-gradient(155deg,${c},${c}bb,${c}77)`, border:`1.5px solid ${c}cc`, boxShadow:`0 8px 24px ${c}40` }}>
            <div className="absolute top-0 left-2 w-2 bottom-0 rounded-full opacity-25"
              style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,transparent 60%)' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-[5px] font-bold tracking-widest uppercase"
                style={{ color: c === '#D3D3D3' ? 'rgba(60,60,60,0.75)' : 'rgba(255,255,255,0.8)' }}>{l}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  if (name === 'Soap Box') return (
    <div className="flex items-end gap-3">
      {[{ c:'#A8D1E7', l:'Hydration' }, { c:color, l:'Calming Bar' }, { c:'#8E7CC3', l:'Night Bar' }].map(({ c, l }, i) => (
        <div key={i} className="w-[52px] h-28 rounded-sm relative overflow-hidden"
          style={{ background:`linear-gradient(160deg,white 15%,${c}40 100%)`, border:`1.5px solid ${c}45`, boxShadow:`0 6px 18px ${c}20` }}>
          <div className="absolute top-0 left-0 right-0 h-px" style={{ background: c }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: c }} />
          <div className="absolute top-5 left-0 right-0 text-center">
            <p className="text-[7px] font-bold tracking-[0.3em] uppercase" style={{ color: c === '#D3D3D3' ? '#888' : c }}>SEUSU</p>
            <p className="text-[5.5px] tracking-wide text-black/40 mt-0.5">SKIN</p>
          </div>
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <p className="text-[5.5px] text-black/45 leading-tight px-1">{l}</p>
            <p className="text-[5px] text-black/30 mt-0.5">100g</p>
          </div>
        </div>
      ))}
    </div>
  )

  // Body Lotion pump
  return (
    <div className="flex items-end gap-3">
      {[{ c:'#A8D1E7', l:'Hydration' }, { c:color, l:'Peptide Firm' }, { c:'#8FBC8F', l:'Calming' }].map(({ c, l }, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full mb-0.5"
            style={{ background:'linear-gradient(135deg,#d8d8d8,#a8a8a8)', boxShadow:'0 2px 6px rgba(0,0,0,0.18)' }} />
          <div className="w-1 h-5" style={{ background:'linear-gradient(180deg,#d0d0d0,#b0b0b0)' }} />
          <div className="w-[52px] h-3 rounded-t-sm"
            style={{ background:'linear-gradient(135deg,#d5d5d5,#b8b8b8)' }} />
          <div className="w-[52px] h-24 rounded-lg overflow-hidden relative"
            style={{ background:`linear-gradient(155deg,${c},${c}bb,${c}77)`, border:`1.5px solid ${c}cc`, boxShadow:`0 10px 28px ${c}40` }}>
            <div className="absolute top-0 left-2 w-2 bottom-0 rounded-full opacity-25"
              style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,transparent 60%)' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 text-center px-1">
              <p className="text-[5.5px] font-bold tracking-widest uppercase"
                style={{ color: c === '#D3D3D3' ? 'rgba(60,60,60,0.8)' : 'rgba(255,255,255,0.85)' }}>SEUSU</p>
              <p className="text-[5px] leading-tight"
                style={{ color: c === '#D3D3D3' ? 'rgba(60,60,60,0.6)' : 'rgba(255,255,255,0.65)' }}>{l}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
