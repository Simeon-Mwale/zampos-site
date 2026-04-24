import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

export default function Privacy() {
  return (
    <>
      <Head><title>Privacy Policy — ZamPOS</title></Head>
      <Nav />
      <section style={{ paddingTop: 120, maxWidth: 760, margin: '0 auto', padding: '120px 24px 96px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>Legal</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 40, letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 8 }}>Privacy Policy</h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--gray-500)', marginBottom: 40 }}>Last updated: April 2026</p>

        {[
          { title: 'What We Collect', body: 'We collect the information you provide when registering: your shop name and phone number. We also collect transaction data (amounts, timestamps) to operate the service.' },
          { title: 'How We Use Your Data', body: 'Your phone number is used to send SMS payment confirmations. Transaction data is used to calculate balances and provide withdrawal history. We do not sell your personal data.' },
          { title: 'SMS Communications', body: 'By using ZamPOS, you consent to receive SMS messages from our service provider (Africa\'s Talking) when payments are received at your shop.' },
          { title: 'Bitcoin Transactions', body: 'Bitcoin Lightning transactions are processed through the Lightning Network. Transaction data on the network is pseudonymous and may be visible to Lightning Network nodes.' },
          { title: 'Data Retention', body: 'We retain your account data for as long as your account is active. Transaction records are kept for 24 months for audit purposes. You may request deletion of your account at any time.' },
          { title: 'Security', body: 'We use industry-standard encryption to protect your data. Your ZamPOS balance is held in our custodial Lightning wallet with security best practices.' },
          { title: 'Your Rights', body: 'You have the right to access, correct, or delete your personal data. Contact us at support@zampos.com to make a request.' },
          { title: 'Contact', body: 'For privacy questions, email support@zampos.com. We will respond within 5 business days.' },
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
