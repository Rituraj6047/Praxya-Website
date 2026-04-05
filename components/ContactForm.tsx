'use client';

import { useState, useRef, useEffect } from 'react';

interface FormData {
  company: string;
  role: string;
  industry: string;
  plantCount: string;
  currentApproach: string;
  exportsToEU: string;
  name: string;
  email: string;
  phone: string;
  challenge: string;
}

const INITIAL: FormData = {
  company: '',
  role: '',
  industry: '',
  plantCount: '',
  currentApproach: '',
  exportsToEU: '',
  name: '',
  email: '',
  phone: '',
  challenge: '',
};

const ROLES = [
  'Company Secretary',
  'EHS / Environment Head',
  'CFO / Finance',
  'Sustainability Lead',
  'Plant Manager',
  'Managing Director',
  'Chartered Accountant',
  'Other',
];

const INDUSTRIES = [
  'Specialty Chemicals',
  'Agrochemicals',
  'Petrochemicals',
  'Pharma Intermediates',
  'Dyes & Pigments',
  'Chlor-Alkali',
  'Fertilizers',
  'Polymers & Plastics',
  'Other Chemical Manufacturing',
  'Other (Non-Chemical)',
];

const PLANT_COUNTS = ['1 plant', '2–5 plants', '6–10 plants', '10+ plants'];

const APPROACHES = [
  'Big 4 / External consultant',
  'Local CA firm',
  'In-house team (manual)',
  'Using another ESG tool',
  "Haven't started BRSR yet",
  'Not sure',
];

