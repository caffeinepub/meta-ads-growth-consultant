const steps = [
  {
    num: "01",
    title: "Full Funnel Audit",
    desc: "Deep dive into your ad account, funnel flow, and tracking setup to find every leak.",
  },
  {
    num: "02",
    title: "Tracking Accuracy Setup",
    desc: "Fix attribution gaps so every decision is backed by accurate, reliable data.",
  },
  {
    num: "03",
    title: "Conversion Optimization",
    desc: "Improve landing pages, creatives, and audience targeting to maximize conversion rate.",
  },
  {
    num: "04",
    title: "Scaling Framework",
    desc: "Build structured systems to scale ad spend profitably without guesswork.",
  },
  {
    num: "05",
    title: "Performance Monitoring",
    desc: "Ongoing oversight with weekly reports and proactive optimization adjustments.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            My 5-Step Meta Ads Growth System
          </h2>
          <p className="text-white/60 text-base">
            Structured like a growth partner, not freelancer tasks.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:grid grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-gold text-navy font-extrabold text-base flex items-center justify-center mb-3 shadow-md z-10">
                {step.num}
              </div>
              <h3 className="font-bold text-white text-sm mb-2">
                {step.title}
              </h3>
              <p className="text-white/50 text-xs leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={step.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gold text-navy font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-white/10 mt-2" />
                )}
              </div>
              <div className="pb-4">
                <h3 className="font-bold text-white mb-1">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
