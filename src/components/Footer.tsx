import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0d1f30] pt-20 pb-10 overflow-hidden border-t border-white/[0.08]">

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-lines pointer-events-none opacity-40" />

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-32 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(51,102,153,0.25) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* ── MAIN GRID ─────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-12 mb-20 pb-20 border-b border-white/[0.08]">

          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block group mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 pointer-events-none" />
                <img src={logo} alt="SEUSU SKIN"
                  className="h-14 w-auto block relative z-10 transition-all duration-500 group-hover:opacity-80" />
              </div>
              <div className="mt-6 flex items-center gap-3">
                <span className="h-[1.5px] w-10 bg-[#A8D1E7]/50" />
                <p className="font-bold text-[10px] tracking-[0.6em] uppercase text-white/60">
                  Depth Redefined
                </p>
              </div>
            </Link>

            <p className="text-white/70 text-[13px] max-w-xs leading-relaxed font-normal tracking-wide mb-6">
              Proprietary biotech formulations engineered for the urban environment.
              Bridging the evaporation gap through structural replenishment.
            </p>

            {/* Social */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Instagram', href: '#' },
                { label: 'TikTok',    href: '#' },
                { label: 'Facebook',  href: '#' },
                { label: 'LinkedIn',  href: '#' },
              ].map(s => (
                <a key={s.label} href={s.href}
                  className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/60
                    hover:text-[#A8D1E7] transition-colors duration-300
                    border border-white/20 px-4 py-2 hover:border-[#A8D1E7]/50">
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-[10px] tracking-[0.45em] uppercase mb-8 text-white/50">
              Navigation
            </h4>
            <div className="flex flex-col gap-4">
              {['Story', 'Science', 'Products', 'Packaging', 'Philosophy', 'Contact'].map((item, i) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/65
                    hover:text-[#A8D1E7] hover:pl-1.5 transition-all duration-300
                    flex items-center gap-3 group"
                >
                  <span className="text-white/30 text-[8px] font-normal group-hover:text-[#A8D1E7]/50 transition-colors">
                    0{i + 1}
                  </span>
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Company info */}
          <div className="lg:col-span-4">
            <h4 className="font-bold text-[10px] tracking-[0.45em] uppercase mb-8 text-white/50">
              Company
            </h4>
            <div className="space-y-5 mb-10">
              {[
                { l: 'Legal Name', v: 'Biotech Solutions Private Limited' },
                { l: 'Brand',      v: 'SEUSU SKIN'                        },
                { l: 'HQ',         v: 'Kathmandu, Nepal'                  },
                { l: 'Focus',      v: 'Biotech Skincare Innovation'        },
              ].map(({ l, v }) => (
                <div key={l} className="flex gap-6 pb-4 border-b border-white/[0.08]">
                  <span className="text-white/40 text-[9px] tracking-[0.2em] uppercase w-20 shrink-0 font-semibold">
                    {l}
                  </span>
                  <span className="text-white/80 text-[12px] tracking-wide font-normal">{v}</span>
                </div>
              ))}
            </div>

            {/* Tagline block */}
            <div className="border-l-2 border-[#A8D1E7]/40 pl-5 py-2">
              <p className="text-white/60 text-[11px] leading-relaxed font-normal italic">
                "The skin is not a wall. It is a gateway."
              </p>
              <p className="text-white/35 text-[9px] tracking-[0.3em] uppercase mt-2 font-semibold">
                — Founding Principle
              </p>
            </div>
          </div>
        </div>

        {/* ── LEGAL ─────────────────────────────── */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] font-bold tracking-[0.35em] uppercase text-white/40">
            © {year} SEUSU SKIN · Biotech Solutions Private Limited
          </p>
          <div className="flex gap-8 text-[9px] font-bold tracking-[0.3em] uppercase text-white/40">
            <span className="cursor-pointer hover:text-white/70 transition-colors">Privacy</span>
            <span className="cursor-pointer hover:text-white/70 transition-colors">Terms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}