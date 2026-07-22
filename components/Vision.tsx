// components/Vision.tsx
'use client';
import { useEffect, useRef, useState } from 'react';



const founderCredentials = [
  { icon: '🏭', text: 'Chemical engineering domain expertise' },
  { icon: '🇮🇳', text: 'Built for Indian regulatory reality (SEBI, CPCB, MCA)' },
  { icon: '🔬', text: 'Process-level emission factors — not generic global averages' },
  { icon: '📊', text: 'CA-auditor workflow embedded from Day 1' },
];

const beliefs = [
  {
    title: 'Compliance is a floor, not a ceiling.',
    body: 'We start with BRSR because it\'s mandatory. But the real value is giving chemical manufacturers the data infrastructure to make smarter operational decisions — energy, waste, water, emissions — all connected.',
  },
  {
    title: 'India needs India-specific tools.',
    body: 'Global platforms use European emission factors and CSRD templates. Indian chemical plants run on Indian grid power, Indian coal, Indian process chemistry. Praxya is built from the ground up for this reality.',
  },
  {
    title: 'CAs are partners, not competitors.',
    body: 'We don\'t replace chartered accountants — we give them better tools. Our auditor portal makes BRSR verification faster, more transparent, and more defensible.',
  },
];

export default function Vision() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="vision"
      style={{
        padding: '100px 24px',
        background: '#F9FAFB',
      }}
    >
      <div style={{
        maxWidth: 1140, margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s cubic-bezier(.16,1,.3,1)',
      }}>

        {/* ── header ── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#F5F3FF', color: '#7C3AED',
            padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600,
          }}>
            🔭 Our Vision
          </span>
          <h2 style={{
            fontSize: 'clamp(30px, 4.5vw, 48px)',
            fontWeight: 800, color: '#111827',
            margin: '20px 0 16px',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
          }}>
            Built by people who understand<br />
            <span style={{ color: '#22C55E' }}>Indian chemical plants.</span>
          </h2>
          <p style={{
            fontSize: 18, color: '#6B7280', maxWidth: 640,
            margin: '0 auto', lineHeight: 1.7,
          }}>
            We don't serve every industry. We serve Gujarat's specialty chemical cluster —
            the companies where Scope 1 comes from reactions, not receipts. Where BRSR
            accuracy depends on knowing the difference between a contact process and a
            membrane cell.
          </p>
        </div>

        {/* ── beliefs grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 24,
          marginBottom: 72,
        }}>
          {beliefs.map((b, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: 16,
              padding: 32,
              transition: 'border-color 0.2s, box-shadow 0.2s',
              position: 'relative',
              overflow: 'hidden',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#D1FAE5';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,197,94,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3,
                background: i === 0 ? '#22C55E' : i === 1 ? '#3B82F6' : '#f59e0b',
              }} />
              <h3 style={{
                fontSize: 18, fontWeight: 700,
                color: '#111827', marginBottom: 12,
                lineHeight: 1.3,
              }}>
                {b.title}
              </h3>
              <p style={{
                fontSize: 15, color: '#6B7280',
                lineHeight: 1.7, margin: 0,
              }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>

        {/* ── founder credibility strip ── */}
        <div style={{
          background: '#111827',
          borderRadius: 20,
          padding: 'clamp(32px, 5vw, 56px)',
          color: '#fff',
          marginBottom: 72,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 40,
            alignItems: 'center',
          }}>
            {/* left — quote */}
            <div>
              <div style={{
                fontSize: 48, color: '#22C55E',
                fontFamily: 'Georgia, serif', lineHeight: 1,
                marginBottom: 8,
              }}>
                &ldquo;
              </div>
              <p style={{
                fontSize: 20, fontWeight: 600,
                lineHeight: 1.6, marginBottom: 20,
                color: 'rgba(255,255,255,0.95)',
              }}>
                We've run the calculations. We know what an azo dye synthesis Scope 1
                looks like, what a chlor-alkali membrane cell produces, and why the CEA
                grid factor matters more than your consultant thinks. This isn't generic
                ESG software. It's chemical engineering applied to compliance.
              </p>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 14,
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #22C55E 0%, #16a34a 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, fontWeight: 800, color: '#fff',
                }}>
                  P
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>
                    Praxya Founding Team
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>
                    Chemical Engineering + Regulatory Compliance
                  </div>
                </div>
              </div>
            </div>

            {/* right — credentials */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {founderCredentials.map((c, i) => (
                <div key={i} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                }}>
                  <span style={{ fontSize: 22 }}>{c.icon}</span>
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          background: '#fff',
          border: '1px solid #E5E7EB',
          borderRadius: 16,
          padding: '32px 40px',
          textAlign: 'center',
          marginTop: 48,
        }}>
          <p style={{
            fontSize: 18,
            color: '#374151',
            lineHeight: 1.75,
            maxWidth: 640,
            margin: '0 auto',
          }}>
            Currently serving the Gujarat GIDC chemical cluster —
            Ankleshwar, Bharuch, Vapi, Vadodara.
            Expanding to Maharashtra in late 2026.
            <br /><br />
            <span style={{ color: '#22C55E', fontWeight: 700 }}>
              10 pilot client slots available for FY 2025–26 filing cycle.
            </span>
          </p>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginTop: 24,
              padding: '14px 32px',
              borderRadius: 10,
              background: '#111827',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#374151')}
            onMouseLeave={e => (e.currentTarget.style.background = '#111827')}
          >
            Secure a Pilot Slot →
          </a>
        </div>

      </div>
    </section>
  );
}