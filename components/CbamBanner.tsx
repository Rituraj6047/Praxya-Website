// components/CbamBanner.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

/* ── exposed companies data ── */
const exposedCompanies = [
  { name: 'Aarti Industries',   hs: 'Ch. 29 — Organic',       risk: 'HIGH',   products: 'Benzene derivatives, nitro compounds' },
  { name: 'Deepak Nitrite',     hs: 'Ch. 29 — Organic',       risk: 'HIGH',   products: 'Phenol, acetone, nitrite compounds' },
  { name: 'Navin Fluorine',     hs: 'Ch. 29 — Fluoro',        risk: 'HIGH',   products: 'Specialty fluorine intermediates' },
  { name: 'Gujarat Alkalies',   hs: 'Ch. 28 — Inorganic',     risk: 'HIGH',   products: 'Caustic soda, chlorine' },
  { name: 'Vinati Organics',    hs: 'Ch. 29 — Organic',       risk: 'HIGH',   products: 'IBB, ATBS' },
  { name: 'SRF Ltd',            hs: 'Ch. 39 — Polymers',      risk: 'MEDIUM', products: 'Specialty fluoropolymers' },
  { name: 'PI Industries',      hs: 'Ch. 29 — Agrochem',      risk: 'MEDIUM', products: 'CSM exports to EU' },
];

const cbamCategories = [
  { code: 'Ch. 28', label: 'Inorganic chemicals', tariff: '€20–45/tCO₂e' },
  { code: 'Ch. 29', label: 'Organic chemicals',   tariff: '€20–45/tCO₂e' },
  { code: 'Ch. 31', label: 'Fertilisers',         tariff: '€20–45/tCO₂e' },
  { code: 'Ch. 39', label: 'Polymers & plastics',  tariff: '€20–45/tCO₂e' },
];

export default function CbamBanner() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="cbam"
      style={{
        padding: '100px 24px',
        background: '#111827',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtle grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1140, margin: '0 auto', position: 'relative', zIndex: 1,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s cubic-bezier(.16,1,.3,1)',
      }}>

        {/* ── header ── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(239,68,68,0.15)', color: '#f87171',
            padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600,
            letterSpacing: '0.02em', marginBottom: 20,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: '#ef4444',
              animation: 'pulse 2s infinite',
            }} />
            CBAM ENFORCEMENT — JAN 2026
          </span>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 800,
            lineHeight: 1.15,
            margin: '20px 0 16px',
            letterSpacing: '-0.02em',
          }}>
            The EU carbon border tax is coming.<br />
            <span style={{ color: '#22C55E' }}>Indian chemical exporters aren't ready.</span>
          </h2>

          <p style={{
            fontSize: 17, color: 'rgba(255,255,255,0.6)',
            maxWidth: 620, margin: '0 auto', lineHeight: 1.7,
          }}>
            CBAM (Carbon Border Adjustment Mechanism) requires verified embedded
            emissions data for every tonne exported to the EU. No data = tariff surcharges
            of €20–45 per tCO₂e. ~60 Indian chemical companies are directly exposed.
          </p>
        </div>

        {/* ── two-col: categories + urgency stats ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 32,
          marginBottom: 64,
        }}>

          {/* left — HS categories */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, padding: 32,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: '#fff' }}>
              CBAM-Covered Chemical Categories
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {cbamCategories.map((cat, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: 10,
                }}>
                  <div>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: '#22C55E',
                      fontFamily: 'monospace', letterSpacing: '0.04em',
                    }}>{cat.code}</span>
                    <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginTop: 2 }}>
                      {cat.label}
                    </div>
                  </div>
                  <span style={{
                    background: 'rgba(239,68,68,0.12)',
                    color: '#f87171',
                    padding: '4px 12px', borderRadius: 8,
                    fontSize: 13, fontWeight: 600, fontFamily: 'monospace',
                  }}>
                    {cat.tariff}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* right — urgency numbers */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 16, padding: 32,
          }}>
            <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 24, color: '#fff' }}>
              The Cost of Inaction
            </h3>

            {[
              { num: '~60', label: 'Indian chemical companies with direct EU export exposure', color: '#f87171' },
              { num: '€20–45', label: 'Tariff per tonne CO₂e if embedded emissions are unverified', color: '#f87171' },
              { num: '₹160Cr+', label: 'Estimated annual CBAM liability across Indian chemical sector', color: '#fbbf24' },
              { num: '0', label: 'Platforms offering CBAM + BRSR in a single Indian-native solution', color: '#22C55E' },
            ].map((stat, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 16,
                padding: '16px 0',
                borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
              }}>
                <span style={{
                  fontSize: 28, fontWeight: 800, color: stat.color,
                  fontFamily: 'monospace', minWidth: 90,
                }}>
                  {stat.num}
                </span>
                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── exposed companies table ── */}
        <div style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 16, overflow: 'hidden',
          marginBottom: 48,
        }}>
          <div style={{
            padding: '20px 28px',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 12,
          }}>
            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', margin: 0 }}>
              CBAM-Exposed Indian Chemical Companies
            </h3>
            <span style={{
              fontSize: 12, color: 'rgba(255,255,255,0.4)',
              fontFamily: 'monospace',
            }}>
              Source: EU CBAM Regulation (EU) 2023/956 · HS Trade Data
            </span>
          </div>

          {/* header row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.5fr 1.2fr 0.8fr 1.5fr',
            padding: '12px 28px',
            borderBottom: '1px solid rgba(255,255,255,0.04)',
            fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.06em', textTransform: 'uppercase',
          }}>
            <span>Company</span>
            <span>HS Category</span>
            <span>Exposure</span>
            <span>Key Products</span>
          </div>

          {/* data rows */}
          {exposedCompanies.map((co, i) => (
            <div key={i} style={{
              display: 'grid',
              gridTemplateColumns: '1.5fr 1.2fr 0.8fr 1.5fr',
              padding: '14px 28px',
              borderBottom: i < exposedCompanies.length - 1 ? '1px solid rgba(255,255,255,0.03)' : 'none',
              fontSize: 14, alignItems: 'center',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span style={{ fontWeight: 600, color: '#fff' }}>{co.name}</span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'monospace', fontSize: 13 }}>
                {co.hs}
              </span>
              <span style={{
                display: 'inline-block',
                padding: '3px 10px', borderRadius: 6,
                fontSize: 11, fontWeight: 700,
                background: co.risk === 'HIGH' ? 'rgba(239,68,68,0.15)' : 'rgba(251,191,36,0.15)',
                color: co.risk === 'HIGH' ? '#f87171' : '#fbbf24',
              }}>
                {co.risk}
              </span>
              <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 13 }}>{co.products}</span>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', marginBottom: 20, lineHeight: 1.6 }}>
            Praxya calculates embedded emissions per product, per process —<br />
            giving EU importers the verified data they need. No tariff surprises.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: '#22C55E', color: '#fff',
              fontWeight: 700, fontSize: 15,
              textDecoration: 'none', border: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
              boxShadow: '0 0 30px rgba(34,197,94,0.3)',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(34,197,94,0.5)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 0 30px rgba(34,197,94,0.3)'; }}
            >
              Calculate Your CBAM Exposure →
            </a>
            <a href="#capabilities" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: 'transparent', color: '#fff',
              fontWeight: 600, fontSize: 15,
              textDecoration: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
            >
              See Full Platform
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}