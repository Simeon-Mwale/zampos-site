import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing — ZamPOS | Just 0.5% Per Transaction</title>
        <meta name="description" content="ZamPOS charges just 0.5% per transaction. No monthly fees. No hidden charges. Direct to your Lightning wallet." />
        <meta name="keywords" content="ZamPOS pricing, Bitcoin payment fees, Lightning fees, 0.5% transaction fee" />
        <meta property="og:title" content="ZamPOS Pricing — Just 0.5%" />
        <meta property="og:description" content="No monthly fees. No hidden charges. Pay only when you get paid." />
        <meta property="og:type" content="website" />
      </Head>

      <Nav />

      <section style={{ paddingTop: 120, paddingBottom: 60, textAlign: 'center', padding: '120px 24px 60px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Simple Pricing</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 64px)', letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 16, lineHeight: 1.05 }}>
          Just 0.5%.<br />
          <span style={{ color: 'var(--orange)' }}>Nothing else.</span>
        </h1>
        <p style={{ fontSize: 17, color: 'var(--gray-500)', maxWidth: 460, margin: '0 auto' }}>
          No monthly fees. No hidden charges. No hardware costs. Pay only when you get paid — directly to your wallet.
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
                  'Direct to your Lightning wallet',
                  'Instant settlement',
                  'Connect any Lightning wallet',
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

              {/* Coming Soon notice */}
              <div style={{ 
                background: 'rgba(247,147,26,0.08)', 
                borderRadius: 10, 
                padding: '12px 16px', 
                marginBottom: 20,
                textAlign: 'center',
                border: '1px solid rgba(247,147,26,0.15)'
              }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                  🔜 Custodial wallets & auto-sweeps coming soon
                </span>
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
          <p style={{ fontSize: 15, color: 'var(--gray-500)', marginBottom: 32 }}>For every K100 you collect from a customer — sats go direct to your wallet:</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, borderRadius: 14, overflow: 'hidden', border: '1px solid rgba(12,12,12,0.08)' }}>
            {[
              { label: 'Sale Amount', value: 'K 100.00', sub: 'What the customer pays' },
              { label: 'ZamPOS Fee', value: 'K 0.50', sub: 'Just 50 ngwee', accent: true },
              { label: 'You Receive', value: 'K 99.50', sub: 'Direct to your wallet', accent: false },
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
            Compare: card terminals charge 2–3.5% + monthly fees. ZamPOS costs 7× less.
          </p>
        </div>
      </section>

      {/* Savings calculator */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 40 }}>
            How much will you save?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { volume: 'K 10,000', zampos: 'K 50', others: 'K 250–350', save: 'Up to K 300' },
              { volume: 'K 50,000', zampos: 'K 250', others: 'K 1,250–1,750', save: 'Up to K 1,500' },
              { volume: 'K 100,000', zampos: 'K 500', others: 'K 2,500–3,500', save: 'Up to K 3,000' },
              { volume: 'K 500,000', zampos: 'K 2,500', others: 'K 12,500–17,500', save: 'Up to K 15,000' },
            ].map(item => (
              <div key={item.volume} style={{
                padding: '28px 20px',
                border: '1px solid rgba(12,12,12,0.08)',
                borderRadius: 16,
                background: '#fff',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(12,12,12,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--orange)', letterSpacing: '-0.02em', marginBottom: 16 }}>{item.volume}</p>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>ZamPOS:</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--black)' }}>{item.zampos}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span style={{ fontSize: 12, color: 'var(--gray-500)' }}>Card/Fees:</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--gray-500)' }}>{item.others}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid rgba(12,12,12,0.08)', paddingTop: 8, marginTop: 4 }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--orange)' }}>You save:</span>
                    <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--orange)' }}>{item.save}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 32, textAlign: 'center' }}>
            Fee questions?
          </h2>
          <div style={{ display: 'grid', gap: 16 }}>
            {[
              {
                q: 'Is there a monthly subscription?',
                a: 'No. ZamPOS has zero monthly or annual fees. You only pay when you make a sale — 0.5% per transaction.'
              },
              {
                q: 'What about setup costs?',
                a: 'Zero. Registration is free. No hardware to buy. No installation fees.'
              },
              {
                q: 'Are there withdrawal fees?',
                a: 'No. Since payments go directly to your Lightning wallet, there are no withdrawal fees. Your sats are yours instantly.'
              },
              {
                q: 'What about hidden charges?',
                a: 'There are none. The 0.5% fee is all you pay. No currency conversion fees, no SMS fees, no hidden markups.'
              },
              {
                q: 'Is it really free to start?',
                a: 'Yes. Registration is completely free. You only pay when you start making sales — 0.5% per successful transaction.'
              },
            ].map((faq, i) => (
              <div key={i} style={{
                background: '#fff',
                borderRadius: 12,
                padding: '20px 24px',
                border: '1px solid rgba(12,12,12,0.06)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--black)', marginBottom: 8 }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--orange)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: '#fff', marginBottom: 16 }}>
            Start saving today
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
            Join hundreds of Zambian merchants already accepting Bitcoin Lightning with ZamPOS.
          </p>
          <a href="https://zampos.vercel.app" target="_blank" rel="noreferrer" style={{
            display: 'inline-block',
            background: '#fff', color: 'var(--orange)',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16,
            padding: '16px 36px', borderRadius: 12, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.2)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
          >
            Register Your Shop →
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}