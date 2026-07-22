'use client';
import { useEffect, useRef, useState } from 'react';

const deliverables = [
  {
    number: '01',
    title: 'GHG Calculation Report',
    tag: 'BRSR KPI 1',
    tagColor: '#22C55E',
    description: 'Scope 1 process emissions calculated using IPCC 2006 chemical-specific factors for your exact reactions. Scope 1 combustion from fuel. Scope 2 from CEA India grid (0.716 tCO₂/MWh). Every number sourced and cited.',
    includes: [
      'Scope 1 process (stoichiometric mass-balance)',
      'Scope 1 combustion (diesel, coal, furnace oil)',
      'Scope 2 location-based (CEA India grid)',
      'GHG intensity per tonne of product',
      'Year-on-year comparison if prior data available',
    ],
    turnaround: '7–10 days',
    price: 'Included in pilot',
  },
  {
    number: '02',
    title: 'BRSR Section PDF',
    tag: 'File-Ready',
    tagColor: '#3B82F6',
    description: "SEBI BRSR Section C-P9 formatted PDF — the exact format your Company Secretary needs to file. Every value traced to its source document via numbered footnotes. CA methodology statement on the cover page.",
    includes: [
      'BRSR Section C-P9 formatted layout',
      'Data lineage footnotes (source doc + page)',
      'CA name, firm, ICAI number on cover',
      'IPCC / CEA source citations inline',
      'XBRL-compatible data export',
    ],
    turnaround: '14 days total',
    price: '₹50K pilot / ₹1.5L full',
  },
  {
    number: '03',
    title: 'CA Auditor Package',
    tag: 'Audit-Ready',
    tagColor: '#f59e0b',
    description: "A separate package for your CA auditor: read-only portal showing full data lineage, source documents linked to each number, methodology sign-off sheet, and confidence flags for any factor requiring auditor review.",
    includes: [
      'Read-only auditor portal access (1 year)',
      'Source document to KPI value lineage tree',
      'Methodology validation sheet',
      'Confidence flags on all emission factors',
      'Auditor response template for SEBI queries',
    ],
    turnaround: 'Delivered with report',
    price: 'Included',
  },
];

export default function WhatWeDeliver() {
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
      id="deliverables"
      style={{
        padding: '100px 24px',
        background: '#F9FAFB',
      }}
    >
      <div style={{
        maxWidth: 1140,
        margin: '0 auto',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: 'all 0.7s cubic-bezier(.16,1,.3,1)',
      }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#F0FDF4', color: '#16a34a',
            padding: '6px 16px', borderRadius: 100, fontSize: 13, fontWeight: 600,
          }}>
            📋 What We Deliver
          </span>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800, color: '#111827',
            margin: '20px 0 12px',
            letterSpacing: '-0.02em',
          }}>
            Three deliverables.<br />
            <span style={{ color: '#22C55E' }}>One 14-day engagement.</span>
          </h2>
          <p style={{
            fontSize: 17, color: '#6B7280', maxWidth: 560,
            margin: '0 auto', lineHeight: 1.7,
          }}>
            Every Praxya engagement produces the same three outputs — the GHG
            calculation, the filing-ready BRSR section, and a complete CA audit
            package. Nothing more to request. Nothing missing at filing time.
          </p>
        </div>

        {/* Deliverable Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
          marginBottom: 56,
        }}>
          {deliverables.map((d, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                border: '1px solid #E5E7EB',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#D1FAE5';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(34,197,94,0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top accent bar */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0,
                height: 3, background: d.tagColor,
              }} />

              {/* Number + Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{
                  fontFamily: 'monospace', fontSize: 13, fontWeight: 700,
                  color: '#9CA3AF', letterSpacing: '0.05em',
                }}>
                  {d.number}
                </span>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  padding: '3px 10px', borderRadius: 6,
                  background: `${d.tagColor}15`,
                  color: d.tagColor,
                  letterSpacing: '0.03em',
                }}>
                  {d.tag}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 20, fontWeight: 700, color: '#111827',
                lineHeight: 1.3, margin: 0,
              }}>
                {d.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: 14, color: '#6B7280', lineHeight: 1.65, margin: 0,
              }}>
                {d.description}
              </p>

              {/* Includes list */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {d.includes.map((item, j) => (
                  <div key={j} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    fontSize: 13, color: '#374151',
                  }}>
                    <span style={{
                      color: '#22C55E', fontWeight: 700, flexShrink: 0,
                      marginTop: 1,
                    }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>

              {/* Footer: turnaround + price */}
              <div style={{
                marginTop: 'auto',
                paddingTop: 16,
                borderTop: '1px solid #F3F4F6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <div>
                  <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Turnaround
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginTop: 2 }}>
                    {d.turnaround}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 11, color: '#9CA3AF', fontWeight: 600,
                    textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Price
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#22C55E', marginTop: 2 }}>
                    {d.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div style={{
          background: '#111827',
          borderRadius: 16,
          padding: '32px 40px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 24,
        }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: '#fff', marginBottom: 6 }}>
              Not sure which fits your situation?
            </div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)' }}>
              We run a free assessment first. No commitment. We tell you exactly
              what your filing needs.
            </div>
          </div>
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 32px', borderRadius: 10,
              background: '#22C55E', color: '#fff',
              fontWeight: 700, fontSize: 15,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'transform 0.2s, background 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#16a34a';
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = '#22C55E';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Book Free Assessment →
          </a>
        </div>

      </div>
    </section>
  );
}
