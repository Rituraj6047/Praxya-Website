// components/Capabilities.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

/* ── tier data ── */
const tiers = [
  {
    tier: 'Core',
    badge: 'P0 — Live at Launch',
    badgeColor: '#22C55E',
    description: 'Everything a chemical manufacturer needs for SEBI BRSR Core compliance.',
    features: [
      { icon: '📊', title: 'GHG Scope 1 + 2 Calculation', detail: 'Chemical process-specific emission factors (IPCC 2006, EPA AP-42). CEA India grid factor 0.716 tCO₂/MWh.' },
      { icon: '📄', title: 'BRSR Core Report + XBRL Export', detail: 'All 9 BRSR KPIs auto-populated. SEBI-native XBRL format. One-click PDF + XML.' },
      { icon: '🔗', title: 'Data Lineage & Audit Trail', detail: 'Every number traced to source document. 200+ auto quality checks. CA auditor read-only portal.' },
      { icon: '🧾', title: 'Utility Bill OCR', detail: 'Upload electricity, fuel, water bills. AI extracts kWh, litres, tonnes. Auto-maps to emission factors.' },
      { icon: '🏭', title: 'Plant-Level Dashboards', detail: 'Per-plant, per-process GHG breakdown. Compare plants. Identify hotspots.' },
      { icon: '📋', title: 'CPCB Effluent Tracking', detail: 'COD/BOD/TSS standards mapped. Form-III hazardous waste manifest integration.' },
    ],
  },
  {
    tier: 'CBAM Module',
    badge: 'P1 — Q3 2026',
    badgeColor: '#f59e0b',
    description: 'For Indian chemical exporters selling to EU importers under CBAM.',
    features: [
      { icon: '🇪🇺', title: 'Embedded Emissions per Product', detail: 'Per-SKU carbon intensity. HS code mapping (Ch. 28, 29, 31, 39). XML export for EU importers.' },
      { icon: '🔬', title: 'Process-Specific Factors', detail: 'Sulphuric acid: 0.26 tCO₂e/t. Nitric acid: 1.85 tCO₂e/t. Chlor-alkali: 0.02 tCO₂e/t Cl₂.' },
      { icon: '📡', title: 'EU Importer Data Sharing', detail: 'Secure portal for EU buyers to access your verified emissions data. No email attachments.' },
      { icon: '💰', title: 'Tariff Exposure Calculator', detail: 'Input export volume × product type → estimated annual CBAM liability in €. Updated quarterly.' },
    ],
  },
  {
    tier: 'Supply Chain',
    badge: 'P1 — Q4 2026',
    badgeColor: '#8b5cf6',
    description: 'MSME supplier cascade for Scope 3 data collection.',
    features: [
      { icon: '🏪', title: 'MSME Supplier Portal', detail: 'Free for MSMEs. Simplified data entry. Guided wizard. Supplier scores emissions maturity.' },
      { icon: '📨', title: 'Automated Questionnaires', detail: 'Send data requests to 50–200 suppliers. Track response rates. Auto-remind non-responders.' },
      { icon: '📈', title: 'Scope 3 Aggregation', detail: 'Category 1 (purchased goods) and Category 4 (upstream transport). Activity-based, not spend-based.' },
    ],
  },
  {
    tier: 'Advanced (Year 2+)',
    badge: 'P2–P3',
    badgeColor: '#6b7280',
    description: 'Enterprise features built after PMF.',
    features: [
      { icon: '🤖', title: 'AI-Powered Anomaly Detection', detail: 'Flag unusual spikes in consumption data. Auto-suggest corrections with confidence scores.' },
      { icon: '🌿', title: 'LCA Module (ISO 14040)', detail: 'Full life cycle assessment from bill of materials. EPD and DPP generation.' },
      { icon: '📊', title: 'Decarbonization Roadmaps', detail: 'SBTi-aligned targets. "What if" scenario modeling. Cost-benefit per reduction action.' },
      { icon: '🔌', title: 'ERP Integrations', detail: 'Tally Prime, SAP S/4HANA, Oracle NetSuite. Automated data pull. Zero manual uploads.' },
    ],
  },
];

