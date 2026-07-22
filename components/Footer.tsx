// components/Footer.tsx
'use client';

const footerLinks = [
  {
    heading: 'Services',
    links: [
      { label: 'GHG Calculation Service', href: '#deliverables' },
      { label: 'BRSR Report Delivery (14 days)', href: '#deliverables' },
      { label: 'CBAM Exposure Assessment', href: '#cbam' },
      { label: 'CA Partner Programme', href: '#contact' },
      { label: 'Pilot Engagement — ₹50K', href: '#contact' },
      { label: 'Full Service — ₹1.5L', href: '#contact' },
    ],
  },
  {
    heading: 'Who We Serve',
    links: [
      { label: 'Specialty Chemical Manufacturers', href: '#solution' },
      { label: 'Dye & Pigment Companies', href: '#solution' },
      { label: 'Chlor-Alkali Producers', href: '#solution' },
      { label: 'Agrochemical Manufacturers', href: '#solution' },
      { label: 'CA / Audit Firms', href: '#contact' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Download Sample Report', href: '/sample-report.pdf' },
      { label: 'BRSR Core Compliance Guide', href: '#' },
      { label: 'CBAM Impact on Indian Exporters', href: '#' },
      { label: 'Emission Factors Library', href: '#' },
      { label: 'SEBI XBRL Format Guide', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#vision' },
      { label: 'How It Works', href: '#solution' },
      { label: 'Contact', href: '#contact' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const complianceBadges = [
  'SEBI BRSR Core',
  'XBRL Native',
  'GHG Protocol',
  'IPCC 2006',
  'CBAM (EU)',
  'ISO 14064',
];

export default function Footer() {
  return (
    <footer style={{
      background: '#111827',
      color: '#fff',
      padding: '80px 24px 0',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>

        {/* ── top CTA banner ── */}
        <div style={{
          background: 'linear-gradient(135deg, #22C55E 0%, #16a34a 100%)',
          borderRadius: 20,
          padding: 'clamp(32px, 5vw, 48px)',
          marginBottom: 72,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 32,
          alignItems: 'center',
        }}>
          <div>
            <h3 style={{
              fontSize: 'clamp(22px, 3vw, 30px)',
              fontWeight: 800, color: '#fff',
              lineHeight: 1.2, marginBottom: 8,
            }}>
              Get your GHG report done in 14 days.
            </h3>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.85)',
              lineHeight: 1.6, margin: 0,
            }}>
              We collect your plant data, calculate process-specific emissions,
              and deliver a CA-verified BRSR report. ₹50K pilot. ₹1.5L full service.
              100% adjustable against annual subscription.
            </p>
          </div>
          <div style={{
            display: 'flex', gap: 14, flexWrap: 'wrap',
            justifyContent: 'flex-end',
          }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 10,
              background: '#fff', color: '#111827',
              fontWeight: 700, fontSize: 15,
              textDecoration: 'none',
              transition: 'transform 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              Book Free Assessment →
            </a>
            <a href="/sample-report.pdf" target="_blank" rel="noopener noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 10,
              background: 'rgba(255,255,255,0.15)', color: '#fff',
              fontWeight: 600, fontSize: 15,
              textDecoration: 'none', border: '1px solid rgba(255,255,255,0.25)',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
            >
              Download Sample Report
            </a>
          </div>
        </div>

        {/* ── link columns ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 40,
          marginBottom: 56,
        }}>
          {/* brand col */}
          <div style={{ gridColumn: 'span 1' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36,
                background: '#22C55E', borderRadius: 10,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" stroke="#fff" strokeWidth="2" fill="none" />
                  <path d="M12 8L17 11V17L12 20L7 17V11L12 8Z" fill="#fff" fillOpacity="0.3" />
                </svg>
              </div>
              <span style={{ fontSize: 20, fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>
                praxya
              </span>
            </div>
            <p style={{
              fontSize: 14, color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.6, marginBottom: 20, maxWidth: 220,
            }}>
              Chemical-grade ESG intelligence for India&apos;s manufacturing sector.
              BRSR compliance, automated.
            </p>

            {/* social (placeholder) */}
            <div style={{ display: 'flex', gap: 10 }}>
              {['LinkedIn', 'Twitter', 'Email'].map((s, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 8,
                  fontSize: 12, color: 'rgba(255,255,255,0.5)',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  fontWeight: 600,
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = '#fff';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  }}
                >
                  {s[0] + s[1]}
                </a>
              ))}
            </div>
          </div>

          {/* link groups */}
          {footerLinks.map((group, i) => (
            <div key={i}>
              <h4 style={{
                fontSize: 13, fontWeight: 700,
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: 20,
              }}>
                {group.heading}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {group.links.map((link, j) => (
                  <a key={j} href={link.href} style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    lineHeight: 1.4,
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── compliance badges ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 32,
          marginBottom: 32,
        }}>
          <div style={{
            fontSize: 11, fontWeight: 700,
            color: 'rgba(255,255,255,0.3)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: 14,
          }}>
            Compliance Frameworks Supported
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {complianceBadges.map((badge, i) => (
              <span key={i} style={{
                padding: '6px 14px',
                borderRadius: 8,
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.03)',
                fontSize: 12, fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
                fontFamily: 'monospace',
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>

        {/* ── newsletter ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 32,
          marginBottom: 32,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 24,
          alignItems: 'center',
        }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 4 }}>
              BRSR & CBAM Intelligence
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)' }}>
              Monthly regulatory updates. No spam. Unsubscribe anytime.
            </div>
          </div>
          <form onSubmit={e => e.preventDefault()} style={{
            display: 'flex', gap: 10,
          }}>
            <input
              type="email"
              placeholder="your@email.com"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: 10,
                border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)',
                color: '#fff', fontSize: 14,
                outline: 'none',
                fontFamily: 'inherit',
                minWidth: 0,
              }}
              onFocus={e => (e.currentTarget.style.borderColor = '#22C55E')}
              onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
            />
            <button type="submit" style={{
              padding: '12px 24px',
              borderRadius: 10,
              background: '#22C55E',
              color: '#fff',
              fontWeight: 700,
              fontSize: 14,
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = '#16a34a')}
              onMouseLeave={e => (e.currentTarget.style.background = '#22C55E')}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* ── bottom bar ── */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          padding: '24px 0 32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Praxya. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service', 'Security'].map((item, i) => (
              <a key={i} href="#" style={{
                fontSize: 13, color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {item}
              </a>
            ))}
          </div>
          <div style={{
            fontSize: 12, color: 'rgba(255,255,255,0.25)',
            fontFamily: 'monospace',
          }}>
            🇮🇳 Data hosted on AWS Mumbai · MeitY compliant · PI Insured · NDA on every engagement
          </div>
        </div>
      </div>
    </footer>
  );
}