import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(12,12,12,0.1)',
      background: 'var(--black)',
      color: 'var(--white)',
      padding: '64px 24px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, marginBottom: 64 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="#F7931A" opacity="0.3" />
                <polygon points="14,2 26,8 26,20 14,26 2,20 2,8" fill="none" stroke="#F7931A" strokeWidth="1.5" />
                <path d="M9 14l3.5 3.5L19 10" stroke="#F7931A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 17, letterSpacing: '-0.02em' }}>ZamPOS</span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.45)', lineHeight: 1.7, maxWidth: 200 }}>
              Bitcoin Lightning point-of-sale for Zambian merchants.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['T', 'W', 'G'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(250,250,248,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 600, color: 'rgba(250,250,248,0.5)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(247,147,26,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(250,250,248,0.08)'}
                >{icon}</a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(250,250,248,0.3)', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>Product</p>
            {[['/#features', 'Features'], ['/merchants', 'For Merchants'], ['/pricing', 'Pricing'], ['https://zampos.vercel.app', 'Launch App']].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 14, color: 'rgba(250,250,248,0.5)', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,250,248,0.5)'}
              >{label}</Link>
            ))}
          </div>

          {/* Community */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(250,250,248,0.3)', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>Community</p>
            {[['/community', 'ZedSats'], ['/blog', 'Blog'], ['/support', 'Support'], ['https://t.me/ZedSats', 'Telegram']].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 14, color: 'rgba(250,250,248,0.5)', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,250,248,0.5)'}
              >{label}</Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(250,250,248,0.3)', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'var(--font-mono)' }}>Legal</p>
            {[['/terms', 'Terms of Service'], ['/privacy', 'Privacy Policy'], ['/about', 'About']].map(([href, label]) => (
              <Link key={href} href={href} style={{ display: 'block', fontSize: 14, color: 'rgba(250,250,248,0.5)', marginBottom: 10, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--orange)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,250,248,0.5)'}
              >{label}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(250,250,248,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(250,250,248,0.3)' }}>
            © 2026 ZamPOS. Empowering Zambian merchants with Bitcoin Lightning.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse-dot 2s ease infinite' }} />
            <span style={{ fontSize: 12, color: 'rgba(250,250,248,0.3)', fontFamily: 'var(--font-mono)' }}>System operational</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </footer>
  )
}
