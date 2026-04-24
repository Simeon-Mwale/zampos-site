import Head from 'next/head'
import Link from 'next/link'
import Nav from './Nav'
import Footer from './Footer'

const posts = [
  {
    id: 1,
    title: "What is Bitcoin? A Beginner's Guide for Zambian Merchants",
    excerpt: "Bitcoin is a form of digital money that works without a bank. Here's what every Zambian business owner should know about it and why it matters for your shop.",
    date: 'April 15, 2026',
    author: 'Simeon Mwale',
    readTime: '5 min read',
    category: 'Education',
    featured: true,
  },
  {
    id: 2,
    title: 'How to Set Up Your Lightning Wallet in 5 Minutes',
    excerpt: 'A step-by-step guide to getting your first Bitcoin Lightning wallet — recommended options for Zambian users including Wallet of Satoshi and Blink.',
    date: 'April 10, 2026',
    author: 'Simeon Mwale',
    readTime: '4 min read',
    category: 'Tutorial',
    featured: false,
  },
  {
    id: 3,
    title: 'Why Zambian Merchants Are Switching to Bitcoin',
    excerpt: "From Lusaka's markets to tuck shops in the copperbelt — how ZamPOS is helping small businesses cut fees and get paid faster.",
    date: 'April 5, 2026',
    author: 'Community Team',
    readTime: '6 min read',
    category: 'Stories',
    featured: false,
  },
  {
    id: 4,
    title: 'What is the Lightning Network?',
    excerpt: "Bitcoin's Lightning Network is a second layer that allows near-instant, near-free payments. Here's how it works and why it matters for Zambia.",
    date: 'March 28, 2026',
    author: 'Simeon Mwale',
    readTime: '7 min read',
    category: 'Education',
    featured: false,
  },
  {
    id: 5,
    title: 'ZamPOS April Update: SMS Confirmations & Custodial Balances',
    excerpt: 'What we shipped this month: SMS payment alerts via Africa\'s Talking, custodial balance mode for merchants without wallets, and more.',
    date: 'March 20, 2026',
    author: 'Simeon Mwale',
    readTime: '3 min read',
    category: 'Updates',
    featured: false,
  },
]

const CATEGORY_COLORS: Record<string, string> = {
  Education: '#3B82F6',
  Tutorial: '#10B981',
  Stories: '#8B5CF6',
  Updates: '#F7931A',
}

export default function Blog() {
  const featured = posts.find(p => p.featured)!
  const rest = posts.filter(p => !p.featured)

  return (
    <>
      <Head>
        <title>Blog — ZamPOS</title>
        <meta name="description" content="News, tutorials, and stories about Bitcoin Lightning payments in Zambia." />
      </Head>

      <Nav />

      {/* Header */}
      <section style={{ paddingTop: 120, paddingBottom: 60, textAlign: 'center', padding: '120px 24px 60px' }}>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', color: 'var(--orange)', textTransform: 'uppercase', marginBottom: 12 }}>ZamPOS Blog</p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 52px)', letterSpacing: '-0.03em', color: 'var(--black)', marginBottom: 12 }}>
          News & Education
        </h1>
        <p style={{ fontSize: 16, color: 'var(--gray-500)', maxWidth: 480, margin: '0 auto' }}>
          Bitcoin education, tutorials, and community stories for Zambian merchants and enthusiasts.
        </p>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px 96px' }}>
        {/* Featured post */}
        <div style={{
          background: 'var(--black)', borderRadius: 20, padding: '48px', marginBottom: 48,
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(247,147,26,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ background: 'rgba(247,147,26,0.2)', color: 'var(--orange)', fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.08em', padding: '4px 10px', borderRadius: 100, textTransform: 'uppercase' }}>Featured</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'rgba(250,250,248,0.3)', letterSpacing: '0.06em' }}>{featured.category.toUpperCase()}</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 28, letterSpacing: '-0.03em', color: 'var(--white)', lineHeight: 1.2, marginBottom: 16 }}>{featured.title}</h2>
            <p style={{ fontSize: 14, color: 'rgba(250,250,248,0.5)', lineHeight: 1.7, marginBottom: 24 }}>{featured.excerpt}</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <span style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)' }}>{featured.author}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(250,250,248,0.2)' }} />
              <span style={{ fontSize: 13, color: 'rgba(250,250,248,0.4)' }}>{featured.date}</span>
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(250,250,248,0.2)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--orange)' }}>{featured.readTime}</span>
            </div>
            <Link href={`/blog/${featured.id}`} style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'var(--orange)', color: '#fff',
              fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 14,
              padding: '12px 24px', borderRadius: 10,
            }}>Read Article →</Link>
          </div>
          <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 160, height: 160, borderRadius: '50%', background: 'rgba(247,147,26,0.1)', border: '2px solid rgba(247,147,26,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 72 }}>₿</span>
            </div>
          </div>

          <style>{`@media (max-width: 640px) { div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; } }`}</style>
        </div>

        {/* Post grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
          {rest.map(post => (
            <article key={post.id} style={{
              border: '1px solid rgba(12,12,12,0.08)', borderRadius: 16, padding: 24, background: '#fff',
              display: 'flex', flexDirection: 'column', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.07)'; e.currentTarget.style.borderColor = 'rgba(247,147,26,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(12,12,12,0.08)'; }}
            >
              <div style={{ marginBottom: 14 }}>
                <span style={{
                  display: 'inline-block', fontSize: 10, fontFamily: 'var(--font-mono)', fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  color: CATEGORY_COLORS[post.category] || 'var(--gray-500)',
                  background: `${CATEGORY_COLORS[post.category]}18` || 'var(--gray-100)',
                  padding: '3px 10px', borderRadius: 100,
                }}>{post.category}</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 17, letterSpacing: '-0.02em', color: 'var(--black)', lineHeight: 1.3, marginBottom: 10, flex: 1 }}>
                {post.title}
              </h2>
              <p style={{ fontSize: 13, color: 'var(--gray-500)', lineHeight: 1.65, marginBottom: 20 }}>{post.excerpt}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--gray-100)', paddingTop: 14 }}>
                <div>
                  <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--gray-700)' }}>{post.author}</p>
                  <p style={{ fontSize: 11, color: 'var(--gray-500)' }}>{post.date}</p>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--orange)' }}>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
