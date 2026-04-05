// components/Vision.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

const roadmapItems = [
  {
    quarter: 'Q2 2026',
    title: 'BRSR Core MVP Live',
    detail: 'GHG Scope 1+2 · XBRL export · 10 Gujarat pilot clients',
    status: 'active',
  },
  {
    quarter: 'Q3 2026',
    title: 'CBAM Module Launch',
    detail: 'Embedded emissions per SKU · EU importer portal · HS code mapping',
    status: 'upcoming',
  },
  {
    quarter: 'Q4 2026',
    title: 'MSME Supplier Cascade',
    detail: 'Free supplier portal · Scope 3 Category 1 · Auto-questionnaires',
    status: 'upcoming',
  },
  {
    quarter: 'H1 2027',
    title: 'AI + LCA Modules',
    detail: 'Anomaly detection · ISO 14040 LCA · Decarbonisation roadmaps',
    status: 'upcoming',
  },
  {
    quarter: 'H2 2027',
    title: 'Pan-India Expansion',
    detail: 'Maharashtra + Tamil Nadu clusters · 100+ clients · Series A',
    status: 'upcoming',
  },
];

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
            India&apos;s chemical industry deserves<br />
            <span style={{ color: '#22C55E' }}>world-class sustainability infrastructure.</span>
          </h2>
          <p style={{
            fontSize: 18, color: '#6B7280', maxWidth: 640,
            margin: '0 auto', lineHeight: 1.7,
          }}>
            160+ listed chemical manufacturers. Zero purpose-built compliance platforms.
            We&apos;re here to change that — starting with the hardest problem: accurate,
            auditable, chemical-process-specific emissions data.
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
                Every Indian chemical plant already measures what goes in and what comes out.
                We&apos;re just making that data speak the language regulators and auditors need.
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

        {/* ── product roadmap ── */}
        <div>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h3 style={{
              fontSize: 26, fontWeight: 800, color: '#111827',
              letterSpacing: '-0.01em',
            }}>
              Product Roadmap
            </h3>
            <p style={{ fontSize: 15, color: '#6B7280', marginTop: 8 }}>
              Phased delivery. Compliance first. Advanced features after PMF.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 16,
          }}>
            {roadmapItems.map((item, i) => (
              <div key={i} style={{
                background: item.status === 'active' ? '#F0FDF4' : '#fff',
                border: `1px solid ${item.status === 'active' ? '#BBF7D0' : '#E5E7EB'}`,
                borderRadius: 14,
                padding: '24px 20px',
                position: 'relative',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {item.status === 'active' && (
                  <span style={{
                    position: 'absolute', top: 12, right: 12,
                    width: 8, height: 8, borderRadius: '50%',
                    background: '#22C55E',
                    boxShadow: '0 0 0 3px rgba(34,197,94,0.2)',
                    animation: 'pulse 2s infinite',
                  }} />
                )}
                <span style={{
                  fontSize: 12, fontWeight: 700,
                  color: item.status === 'active' ? '#16a34a' : '#9CA3AF',
                  fontFamily: 'monospace',
                  letterSpacing: '0.02em',
                }}>
                  {item.quarter}
                </span>
                <h4 style={{
                  fontSize: 15, fontWeight: 700, color: '#111827',
                  margin: '10px 0 6px', lineHeight: 1.3,
                }}>
                  {item.title}
                </h4>
                <p style={{
                  fontSize: 13, color: '#6B7280',
                  lineHeight: 1.5, margin: 0,
                }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}