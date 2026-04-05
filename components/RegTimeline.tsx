// components/RegTimeline.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

const milestones = [
  {
    date: 'FY 2023–24',
    status: 'done',
    title: 'BRSR Core — Top 150 Listed',
    body: 'SEBI mandated BRSR Core (assured) for top 150 companies by market cap. Chemical majors like Tata Chemicals, SRF, PI Industries in scope.',
    regulation: 'SEBI/HO/CFD/CFD-SEC-2/P/CIR/2023/122',
    tag: 'BRSR',
  },
  {
    date: 'Oct 2023',
    status: 'done',
    title: 'CBAM Transitional Phase Begins',
    body: 'EU importers must report embedded emissions of imported goods. Quarterly reports. No financial charges yet — but data collection is mandatory.',
    regulation: 'EU Regulation 2023/956',
    tag: 'CBAM',
  },
  {
    date: 'FY 2024–25',
    status: 'active',
    title: 'BRSR Core — Top 500 Listed',
    body: 'Scope expands to top 500 listed companies. ~100+ chemical manufacturers now in mandatory filing scope. XBRL digital filing format required.',
    regulation: 'SEBI Circular',
    tag: 'BRSR',
  },
  {
    date: 'Jan 2026',
    status: 'upcoming',
    title: 'CBAM Definitive Phase',
    body: 'Full carbon pricing kicks in. EU importers must purchase CBAM certificates. Indian exporters without verified emissions data face default (highest) tariff values.',
    regulation: 'EU Regulation 2023/956 Art. 32',
    tag: 'CBAM',
  },
  {
    date: 'FY 2026–27',
    status: 'upcoming',
    title: 'BRSR Core — Top 1,000 Listed',
    body: 'All top 1,000 listed companies mandated. 160+ chemical manufacturers now in scope. Reasonable assurance (not limited) expected for Scope 1 & 2.',
    regulation: 'SEBI Phase-In Schedule',
    tag: 'BRSR',
  },
  {
    date: '2027–28',
    status: 'upcoming',
    title: 'CBAM Full Implementation',
    body: 'Free EU ETS allowances phase out. Full CBAM tariff calculation. Indian chemical exporters without plant-level emissions data lose price competitiveness.',
    regulation: 'EU ETS / CBAM Alignment',
    tag: 'CBAM',
  },
  {
    date: '2028+',
    status: 'upcoming',
    title: 'BRSR + CSRD Convergence Expected',
    body: 'India-EU mutual recognition of sustainability disclosures likely. Companies reporting BRSR + CBAM will have a head start on cross-border compliance.',
    regulation: 'Anticipated regulatory convergence',
    tag: 'BOTH',
  },
];

const statusColors: Record<string, { bg: string; dot: string; text: string }> = {
  done:     { bg: '#F3F4F6', dot: '#9CA3AF', text: '#6B7280' },
  active:   { bg: '#F0FDF4', dot: '#22C55E', text: '#16a34a' },
  upcoming: { bg: '#FFF7ED', dot: '#f59e0b', text: '#d97706' },
};

const tagColors: Record<string, { bg: string; color: string }> = {
  BRSR: { bg: '#EFF6FF', color: '#2563EB' },
  CBAM: { bg: '#FEF2F2', color: '#DC2626' },
  BOTH: { bg: '#F5F3FF', color: '#7C3AED' },
};

