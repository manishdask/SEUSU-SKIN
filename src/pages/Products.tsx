import { Link } from 'react-router-dom'

const products = [
  {
    name:'Hydration Core',  type:'Face Serum',       volume:'30ml',  color:'#A8D1E7',
    tag:'Bestseller', badge:'AM / PM',
    active:'Hyaluronic Acid', conc:'5% HA Complex',
    benefit:'Deep structural moisture lock. The foundation of every skin routine.',
    ingredients:['Hyaluronic Acid 5%','Ceramide NP','Niacinamide 3%','Hydro-Lock Molecule'],
    desc:'Our core hydration formula delivers multi-weight hyaluronic acid directly into the stratum corneum. Skin feels plump, not sticky — because the formula is inside, not sitting on top.',
    steps:'1. Cleanse · 2. Tone · 3. Apply 2–3 drops · 4. Moisturise',
  },
  {
    name:'Vitamin C Glow',  type:'Brightening Serum', volume:'30ml', color:'#E88B4D',
    tag:'New', badge:'AM only',
    active:'L-Ascorbic Acid 20%', conc:'20% Vit C',
    benefit:'Antioxidant protection and morning radiance. Stabilised with Vitamin E.',
    ingredients:['L-Ascorbic Acid 20%','Vitamin E 1%','Ferulic Acid','Hydro-Lock Molecule'],
    desc:'A high-potency Vitamin C serum stabilised by a proprietary encapsulation system. L-Ascorbic Acid at 20% concentration — delivered precisely where pigmentation forms.',
    steps:'1. Cleanse · 2. Apply 2–3 drops AM only · 3. Follow with SPF',
  },
  {
    name:'Night Repair',    type:'Retinol Serum',     volume:'30ml', color:'#8E7CC3',
    tag:'PM Formula', badge:'PM only',
    active:'Retinol 0.5%', conc:'0.5% Retinol',
    benefit:'Deep nocturnal regeneration. Wake to measurably renewed skin.',
    ingredients:['Retinol 0.5%','Bakuchiol 1%','Peptide Complex','Hydro-Lock Molecule'],
    desc:'Our night serum pairs Retinol with Bakuchiol for cell-turnover acceleration without the typical irritation. The Hydro-Lock Molecule ensures both actives reach the dermis — not just the surface.',
    steps:'1. Cleanse · 2. Apply 2–3 drops PM · 3. Follow with Night Moisturiser',
  },
  {
    name:'Calming Cica',    type:'Face Wash',          volume:'150ml', color:'#8FBC8F',
    tag:'Sensitive', badge:'AM / PM',
    active:'Centella Asiatica', conc:'10% Cica',
    benefit:'Anti-inflammation and gentle deep cleansing for reactive and sensitive skin.',
    ingredients:['Centella Asiatica 10%','Panthenol 5%','Allantoin','Hydro-Lock Molecule'],
    desc:'A gentle yet genuinely effective cleanser that removes impurities while actively repairing the skin barrier. Zero sulphates, zero fragrance — just anti-inflammatory Centella and the Hydro-Lock system.',
    steps:'1. Wet face · 2. Massage small amount · 3. Rinse thoroughly',
  },
  {
    name:'Peptide Firm',    type:'Facial Lotion',      volume:'50ml',  color:'#D3D3D3',
    tag:'Advanced', badge:'AM / PM',
    active:'Copper Tripeptide-1', conc:'5ppm CTP-1',
    benefit:'Structural firming powered by liquid-metal science. Long-term collagen support.',
    ingredients:['Copper Tripeptide-1','Matrixyl 3000','Argireline 10%','Hydro-Lock Molecule'],
    desc:'Copper Tripeptide-1 is one of the most clinically studied actives for collagen synthesis. Paired with Matrixyl 3000, this lotion delivers measurable firmness improvement within 4 weeks.',
    steps:'1. Cleanse & Serum · 2. Apply small amount · 3. Press into skin gently',
  },
]

