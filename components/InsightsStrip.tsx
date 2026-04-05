'use client';

import { useEffect, useRef, useState } from 'react';

const INSIGHTS = [
  {
    value: '1,000+',
    label: 'listed companies under BRSR Core mandate',
    accent: false,
  },
  {
    value: '₹160Cr+',
    label: 'annual compliance spend in Indian specialty chemicals',
    accent: true,
  },
  {
    value: '160+',
    label: 'listed chemical manufacturers filing BRSR',
    accent: false,
  },
  {
    value: '0',
    label: 'platforms with India-specific chemical emission factors',
    accent: true,
  },
];

const REGULATORY_FACTS = [
  'BRSR Core is mandatory for top 1,000 listed companies from FY 2024–25',
  'CBAM definitive pricing begins January 2026 for EU chemical imports',
  'SEBI requires third-party assurance on BRSR Core KPIs from FY 2024–25',
  'CEA emission factor for Indian grid: 0.716 tCO₂/MWh (v19, 2023)',
  'IPCC default for H₂SO₄ contact process: 0.26 tCO₂e per tonne product',
];

export default function InsightsStrip() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [factIndex, setFactIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactIndex((prev) => (prev + 1) % REGULATORY_FACTS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Stat Strip */}
      <div className="insights-strip">
        <div className="container">
          <div className="insights-grid">
            {INSIGHTS.map((item, i) => (
              <div className={`insight-item reveal reveal-stagger-${i}`} key={i}>
                <span
                  className={`insight-value ${
                    item.accent ? 'insight-value-accent' : ''
                  }`}
                >
                  {item.value}
                </span>
                <span className="insight-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regulatory Ticker */}
      <div className="reg-ticker">
        <div className="container">
          <div className="reg-ticker-inner">
            <span className="reg-ticker-icon">
              <InfoIcon />
            </span>
            <span className="reg-ticker-text" key={factIndex}>
              {REGULATORY_FACTS[factIndex]}
            </span>
            <div className="reg-ticker-dots">
              {REGULATORY_FACTS.map((_, i) => (
                <span
                  key={i}
                  className={`reg-dot ${i === factIndex ? 'reg-dot-active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .reg-ticker {
          background: var(--color-bg-primary);
          border-bottom: 1px solid var(--color-divider-light);
          padding: 14px 0;
        }

        .reg-ticker-inner {
          display: flex;
          align-items: center;
          gap: 12px;
          justify-content: center;
        }

        .reg-ticker-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .reg-ticker-text {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-text-secondary);
          text-align: center;
          animation: fadeInUp 400ms ease;
        }

        .reg-ticker-dots {
          display: flex;
          gap: 4px;
          flex-shrink: 0;
        }

        .reg-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-divider);
          transition: background 200ms ease;
        }

        .reg-dot-active {
          background: var(--color-accent);
        }

        @media (max-width: 640px) {
          .reg-ticker-inner {
            flex-wrap: wrap;
            justify-content: center;
          }
          .reg-ticker-text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}

function InfoIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <circle cx="8" cy="8" r="7" stroke="var(--color-accent)" strokeWidth="1.2" fill="none" />
      <path d="M8 7v4" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="8" cy="4.8" r="0.8" fill="var(--color-accent)" />
    </svg>
  );
}