export default function RegTimeline() {
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
      style={{
        padding: '100px 24px',
        background: '#fff',
      }}
    >
      <div style={{
        maxWidth: 900, margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s cubic-bezier(.16,1,.3,1)',
      }}>

        {/* ── header ── */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#FFF7ED', color: '#d97706',
            padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600,
          }}>
            ⏱ Regulatory Timeline
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, color: '#111827',
            margin: '20px 0 12px',
            letterSpacing: '-0.02em',
          }}>
            The compliance clock is ticking.
          </h2>
          <p style={{
            fontSize: 17, color: '#6B7280', maxWidth: 540,
            margin: '0 auto', lineHeight: 1.7,
          }}>
            SEBI BRSR Core and EU CBAM are converging. Companies that prepare now
            will have a 2-year head start over those scrambling at deadline.
          </p>

          {/* legend */}
          <div style={{
            display: 'flex', gap: 20, justifyContent: 'center',
            marginTop: 24, flexWrap: 'wrap',
          }}>
            {[
              { label: 'Completed', color: '#9CA3AF' },
              { label: 'Current', color: '#22C55E' },
              { label: 'Upcoming', color: '#f59e0b' },
            ].map((l, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#6B7280' }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: l.color }} />
                {l.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── timeline ── */}
        <div style={{ position: 'relative' }}>
          {/* vertical line */}
          <div style={{
            position: 'absolute',
            left: 24,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #E5E7EB 0%, #22C55E 40%, #f59e0b 100%)',
            borderRadius: 2,
          }} />

          {milestones.map((m, i) => {
            const sc = statusColors[m.status];
            const tc = tagColors[m.tag];
            return (
              <div key={i} style={{
                position: 'relative',
                paddingLeft: 64,
                paddingBottom: i < milestones.length - 1 ? 40 : 0,
              }}>
                {/* dot on the line */}
                <div style={{
                  position: 'absolute',
                  left: 15,
                  top: 4,
                  width: 20, height: 20,
                  borderRadius: '50%',
                  background: '#fff',
                  border: `3px solid ${sc.dot}`,
                  boxShadow: m.status === 'active' ? `0 0 0 4px ${sc.dot}33` : 'none',
                  zIndex: 1,
                }} />

                {/* card */}
                <div style={{
                  background: sc.bg,
                  border: '1px solid #E5E7EB',
                  borderRadius: 14,
                  padding: '24px 28px',
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  {/* top row: date + tags */}
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    marginBottom: 10, flexWrap: 'wrap',
                  }}>
                    <span style={{
                      fontSize: 13, fontWeight: 700, color: sc.text,
                      fontFamily: 'monospace',
                    }}>
                      {m.date}
                    </span>
                    <span style={{
                      fontSize: 11, fontWeight: 700,
                      padding: '2px 10px', borderRadius: 6,
                      background: tc.bg, color: tc.color,
                    }}>
                      {m.tag}
                    </span>
                    {m.status === 'active' && (
                      <span style={{
                        fontSize: 11, fontWeight: 700,
                        padding: '2px 10px', borderRadius: 6,
                        background: '#22C55E', color: '#fff',
                      }}>
                        ← YOU ARE HERE
                      </span>
                    )}
                  </div>

                  <h4 style={{
                    fontSize: 17, fontWeight: 700,
                    color: '#111827', marginBottom: 8,
                  }}>
                    {m.title}
                  </h4>
                  <p style={{
                    fontSize: 14, color: '#6B7280',
                    lineHeight: 1.65, margin: 0, marginBottom: 10,
                  }}>
                    {m.body}
                  </p>
                  <span style={{
                    fontSize: 11, color: '#9CA3AF',
                    fontFamily: 'monospace',
                  }}>
                    {m.regulation}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── bottom CTA ── */}
        <div style={{
          textAlign: 'center', marginTop: 56,
          padding: '32px',
          background: '#F0FDF4',
          borderRadius: 16,
          border: '1px solid #D1FAE5',
        }}>
          <p style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 6 }}>
            Don't wait for the deadline.
          </p>
          <p style={{ fontSize: 15, color: '#6B7280', marginBottom: 20 }}>
            Companies starting BRSR + CBAM preparation now save 60–75% vs. last-minute scrambles.
          </p>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 10,
            background: '#111827', color: '#fff',
            fontWeight: 700, fontSize: 15,
            textDecoration: 'none',
            transition: 'transform 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.03)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Start Your BRSR Pilot →
          </a>
        </div>

      </div>
    </section>
  );
}