export default function Products() {
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
            <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">The Collection</span>
          </div>
          <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight"
            style={{ textShadow:'0 2px 24px rgba(0,0,0,0.4)' }}>
            Five<br />
            <span className="font-semibold" style={{ color:'#A8D1E7' }}>Formulations.</span>
          </h1>
          <p className="text-white/85 text-lg max-w-xl leading-loose font-normal"
            style={{ textShadow:'0 1px 8px rgba(0,0,0,0.3)' }}>
            Five skin challenges. One delivery system that changes everything.
            Every product contains the Hydro-Lock Molecule.
          </p>
        </div>
      </div>

      {/* ── PRODUCTS ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="space-y-8">
            {products.map((p, i) => (
              <div key={i}
                className="grid lg:grid-cols-12 gap-0 border border-[#D2D2D2]/50 hover:border-[#336699]/35 hover:shadow-xl transition-all duration-400 overflow-hidden group product-card">

                {/* ── BOTTLE PANEL ── */}
                <div className="lg:col-span-3 flex items-center justify-center py-14 px-8 relative overflow-hidden"
                  style={{ background:`linear-gradient(160deg, ${p.color}22 0%, ${p.color}08 100%)` }}>
                  {/* Top color bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5" style={{ background:p.color }} />

                  {/* Tag */}
                  <div className="absolute top-5 right-4 px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-bold"
                    style={{ background:`${p.color}35`, color: p.color === '#D3D3D3' ? '#888' : p.color }}>
                    {p.tag}
                  </div>

                  {/* Badge */}
                  <div className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 text-[8px] tracking-widest uppercase font-bold"
                    style={{ background:`${p.color}20`, color: p.color === '#D3D3D3' ? '#888' : p.color, border:`1px solid ${p.color}40` }}>
                    {p.badge}
                  </div>

                  {/* Bottle illustration */}
                  <LargeBottle name={p.name} color={p.color} type={p.type} active={p.active} volume={p.volume} />
                </div>

                {/* ── DETAILS PANEL ── */}
                <div className="lg:col-span-9 p-8 lg:p-10 flex flex-col justify-center">

                  <div className="flex flex-wrap items-start gap-4 mb-5">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <h3 className="text-2xl font-semibold text-black tracking-wide">{p.name}</h3>
                        <span className="px-2.5 py-0.5 text-[8px] tracking-[0.2em] uppercase font-bold bg-[#f0f0f0] text-black/50">
                          {p.badge}
                        </span>
                        <span className="text-black/40 text-[11px] font-semibold">{p.volume}</span>
                      </div>
                      <p className="text-black/50 text-[10px] tracking-[0.25em] uppercase font-semibold">{p.type}</p>
                    </div>
                    {/* Active badge */}
                    <div className="flex items-center gap-2 px-4 py-2.5 border"
                      style={{ borderColor:`${p.color}70`, background:`${p.color}12` }}>
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background:p.color }} />
                      <span className="text-[10px] tracking-[0.2em] uppercase font-bold"
                        style={{ color: p.color === '#D3D3D3' ? '#888' : p.color }}>
                        {p.conc}
                      </span>
                    </div>
                  </div>

                  {/* Benefit callout */}
                  <p className="text-[#336699] text-[11px] tracking-[0.15em] uppercase font-bold mb-3 flex items-center gap-2">
                    <span className="w-4 h-px bg-[#336699] inline-block" /> {p.benefit}
                  </p>

                  <p className="text-black/70 text-[14px] leading-loose mb-5">{p.desc}</p>

                  {/* Usage steps */}
                  <p className="text-black/45 text-[10px] tracking-[0.2em] uppercase font-semibold mb-5 pb-5 border-b border-[#D2D2D2]/40">
                    {p.steps}
                  </p>

                  {/* Ingredient pills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.ingredients.map(ing => (
                      <span key={ing}
                        className="px-3 py-1.5 text-[9px] tracking-[0.18em] uppercase border border-[#D2D2D2]/60 text-black/60 font-semibold">
                        {ing}
                      </span>
                    ))}
                  </div>

                  <Link to="/science"
                    className="inline-flex items-center gap-2 text-[#336699] text-[10px] tracking-[0.28em] uppercase font-bold border-b-2 border-[#336699]/35 pb-0.5 w-fit hover:border-[#336699] hover:gap-4 transition-all duration-300">
                    Learn about the Science →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTNOTE ──────────────────────────────────── */}
      <div className="py-8 bg-white border-t border-[#D2D2D2]/40 text-center">
        <p className="text-black/40 text-[10px] tracking-[0.4em] uppercase font-semibold">
          All products contain the Hydro-Lock Molecule · Paraben Free · Fragrance Free
        </p>
      </div>
    </div>
  )
}

