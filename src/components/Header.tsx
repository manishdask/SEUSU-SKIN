import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const navLinks = ['Story', 'Science', 'Products', 'Philosophy', 'Packaging', 'Contact'];

export default function Header() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const location                    = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (item: string) =>
    location.pathname === `/${item.toLowerCase()}` ||
    (item === 'Story' && location.pathname === '/');

  return (
    <>
      {/* ── HEADER BAR ─────────────────────────────── */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3'
            : 'bg-white/90 backdrop-blur-sm py-5'
        }`}
      >
        {/* Thin brand-blue accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#336699] to-transparent opacity-60" />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="relative group shrink-0">
            <img
              src={logo}
              alt="SEUSU SKIN"
              className="h-9 lg:h-11 w-auto block transition-all duration-300 group-hover:opacity-80"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(item => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className={`relative text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300
                  ${isActive(item) ? 'text-[#336699]' : 'text-[#336699]/70 hover:text-[#336699]'}
                  after:absolute after:left-0 after:-bottom-0.5 after:h-px after:bg-[#336699]
                  after:transition-all after:duration-300
                  ${isActive(item) ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
                `}
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* RIGHT: CTA + HAMBURGER */}
          <div className="flex items-center gap-4">
            {/* Shop CTA – desktop only */}
            <Link
              to="/products"
              className="btn-shimmer hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] rounded-none bg-[#336699] text-white hover:bg-[#1e4a73] transition-colors duration-300"
            >
              Shop Now
            </Link>

            {/* HAMBURGER – mobile only */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            >
              <span className={`block h-[1.5px] bg-[#336699] transition-all duration-300 origin-center
                ${menuOpen ? 'w-6 rotate-45 translate-y-[5px]' : 'w-6'}`} />
              <span className={`block h-[1.5px] bg-[#336699] transition-all duration-300
                ${menuOpen ? 'w-0 opacity-0' : 'w-4'}`} />
              <span className={`block h-[1.5px] bg-[#336699] transition-all duration-300 origin-center
                ${menuOpen ? 'w-6 -rotate-45 -translate-y-[5px]' : 'w-6'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ────────────────────── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] lg:hidden"
          onClick={() => setMenuOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Drawer */}
          <div
            className="mobile-menu-enter absolute top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white flex flex-col shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-[#D2D2D2]/40">
              <img src={logo} alt="SEUSU SKIN" className="h-8 w-auto" />
              <button
                onClick={() => setMenuOpen(false)}
                className="w-8 h-8 flex items-center justify-center text-[#336699] hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1l16 16M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {navLinks.map((item, i) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center gap-4 py-4 border-b border-[#D2D2D2]/30 transition-all duration-200
                    ${isActive(item) ? 'text-[#336699]' : 'text-black/50 hover:text-[#336699]'}`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <span className={`text-[10px] font-light tracking-widest transition-colors duration-200
                    ${isActive(item) ? 'text-[#336699]' : 'text-[#D2D2D2]'}`}>
                    0{i + 1}
                  </span>
                  <span className="text-[13px] font-bold tracking-[0.3em] uppercase">{item}</span>
                  <span className={`ml-auto text-[#336699] transition-all duration-300
                    ${isActive(item) ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="px-8 py-8 border-t border-[#D2D2D2]/30">
              <Link
                to="/products"
                className="btn-shimmer block w-full py-4 text-center text-xs font-bold tracking-[0.3em] uppercase bg-[#336699] text-white hover:bg-[#1e4a73] transition-colors duration-300"
              >
                Shop Now
              </Link>
              <p className="text-center text-[9px] tracking-[0.3em] uppercase text-black/25 mt-4">
                Depth Redefined · Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}