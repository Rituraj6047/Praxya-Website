// app/page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import InsightsStrip from '@/components/InsightsStrip';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import CbamBanner from '@/components/CbamBanner';
import Capabilities from '@/components/Capabilities';
import RegTimeline from '@/components/RegTimeline';
import Vision from '@/components/Vision';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* ── Hero: white bg, bold headline, product mockup ── */}
        <Hero />

        {/* ── Insights Strip: 4-col stats + rotating ticker ── */}
        <InsightsStrip />

        {/* ── Light divider ── */}
        <SectionDivider />

        {/* ── Problem: white cards, emission factor comparison ── */}
        <Problem />

        {/* ── Solution: step cards with green numbers ── */}
        <Solution />

        <SectionDivider />

        {/* ── CBAM Banner: dark bg, urgency data, company table ── */}
        <CbamBanner />

        {/* ── Capabilities: tabbed feature tiers ── */}
        <Capabilities />

        {/* ── Regulatory Timeline: vertical milestones ── */}
        <RegTimeline />

        <SectionDivider />

        {/* ── Vision: beliefs, founder quote, roadmap ── */}
        <Vision />

        {/* ── Contact Form: two-column, light ── */}
        <ContactForm />
      </main>

      {/* ── Footer: dark, Greenly-style ── */}
      <Footer />
    </>
  );
}

/* ── Clean light section divider (replaces old HexDivider) ── */
function SectionDivider() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          padding: '12px 0',
        }}
      >
        {/* left line */}
        <div
          style={{
            width: 40,
            height: 1,
            background: 'linear-gradient(to right, transparent, #E5E7EB)',
          }}
        />
        {/* center dot */}
        <div
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#D1FAE5',
            border: '1px solid #BBF7D0',
          }}
        />
        {/* right line */}
        <div
          style={{
            width: 40,
            height: 1,
            background: 'linear-gradient(to left, transparent, #E5E7EB)',
          }}
        />
      </div>
    </div>
  );
}