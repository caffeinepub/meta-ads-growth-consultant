import { Button } from "@/components/ui/button";
import {
  BarChart2,
  DollarSign,
  FlaskConical,
  Image,
  Users,
  XCircle,
} from "lucide-react";
import type { ReactNode } from "react";

interface Problem {
  icon: ReactNode;
  title: string;
  desc: string;
}

const problems: Problem[] = [
  {
    icon: <BarChart2 size={20} />,
    title: "No Funnel Strategy",
    desc: "Running ads without a clear funnel structure wastes every dollar spent.",
  },
  {
    icon: <XCircle size={20} />,
    title: "Inaccurate Tracking",
    desc: "Decisions based on broken or incomplete data lead to wrong conclusions.",
  },
  {
    icon: <Users size={20} />,
    title: "Wrong Audiences",
    desc: "Targeting people who'll never buy, no matter how good the creative is.",
  },
  {
    icon: <Image size={20} />,
    title: "Creatives Don't Convert",
    desc: "Ad content that generates clicks but never turns browsers into buyers.",
  },
  {
    icon: <FlaskConical size={20} />,
    title: "No Testing Framework",
    desc: "Random experiments with no structure generate noise, not signal.",
  },
  {
    icon: <DollarSign size={20} />,
    title: "Budget Leakage",
    desc: "Spend without visibility into what's working bleeds your budget dry.",
  },
];

export default function ProblemAgitation() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Why Most Meta Ads Fail
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            If any of these sound familiar, your funnel has critical gaps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {problems.map((p, i) => (
            <div
              key={p.title}
              data-ocid={`problem.item.${i + 1}`}
              className="rounded-xl border border-red-100 bg-red-50/50 p-5 hover:shadow-md transition-shadow"
            >
              <div className="text-red-500 mb-3">{p.icon}</div>
              <h3 className="font-bold text-foreground mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-lg font-bold text-foreground">
            This is exactly what I diagnose and fix.
          </p>
          <Button
            data-ocid="problem.audit.primary_button"
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8"
          >
            Get Free Audit
          </Button>
        </div>
      </div>
    </section>
  );
}