export default function Capabilities() {
  const [visible, setVisible] = useState(false);
  const [activeTier, setActiveTier] = useState(0);
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
      id="capabilities"
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
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#F0FDF4', color: '#16a34a',
            padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600,
          }}>
            🔧 Platform Capabilities
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, color: '#111827',
            margin: '20px 0 12px',
            letterSpacing: '-0.02em',
          }}>
            Built for chemicals.<br />
            <span style={{ color: '#22C55E' }}>Phased for precision.</span>
          </h2>
          <p style={{
            fontSize: 17, color: '#6B7280', maxWidth: 560,
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Every module is designed for Indian chemical manufacturing workflows.
            Shipped in priority order — compliance first, advanced features after PMF.
          </p>
        </div>

        {/* ── tier tabs ── */}
        <div style={{
          display: 'flex', gap: 8, justifyContent: 'center',
          flexWrap: 'wrap', marginBottom: 48,
        }}>
          {tiers.map((t, i) => (
            <button
              key={i}
              onClick={() => setActiveTier(i)}
              style={{
                padding: '10px 22px',
                borderRadius: 10,
                border: activeTier === i ? '2px solid #111827' : '1px solid #E5E7EB',
                background: activeTier === i ? '#111827' : '#fff',
                color: activeTier === i ? '#fff' : '#374151',
                fontWeight: 600, fontSize: 14,
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {t.tier}
              <span style={{
                marginLeft: 8, fontSize: 11, fontWeight: 700,
                padding: '2px 8px', borderRadius: 6,
                background: activeTier === i ? 'rgba(255,255,255,0.15)' : `${t.badgeColor}18`,
                color: activeTier === i ? t.badgeColor : t.badgeColor,
              }}>
                {t.badge}
              </span>
            </button>
          ))}
        </div>

        {/* ── active tier content ── */}
        <div style={{
          background: '#fff',
          border: '1px solid #E5E7EB',
          borderRadius: 16,
          padding: 'clamp(24px, 4vw, 40px)',
          boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
        }}>
          <p style={{
            fontSize: 15, color: '#6B7280', marginBottom: 32,
            lineHeight: 1.6,
          }}>
            {tiers[activeTier].description}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {tiers[activeTier].features.map((f, i) => (
              <div key={i} style={{
                padding: 24,
                background: '#F9FAFB',
                border: '1px solid #F3F4F6',
                borderRadius: 12,
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#D1FAE5';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(34,197,94,0.08)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#F3F4F6';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: 40, height: 40,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#F0FDF4', borderRadius: 10,
                  fontSize: 20, marginBottom: 14,
                }}>
                  {f.icon}
                </div>
                <h4 style={{
                  fontSize: 15, fontWeight: 700,
                  color: '#111827', marginBottom: 6,
                }}>
                  {f.title}
                </h4>
                <p style={{
                  fontSize: 13, color: '#6B7280',
                  lineHeight: 1.6, margin: 0,
                }}>
                  {f.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── bottom comparison strip ── */}
        <div style={{
          marginTop: 48,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 16,
        }}>
          {[
            { label: 'Emission factors', praxya: '50+ chemical-specific', others: '~5 generic global', win: true },
            { label: 'BRSR XBRL export', praxya: 'Native', others: 'Not supported', win: true },
            { label: 'Audit trail', praxya: 'CA-verified lineage', others: 'PDF screenshots', win: true },
            { label: 'Setup time', praxya: '2–3 weeks', others: '8–12 weeks', win: true },
          ].map((row, i) => (
            <div key={i} style={{
              background: '#fff',
              border: '1px solid #E5E7EB',
              borderRadius: 12,
              padding: '20px 24px',
            }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: '#9CA3AF', marginBottom: 12, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {row.label}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <div>
                  <div style={{
                    fontSize: 14, fontWeight: 700, color: '#16a34a',
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: '#22C55E',
                    }} />
                    {row.praxya}
                  </div>
                  <div style={{
                    fontSize: 13, color: '#9CA3AF', marginTop: 4,
                    display: 'flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: '50%',
                      background: '#D1D5DB',
                    }} />
                    {row.others}
                  </div>
                </div>
                {row.win && (
                  <span style={{
                    fontSize: 11, fontWeight: 700,
                    padding: '3px 10px', borderRadius: 6,
                    background: '#F0FDF4', color: '#16a34a',
                  }}>
                    ✓ Praxya
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}