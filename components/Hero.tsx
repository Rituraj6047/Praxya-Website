'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [statusComplete, setStatusComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatusComplete(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        {/* ── Left Column ── */}
        <div className="hero-content">
          {/* Badge — like Greenly's "Powered by EcoPilot" */}
          <div className="hero-anim hero-anim-0">
            <span className="badge-green">
              <GreenDot />
              BRSR Core · FY 2024–25 Filing Open
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-hero hero-anim hero-anim-1" style={{ marginTop: '24px' }}>
            Automate your BRSR.
            <br />
            Without the consultants.
          </h1>

          {/* Sub */}
          <p
            className="text-body-lg hero-anim hero-anim-2"
            style={{ marginTop: '20px', maxWidth: '520px' }}
          >
            The only compliance platform built specifically for Indian chemical 
            manufacturers. SEBI-ready reports with process-specific emission 
            factors. Easy and precise.
          </p>

          {/* CTAs — Greenly style: green primary + outline secondary */}
          <div className="hero-ctas hero-anim hero-anim-3">
            <a href="#contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="#solution" className="btn-outline">
              See How It Works
            </a>
          </div>

          {/* Trust / stats strip */}
          <div className="hero-trust hero-anim hero-anim-4">
            <div className="hero-stat-row">
              <div className="hero-stat">
                <span className="hero-stat-value">40+</span>
                <span className="hero-stat-label">chemical process<br />emission factors</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">75%</span>
                <span className="hero-stat-label">cheaper than<br />Big 4 consultants</span>
              </div>
              <div className="hero-stat-divider" />
              <div className="hero-stat">
                <span className="hero-stat-value">9</span>
                <span className="hero-stat-label">BRSR KPIs<br />automated</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Right Column — Dark Product Mockup ── */}
        <div className="hero-mockup-wrapper hero-anim hero-anim-5">
          <div className="hero-mockup float-anim">
            {/* Window Chrome */}
            <div className="mockup-chrome">
              <div className="mockup-dots">
                <span className="mockup-dot mockup-dot-red" />
                <span className="mockup-dot mockup-dot-yellow" />
                <span className="mockup-dot mockup-dot-green" />
              </div>
              <span className="mockup-title">Praxya — BRSR Dashboard</span>
              <div className="mockup-actions">
                <span className="badge-dark" style={{ fontSize: '10px', padding: '3px 8px' }}>
                  ✦ Chemical Engine
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <div className="sidebar-logo">
                  <SmallHexIcon />
                  <span>Praxya</span>
                </div>
                <div className="sidebar-nav">
                  <SidebarItem label="Overview" active />
                  <SidebarItem label="GHG Footprint" />
                  <SidebarItem label="Water" />
                  <SidebarItem label="Energy" />
                  <SidebarItem label="Circularity" />
                  <SidebarItem label="CBAM Export" />
                  <SidebarItem label="Audit Trail" />
                </div>
              </div>

              {/* Main Content */}
              <div className="mockup-main">
                {/* Top tabs */}
                <div className="mockup-tabs">
                  <span className="mockup-tab mockup-tab-active">Overview</span>
                  <span className="mockup-tab">By Category</span>
                  <span className="mockup-tab">By Scope</span>
                  <span className="mockup-tab">Audit</span>
                </div>

                {/* KPI Cards Row */}
                <div className="mockup-kpi-row">
                  <div className="mockup-kpi-card">
                    <span className="mkpi-label">Total Emissions</span>
                    <span className="mkpi-sublabel">FY 2024–25</span>
                    <span className="mkpi-value">4,821</span>
                    <span className="mkpi-unit">tCO₂e</span>
                  </div>
                  <div className="mockup-kpi-card">
                    <span className="mkpi-label">Scope 1</span>
                    <span className="mkpi-sublabel">Process + Fuel</span>
                    <span className="mkpi-value">3,104</span>
                    <span className="mkpi-unit">tCO₂e</span>
                  </div>
                  <div className="mockup-kpi-card">
                    <span className="mkpi-label">Scope 2</span>
                    <span className="mkpi-sublabel">Grid Electricity</span>
                    <span className="mkpi-value">1,717</span>
                    <span className="mkpi-unit">tCO₂e</span>
                  </div>
                  <div className="mockup-kpi-card">
                    <span className="mkpi-label">Audit Score</span>
                    <span className="mkpi-sublabel">CA Readiness</span>
                    <span className="mkpi-value mkpi-value-green">94%</span>
                    <span className="mkpi-unit">verified</span>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="mockup-chart-area">
                  <div className="mockup-chart">
                    <span className="mchart-title">Emissions by Activity</span>
                    <div className="mchart-bars">
                      <ChartBar label="H₂SO₄" height="72%" value="1,410" />
                      <ChartBar label="Boiler" height="55%" value="980" />
                      <ChartBar label="DG Set" height="38%" value="412" />
                      <ChartBar label="Grid" height="65%" value="1,717" />
                      <ChartBar label="Transport" height="15%" value="302" />
                    </div>
                  </div>
                  <div className="mockup-donut-area">
                    <span className="mchart-title">By Scope</span>
                    <div className="mockup-donut">
                      <svg viewBox="0 0 100 100" className="donut-svg">
                        <circle cx="50" cy="50" r="40" fill="none" stroke="#1a3a1e" strokeWidth="12" />
                        <circle
                          cx="50" cy="50" r="40" fill="none"
                          stroke="#22C55E" strokeWidth="12"
                          strokeDasharray="163 251"
                          strokeDashoffset="0"
                          strokeLinecap="round"
                          transform="rotate(-90 50 50)"
                        />
                      </svg>
                      <div className="donut-center">
                        <span className="donut-pct">64%</span>
                        <span className="donut-label">Scope 1</span>
                      </div>
                    </div>
                    <div className="donut-legend">
                      <span><i className="legend-dot legend-dot-green" /> Scope 1 · 3,104</span>
                      <span><i className="legend-dot legend-dot-dim" /> Scope 2 · 1,717</span>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="mockup-status">
                  <span>
                    {statusComplete ? '✓ Report complete' : '⟳ Calculating...'}
                  </span>
                  <span>47 data points · XBRL ready · CA portal active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: var(--color-bg-primary);
          padding-top: calc(var(--nav-height) + 40px);
          padding-bottom: 40px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          display: grid;
          grid-template-columns: 48fr 52fr;
          gap: 48px;
          align-items: center;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
        }

        .hero-ctas {
          display: flex;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        /* ── Hero Stats ── */
        .hero-trust {
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid var(--color-divider);
        }

        .hero-stat-row {
          display: flex;
          align-items: flex-start;
          gap: 24px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .hero-stat-value {
          font-family: var(--font-mono);
          font-size: 28px;
          font-weight: 600;
          color: var(--color-text-primary);
          line-height: 1.2;
        }

        .hero-stat-label {
          font-family: var(--font-body);
          font-size: 13px;
          color: var(--color-text-tertiary);
          line-height: 1.4;
        }

        .hero-stat-divider {
          width: 1px;
          height: 48px;
          background: var(--color-divider);
          flex-shrink: 0;
          margin-top: 4px;
        }

        /* ═══ Product Mockup ═══ */
        .hero-mockup-wrapper {
          position: relative;
        }

        .hero-mockup {
          background: var(--color-bg-dark);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2), 0 8px 20px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* Chrome */
        .mockup-chrome {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.03);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mockup-dots {
          display: flex;
          gap: 6px;
          margin-right: 12px;
        }

        .mockup-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .mockup-dot-red { background: #EF4444; }
        .mockup-dot-yellow { background: #F59E0B; }
        .mockup-dot-green { background: #22C55E; }

        .mockup-title {
          font-family: var(--font-body);
          font-size: 11px;
          color: rgba(255, 255, 255, 0.4);
          flex: 1;
        }

        .mockup-actions {
          flex-shrink: 0;
        }

        /* Body */
        .mockup-body {
          display: flex;
          min-height: 340px;
        }

        /* Sidebar */
        .mockup-sidebar {
          width: 140px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px 0;
          flex-shrink: 0;
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 0 12px 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 8px;
        }

        .sidebar-logo span {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        /* Main Content */
        .mockup-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 0;
          min-width: 0;
        }

        .mockup-tabs {
          display: flex;
          gap: 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          padding: 0 16px;
        }

        .mockup-tab {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.3);
          padding: 10px 12px;
          border-bottom: 2px solid transparent;
        }

        .mockup-tab-active {
          color: #22C55E;
          border-bottom-color: #22C55E;
        }

        /* KPI Row */
        .mockup-kpi-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          padding: 12px 16px;
        }

        .mockup-kpi-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .mkpi-label {
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
        }

        .mkpi-sublabel {
          font-family: var(--font-mono);
          font-size: 8px;
          color: rgba(255, 255, 255, 0.25);
        }

        .mkpi-value {
          font-family: var(--font-mono);
          font-size: 20px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 4px;
          line-height: 1.1;
        }

        .mkpi-value-green {
          color: #22C55E;
        }

        .mkpi-unit {
          font-family: var(--font-mono);
          font-size: 9px;
          color: rgba(255, 255, 255, 0.3);
        }

        /* Chart Area */
        .mockup-chart-area {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 8px;
          padding: 0 16px 12px;
          flex: 1;
        }

        .mockup-chart {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          padding: 12px;
        }

        .mchart-title {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.4);
          display: block;
          margin-bottom: 12px;
        }

        .mchart-bars {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 100px;
        }

        .mockup-donut-area {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .mockup-donut {
          position: relative;
          width: 80px;
          height: 80px;
          margin: 8px 0;
        }

        .donut-svg {
          width: 100%;
          height: 100%;
        }

        .donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .donut-pct {
          font-family: var(--font-mono);
          font-size: 16px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
        }

        .donut-label {
          font-family: var(--font-body);
          font-size: 8px;
          color: rgba(255, 255, 255, 0.35);
        }

        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 100%;
        }

        .donut-legend span {
          font-family: var(--font-mono);
          font-size: 9px;
          color: rgba(255, 255, 255, 0.4);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .legend-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
          font-style: normal;
        }

        .legend-dot-green { background: #22C55E; }
        .legend-dot-dim { background: rgba(255, 255, 255, 0.15); }

        /* Status Bar */
        .mockup-status {
          display: flex;
          justify-content: space-between;
          padding: 8px 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          font-family: var(--font-mono);
          font-size: 9px;
          color: rgba(255, 255, 255, 0.3);
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero {
            padding-top: calc(var(--nav-height) + 32px);
            min-height: auto;
            padding-bottom: 64px;
          }
        }

        @media (max-width: 640px) {
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas a {
            width: 100%;
            text-align: center;
          }
          .hero-stat-row {
            flex-wrap: wrap;
            gap: 16px;
          }
          .hero-stat-divider {
            display: none;
          }
          .mockup-sidebar {
            display: none;
          }
          .mockup-kpi-row {
            grid-template-columns: repeat(2, 1fr);
          }
          .mockup-chart-area {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Sub-components ── */

function GreenDot() {
  return (
    <span
      style={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        background: '#22C55E',
        display: 'inline-block',
        flexShrink: 0,
      }}
      className="urgency-dot"
    />
  );
}

function SidebarItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      style={{
        padding: '6px 12px',
        fontSize: '10px',
        fontFamily: 'var(--font-body)',
        fontWeight: active ? 600 : 400,
        color: active ? '#22C55E' : 'rgba(255,255,255,0.35)',
        background: active ? 'rgba(34,197,94,0.08)' : 'transparent',
        borderLeft: active ? '2px solid #22C55E' : '2px solid transparent',
        cursor: 'default',
      }}
    >
      {label}
    </div>
  );
}

function ChartBar({ label, height, value }: { label: string; height: string; value: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        flex: 1,
        height: '100%',
        justifyContent: 'flex-end',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '8px',
          color: 'rgba(255,255,255,0.35)',
        }}
      >
        {value}
      </span>
      <div
        style={{
          width: '100%',
          height: height,
          background: 'linear-gradient(180deg, #22C55E 0%, #16A34A 100%)',
          borderRadius: '3px 3px 0 0',
          minHeight: '8px',
        }}
      />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '8px',
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        {label}
      </span>
    </div>
  );
}

function SmallHexIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 56 64" fill="none" aria-hidden="true">
      <path d="M28 2L52 16V46L28 60L4 46V16L28 2Z" stroke="#22C55E" strokeWidth="3" fill="none" />
    </svg>
  );
}