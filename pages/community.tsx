import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Community() {
  return (
    <>
      <Head>
        <title>ZedSats — Bitcoin Community Zambia</title>
        <meta name="description" content="Join ZedSats — Zambia's Bitcoin community. Merchants, developers, and Bitcoin enthusiasts building the Lightning economy together." />
      </Head>

      <Nav />

      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--black)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -150, left: '40%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(247,147,26,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(247,147,26,0.15)', border: '1px solid rgba(247,147,26,0.3)', borderRadius: 100, padding: '5px 14px', marginBottom: 20 }}>
            <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--orange)', letterSpacing: '0.06em' }}>⚡ ZedSats · BitDevs Zambia</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24, color: 'var(--white)' }}>
            ZedSats —<br />
            <span style={{ color: 'var(--orange)' }}>Zambia's Bitcoin Community</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(250,250,248,0.5)', lineHeight: 1.7, maxWidth: 560 }}>
            Merchants, developers, students, and everyday Zambians — building the Lightning economy together, one satoshi at a time.
          </p>
        </div>
      </section>

      {/* Join channels */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 32, textAlign: 'center' }}>
            Join the conversation
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {[
              { icon: '✈️', name: 'Telegram', desc: 'Real-time chat with the ZedSats community. News, tips, and support.', cta: 'Join Telegram', href: 'https://t.me/ZedSats' },
              { icon: '💬', name: 'WhatsApp Community', desc: 'Connect with Zambian merchants and get help getting started.', cta: 'Join WhatsApp', href: '#' },
              { icon: '🐦', name: 'Twitter / X', desc: 'Follow @ZedSats for updates, announcements, and Bitcoin news from Zambia.', cta: 'Follow @ZedSats', href: 'https://x.com/ZedSats' },
            ].map(c => (
              <div key={c.name} style={{
                padding: 28, borderRadius: 16,
                border: '1px solid rgba(12,12,12,0.08)', background: '#fff',
                display: 'flex', flexDirection: 'column', gap: 12,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(12,12,12,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 32 }}>{c.icon}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--black)', marginBottom: 6 }}>{c.name}</h3>
                  <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.6 }}>{c.desc}</p>
                </div>
                <a href={c.href} style={{
                  display: 'inline-block', marginTop: 'auto',
                  background: 'var(--orange-light)', color: 'var(--orange)',
                  fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                  padding: '10px 18px', borderRadius: 8, border: '1px solid rgba(247,147,26,0.2)',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(247,147,26,0.2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--orange-light)'}
                >{c.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who's in the community */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 40 }}>
            Who's in the community?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12 }}>
            {[
              { emoji: '🛒', label: 'Market Vendors', sub: 'Accepting BTC daily' },
              { emoji: '💻', label: 'Developers', sub: 'Building on Lightning' },
              { emoji: '🎓', label: 'Students', sub: 'Learning Bitcoin' },
              { emoji: '📣', label: 'Educators', sub: 'Spreading the word' },
              { emoji: '🌍', label: 'Diaspora', sub: 'Supporting from abroad' },
            ].map(w => (
              <div key={w.label} style={{ background: '#fff', borderRadius: 12, padding: '20px 16px', border: '1px solid rgba(12,12,12,0.06)' }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{w.emoji}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: 'var(--black)', marginBottom: 4 }}>{w.label}</p>
                <p style={{ fontSize: 12, color: 'var(--gray-500)' }}>{w.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BitDevs mention */}
      <section style={{ padding: '80px 24px', background: 'var(--orange)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(24px, 4vw, 36px)', letterSpacing: '-0.02em', color: '#fff', marginBottom: 16 }}>
            ZedSats × BitDevs Zambia
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
            ZedSats is Zambia's Bitcoin community — and ZamPOS is its flagship product. We're part of BitDevs Zambia, a community of builders and educators meeting regularly in Lusaka to grow the Lightning ecosystem.
          </p>
          <a href="https://zampos.vercel.app" target="_blank" rel="noreferrer" style={{
            display: 'inline-block', background: '#fff', color: 'var(--orange)',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
            padding: '14px 32px', borderRadius: 12, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Start Selling with ZamPOS ⚡
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}
