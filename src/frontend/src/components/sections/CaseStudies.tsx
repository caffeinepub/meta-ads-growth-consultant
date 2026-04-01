import { Button } from "@/components/ui/button";
import { TrendingDown, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

interface CaseStudy {
  industry: string;
  metric: string;
  highlight: string;
  icon: ReactNode;
  desc: string;
  before: string;
  after: string;
}

const cases: CaseStudy[] = [
  {
    industry: "Ecommerce Brand",
    metric: "ROAS 1.8 → 3.6",
    highlight: "+100%",
    icon: <TrendingUp size={16} />,
    desc: "Facebook Ads optimization + complete funnel restructure drove a 2× ROAS improvement in 90 days.",
    before: "ROAS: 1.8×",
    after: "ROAS: 3.6×",
  },
  {
    industry: "Coaching Business",
    metric: "CPL Reduced 52%",
    highlight: "-52%",
    icon: <TrendingDown size={16} />,
    desc: "Lead gen campaign overhaul with audience refinement cut cost per lead in half within 60 days.",
    before: "CPL: $48",
    after: "CPL: $23",
  },
  {
    industry: "Local Business",
    metric: "Leads Increased 3×",
    highlight: "+200%",
    icon: <TrendingUp size={16} />,
    desc: "Local awareness to conversion funnel rebuilt from scratch, tripling qualified leads per week.",
    before: "12 leads/week",
    after: "47 leads/week",
  },
];

export default function CaseStudies() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Real Client Growth Examples
          </h2>
          <p className="text-muted-foreground">
            Data from real campaigns, real results.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {cases.map((c, i) => (
            <div
              key={c.industry}
              data-ocid={`cases.item.${i + 1}`}
              className="card-premium rounded-2xl p-6 space-y-4"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-full px-3 py-1">
                {c.industry}
              </span>
              <div>
                <p className="text-4xl font-extrabold text-primary">
                  {c.highlight}
                </p>
                <p className="font-semibold text-foreground mt-1">{c.metric}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {c.desc}
              </p>
              <div className="flex gap-3 text-xs font-semibold">
                <span className="bg-red-50 text-red-600 rounded-lg px-3 py-1.5 border border-red-100">
                  Before: {c.before}
                </span>
                <span className="bg-green-50 text-primary rounded-lg px-3 py-1.5 border border-green-200">
                  After: {c.after}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            data-ocid="cases.view_all.secondary_button"
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8"
          >
            See All Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
