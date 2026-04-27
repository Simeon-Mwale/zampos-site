import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Terms() {
  return (
    <>
      <Head><title>Terms of Service — ZamPOS</title></Head>
      <Nav />
      <section style={{ paddingTop: 120, maxWidth: 760, margin: '0 auto', padding: '120px 24px 96px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 8 }}>Terms of Service</h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-500)', marginBottom: 40 }}>Last updated: April 2026</p>

        {[
          { title: '1. Acceptance of Terms', body: 'By accessing or using ZamPOS, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.' },
          { title: '2. Service Description', body: 'ZamPOS provides a Bitcoin Lightning point-of-sale system for merchants in Zambia. We facilitate direct Bitcoin Lightning payments between customers and merchants. ZamPOS never holds or stores merchant funds.' },
          { title: '3. Merchant Accounts', body: 'To use ZamPOS, you must register with a valid phone number and Lightning wallet address. You are responsible for maintaining the security of your Lightning wallet.' },
          { title: '4. Transaction Fees', body: 'ZamPOS charges a 0.5% fee on each completed transaction. This fee is collected from the payment amount before it reaches your wallet.' },
          { title: '5. Bitcoin and Volatility', body: 'Bitcoin is a volatile asset. Exchange rates between Bitcoin (sats) and Zambian Kwacha (ZMW) fluctuate at the time of transaction. ZamPOS is not responsible for exchange rate changes after payment completion.' },
          { title: '6. Direct Payments', body: 'All payments go directly from customer to your Lightning wallet. ZamPOS acts only as a facilitator and does not hold, store, or control your funds at any time.' },
          { title: '7. Prohibited Use', body: 'You may not use ZamPOS for illegal activities, money laundering, or any activity prohibited under Zambian law. We reserve the right to suspend accounts that violate these terms.' },
          { title: '8. Limitation of Liability', body: 'ZamPOS is provided "as is." We make no warranties about uninterrupted service. Our liability is limited to the transaction fees collected from your qualifying transactions.' },
          { title: '9. Changes to Terms', body: 'We may update these terms from time to time. Continued use of ZamPOS after changes are posted constitutes acceptance of the updated terms.' },
          { title: '10. Contact', body: 'For questions about these Terms, contact us at support@zampos.com.' },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: 32 }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--black)', marginBottom: 10 }}>{s.title}</h2>
            <p style={{ fontSize: 15, color: 'var(--gray-600)', lineHeight: 1.75 }}>{s.body}</p>
          </div>
        ))}
      </section>
      <Footer />
    </>
  )
}