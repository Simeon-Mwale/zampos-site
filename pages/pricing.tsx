import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing — ZamPOS</title>
        <meta name="description" content="ZamPOS charges just 0.5% per transaction. No monthly fees. No hidden charges." />
      </Head>

      <Nav />

      <section style={{ paddingTop: 120, paddingBottom: 60, textAlign: 'center', padding: '120px 24px 60px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Simple Pricing</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 16, lineHeight: 1.05 }}>
          Just 0.5%.<br />
          <span style={{ color: 'var(--orange)' }}>Nothing else.</span>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 460, margin: '0 auto' }}>
          No monthly fees. No hidden charges. No hardware costs. Pay only when you get paid.
        </p>
      </section>

      {/* Pricing card */}
      <section style={{ padding: '0 24px 80px' }}>
        <div style={{ maxWidth: 480, margin: '0 auto' }}>
          <div style={{
            border: '2px solid var(--orange)', borderRadius: 24, padding: 40,
            background: '#fff', position: 'relative', overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(247,147,26,0.12)',
          }}>
            <div style={{ position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%', background: 'rgba(247,147,26,0.06)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'inline-block', background: 'var(--orange)', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.1em', padding: '4px 12px', borderRadius: 100, marginBottom: 20, textTransform: 'uppercase' }}>Free to Start</div>

              <div style={{ marginBottom: 28 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 72, color: 'var(--black)', letterSpacing: '-0.04em', lineHeight: 1 }}>0.5%</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--gray-500)', marginLeft: 8 }}>per transaction</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 32 }}>
                {[
                  'No monthly or annual fee',
                  'No setup costs',
                  'No hardware required',
                  'Unlimited transactions',
                  'SMS confirmations included',
                  'Custodial balance — no wallet needed',
                  'Instant Lightning settlement',
                  'Withdraw to any Lightning wallet',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="rgba(247,147,26,0.12)" />
                      <path d="M5 8l2 2 4-4" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 14, color: 'var(--gray-700)' }}>{f}</span>
                  </div>
                ))}
              </div>

              <a href="https://zampos.vercel.app" target="_blank" rel="noreferrer" style={{
                display: 'block', width: '100%', textAlign: 'center',
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
                padding: '16px', borderRadius: 12, transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Start Selling for Free ⚡
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Example calculation */}
      <section style={{ padding: '60px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 12 }}>What 0.5% looks like</h2>
          <p style={{ fontSize: 15, color: 'var(--gray-500)', marginBottom: 32 }}>For every K100 you collect from a customer:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(12,12,12,0.08)' }}>
            {[
              { label: 'Sale Amount', value: 'K 100.00', sub: 'What the customer pays' },
              { label: 'ZamPOS Fee', value: 'K 0.50', sub: 'Just 50 ngwee', accent: true },
              { label: 'You Receive', value: 'K 99.50', sub: 'Instantly settled' },
            ].map(c => (
              <div key={c.label} style={{
                padding: '24px 16px', textAlign: 'center',
                background: c.accent ? 'var(--orange)' : '#fff',
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.06em', color: c.accent ? 'rgba(255,255,255,0.7)' : 'var(--gray-500)', marginBottom: 6, textTransform: 'uppercase' }}>{c.label}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: c.accent ? '#fff' : 'var(--black)', letterSpacing: '-0.02em', marginBottom: 4 }}>{c.value}</p>
                <p style={{ fontSize: 11, color: c.accent ? 'rgba(255,255,255,0.6)' : 'var(--gray-500)' }}>{c.sub}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 13, color: 'var(--gray-500)', marginTop: 20 }}>
            Compare: card terminals charge 2–3.5%. ZamPOS costs 7× less.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
