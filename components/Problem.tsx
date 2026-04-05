'use client';

import { useEffect, useRef } from 'react';

const PROBLEMS = [
  {
    icon: 'beaker',
    headline: "Generic tools don't know your chemistry",
    body: 'Scope 1 emissions from sulphuric acid production, chlorination, and polymerisation need process-specific emission factors. IPCC defaults are wrong for your plant. Every generic ESG tool uses them anyway.',
    stat: '0.26',
    statUnit: 'tCO₂e/t',
    statLabel: 'H₂SO₄ contact process factor — IPCC 2006',
    tag: 'EMISSION ACCURACY',
  },
  {
    icon: 'scatter',
    headline: 'Your data lives in 12 different formats',
    body: 'ETP effluent logs, CPCB compliance PDFs, DG set fuel records, boiler sheets — distributed across departments, plants, and FTP folders. Nobody has built a pipeline to read all of this.',
    stat: '47',
    statUnit: 'data points',
    statLabel: 'linked per average chemical plant BRSR filing',
    tag: 'DATA COMPLEXITY',
  },
  {
    icon: 'cost',
    headline: 'Compliance costs more than it should',
    body: "Every filing cycle — the same consultant onboarding, the same manual data collection, the same months-long wait. For a report that could be generated in days. The infrastructure to fix this didn't exist. Until now.",
    stat: '90',
    statUnit: 'days',
    statLabel: 'average time to file BRSR via external consultants',
    tag: 'TIME & COST',
  },
];

