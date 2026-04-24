import { useState } from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

const faqs = [
  { q: 'How do I get started with ZamPOS?', a: "Click 'Start Selling' on the homepage and register with your shop name and phone number. It takes less than 2 minutes and you're ready to accept payments." },
  { q: 'Do I need a bank account?', a: 'No! ZamPOS works without a bank account. You can accept payments and store them in your ZamPOS balance, then withdraw to a Lightning wallet anytime.' },
  { q: 'What is a Lightning wallet?', a: "A Lightning wallet lets you send and receive Bitcoin instantly. We recommend Wallet of Satoshi, Blink, or Phoenix Wallet — all free and available on Android and iOS." },
  { q: 'What are the fees?', a: 'ZamPOS charges 0.5% on each transaction. There are no monthly fees, no signup fees, and no hidden charges.' },
  { q: 'How does the SMS confirmation work?', a: "When a customer pays, you receive an SMS on your phone with the amount paid in Kwacha. This works even if you don't have mobile internet at that moment." },
  { q: 'How do I withdraw my funds?', a: "Go to your ZamPOS dashboard, tap 'Withdraw', enter your Lightning wallet address (like a Lightning Address or LNURL), and your funds arrive instantly." },
  { q: 'What if the customer has a bad internet connection?', a: 'The QR code is generated on your device and can be displayed even offline. The customer pays from their wallet and you get confirmation once the payment settles.' },
  { q: "What if I don't have a Lightning wallet yet?", a: "Use ZamPOS's custodial mode — your funds are held safely in your ZamPOS balance. You can set up a wallet later and withdraw at any time." },
]

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{
      border: '1px solid rgba(12,12,12,0.08)', borderRadius: 12, overflow: 'hidden',
      transition: 'border-color 0.2s',
      borderColor: open ? 'rgba(247,147,26,0.3)' : 'rgba(12,12,12,0.08)',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '18px 20px', textAlign: 'left', background: 'none', border: 'none',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 15, color: 'var(--black)' }}>{q}</span>
        <span style={{
          width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
          background: open ? 'var(--orange)' : 'var(--gray-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 14, color: open ? '#fff' : 'var(--gray-500)',
          transition: 'all 0.2s', transform: open ? 'rotate(45deg)' : 'rotate(0)',
        }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 18px', fontSize: 14, color: 'var(--gray-500)', lineHeight: 1.7 }}>{a}</div>
      )}
    </div>
  )
}

export default function Support() {
  return (
    <>
      <Head>
        <title>Support — ZamPOS</title>
        <meta name="description" content="Get help with ZamPOS. Contact support, browse FAQs, and find answers to common questions." />
      </Head>

      <Nav />

      <section style={{ paddingTop: 120, paddingBottom: 60, textAlign: 'center', padding: '120px 24px 60px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Help Center</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 12 }}>
          How can we help?
        </h1>
        <p style={{ fontSize: 16, color: 'var(--gray-500)', maxWidth: 400, margin: '0 auto' }}>
          Browse the FAQ or reach out directly. We're here to help every Zambian merchant succeed.
        </p>
      </section>

      {/* Contact channels */}
      <section style={{ padding: '0 24px 60px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { icon: '✉️', label: 'Email', value: 'simeonmwale100@gmail.com', sub: 'Reply within 24 hours', href: 'mailto:simeonmwale100@gmail.com' },
            { icon: '✈️', label: 'Telegram', value: '@ZedSats', sub: 'Fastest response', href: 'https://t.me/ZedSats' },
            { icon: '📞', label: 'Call / WhatsApp', value: '+260 978 511 578', sub: 'Mon–Sat, 8am–6pm CAT', href: 'tel:+260978511578' },
          ].map(c => (
            <a key={c.label} href={c.href} style={{
              padding: '24px', borderRadius: 14, border: '1px solid rgba(12,12,12,0.08)',
              background: '#fff', display: 'block', textDecoration: 'none', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--orange)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(12,12,12,0.08)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div style={{ fontSize: 28, marginBottom: 12 }}>{c.icon}</div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--black)', marginBottom: 4 }}>{c.label}</p>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--orange)', marginBottom: 4 }}>{c.value}</p>
              <p style={{ fontSize: 12, color: 'var(--gray-500)' }}>{c.sub}</p>
            </a>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '60px 24px 96px', background: 'var(--gray-100)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.02em', color: 'var(--black)', marginBottom: 32, textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {faqs.map((faq, i) => (
              <FAQ key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}