'use client';

import { useEffect, useRef } from 'react';

const STEPS = [
  {
    number: '01',
    title: 'Upload your plant data',
    body: "Electricity bills, ETP reports, fuel logs, process PDFs. Praxya's extraction engine reads every format your plant already produces — no reformatting, no templates.",
    detail: 'Supports PDF, XLSX, CSV, JSON, and scanned documents via OCR',
    icon: 'upload',
    color: '#22C55E',
  },
  {
    number: '02',
    title: 'Chemical-specific calculations',
    body: 'Process-specific emission factors for Indian chemical manufacturing — starting with Scope 1 GHG. Validated against IPCC 2006 and CEA India grid factors. Not spend-based defaults.',
    detail: '40+ chemical processes · H₂SO₄ · Chlor-alkali · Nitric acid · Ethylene oxide',
    icon: 'calculate',
    color: '#22C55E',
  },
  {
    number: '03',
    title: 'Auditor-ready BRSR report',
    body: 'Every value traced to its source document. Full data lineage your CA can verify independently. SEBI-ready XBRL export and a separate read-only auditor portal.',
    detail: 'XBRL export · CA portal · Data lineage · Audit trail',
    icon: 'report',
    color: '#22C55E',
  },
];

function StepIcon({ type }: { type: string }) {
  const c = '#22C55E';
  if (type === 'upload') {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="4" y="2" width="16" height="20" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
        <path d="M12 16V8m0 0L8.5 11.5M12 8l3.5 3.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 8h2a2 2 0 012 2v14a2 2 0 01-2 2H8" stroke={c} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'calculate') {
    return (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 2L26 9v12l-12 7L2 21V9L14 2z" stroke={c} strokeWidth="1.5" fill="none" />
        <text x="14" y="17" textAnchor="middle" fill={c} fontSize="9" fontFamily="var(--font-mono)" fontWeight="600">CO₂</text>
      </svg>
    );
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3" y="2" width="14" height="18" rx="2" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M7 7h6M7 11h6M7 15h4" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="22" cy="9" r="3.5" stroke={c} strokeWidth="1.5" fill="none" />
      <circle cx="22" cy="21" r="3.5" stroke={c} strokeWidth="1.5" fill="none" />
      <path d="M17 7l1.5 1M17 15l1.5 5" stroke={c} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Solution() {
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
    <section className="section-gray" id="solution" ref={sectionRef}>
      <div className="container">
        <div className="solution-header">
          <span className="label-section reveal">How It Works</span>
          <h2
            className="heading-section-lg reveal reveal-stagger-1"
            style={{ marginTop: '12px' }}
          >
            Upload. Calculate. File.
          </h2>
          <p
            className="text-body-lg reveal reveal-stagger-2"
            style={{ marginTop: '12px', maxWidth: '520px' }}
          >
            Raw plant data in. Auditor-ready BRSR report out. In days, not months.
          </p>
        </div>

        {/* Steps */}
        <div className="solution-steps">
          {STEPS.map((step, i) => (
            <div
              key={i}
              className={`solution-step reveal reveal-stagger-${i + 3}`}
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && <div className="step-connector" />}

              <div className="step-header">
                <div className="step-number-circle">
                  <span>{step.number}</span>
                </div>
                <div className="step-icon-wrap">
                  <StepIcon type={step.icon} />
                </div>
              </div>

              <h3 className="heading-card" style={{ marginTop: '16px' }}>
                {step.title}
              </h3>
              <p
                className="text-body"
                style={{ marginTop: '8px', fontSize: '15px', lineHeight: 1.65 }}
              >
                {step.body}
              </p>
              <div className="step-detail">
                <span>{step.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Before / After */}
        <div className="comparison-card reveal reveal-stagger-6" style={{ marginTop: '64px' }}>
          <div className="comparison-side">
            <span className="comparison-label">Today&rsquo;s Reality</span>
            <div className="comp-items">
              <CompItem icon="⏱" text="~90 days per filing" muted />
              <CompItem icon="👥" text="Multiple consultants" muted />
              <CompItem icon="📋" text="Manual data collection" muted />
              <CompItem icon="❌" text="Generic emission factors" muted />
            </div>
          </div>
          <div className="comparison-divider" />
          <div className="comparison-side">
            <span className="comparison-label comparison-label-accent">
              With Praxya
            </span>
            <div className="comp-items">
              <CompItem icon="⚡" text="Days, not months" />
              <CompItem icon="🤖" text="Fully automated" />
              <CompItem icon="✓" text="CA-verified output" />
              <CompItem icon="🧪" text="Process-specific factors" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className="reveal reveal-stagger-7"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginTop: '40px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '14px',
              color: 'var(--color-text-tertiary)',
            }}
          >
            We&rsquo;ll walk you through with your actual plant data
          </span>
        </div>
      </div>

      <style jsx>{`
        .solution-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* Steps */
        .solution-steps {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 56px;
        }

        .solution-step {
          position: relative;
          background: var(--color-bg-primary);
          border: 1px solid var(--color-card-border);
          border-radius: 16px;
          padding: 28px;
          box-shadow: var(--color-card-shadow);
        }

        .step-connector {
          position: absolute;
          top: 36px;
          right: -17px;
          width: 34px;
          height: 2px;
          background: var(--color-divider);
          z-index: 1;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .step-number-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--color-accent-light);
          border: 1.5px solid var(--color-accent-border);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .step-number-circle span {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 600;
          color: var(--color-accent-hover);
        }

        .step-icon-wrap {
          display: flex;
          align-items: center;
        }

        .step-detail {
          margin-top: 14px;
          padding: 10px 14px;
          background: var(--color-bg-secondary);
          border-radius: 8px;
          border: 1px solid var(--color-divider-light);
        }

        .step-detail span {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--color-text-tertiary);
          line-height: 1.5;
        }

        /* Comparison */
        .comp-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }

        @media (max-width: 768px) {
          .solution-steps {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .step-connector {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

function CompItem({
  icon,
  text,
  muted = false,
}: {
  icon: string;
  text: string;
  muted?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 12px',
        background: muted ? 'var(--color-bg-secondary)' : 'var(--color-accent-bg)',
        border: `1px solid ${muted ? 'var(--color-divider-light)' : 'var(--color-accent-border)'}`,
        borderRadius: '8px',
      }}
    >
      <span style={{ fontSize: '14px', flexShrink: 0 }}>{icon}</span>
      <span
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '14px',
          fontWeight: 500,
          color: muted
            ? 'var(--color-text-tertiary)'
            : 'var(--color-accent-hover)',
        }}
      >
        {text}
      </span>
    </div>
  );
}