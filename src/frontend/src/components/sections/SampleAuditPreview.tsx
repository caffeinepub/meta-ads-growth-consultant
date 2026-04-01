import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Ad Account Structure",
    status: "Issues Found",
    statusColor: "bg-red-100 text-red-700 border-red-200",
    dot: "bg-red-500",
    findings: [
      "Campaigns overlapping audiences — causing self-competition",
      "Ad set budget allocation not aligned with funnel stage",
      "No separation between cold, warm, and retargeting traffic",
    ],
  },
  {
    title: "Funnel Gap Analysis",
    status: "3 Critical Gaps",
    statusColor: "bg-red-100 text-red-700 border-red-200",
    dot: "bg-red-500",
    findings: [
      "Top-of-funnel traffic never retargeted — massive leakage",
      "Landing page lacks trust elements and social proof",
      "No post-purchase flow to maximize LTV",
    ],
  },
  {
    title: "Tracking Accuracy",
    status: "Partial Data Loss",
    statusColor: "bg-amber-100 text-amber-700 border-amber-200",
    dot: "bg-amber-500",
    findings: [
      "Pixel firing on 73% of sessions — missing 27% of events",
      "Conversion API not implemented — iOS 14+ impact unmitigated",
    ],
  },
  {
    title: "Recommendations",
    status: "8 Action Items",
    statusColor: "bg-green-100 text-primary border-green-200",
    dot: "bg-primary",
    findings: [
      "Consolidate campaign structure with proper audience exclusions",
      "Implement server-side tracking via Conversions API",
      "Build 3-stage retargeting funnel with sequential messaging",
    ],
  },
];

export default function SampleAuditPreview() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            See Exactly What You'll Receive
          </h2>
          <p className="text-muted-foreground">
            A real audit report sample — no fluff, just actionable insights.
          </p>
        </div>

        <div className="border border-border rounded-2xl shadow-premium overflow-hidden">
          <div className="bg-navy px-6 py-4 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-sm">
                Meta Ads Funnel Audit Report
              </p>
              <p className="text-white/50 text-xs">
                Sample Report — Nikhil S | Meta Ads Consultant
              </p>
            </div>
            <span className="bg-primary/20 text-primary text-xs font-bold rounded-full px-3 py-1 border border-primary/30">
              SAMPLE
            </span>
          </div>

          <div className="divide-y divide-border">
            {sections.map((s) => (
              <div key={s.title} className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${s.dot}`} />
                    <h4 className="font-semibold text-foreground text-sm">
                      {s.title}
                    </h4>
                  </div>
                  <span
                    className={`text-xs font-bold rounded-full px-3 py-1 border ${s.statusColor}`}
                  >
                    {s.status}
                  </span>
                </div>
                <ul className="space-y-1.5 pl-4">
                  {s.findings.map((f) => (
                    <li
                      key={f}
                      className="text-xs text-muted-foreground list-disc"
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            data-ocid="sample.audit.primary_button"
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
          >
            Get Your Free Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