function ProblemIcon({ type }: { type: string }) {
  const color = 'var(--color-accent)';
  if (type === 'beaker') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3h6M10 3v7.4L4 18.6c-.7 1 0 2.4 1.2 2.4h13.6c1.2 0 1.9-1.4 1.2-2.4L14 10.4V3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M7 15h10" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      </svg>
    );
  }
  if (type === 'scatter') {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="7" height="9" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
        <rect x="15" y="3" width="7" height="5" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
        <rect x="12" y="14" width="10" height="7" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
        <rect x="2" y="16" width="6" height="5" rx="1" stroke={color} strokeWidth="1.5" fill="none" />
        <path d="M9 7h6M5 21v-2M19 8v6" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
      </svg>
    );
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" fill="none" />
      <path d="M12 7v5l3 3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 2h8M7 22h10" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.3" />
    </svg>
  );
}

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el) =>
              el.classList.add('revealed')
            );
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-light" id="problem" ref={sectionRef}>
      <div className="container">
        <div className="problem-header">
          <span className="label-section reveal">The Problem</span>
          <h2
            className="heading-section reveal reveal-stagger-1"
            style={{ marginTop: '12px', maxWidth: '620px' }}
          >
            BRSR for chemical companies is a different beast.
          </h2>
          <p
            className="text-body reveal reveal-stagger-2"
            style={{ marginTop: '12px', maxWidth: '560px' }}
          >
            SEBI&rsquo;s BRSR Core mandate requires verified, auditor-ready
            sustainability data. For chemical manufacturers, the data complexity
            makes this uniquely difficult.
          </p>
        </div>

        <div className="problem-grid">
          {PROBLEMS.map((item, i) => (
            <div
              key={i}
              className={`card card-interactive problem-card reveal reveal-stagger-${i + 2}`}
            >
              {/* Top */}
              <div className="problem-card-top">
                <div className="problem-icon-wrap">
                  <ProblemIcon type={item.icon} />
                </div>
                <span className="problem-tag">{item.tag}</span>
              </div>

              {/* Content */}
              <h3 className="heading-card" style={{ marginTop: '16px' }}>
                {item.headline}
              </h3>
              <p
                className="text-body"
                style={{
                  marginTop: '10px',
                  fontSize: '15px',
                  lineHeight: 1.65,
                }}
              >
                {item.body}
              </p>

              {/* Data Point */}
              <div className="problem-data">
                <div className="problem-data-left">
                  <span className="problem-data-value">{item.stat}</span>
                  <span className="problem-data-unit">{item.statUnit}</span>
                </div>
                <span className="problem-data-label">{item.statLabel}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emission Factor Comparison */}
        <div className="ef-comparison reveal reveal-stagger-6">
          <div className="ef-header">
            <span className="label-section" style={{ fontSize: '12px' }}>
              Why Generic Tools Fail
            </span>
            <h3 className="heading-card" style={{ marginTop: '8px' }}>
              Emission factor accuracy: generic vs. process-specific
            </h3>
          </div>

          <div className="ef-chart">
            <div className="ef-row">
              <span className="ef-label">H₂SO₄ Contact Process</span>
              <div className="ef-bars">
                <div className="ef-bar ef-bar-generic" style={{ width: '40%' }}>
                  <span>Generic: 0.5</span>
                </div>
                <div className="ef-bar ef-bar-praxya" style={{ width: '22%' }}>
                  <span>Actual: 0.26</span>
                </div>
              </div>
              <span className="ef-error">+92% error</span>
            </div>
            <div className="ef-row">
              <span className="ef-label">Nitric Acid Production</span>
              <div className="ef-bars">
                <div className="ef-bar ef-bar-generic" style={{ width: '55%' }}>
                  <span>Generic: 2.8</span>
                </div>
                <div className="ef-bar ef-bar-praxya" style={{ width: '35%' }}>
                  <span>Actual: 1.85</span>
                </div>
              </div>
              <span className="ef-error">+51% error</span>
            </div>
            <div className="ef-row">
              <span className="ef-label">Chlor-Alkali (Membrane)</span>
              <div className="ef-bars">
                <div className="ef-bar ef-bar-generic" style={{ width: '30%' }}>
                  <span>Generic: 0.15</span>
                </div>
                <div className="ef-bar ef-bar-praxya" style={{ width: '6%' }}>
                  <span>0.02</span>
                </div>
              </div>
              <span className="ef-error">+650% error</span>
            </div>
          </div>

          <div className="ef-legend">
            <span className="ef-legend-item">
              <i className="ef-legend-dot ef-legend-dot-generic" /> Generic ESG platforms (spend-based)
            </span>
            <span className="ef-legend-item">
              <i className="ef-legend-dot ef-legend-dot-praxya" /> Praxya (IPCC 2006 process-specific)
            </span>
          </div>

          <p className="ef-note">
            Units: tCO₂e per tonne of product. Generic platforms use
            revenue-based or EXIOBASE sector averages. Praxya uses IPCC 2006
            Vol. 3 Ch. 3 activity-based factors validated for Indian process
            conditions.
          </p>
        </div>
      </div>

      <style jsx>{`
        .problem-header {
          max-width: 640px;
        }

        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }

        .problem-card {
          display: flex;
          flex-direction: column;
        }

        .problem-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .problem-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: var(--color-accent-bg);
          border: 1px solid var(--color-accent-border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .problem-tag {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--color-text-tertiary);
          background: var(--color-bg-secondary);
          padding: 4px 10px;
          border-radius: 4px;
        }

        /* Data point */
        .problem-data {
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid var(--color-divider-light);
          margin-top: 20px;
          display: flex;
          align-items: flex-end;
          gap: 12px;
        }

        .problem-data-left {
          display: flex;
          align-items: baseline;
          gap: 4px;
          flex-shrink: 0;
        }

        .problem-data-value {
          font-family: var(--font-mono);
          font-size: 28px;
          font-weight: 600;
          color: var(--color-text-primary);
          line-height: 1;
        }

        .problem-data-unit {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--color-text-tertiary);
        }

        .problem-data-label {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-tertiary);
          line-height: 1.3;
        }

        /* ═══ Emission Factor Comparison ═══ */
        .ef-comparison {
          margin-top: 64px;
          padding: 36px;
          background: var(--color-bg-secondary);
          border-radius: 16px;
          border: 1px solid var(--color-divider-light);
        }

        .ef-header {
          margin-bottom: 28px;
        }

        .ef-chart {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ef-row {
          display: grid;
          grid-template-columns: 180px 1fr 80px;
          gap: 16px;
          align-items: center;
        }

        .ef-label {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--color-text-secondary);
          font-weight: 500;
        }

        .ef-bars {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ef-bar {
          height: 24px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          padding: 0 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 500;
          min-width: 60px;
        }

        .ef-bar span {
          white-space: nowrap;
        }

        .ef-bar-generic {
          background: #FEE2E2;
          color: #991B1B;
          border: 1px solid #FECACA;
        }

        .ef-bar-praxya {
          background: var(--color-accent-light);
          color: var(--color-accent-hover);
          border: 1px solid var(--color-accent-border);
        }

        .ef-error {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 600;
          color: #DC2626;
          text-align: right;
        }

        .ef-legend {
          display: flex;
          gap: 24px;
          margin-top: 24px;
          padding-top: 16px;
          border-top: 1px solid var(--color-divider);
        }

        .ef-legend-item {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-tertiary);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .ef-legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 3px;
          display: inline-block;
          font-style: normal;
        }

        .ef-legend-dot-generic {
          background: #FEE2E2;
          border: 1px solid #FECACA;
        }

        .ef-legend-dot-praxya {
          background: var(--color-accent-light);
          border: 1px solid var(--color-accent-border);
        }

        .ef-note {
          font-family: var(--font-body);
          font-size: 12px;
          color: var(--color-text-tertiary);
          margin-top: 12px;
          line-height: 1.5;
          max-width: 600px;
        }

        @media (max-width: 1024px) {
          .problem-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .ef-row {
            grid-template-columns: 140px 1fr 70px;
          }
        }

        @media (max-width: 640px) {
          .problem-grid {
            grid-template-columns: 1fr;
          }
          .ef-comparison {
            padding: 24px;
          }
          .ef-row {
            grid-template-columns: 1fr;
            gap: 6px;
          }
          .ef-error {
            text-align: left;
          }
          .ef-legend {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}