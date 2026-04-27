import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

export default function Merchants() {
  return (
    <>
      <Head>
        <title>For Merchants — ZamPOS | Accept Bitcoin Lightning Payments</title>
        <meta name="description" content="Start accepting Bitcoin Lightning payments at your Zambian business today. Direct to your wallet. No bank account needed. Lower fees." />
        <meta name="keywords" content="Zambia merchants, Bitcoin payments, Lightning Network, ZamPOS, accept crypto" />
        <meta property="og:title" content="ZamPOS — For Merchants" />
        <meta property="og:description" content="Accept Bitcoin Lightning payments. Direct to your wallet. No bank account needed." />
        <meta property="og:type" content="website" />
      </Head>

      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 80, background: 'var(--black)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(247,147,26,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 16 }}>For Merchants</p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.03em', lineHeight: 1.0, maxWidth: 700, marginBottom: 20 }}>
            Accept Bitcoin.<br />
            <span style={{ color: 'var(--orange)' }}>Keep more.</span><br />
            Grow faster.
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(250,250,248,0.5)', maxWidth: 480, lineHeight: 1.65, marginBottom: 36 }}>
            ZamPOS gives Zambian merchants a simple, low-cost way to accept global Bitcoin payments — direct to your Lightning wallet.
          </p>
          <a href="https://zampos.vercel.app" target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'var(--orange)', color: '#fff',
            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
            padding: '14px 28px', borderRadius: 12, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Register Your Shop ⚡
          </a>
        </div>
      </section>

      {/* Benefits vs competition */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 36, textAlign: 'center' }}>Compare the options</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'var(--font-body)' }}>
              <thead>
                <tr>
                  <th style={{ padding: '12px 16px', textAlign: 'left', color: 'var(--gray-500)', fontWeight: 500, borderBottom: '2px solid var(--gray-300)', fontSize: 13 }}>Feature</th>
                  {['ZamPOS ⚡', 'Card Terminal', 'Mobile Money'].map(h => (
                    <th key={h} style={{
                      padding: '12px 16px', textAlign: 'center',
                      fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 13,
                      color: h.startsWith('ZamPOS') ? 'var(--orange)' : 'var(--gray-700)',
                      borderBottom: `2px solid ${h.startsWith('ZamPOS') ? 'var(--orange)' : 'var(--gray-300)'}`,
                      background: h.startsWith('ZamPOS') ? 'rgba(247,147,26,0.04)' : 'transparent',
                    }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ['Transaction fee', '0.5%', '2–3.5%', '1–2%'],
                  ['Bank account needed', '❌ No', '✅ Yes', '✅ Yes'],
                  ['Settlement time', '⚡ Instant', '1–3 days', 'Minutes'],
                  ['Chargebacks', '❌ None', '⚠️ Possible', '⚠️ Possible'],
                  ['SMS confirmation', '✅ Yes', '❌ No', '✅ Yes'],
                  ['Works without internet', '⚠️ Partial', '❌ No', '✅ Yes'],
                  ['Hardware required', '❌ None', '✅ Terminal', '❌ None'],
                  ['Direct to your wallet', '✅ Yes', '❌ No', '⚠️ Limited'],
                ].map(([feature, ...vals], i) => (
                  <tr key={feature} style={{ background: i % 2 === 0 ? '#fff' : 'transparent' }}>
                    <td style={{ padding: '14px 16px', color: 'var(--gray-700)', fontWeight: 500 }}>{feature}</td>
                    {vals.map((v, j) => (
                      <td key={j} style={{
                        padding: '14px 16px', textAlign: 'center',
                        color: j === 0 ? 'var(--orange)' : 'var(--gray-500)',
                        fontWeight: j === 0 ? 600 : 400,
                        background: j === 0 ? 'rgba(247,147,26,0.04)' : 'transparent',
                        fontFamily: j === 0 ? 'var(--font-mono)' : 'inherit',
                        fontSize: j === 0 ? 13 : 14,
                      }}>{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: 'var(--black)' }}>
              Why merchants love ZamPOS
            </h2>
            <p style={{ fontSize: 16, color: 'var(--gray-500)', marginTop: 16 }}>
              Built to solve real problems for Zambian businesses
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                icon: '💸',
                title: 'Direct to Your Wallet',
                desc: 'Payments go straight to your Lightning wallet. No holding period. You control your funds instantly.',
              },
              {
                icon: '💰',
                title: 'Lower Fees',
                desc: 'Just 0.5% vs 2-3% for cards or mobile money. Save thousands per year.',
              },
              {
                icon: '⚡',
                title: 'Instant Settlement',
                desc: 'Get paid in seconds, not days. No waiting for bank transfers to clear.',
              },
              {
                icon: '🌍',
                title: 'Global Customers',
                desc: 'Accept Bitcoin from anyone, anywhere in the world. No currency conversion needed.',
              },
              {
                icon: '📱',
                title: 'No Hardware',
                desc: 'Works on any smartphone. Nothing to buy or install.',
              },
              {
                icon: '🔒',
                title: 'No Chargebacks',
                desc: 'Bitcoin payments are final. Never lose money to fraudulent disputes.',
              },
            ].map(b => (
              <div key={b.title} style={{
                padding: '28px 24px',
                border: '1px solid rgba(12,12,12,0.08)', borderRadius: 16,
                background: '#fff', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(12,12,12,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 36, marginBottom: 16 }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--black)', marginBottom: 12 }}>{b.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--gray-500)' }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 56, textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: 'var(--black)' }}>
              Perfect for any Zambian business
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { emoji: '🥬', label: 'Market Vendors' },
              { emoji: '☕', label: 'Cafés & Restaurants' },
              { emoji: '💇', label: 'Salons & Barbers' },
              { emoji: '🛒', label: 'Tuck Shops' },
              { emoji: '🔧', label: 'Repair Services' },
              { emoji: '🎓', label: 'Tutors & Teachers' },
              { emoji: '🚕', label: 'Transport Services' },
              { emoji: '📦', label: 'Online Sellers' },
              { emoji: '🏢', label: 'NGOs & Churches' },
              { emoji: '🎨', label: 'Artists & Crafts' },
            ].map(b => (
              <div key={b.label} style={{
                padding: '28px 20px', textAlign: 'center',
                border: '1px solid rgba(12,12,12,0.08)', borderRadius: 14,
                background: '#fff', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(12,12,12,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{b.emoji}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 14, color: 'var(--gray-700)' }}>{b.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 48 }}>
            Get started in 3 simple steps
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32 }}>
            {[
              { step: '01', title: 'Register', desc: 'Sign up with your shop name and get your Lightning wallet address ready.' },
              { step: '02', title: 'Accept', desc: 'Enter amount in Kwacha. Customer scans QR code and pays with any Lightning wallet.' },
              { step: '03', title: 'Get Paid', desc: 'Sats go directly to your wallet. Instant confirmation on screen and by SMS.' },
            ].map(s => (
              <div key={s.step}>
                <div style={{
                  width: 60, height: 60, borderRadius: '50%', background: 'var(--orange-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 22, color: 'var(--orange)' }}>{s.step}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--black)', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '80px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 40, textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'grid', gap: 20 }}>
            {[
              {
                q: 'Do I need a bank account?',
                a: 'No. ZamPOS works with Lightning wallets. You can get paid directly to your wallet without any bank account.'
              },
              {
                q: 'How do I get a Lightning wallet?',
                a: 'We recommend Breez, Wallet of Satoshi, or Phoenix. All are free and easy to set up on your phone.'
              },
              {
                q: 'What are the fees?',
                a: 'ZamPOS charges just 0.5% per transaction. That\'s up to 6x lower than card terminals or mobile money.'
              },
              {
                q: 'Is Bitcoin volatile?',
                a: 'ZamPOS converts amounts to sats at the current rate instantly. Your customer pays a fixed Kwacha amount in sats at that moment.'
              },
              {
                q: 'Can my customers pay with mobile money?',
                a: 'Coming soon! We\'re working on adding mobile money support as a payment option. 🔜'
              },
              {
                q: 'Do you hold my funds?',
                a: 'No. Payments go directly to your Lightning wallet. We don\'t store or control your money at any point.'
              },
            ].map((faq, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 12, padding: '24px',
                border: '1px solid rgba(12,12,12,0.06)',
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 16, color: 'var(--black)', marginBottom: 12 }}>{faq.q}</h3>
                <p style={{ fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.65 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', background: 'var(--orange)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: '#fff', marginBottom: 16 }}>
            Start selling with Bitcoin today
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.75)', marginBottom: 32 }}>
            Takes 2 minutes to register. No hardware. No bank account. Direct to your wallet.
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