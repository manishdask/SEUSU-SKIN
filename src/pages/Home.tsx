import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const products = [
  { name: 'Hydration Core',  color: '#A8D1E7', type: 'Face Serum',       active: 'Hyaluronic Acid 5%',    badge: 'AM/PM' },
  { name: 'Vitamin C Glow',  color: '#E88B4D', type: 'Brightening Serum',active: 'L-Ascorbic Acid 20%',   badge: 'AM'    },
  { name: 'Night Repair',    color: '#8E7CC3', type: 'Retinol Serum',     active: 'Retinol 0.5%',          badge: 'PM'    },
  { name: 'Calming Cica',    color: '#8FBC8F', type: 'Face Wash',         active: 'Centella Asiatica 10%', badge: 'AM/PM' },
  { name: 'Peptide Firm',    color: '#D3D3D3', type: 'Facial Lotion',     active: 'Copper Tripeptide-1',   badge: 'AM/PM' },
]

const marqueeItems = [
  'Depth Redefined','Hydro-Lock Molecule','K-Beauty Science',
  'Derma-Level Efficacy','Paraben Free','Structural Replenishment',
  'Zero Compromise','Fragrance Free','Biotech Innovation',
  'Depth Redefined','Hydro-Lock Molecule','K-Beauty Science',
  'Derma-Level Efficacy','Paraben Free','Structural Replenishment',
  'Zero Compromise','Fragrance Free','Biotech Innovation',
]

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)
    const pts: { x:number;y:number;vx:number;vy:number;a:number }[] = []
    for (let i = 0; i < 80; i++) pts.push({
      x: Math.random()*canvas.width, y: Math.random()*canvas.height,
      vx:(Math.random()-0.5)*0.3, vy:(Math.random()-0.5)*0.3, a:Math.random()*0.5+0.1
    })
    const draw = () => {
      ctx.clearRect(0,0,canvas.width,canvas.height)
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy
        if(p.x<0)p.x=canvas.width; if(p.x>canvas.width)p.x=0
        if(p.y<0)p.y=canvas.height; if(p.y>canvas.height)p.y=0
        ctx.beginPath(); ctx.arc(p.x,p.y,1.2,0,Math.PI*2)
        ctx.fillStyle=`rgba(255,255,255,${p.a})`; ctx.fill()
      })
      for(let i=0;i<pts.length;i++) for(let j=i+1;j<pts.length;j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y
        const d=Math.sqrt(dx*dx+dy*dy)
        if(d<120){
          ctx.beginPath(); ctx.moveTo(pts[i].x,pts[i].y); ctx.lineTo(pts[j].x,pts[j].y)
          ctx.strokeStyle=`rgba(255,255,255,${0.12*(1-d/120)})`; ctx.lineWidth=0.5; ctx.stroke()
        }
      }
      raf=requestAnimationFrame(draw)
    }
    draw()
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('resize',resize) }
  }, [])

  return (
    <div className="page-enter">

      {/* ═══ HERO ══════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(145deg, #0d2137 0%, #1a3d5c 35%, #2d6090 70%, #3a7ab8 100%)' }}>

        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-60" />

        {/* Dark overlay left side for text contrast */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)' }} />

        {/* Ambient orbs */}
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(168,209,231,0.14) 0%, transparent 70%)' }} />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full pointer-events-none opacity-[0.07] animate-spin-slow"
          style={{ border: '1px solid rgba(168,209,231,0.7)' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full pointer-events-none opacity-[0.04]"
          style={{ border: '1px solid rgba(255,255,255,0.5)', animationDirection:'reverse' }} />

        {/* Vertical label */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4">
          <span className="text-white/50 text-[9px] tracking-[0.5em] uppercase font-bold [writing-mode:vertical-rl] rotate-180">
            Depth Redefined
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent" />
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="text-white/60 text-[9px] tracking-[0.4em] uppercase font-bold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <div className="animate-fade-up d-100 flex items-center gap-4 mb-8">
              <div className="w-10 h-[2px] bg-[#A8D1E7]" />
              <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">
                Biotech Skincare Innovation
              </span>
            </div>

            <h1 className="mb-8 leading-[0.9]">
              <span className="animate-fade-up d-200 block text-[clamp(5rem,12vw,9rem)] font-black text-white tracking-tight"
                style={{ textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}>
                DEPTH
              </span>
              <span className="animate-fade-up d-300 block text-[clamp(3rem,8vw,6rem)] font-black tracking-tight"
                style={{ color: '#A8D1E7', textShadow: '0 2px 28px rgba(168,209,231,0.4)' }}>
                REDEFINED.
              </span>
            </h1>

            <p className="animate-fade-up d-500 text-white text-base lg:text-lg leading-loose tracking-wide max-w-lg mb-10 font-normal"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,0.4)' }}>
              Most skincare evaporates before it works. SEUSU SKIN's proprietary{' '}
              <span className="font-bold text-[#A8D1E7]">Hydro-Lock Molecule</span> penetrates
              the stratum corneum in under{' '}
              <span className="font-bold text-white underline decoration-[#A8D1E7]/50 underline-offset-2">30 seconds</span>{' '}
              — delivering permanent structural replenishment.
            </p>

            <div className="animate-fade-up d-600 flex flex-wrap gap-4 mb-14">
              <Link to="/science"
                className="group px-9 py-4 text-white text-[11px] tracking-[0.3em] uppercase font-bold flex items-center gap-3 transition-all duration-300 hover:gap-5"
                style={{ background:'rgba(168,209,231,0.18)', border:'1.5px solid rgba(168,209,231,0.65)', backdropFilter:'blur(8px)' }}>
                Explore Science
                <span className="text-[#A8D1E7]">→</span>
              </Link>
              <Link to="/story"
                className="px-9 py-4 border border-white/45 text-white font-semibold hover:bg-white hover:text-[#336699] text-[11px] tracking-[0.3em] uppercase transition-all duration-300">
                Our Story
              </Link>
            </div>

            <div className="animate-fade-up d-800 flex gap-10 pt-10 border-t border-white/25">
              {[
                { v:'<30s', l:'Absorption Time'   },
                { v:'100%', l:'Paraben Free'       },
                { v:'5×',   l:'Deeper Penetration' },
              ].map(s => (
                <div key={s.l}>
                  <p className="text-4xl font-light text-white mb-1"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>
                    {s.v}
                  </p>
                  <p className="text-white/75 text-[10px] tracking-[0.25em] uppercase font-bold">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="hidden lg:flex justify-center items-center relative">
            <HeroBottleDisplay />
          </div>
        </div>
      </section>

      {/* ═══ MARQUEE ══════════════════════════════════════════ */}
      <div className="overflow-hidden py-4"
        style={{ background:'#1a3d5c', borderTop:'1px solid rgba(168,209,231,0.15)', borderBottom:'1px solid rgba(168,209,231,0.15)' }}>
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {marqueeItems.map((item, i) => (
            <span key={i} className="mx-10 text-[11px] tracking-[0.45em] uppercase font-bold text-white flex items-center gap-10">
              {item} <span className="text-[#A8D1E7]/50 text-base font-light">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══ BRAND INTRO ═══════════════════════════════════════ */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[2px] bg-[#336699]" />
                <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">Who We Are</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight mb-6">
                Science meets<br />
                <span className="font-semibold" style={{ color:'#336699' }}>skincare</span> — precisely.
              </h2>
              <p className="text-black/75 text-[15px] leading-loose mb-8">
                Founded in Kathmandu by Biotech Solutions, SEUSU SKIN bridges the gap between
                pharmaceutical-grade actives and everyday skincare. Every formula is built around
                one question: does it actually reach the skin?
              </p>
              <Link to="/story"
                className="inline-flex items-center gap-3 text-[#336699] text-[11px] tracking-[0.28em] uppercase font-bold border-b-2 border-[#336699]/40 pb-1 hover:border-[#336699] transition-all duration-300 hover:gap-5">
                Read Our Story <span>→</span>
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { icon:'◈', title:'K-Beauty Science',  desc:'Rooted in Korean formulation methodology — results you can measure.' },
                { icon:'◎', title:'Derma Efficacy',    desc:'Actives that penetrate beyond the epidermis where real change happens.' },
                { icon:'◇', title:'Zero Compromise',   desc:'No parabens, no fillers. Only bioactive compounds with proven function.' },
                { icon:'◉', title:'30-Second Promise', desc:'Our Hydro-Lock Molecule delivers below the skin surface in under 30s.' },
              ].map((v, i) => (
                <div key={i} className="p-6 border border-[#D2D2D2]/60 hover:border-[#336699]/50 hover:bg-[#336699]/[0.03] transition-all duration-300 group">
                  <div className="text-xl text-[#D2D2D2] group-hover:text-[#336699] transition-colors duration-300 mb-4">{v.icon}</div>
                  <p className="text-black text-[11px] tracking-[0.18em] uppercase font-bold mb-2">{v.title}</p>
                  <p className="text-black/65 text-[13px] leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS PREVIEW ═════════════════════════════════ */}
      <section className="py-32" style={{ background:'#f5f7fa' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[2px] bg-[#336699]" />
                <span className="text-[#336699] text-[11px] tracking-[0.5em] uppercase font-bold">The Collection</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-light text-black">
                Five <span className="font-semibold text-[#336699]">Formulations.</span>
              </h2>
            </div>
            <Link to="/products"
              className="flex-shrink-0 px-8 py-4 border-2 border-[#336699] text-[#336699] text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#336699] hover:text-white transition-all duration-300">
              View All Products →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
            {products.map((p, i) => (
              <Link to="/products" key={i}
                className="product-card bg-white border border-[#D2D2D2]/50 hover:border-[#336699]/35 overflow-hidden block group hover:shadow-xl transition-all duration-400">
                {/* Top color bar */}
                <div className="h-1.5" style={{ background: p.color }} />

                {/* Bottle visual */}
                <div className="h-64 flex items-center justify-center relative overflow-hidden py-6"
                  style={{ background:`linear-gradient(160deg, ${p.color}18 0%, #f9fafb 60%, white 100%)` }}>

                  {/* Usage badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 text-[9px] tracking-[0.2em] uppercase font-bold rounded-sm"
                    style={{ background:`${p.color}30`, color: p.color === '#D3D3D3' ? '#888' : p.color }}>
                    {p.badge}
                  </div>

                  {/* Detailed bottle */}
                  <DetailedBottle name={p.name} color={p.color} type={p.type} active={p.active} index={i} />

                  {/* Color dot */}
                  <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full"
                    style={{ background: p.color, boxShadow:`0 2px 10px ${p.color}70` }} />
                </div>

                {/* Product info */}
                <div className="p-5 border-t" style={{ borderColor:`${p.color}30` }}>
                  <p className="text-black text-[14px] font-semibold tracking-wide mb-1">{p.name}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase font-bold mb-1.5"
                    style={{ color: p.color === '#D3D3D3' ? '#888888' : p.color }}>
                    {p.active}
                  </p>
                  <p className="text-black/50 text-[10px] tracking-wide uppercase">{p.type}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SCIENCE TEASER ════════════════════════════════════ */}
      <section className="py-32 relative overflow-hidden" style={{ background:'#0d2137' }}>
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{ backgroundImage:'linear-gradient(rgba(168,209,231,1) 1px,transparent 1px),linear-gradient(90deg,rgba(168,209,231,1) 1px,transparent 1px)', backgroundSize:'50px 50px' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] pointer-events-none"
          style={{ background:'radial-gradient(ellipse, rgba(168,209,231,0.07) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#A8D1E7]/60" />
            <span className="text-[#A8D1E7] text-[11px] tracking-[0.5em] uppercase font-bold">The Science</span>
            <div className="w-8 h-px bg-[#A8D1E7]/60" />
          </div>
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-6 leading-tight"
            style={{ textShadow:'0 2px 20px rgba(0,0,0,0.4)' }}>
            The Hydro-Lock<br />
            <span style={{ color:'#A8D1E7' }} className="font-semibold">Molecule</span>
          </h2>
          <p className="text-white/90 text-base lg:text-xl leading-loose max-w-2xl mx-auto mb-10 font-normal">
            A proprietary biotech compound that changes its physical surface tension on contact
            with skin — opening pathways into the stratum corneum in under{' '}
            <span className="font-bold text-[#A8D1E7]">30 seconds.</span>
          </p>
          <Link to="/science"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#336699] text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#A8D1E7] hover:text-white transition-all duration-300">
            Explore the Science →
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER CTA ════════════════════════════════════════ */}
      <section className="py-24 bg-white border-t border-[#D2D2D2]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-black/55 text-[11px] tracking-[0.5em] uppercase font-bold mb-2">Ready to go deeper?</p>
            <h3 className="text-3xl lg:text-4xl font-light text-black">
              Experience the <span className="font-semibold text-[#336699]">difference.</span>
            </h3>
          </div>
          <div className="flex gap-4">
            <Link to="/products"
              className="px-8 py-4 bg-[#336699] text-white text-[11px] tracking-[0.25em] uppercase font-bold hover:bg-[#1a3d5c] transition-all duration-300">
              View Collection
            </Link>
            <Link to="/contact"
              className="px-8 py-4 border-2 border-[#D2D2D2] text-black text-[11px] tracking-[0.25em] uppercase font-bold hover:border-[#336699] hover:text-[#336699] transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ─── Detailed Bottle Illustration ──────────────────────────────── */
function DetailedBottle({ name, color, type, active, index }: {
  name: string; color: string; type: string; active: string; index: number
}) {
  const isLotion = type.includes('Lotion')
  const isWash   = type.includes('Wash')

  const textColor = color === '#D3D3D3' ? 'rgba(80,80,80,0.9)' : 'rgba(255,255,255,0.95)'
  const subColor  = color === '#D3D3D3' ? 'rgba(80,80,80,0.6)'  : 'rgba(255,255,255,0.65)'

  const bottleStyle = {
    background: `linear-gradient(155deg, ${color} 0%, ${color}cc 45%, ${color}99 80%, ${color}77 100%)`,
    border: `1.5px solid ${color === '#D3D3D3' ? 'rgba(180,180,180,0.8)' : `${color}cc`}`,
    boxShadow: `0 20px 50px ${color}45, 0 4px 12px ${color}30, inset 0 1px 0 rgba(255,255,255,0.45), inset -1px 0 0 rgba(0,0,0,0.08)`,
  }

  if (isWash) {
    // Tube / Face Wash
    return (
      <div className="flex flex-col items-center animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
        {/* Flip cap */}
        <div className="w-12 h-4 rounded-t-lg"
          style={{ background:'linear-gradient(135deg,#d0d0d0,#a8a8a8)', boxShadow:'0 -2px 6px rgba(0,0,0,0.15)' }} />
        {/* Tube body */}
        <div className="w-24 h-40 rounded-b-3xl overflow-hidden relative"
          style={{ ...bottleStyle }}>
          {/* Shine strip */}
          <div className="absolute top-0 left-3 w-2.5 bottom-0 rounded-full opacity-30"
            style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,transparent 60%)' }} />
          {/* Gradient band */}
          <div className="absolute inset-x-0 top-8 h-px opacity-30"
            style={{ background: 'rgba(255,255,255,0.5)' }} />
          {/* Label */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center gap-1">
            <p className="text-[7px] tracking-[0.4em] uppercase font-bold" style={{ color: subColor }}>SEUSU SKIN</p>
            <div className="w-8 h-px opacity-50" style={{ background: textColor }} />
            <p className="text-[11px] font-bold leading-tight" style={{ color: textColor }}>{name}</p>
            <p className="text-[7px] tracking-wide" style={{ color: subColor }}>{active}</p>
            <div className="mt-1 px-2 py-0.5 rounded-sm text-[6px] tracking-widest uppercase font-bold"
              style={{ background:'rgba(255,255,255,0.15)', color: textColor }}>150ml</div>
          </div>
        </div>
        {/* Shadow */}
        <div className="w-16 h-1.5 rounded-full mt-1 opacity-20"
          style={{ background: color, filter:'blur(4px)' }} />
      </div>
    )
  }

  if (isLotion) {
    // Pump bottle / Lotion
    return (
      <div className="flex flex-col items-center animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
        {/* Pump head */}
        <div className="w-6 h-6 rounded-full mb-0.5"
          style={{ background:'linear-gradient(135deg,#d5d5d5,#a8a8a8)', boxShadow:'0 2px 6px rgba(0,0,0,0.2)' }} />
        <div className="w-1.5 h-5" style={{ background:'linear-gradient(180deg,#c8c8c8,#b0b0b0)' }} />
        {/* Pump collar */}
        <div className="w-16 h-3 rounded-t-sm"
          style={{ background:'linear-gradient(135deg,#d0d0d0,#b5b5b5)', boxShadow:'0 -1px 4px rgba(0,0,0,0.1)' }} />
        {/* Bottle body */}
        <div className="w-24 h-32 rounded-lg overflow-hidden relative"
          style={{ ...bottleStyle }}>
          <div className="absolute top-0 left-3 w-2 bottom-0 rounded-full opacity-30"
            style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.9) 0%,transparent 55%)' }} />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-2 text-center gap-1">
            <p className="text-[7px] tracking-[0.4em] uppercase font-bold" style={{ color: subColor }}>SEUSU SKIN</p>
            <div className="w-7 h-px opacity-50" style={{ background: textColor }} />
            <p className="text-[10px] font-bold leading-tight" style={{ color: textColor }}>{name}</p>
            <p className="text-[6.5px] tracking-wide" style={{ color: subColor }}>{active}</p>
            <div className="mt-1 px-2 py-0.5 rounded-sm text-[6px] tracking-widest uppercase font-bold"
              style={{ background:'rgba(255,255,255,0.15)', color: textColor }}>50ml</div>
          </div>
        </div>
        <div className="w-14 h-1.5 rounded-full mt-1 opacity-20"
          style={{ background: color, filter:'blur(4px)' }} />
      </div>
    )
  }

  // Default — Serum dropper bottle
  return (
    <div className="flex flex-col items-center animate-float" style={{ animationDelay: `${index * 0.4}s` }}>
      {/* Dropper bulb */}
      <div className="w-7 h-7 rounded-full mb-0.5"
        style={{ background:'linear-gradient(135deg,rgba(255,255,255,0.4),rgba(200,200,200,0.3))', boxShadow:'0 3px 10px rgba(0,0,0,0.18)' }} />
      {/* Dropper stem */}
      <div className="w-1 h-7 opacity-80" style={{ background:'linear-gradient(180deg,rgba(220,220,220,0.7),rgba(190,190,190,0.5))' }} />
      {/* Cap */}
      <div className="w-14 h-4 rounded-t-full"
        style={{ background:'linear-gradient(135deg,rgba(220,220,220,0.55),rgba(180,180,180,0.4))', boxShadow:'0 -2px 6px rgba(0,0,0,0.1)' }} />
      {/* Bottle body */}
      <div className="w-[76px] h-40 rounded-2xl overflow-hidden relative group-hover:scale-[1.04] transition-transform duration-500"
        style={{ ...bottleStyle }}>
        {/* Main shine */}
        <div className="absolute top-0 left-3.5 w-2.5 bottom-0 rounded-full opacity-35"
          style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.2) 50%,transparent 100%)' }} />
        {/* Secondary shine */}
        <div className="absolute top-4 right-2 w-1 h-12 rounded-full opacity-15"
          style={{ background:'rgba(255,255,255,0.8)' }} />
        {/* Bottom gradient shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-10"
          style={{ background:'rgba(0,0,0,0.12)' }} />
        {/* Label content */}
        <div className="absolute bottom-4 left-0 right-0 px-2.5 text-center">
          <p className="text-[7px] tracking-[0.4em] uppercase font-bold mb-0.5" style={{ color: subColor }}>SEUSU SKIN</p>
          <div className="w-8 h-px mx-auto mb-1.5 opacity-40" style={{ background: textColor }} />
          <p className="text-[11px] font-bold leading-tight mb-0.5" style={{ color: textColor }}>{name}</p>
          <p className="text-[7px] leading-snug" style={{ color: subColor }}>{active}</p>
          <div className="mt-1.5 mx-auto w-fit px-2 py-0.5 text-[6px] tracking-widest uppercase font-bold rounded-sm"
            style={{ background:'rgba(255,255,255,0.15)', color: textColor }}>30ml</div>
        </div>
      </div>
      {/* Drop shadow */}
      <div className="w-14 h-1.5 rounded-full mt-0.5 opacity-20"
        style={{ background: color, filter:'blur(5px)' }} />
    </div>
  )
}

/* ─── Hero Bottle Display ────────────────────────────────────── */
function HeroBottleDisplay() {
  return (
    <div className="relative w-72 h-[500px]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-80 h-80 rounded-full animate-glow-pulse"
          style={{ background:'radial-gradient(circle, rgba(168,209,231,0.18) 0%, transparent 70%)' }} />
      </div>

      {/* Orbit rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/10 animate-spin-slow pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-white/[0.07] pointer-events-none"
        style={{ animation:'spin 18s linear infinite reverse' }} />

      {/* Main bottle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] flex flex-col items-center animate-float">
        {/* Dropper bulb */}
        <div className="w-9 h-9 rounded-full mb-1"
          style={{ background:'linear-gradient(135deg,rgba(255,255,255,0.3),rgba(200,200,200,0.2))', boxShadow:'0 4px 14px rgba(0,0,0,0.2)' }} />
        <div className="w-1 h-9" style={{ background:'rgba(255,255,255,0.35)' }} />
        <div className="w-16 h-5 rounded-t-full"
          style={{ background:'rgba(255,255,255,0.22)', boxShadow:'0 -2px 8px rgba(0,0,0,0.1)' }} />
        {/* Body */}
        <div className="w-[120px] h-72 rounded-3xl overflow-hidden relative"
          style={{
            background:'linear-gradient(160deg, rgba(168,209,231,0.92) 0%, rgba(51,102,153,0.8) 45%, rgba(26,61,92,0.75) 80%, rgba(13,33,55,0.7) 100%)',
            border:'1px solid rgba(255,255,255,0.28)',
            boxShadow:'0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.4), inset -1px 0 0 rgba(0,0,0,0.1)',
          }}>
          {/* Main shine */}
          <div className="absolute top-0 left-4 w-3 bottom-0 opacity-28 rounded-full"
            style={{ background:'linear-gradient(180deg,rgba(255,255,255,0.95) 0%,rgba(255,255,255,0.15) 55%,transparent 100%)' }} />
          {/* Right edge shadow */}
          <div className="absolute top-0 right-0 w-4 bottom-0"
            style={{ background:'rgba(0,0,0,0.12)' }} />
          {/* Label */}
          <div className="absolute bottom-9 left-0 right-0 px-4 text-center">
            <p className="text-white/70 text-[8px] tracking-[0.4em] uppercase font-bold mb-1">SEUSU SKIN</p>
            <div className="w-10 h-px bg-[#A8D1E7]/50 mx-auto mb-2" />
            <p className="text-[13px] font-bold mb-1 text-white" style={{ textShadow:'0 1px 4px rgba(0,0,0,0.3)' }}>
              Hydration Core
            </p>
            <p className="text-white/70 text-[8px] leading-relaxed tracking-wide">
              Hyaluronic Acid 5%<br />Hydro-Lock System
            </p>
            <div className="mt-2 mx-auto w-fit px-3 py-0.5 text-[7px] tracking-widest uppercase font-bold"
              style={{ background:'rgba(168,209,231,0.2)', color:'rgba(255,255,255,0.75)', border:'1px solid rgba(168,209,231,0.3)' }}>
              Paraben Free
            </div>
          </div>
        </div>
        {/* Base shadow */}
        <div className="w-24 h-2 rounded-full mt-1 opacity-25"
          style={{ background:'rgba(0,0,0,0.6)', filter:'blur(6px)' }} />
      </div>

      {/* Floating pills */}
      {[
        { color:'#A8D1E7', label:'Hydration', top:'8%',   left:'2%'    },
        { color:'#E88B4D', label:'Vitamin C', top:'24%',  right:'-2%'  },
        { color:'#8E7CC3', label:'Night',     top:'56%',  left:'-2%'   },
        { color:'#8FBC8F', label:'Cica',      top:'70%',  right:'2%'   },
        { color:'#D3D3D3', label:'Peptide',   top:'88%',  left:'10%'   },
      ].map((dot, i) => (
        <div key={i}
          className="absolute flex items-center gap-2 animate-float-slow"
          style={{
            top: dot.top,
            right: (dot as {right?:string}).right,
            left:  (dot as {left?:string}).left,
            animationDelay: `${i * 0.8}s`,
          }}>
          <div className="w-2.5 h-2.5 rounded-full"
            style={{ background:dot.color, boxShadow:`0 3px 10px ${dot.color}90` }} />
          <span className="text-white/80 text-[10px] tracking-widest uppercase font-bold"
            style={{ textShadow:'0 1px 4px rgba(0,0,0,0.5)' }}>
            {dot.label}
          </span>
        </div>
      ))}
    </div>
  )
}