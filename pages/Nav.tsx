import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Nav() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/#features', label: 'Features' },
    { href: '/merchants', label: 'Merchants' },
    { href: '/community', label: 'ZedSats' },
    { href: '/blog', label: 'Blog' },
    { href: '/support', label: 'Support' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      borderBottom: '1px solid rgba(12,12,12,0.08)',
      background: 'rgba(250,250,248,0.85)',
      backdropFilter: 'blur(16px)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 24px',
        height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="#F7931A" opacity="0.15" />
            <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#F7931A" strokeWidth="1.5" />
            <path d="M9 14l3.5 3.5L19 10" stroke="#F7931A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, letterSpacing: '-0.02em', color: 'var(--black)' }}>
            ZamPOS
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily: 'var(--font-body)',
              fontSize: 14,
              fontWeight: 500,
              color: router.asPath === l.href ? 'var(--orange)' : 'var(--gray-500)',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--orange)')}
            onMouseLeave={e => (e.currentTarget.style.color = router.asPath === l.href ? 'var(--orange)' : 'var(--gray-500)')}
            >{l.label}</Link>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href="https://zampos.vercel.app"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'var(--orange)',
              color: '#fff',
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 13,
              padding: '10px 20px',
              borderRadius: 10,
              letterSpacing: '0.01em',
              transition: 'background 0.2s, transform 0.15s',
              display: 'inline-block',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Launch App ⚡
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-menu-btn"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {open ? (
                <path d="M5 5l12 12M17 5L5 17" stroke="var(--gray-700)" strokeWidth="2" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="3" y1="7" x2="19" y2="7" stroke="var(--gray-700)" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="13" x2="19" y2="13" stroke="var(--gray-700)" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(12,12,12,0.08)',
          background: 'var(--white)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display: 'block', padding: '12px 0',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
              color: 'var(--gray-700)',
              borderBottom: '1px solid var(--gray-100)',
            }}>{l.label}</Link>
          ))}
          <a href="https://zampos.vercel.app" target="_blank" rel="noreferrer" style={{
            display: 'block', marginTop: 16,
            background: 'var(--orange)', color: '#fff',
            textAlign: 'center', padding: '14px', borderRadius: 10,
            fontFamily: 'var(--font-display)', fontWeight: 700,
          }}>Launch App ⚡</a>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  )
}