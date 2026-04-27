import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://zampos.onrender.com'

function Ticker() {
  const items = ['⚡ Bitcoin Lightning', '🇿🇲 Built for Zambia', '💬 SMS Confirmations', '🔒 No Chargebacks', '⚡ Instant Settlement', '0.5% Fee', '📱 Works on Any Phone', '💸 Direct to Your Wallet']
  const doubled = [...items, ...items]
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(12,12,12,0.06)', borderBottom: '1px solid rgba(12,12,12,0.06)', background: 'var(--orange-light)', padding: '12px 0' }}>
      <div style={{ display: 'flex', gap: 48, animation: 'ticker 22s linear infinite', width: 'max-content' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, color: 'var(--orange)', whiteSpace: 'nowrap', letterSpacing: '0.05em' }}>{item}</span>
        ))}
      </div>
      <style>{`@keyframes ticker { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  )
}

export default function Home() {
  const [rate, setRate] = useState<number | null>(null)
  const [rateLoading, setRateLoading] = useState(true)

  useEffect(() => {
    fetch(`${API_URL}/price/rate`)
      .then(r => r.json())
      .then(d => { setRate(d.sats_per_zmw); setRateLoading(false) })
      .catch(() => setRateLoading(false))
  }, [])

  return (
    <>
      <Head>
        <title>ZamPOS — Bitcoin Lightning Payments for Zambia</title>
        <meta name="description" content="Accept Bitcoin Lightning payments instantly. Direct to your Lightning wallet. No bank account needed. SMS confirmations in Kwacha." />
        <meta name="keywords" content="Bitcoin, Lightning, Zambia, POS, Payment, ZMW, Kwacha, Direct Wallet" />
        <meta property="og:title" content="ZamPOS — Bitcoin Lightning POS for Zambian Merchants" />
        <meta property="og:description" content="Accept Bitcoin payments directly to your Lightning wallet. No bank account needed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zampos.vercel.app" />
      </Head>

      <Nav />

      {/* Hero */}
      <section style={{ paddingTop: 120, paddingBottom: 0, position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {/* Background mesh */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(247,147,26,0.07) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: -200, right: -200, width: 600, height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(247,147,26,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          {/* Live rate badge */}
          <div className="fade-up" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: rateLoading ? 'var(--gray-100)' : 'var(--orange-light)',
            border: `1px solid ${rateLoading ? 'var(--gray-300)' : 'rgba(247,147,26,0.25)'}`,
            borderRadius: 100, padding: '6px 14px', marginBottom: 28,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse-dot 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: rateLoading ? 'var(--gray-500)' : 'var(--orange)', letterSpacing: '0.04em' }}>
              {rateLoading ? 'Fetching live rate...' : rate ? `${rate.toFixed(1)} sats / ZMW  ·  Live` : 'Rate unavailable'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="fade-up fade-up-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(42px, 7vw, 88px)',
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: 'var(--black)',
            maxWidth: 820,
            marginBottom: 24,
          }}>
            Accept Bitcoin<br />
            <span style={{ color: 'var(--orange)', position: 'relative' }}>
              Lightning
              <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%' }} viewBox="0 0 300 8" fill="none" preserveAspectRatio="none">
                <path d="M0 6 Q75 2 150 5 Q225 8 300 4" stroke="#F7931A" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.4" />
              </svg>
            </span>{' '}
            Payments
          </h1>

          <p className="fade-up fade-up-2" style={{ fontSize: 'clamp(16px, 2vw, 20px)', color: 'var(--gray-500)', maxWidth: 520, lineHeight: 1.6, marginBottom: 40 }}>
            Direct to your Lightning wallet. No bank account needed. Instant settlement. SMS confirmation in Kwacha.
          </p>

          <div className="fade-up fade-up-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="https://zampos.vercel.app"
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: 'var(--orange)', color: '#fff',
                fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
                padding: '14px 28px', borderRadius: 12,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(247,147,26,0.35)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Start Selling ⚡
            </a>
            <Link href="#how-it-works" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1.5px solid var(--gray-300)', color: 'var(--gray-700)',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
              padding: '14px 28px', borderRadius: 12,
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.color = 'var(--gray-700)'; }}
            >
              How it Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="fade-up fade-up-4" style={{ display: 'flex', gap: 24, marginTop: 48, flexWrap: 'wrap' }}>
            {['No bank account needed', 'Direct to your wallet', '0.5% only', 'Works offline-friendly'].map((b, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="7" fill="rgba(247,147,26,0.15)" /><path d="M4.5 7l1.8 1.8L9.5 5" stroke="#F7931A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span style={{ fontSize: 13, color: 'var(--gray-500)', fontWeight: 500 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Floating POS mockup */}
        <div className="fade-up fade-up-5" style={{ maxWidth: 1200, margin: '60px auto 0', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--black) 0%, #1a1a1a 100%)',
            borderRadius: '20px 20px 0 0',
            padding: '28px 28px 0',
            maxWidth: 680,
            margin: '0 auto',
            boxShadow: '0 -8px 40px rgba(0,0,0,0.12)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderBottom: 'none',
          }}>
            {/* Browser chrome */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 16 }}>
              {['#ff5f57','#ffbd2e','#28ca42'].map(c => <span key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />)}
              <div style={{ flex: 1, height: 24, background: 'rgba(255,255,255,0.06)', borderRadius: 6, marginLeft: 12, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.3)' }}>zampos.vercel.app</span>
              </div>
            </div>

            {/* App UI mockup */}
            <div style={{ background: 'var(--white)', borderRadius: '10px 10px 0 0', padding: 20 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--gray-500)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Market Shop</p>
                  <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--black)' }}>New Payment</p>
                </div>
                <div style={{ background: 'var(--orange-light)', border: '1px solid rgba(247,147,26,0.2)', borderRadius: 8, padding: '4px 10px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)' }}>⚡ Lightning</span>
                </div>
              </div>

              <div style={{ background: 'var(--gray-100)', borderRadius: 12, padding: 20, marginBottom: 16, textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--gray-500)', marginBottom: 4 }}>Amount</p>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, color: 'var(--black)', letterSpacing: '-0.03em' }}>K 50.00</p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--orange)', marginTop: 4 }}>≈ 1,420 sats</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 16 }}>
                {['1','2','3','4','5','6','7','8','9','K','0','⌫'].map(k => (
                  <div key={k} style={{
                    background: k === 'K' ? 'var(--orange-light)' : '#fff',
                    border: `1px solid ${k === 'K' ? 'rgba(247,147,26,0.3)' : 'var(--gray-100)'}`,
                    borderRadius: 8, padding: '12px', textAlign: 'center',
                    fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 16,
                    color: k === 'K' ? 'var(--orange)' : 'var(--gray-700)',
                  }}>{k}</div>
                ))}
              </div>

              <div style={{ background: 'var(--orange)', borderRadius: 10, padding: '14px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14, color: '#fff' }}>Generate QR Code ⚡</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker */}
      <Ticker />

      {/* Stats bar */}
      <section style={{ padding: '60px 24px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 8 }}>
          {[
            { value: '0.5%', label: 'Transaction fee' },
            { value: '⚡ <1s', label: 'Settlement time' },
            { value: '24/7', label: 'Always available' },
            { value: '📱 SMS', label: 'Payment alerts' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center', padding: '24px 16px' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 32, color: 'var(--orange)', letterSpacing: '-0.03em', marginBottom: 6 }}>{s.value}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--gray-500)', fontWeight: 500 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, maxWidth: 560 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Features</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1.1 }}>
              Everything you need<br />to start selling
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              {
                icon: '⚡',
                title: 'Lightning Fast',
                desc: 'Payments settle in under a second on the Bitcoin Lightning Network. No bank transfers, no waiting days.',
                accent: true,
              },
              {
                icon: '📱',
                title: 'SMS Confirmation',
                desc: 'Get an SMS alert the moment a customer pays. Works on any phone, even without internet.',
              },
              {
                icon: '🔒',
                title: 'No Chargebacks',
                desc: 'Bitcoin payments are final and irreversible. Never lose money to fraudulent reversals.',
              },
              {
                icon: '💰',
                title: 'Just 0.5% Fee',
                desc: 'Far lower than card terminals or mobile money. Keep more of every sale you make.',
              },
              {
                icon: '💸',
                title: 'Direct to Your Wallet',
                desc: 'Payments go straight to your Lightning wallet. No storing funds with us. You control your money.',
              },
              {
                icon: '🇿🇲',
                title: 'Built for Zambia',
                desc: 'Prices shown in Kwacha. Designed for market vendors, tuck shops, and small businesses.',
              },
            ].map(f => (
              <div key={f.title} style={{
                padding: 28, borderRadius: 16,
                background: f.accent ? 'var(--orange)' : '#fff',
                border: `1px solid ${f.accent ? 'transparent' : 'rgba(12,12,12,0.08)'}`,
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = f.accent ? '0 12px 40px rgba(247,147,26,0.4)' : '0 8px 30px rgba(0,0,0,0.08)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: f.accent ? '#fff' : 'var(--black)', marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.65, color: f.accent ? 'rgba(255,255,255,0.8)' : 'var(--gray-500)' }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" style={{ padding: '96px 24px', background: 'var(--black)', color: 'var(--white)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 64, textAlign: 'center' }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Simple Process</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.03em', color: 'var(--white)', lineHeight: 1.1 }}>
              Start accepting in minutes
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 2 }}>
            {[
              { step: '01', title: 'Register Your Shop', desc: 'Sign up with your shop name and Lightning wallet address. Takes 2 minutes.' },
              { step: '02', title: 'Open the App', desc: 'Access ZamPOS from any browser. No installation needed.' },
              { step: '03', title: 'Enter Amount', desc: 'Type the price in Kwacha. We convert to sats automatically.' },
              { step: '04', title: 'Customer Scans', desc: 'Show the QR code. Customer pays with any Lightning wallet.' },
              { step: '05', title: 'Get Paid Directly', desc: 'Sats go straight to your wallet. Instant confirmation on screen and SMS.' },
              { step: '06', title: 'Coming Soon', desc: 'Custodial wallets, auto withdrawals, and more features on the way! 🔜', coming: true },
            ].map((s, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                background: i === 0 ? 'rgba(247,147,26,0.1)' : 'transparent',
                borderLeft: i === 0 ? '2px solid var(--orange)' : '1px solid rgba(255,255,255,0.06)',
                opacity: s.coming ? 0.7 : 1,
              }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)', letterSpacing: '0.08em', marginBottom: 16 }}>{s.step}</p>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, color: 'var(--white)', marginBottom: 10 }}>
                  {s.title}
                  {s.coming && <span style={{ fontSize: 10, marginLeft: 8, background: 'rgba(247,147,26,0.2)', padding: '2px 6px', borderRadius: 20 }}>Soon</span>}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.65, color: 'rgba(250,250,248,0.45)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community CTA */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'var(--orange-light)', border: '1px solid rgba(247,147,26,0.2)', borderRadius: 100, padding: '6px 14px', marginBottom: 28 }}>
            <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--orange)', letterSpacing: '0.06em' }}>🇿🇲 BITCOIN ZAMBIA</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 52px)', letterSpacing: '-0.03em', color: 'var(--black)', lineHeight: 1.1, marginBottom: 20 }}>
            Join the Lightning<br />revolution in Zambia
          </h2>
          <p style={{ fontSize: 17, color: 'var(--gray-500)', lineHeight: 1.65, maxWidth: 500, margin: '0 auto 40px' }}>
            Connect with other Bitcoin merchants, developers, and enthusiasts building the future of money in Zambia.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://zampos.vercel.app" target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'var(--orange)', color: '#fff',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15,
              padding: '14px 28px', borderRadius: 12, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--orange-dark)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >Start Selling ⚡</a>
            <Link href="/community" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              border: '1.5px solid var(--gray-300)', color: 'var(--gray-700)',
              fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15,
              padding: '14px 28px', borderRadius: 12, transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.color = 'var(--orange)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-300)'; e.currentTarget.style.color = 'var(--gray-700)'; }}
            >Join Community</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}