const EU_OPTIONS = ['Yes — currently exporting', 'No', 'Planning to'];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll('.reveal');
            reveals.forEach((el) => el.classList.add('revealed'));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const update = (field: keyof FormData, value: string) => {
    setData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate1 = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.company.trim()) e.company = 'Company name is required';
    if (!data.role) e.role = 'Please select your role';
    if (!data.industry) e.industry = 'Please select your industry';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validate2 = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.plantCount) e.plantCount = 'Please select plant count';
    if (!data.currentApproach) e.currentApproach = 'Please select your current approach';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const validate3 = (): boolean => {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) e.name = 'Your name is required';
    if (!data.email.trim()) e.email = 'Work email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      e.email = 'Please enter a valid work email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const next = () => {
    if (step === 1 && validate1()) {
      setStep(2);
      setErrors({});
    } else if (step === 2 && validate2()) {
      setStep(3);
      setErrors({});
    }
  };

  const back = () => {
    if (step > 1) {
      setStep(step - 1);
      setErrors({});
    }
  };

  const submit = () => {
    if (!validate3()) return;

    // TODO: POST to your API, webhook, Google Sheet, etc.
    console.log('--- PRAXYA LEAD ---');
    console.log(JSON.stringify(data, null, 2));

    setSubmitted(true);
  };

  return (
    <section className="section-secondary" id="contact" ref={sectionRef}>
      <div className="container">
        <div className="contact-layout">
          {/* ── Left Column — Context ── */}
          <div className="contact-context reveal">
            <span className="label-section">GET IN TOUCH</span>
            <h2
              className="heading-section"
              style={{ marginTop: '16px', maxWidth: '440px' }}
            >
              Let&rsquo;s assess your
              <br />
              BRSR readiness.
            </h2>
            <p
              className="text-body"
              style={{ marginTop: '20px', maxWidth: '400px' }}
            >
              Share a few details about your operations. We&rsquo;ll come back
              with a custom assessment of how Praxya fits your compliance
              workflow — no sales pitch, just clarity.
            </p>

            <div className="contact-promises">
              <PromiseItem text="Response within 24 hours" />
              <PromiseItem text="Custom BRSR gap analysis" />
              <PromiseItem text="No obligation, no spam" />
              <PromiseItem text="CBAM exposure estimate if applicable" />
            </div>

            <div className="contact-trust">
              <span>
                SEBI BRSR v2 · IPCC 2006 · CEA Grid Factors · XBRL Native
              </span>
            </div>
          </div>

          {/* ── Right Column — Form Card ── */}
          <div className="contact-form-card card reveal reveal-stagger-2">
            {submitted ? (
              /* ── Success State ── */
              <div className="form-success success-anim">
                <div className="form-success-icon">✓</div>
                <h3
                  className="heading-card"
                  style={{ fontSize: '22px', textAlign: 'center' }}
                >
                  Thank you, {data.name.split(' ')[0]}.
                </h3>
                <p
                  className="text-body"
                  style={{
                    marginTop: '12px',
                    textAlign: 'center',
                    maxWidth: '380px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                  }}
                >
                  We&rsquo;ll review your details and reach out to{' '}
                  <strong style={{ color: 'var(--color-text-primary)' }}>
                    {data.email}
                  </strong>{' '}
                  within 24 hours with a preliminary BRSR readiness assessment
                  for {data.company}.
                </p>

                {data.exportsToEU === 'Yes — currently exporting' && (
                  <p
                    className="caption"
                    style={{ marginTop: '16px', textAlign: 'center' }}
                  >
                    Since you export to the EU, we&rsquo;ll include a CBAM
                    exposure estimate in your assessment.
                  </p>
                )}

                <div
                  style={{
                    marginTop: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <a href="#cbam" className="btn-secondary">
                    Learn About CBAM Impact →
                  </a>
                </div>
              </div>
            ) : (
              <>
                {/* ── Step Indicators ── */}
                <div className="form-steps">
                  {[
                    { num: 1, label: 'Company' },
                    { num: 2, label: 'Operations' },
                    { num: 3, label: 'Contact' },
                  ].map((s, i) => (
                    <div
                      key={s.num}
                      style={{ display: 'flex', alignItems: 'center' }}
                    >
                      {i > 0 && <div className="form-step-connector" />}
                      <div
                        className={`form-step-indicator ${
                          step === s.num
                            ? 'active'
                            : step > s.num
                            ? 'completed'
                            : ''
                        }`}
                      >
                        <span className="form-step-number">
                          {step > s.num ? '✓' : s.num}
                        </span>
                        <span className="form-step-label">{s.label}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* ════════ STEP 1 — Company ════════ */}
                {step === 1 && (
                  <div className="form-step-enter" key="s1">
                    <div className="form-grid">
                      {/* Company Name */}
                      <div className="form-group form-full">
                        <label className="form-label">
                          Company Name
                          <span className="form-required">*</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="e.g. Aarti Industries Ltd."
                          value={data.company}
                          onChange={(e) => update('company', e.target.value)}
                        />
                        {errors.company && (
                          <span className="form-error">{errors.company}</span>
                        )}
                      </div>

                      {/* Role */}
                      <div className="form-group">
                        <label className="form-label">
                          Your Role
                          <span className="form-required">*</span>
                        </label>
                        <select
                          className="form-select"
                          value={data.role}
                          onChange={(e) => update('role', e.target.value)}
                        >
                          <option value="">Select your role</option>
                          {ROLES.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                        {errors.role && (
                          <span className="form-error">{errors.role}</span>
                        )}
                      </div>

                      {/* Industry */}
                      <div className="form-group">
                        <label className="form-label">
                          Industry
                          <span className="form-required">*</span>
                        </label>
                        <select
                          className="form-select"
                          value={data.industry}
                          onChange={(e) => update('industry', e.target.value)}
                        >
                          <option value="">Select industry</option>
                          {INDUSTRIES.map((ind) => (
                            <option key={ind} value={ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                        {errors.industry && (
                          <span className="form-error">{errors.industry}</span>
                        )}
                      </div>
                    </div>

                    <div className="form-actions">
                      <div />
                      <button className="btn-primary" onClick={next}>
                        Continue →
                      </button>
                    </div>
                  </div>
                )}

                {/* ════════ STEP 2 — Operations ════════ */}
                {step === 2 && (
                  <div className="form-step-enter" key="s2">
                    <div className="form-grid">
                      {/* Plant Count */}
                      <div className="form-group form-full">
                        <label className="form-label">
                          Number of Manufacturing Plants
                          <span className="form-required">*</span>
                        </label>
                        <div className="form-radio-group">
                          {PLANT_COUNTS.map((pc) => (
                            <label
                              key={pc}
                              className={`form-radio-option ${
                                data.plantCount === pc ? 'selected' : ''
                              }`}
                            >
                              <input
                                type="radio"
                                name="plantCount"
                                value={pc}
                                checked={data.plantCount === pc}
                                onChange={() => update('plantCount', pc)}
                              />
                              {pc}
                            </label>
                          ))}
                        </div>
                        {errors.plantCount && (
                          <span className="form-error">
                            {errors.plantCount}
                          </span>
                        )}
                      </div>

                      {/* Current Approach */}
                      <div className="form-group form-full">
                        <label className="form-label">
                          Current BRSR Approach
                          <span className="form-required">*</span>
                        </label>
                        <select
                          className="form-select"
                          value={data.currentApproach}
                          onChange={(e) =>
                            update('currentApproach', e.target.value)
                          }
                        >
                          <option value="">
                            How do you currently handle BRSR?
                          </option>
                          {APPROACHES.map((a) => (
                            <option key={a} value={a}>
                              {a}
                            </option>
                          ))}
                        </select>
                        {errors.currentApproach && (
                          <span className="form-error">
                            {errors.currentApproach}
                          </span>
                        )}
                      </div>

                      {/* EU Exports */}
                      <div className="form-group form-full">
                        <label className="form-label">
                          Do you export to the EU?
                        </label>
                        <div className="form-radio-group">
                          {EU_OPTIONS.map((opt) => (
                            <label
                              key={opt}
                              className={`form-radio-option ${
                                data.exportsToEU === opt ? 'selected' : ''
                              }`}
                            >
                              <input
                                type="radio"
                                name="exportsToEU"
                                value={opt}
                                checked={data.exportsToEU === opt}
                                onChange={() => update('exportsToEU', opt)}
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                        <span className="form-hint">
                          Relevant for CBAM exposure assessment
                        </span>
                      </div>
                    </div>

                    <div className="form-actions">
                      <button className="form-back" onClick={back}>
                        ← Back
                      </button>
                      <button className="btn-primary" onClick={next}>
                        Continue →
                      </button>
                    </div>
                  </div>
                )}

                {/* ════════ STEP 3 — Contact ════════ */}
                {step === 3 && (
                  <div className="form-step-enter" key="s3">
                    <div className="form-grid">
                      {/* Name */}
                      <div className="form-group">
                        <label className="form-label">
                          Your Name
                          <span className="form-required">*</span>
                        </label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Full name"
                          value={data.name}
                          onChange={(e) => update('name', e.target.value)}
                        />
                        {errors.name && (
                          <span className="form-error">{errors.name}</span>
                        )}
                      </div>

                      {/* Email */}
                      <div className="form-group">
                        <label className="form-label">
                          Work Email
                          <span className="form-required">*</span>
                        </label>
                        <input
                          className="form-input"
                          type="email"
                          placeholder="you@company.com"
                          value={data.email}
                          onChange={(e) => update('email', e.target.value)}
                        />
                        {errors.email && (
                          <span className="form-error">{errors.email}</span>
                        )}
                      </div>

                      {/* Phone — optional */}
                      <div className="form-group form-full">
                        <label className="form-label">
                          Phone / WhatsApp
                          <span className="form-hint" style={{ marginLeft: '8px', display: 'inline' }}>
                            (optional)
                          </span>
                        </label>
                        <input
                          className="form-input"
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={data.phone}
                          onChange={(e) => update('phone', e.target.value)}
                        />
                      </div>

                      {/* Challenge — open ended intelligence */}
                      <div className="form-group form-full">
                        <label className="form-label">
                          Biggest compliance challenge right now
                          <span className="form-hint" style={{ marginLeft: '8px', display: 'inline' }}>
                            (optional — helps us prepare your assessment)
                          </span>
                        </label>
                        <textarea
                          className="form-textarea"
                          placeholder="e.g. Our CA spends 3 months collecting data from 4 plants. We need process-specific GHG factors for our sulphuric acid production..."
                          value={data.challenge}
                          onChange={(e) => update('challenge', e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="form-actions">
                      <button className="form-back" onClick={back}>
                        ← Back
                      </button>
                      <button className="btn-primary" onClick={submit}>
                        Submit Assessment Request
                      </button>
                    </div>

                    <p
                      className="form-hint"
                      style={{ marginTop: '16px', textAlign: 'center' }}
                    >
                      We&rsquo;ll never share your information. Response within
                      24 hours.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .form-step-label {
          display: inline;
        }

        @media (max-width: 480px) {
          .form-step-label {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}

/* ── Promise item with check icon ── */
function PromiseItem({ text }: { text: string }) {
  return (
    <div className="promise-item">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <circle
          cx="8"
          cy="8"
          r="7"
          stroke="var(--color-text-data)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M5 8l2 2 4-4"
          stroke="var(--color-text-data)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span>{text}</span>
    </div>
  );
}