/* ─── Large Product Bottle Illustration ─────────────────────── */
function LargeBottle({ name, color, type, active, volume }: {
  name: string; color: string; type: string; active: string; volume: string
}) {
  const isWash   = type.includes('Wash')
  const isLotion = type.includes('Lotion')
  const textColor = color === '#D3D3D3' ? 'rgba(70,70,70,0.95)' : 'rgba(255,255,255,0.97)'
  const subColor  = color === '#D3D3D3' ? 'rgba(70,70,70,0.65)'  : 'rgba(255,255,255,0.7)'

  const baseStyle = {
    background: `linear-gradient(155deg, ${color} 0%, ${color}dd 40%, ${color}aa 75%, ${color}88 100%)`,
    border: `2px solid ${color === '#D3D3D3' ? 'rgba(185,185,185,0.85)' : `${color}cc`}`,
    boxShadow: `0 24px 60px ${color}50, 0 6px 20px ${color}35, inset 0 1px 0 rgba(255,255,255,0.5), inset -2px 0 0 rgba(0,0,0,0.07)`,
  }

  const LabelContent = () => (
    <>
      <p className="text-[8px] tracking-[0.45em] uppercase font-bold mb-0.5" style={{ color: subColor }}>SEUSU SKIN</p>
      <div className="w-10 h-px mx-auto my-1.5 opacity-45" style={{ background: textColor }} />
      <p className="text-[13px] font-bold leading-tight mb-1" style={{ color: textColor, textShadow:'0 1px 4px rgba(0,0,0,0.2)' }}>{name}</p>
      <p className="text-[8px] leading-snug mb-1" style={{ color: subColor }}>{active}</p>
      <div className="mt-2 mx-auto w-fit px-2.5 py-0.5 text-[7px] tracking-widest uppercase font-bold rounded-sm"
        style={{ background:'rgba(255,255,255,0.18)', color: textColor, border:'1px solid rgba(255,255,255,0.2)' }}>
        {volume}
      </div>
    </>
  )

  if (isWash) return (
    <div className="flex flex-col items-center animate-float">
      <div className="w-14 h-5 rounded-t-lg"
        style={{ background:'linear-gradient(135deg,#d8d8d8,#a8a8a8)', boxShadow:'0 -2px 8px rgba(0,0,0,0.12)' }} />
      <div className="w-28 h-52 rounded-b-3xl overflow-hidden relative" style={baseStyle}>
        <div className="absolute top-0 left-4 w-3 bottom-0 rounded-full opacity-28"
          style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.95) 0%,transparent 60%)' }} />
        <div className="absolute top-0 right-3 w-1.5 h-20 rounded-full opacity-12"
          style={{ background:'rgba(255,255,255,0.8)' }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center px-3 gap-0.5">
          <LabelContent />
        </div>
      </div>
      <div className="w-20 h-2 rounded-full mt-1 opacity-20" style={{ background:color, filter:'blur(5px)' }} />
    </div>
  )

  if (isLotion) return (
    <div className="flex flex-col items-center animate-float">
      <div className="w-8 h-8 rounded-full mb-0.5"
        style={{ background:'linear-gradient(135deg,#d8d8d8,#a8a8a8)', boxShadow:'0 3px 8px rgba(0,0,0,0.2)' }} />
      <div className="w-2 h-6" style={{ background:'linear-gradient(180deg,#d0d0d0,#b0b0b0)' }} />
      <div className="w-18 h-4 rounded-t-sm"
        style={{ background:'linear-gradient(135deg,#d5d5d5,#b8b8b8)', width:'72px' }} />
      <div className="w-28 h-40 rounded-lg overflow-hidden relative" style={baseStyle}>
        <div className="absolute top-0 left-4 w-3 bottom-0 rounded-full opacity-28"
          style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.95) 0%,transparent 55%)' }} />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center text-center px-3 gap-0.5">
          <LabelContent />
        </div>
      </div>
      <div className="w-20 h-2 rounded-full mt-1 opacity-20" style={{ background:color, filter:'blur(5px)' }} />
    </div>
  )

  // Serum dropper
  return (
    <div className="flex flex-col items-center animate-float">
      {/* Dropper bulb */}
      <div className="w-9 h-9 rounded-full mb-0.5"
        style={{ background:'linear-gradient(135deg,rgba(255,255,255,0.35),rgba(200,200,200,0.25))', boxShadow:'0 4px 12px rgba(0,0,0,0.18)' }} />
      <div className="w-1.5 h-9 opacity-75" style={{ background:'linear-gradient(180deg,rgba(220,220,220,0.7),rgba(190,190,190,0.5))' }} />
      <div className="w-[68px] h-5 rounded-t-full"
        style={{ background:'linear-gradient(135deg,rgba(220,220,220,0.55),rgba(180,180,180,0.4))', boxShadow:'0 -2px 6px rgba(0,0,0,0.08)' }} />
      {/* Bottle */}
      <div className="w-[92px] h-52 rounded-2xl overflow-hidden relative group-hover:scale-[1.04] transition-transform duration-500"
        style={baseStyle}>
        {/* Main shine */}
        <div className="absolute top-0 left-4 w-3 bottom-0 rounded-full opacity-32"
          style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.98) 0%,rgba(255,255,255,0.2) 45%,transparent 100%)' }} />
        {/* Edge shine right */}
        <div className="absolute top-5 right-2.5 w-1.5 h-16 rounded-full opacity-12"
          style={{ background:'rgba(255,255,255,0.85)' }} />
        {/* Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-12"
          style={{ background:'rgba(0,0,0,0.1)' }} />
        {/* Label */}
        <div className="absolute bottom-5 left-0 right-0 px-3 text-center flex flex-col items-center gap-0.5">
          <LabelContent />
        </div>
      </div>
      <div className="w-16 h-2 rounded-full mt-0.5 opacity-20" style={{ background:color, filter:'blur(6px)' }} />
    </div>
  )
}