import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About — ZamPOS | Bitcoin Lightning for Zambian Merchants</title>
        <meta name="description" content="ZamPOS is a Bitcoin Lightning point-of-sale system built for Zambian merchants. Direct to your wallet. No bank account needed." />
        <meta name="keywords" content="ZamPOS, Simeon Mwale, Bitcoin Zambia, Lightning payments" />
      </Head>

      <Nav />

      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--black)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 600, height: 300, background: 'radial-gradient(circle, rgba(247,147,26,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 800, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 16 }}>Our Mission</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24, color: 'var(--white)' }}>
            Making Bitcoin work<br />
            <span style={{ color: 'var(--orange)' }}>for everyday Zambians</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(250,250,248,0.5)', lineHeight: 1.7 }}>
            ZamPOS was built by <strong style={{ color: 'var(--white)' }}>Simeon Mwale</strong> — a Zambian developer and Computer Science student at DMI St. Eugene University in Lusaka. He saw a clear gap: market vendors, tuck shop owners, and small business operators had no low-cost way to accept digital payments directly to their wallets without a bank account.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {[
            {
              label: 'The Problem',
              title: 'Traditional payments exclude too many',
              body: `In Zambia, millions of small business owners operate entirely in cash. Card terminals require bank accounts, high monthly fees, and expensive hardware. Mobile money works, but fees add up and settlements can be slow. Bitcoin changes all of that — if the tools are built right.`,
            },
            {
              label: 'The Solution',
              title: 'Lightning-fast, low-cost, and simple',
              body: `ZamPOS uses the Bitcoin Lightning Network — a payment layer on top of Bitcoin that enables instant, near-zero-fee transactions. Merchants register with just a phone number and their Lightning wallet, accept payments in Kwacha (converted automatically), and receive SMS confirmations — all with funds going directly to their own wallet.`,
            },
            {
              label: 'The Vision',
              title: 'A Zambian Bitcoin circular economy',
              body: `We're building more than a payment app. ZamPOS is a foundation for a Bitcoin circular economy in Zambia — where merchants earn Bitcoin, spend Bitcoin, and grow Bitcoin adoption from the ground up. This is part of the BitDevs Zambia community's broader mission.`,
            },
          ].map((s, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'start',
              paddingBottom: 56, marginBottom: 56,
              borderBottom: i < 2 ? '1px solid rgba(12,12,12,0.08)' : 'none',
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 8 }}>{s.label}</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, letterSpacing: '-0.02em', color: 'var(--black)', lineHeight: 1.25 }}>{s.title}</h2>
              </div>
              <p style={{ fontSize: 16, color: 'var(--gray-500)', lineHeight: 1.75, paddingTop: 28 }}>{s.body}</p>

              <style>{`@media (max-width: 600px) { div { grid-template-columns: 1fr !important; } }`}</style>
            </div>
          ))}
        </div>
      </section>

      {/* Builder section */}
      <section style={{ padding: '80px 24px', background: 'var(--white)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 40, alignItems: 'center' }}>
          <div style={{ width: 100, height: 100, borderRadius: '50%', background: 'var(--orange-light)', border: '3px solid rgba(247,147,26,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, flexShrink: 0 }}>
            🧑‍💻
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 8 }}>Builder</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 12 }}>Simeon Mwale</h2>
            <p style={{ fontSize: 15, color: 'var(--gray-500)', lineHeight: 1.75, marginBottom: 16 }}>
              Final-year Computer Science student at DMI St. Eugene University, Lusaka. Freelance full-stack developer specialising in Bitcoin, Lightning, and AgriTech for African markets. Active member of BitDevs Zambia and the ZedSats community.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="https://github.com/Simeon-Mwale" target="_blank" rel="noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--gray-700)', border: '1px solid var(--gray-300)', borderRadius: 8, padding: '7px 14px', transition: 'all 0.2s', fontWeight: 500 }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.color = 'var(--gray-700)'; }}
              >GitHub →</a>
            </div>
          </div>
          <style>{`@media (max-width: 560px) { div[style*="grid-template-columns: auto 1fr"] { grid-template-columns: 1fr !important; text-align: center; } }`}</style>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 48 }}>What we believe</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { icon: '🏛️', value: 'Financial Sovereignty', desc: 'Everyone has the right to control their own money, directly in their own wallet.' },
              { icon: '🔗', value: 'Open Infrastructure', desc: 'Built on Bitcoin — the most open payment network in the world.' },
              { icon: '🇿🇲', value: 'Local Context', desc: 'Tools should be designed for the people who use them.' },
              { icon: '📉', value: 'Low Barriers', desc: 'Technology should be accessible, not a luxury.' },
            ].map(v => (
              <div key={v.value} style={{ padding: '28px 24px', background: '#fff', borderRadius: 14, border: '1px solid rgba(12,12,12,0.07)' }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--black)', marginBottom: 8 }}>{v.value}</h3>
                <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section style={{ padding: '60px 24px', background: 'var(--orange-light)' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--orange)', marginBottom: 8 }}>🔜 Coming Soon</h3>
          <p style={{ fontSize: 14, color: 'var(--gray-600)' }}>
            Custodial wallets, auto-sweeps, and more features are in development. Stay tuned!
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}