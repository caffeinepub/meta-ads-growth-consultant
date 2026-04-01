import { Heart, Lightbulb, Shield, Unlock } from "lucide-react";
import type { ReactNode } from "react";

interface TrustItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

const items: TrustItem[] = [
  {
    icon: <Shield size={28} className="text-primary" />,
    title: "No Obligation",
    desc: "Walk away with insights, no strings attached. Zero pressure to hire.",
  },
  {
    icon: <Unlock size={28} className="text-primary" />,
    title: "No Contracts",
    desc: "You decide if you want to work together. No paperwork, no commitment.",
  },
  {
    icon: <Heart size={28} className="text-primary" />,
    title: "No Pressure",
    desc: "Zero hard selling. Ever. This is a genuine audit, not a sales call.",
  },
  {
    icon: <Lightbulb size={28} className="text-primary" />,
    title: "Just Insights",
    desc: "Real analysis. Real recommendations. Actionable and specific to your business.",
  },
];

export default function RiskReversal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            100% Free. No Sales Pitch.
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            This is a genuine audit, not a sales call in disguise.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="card-premium rounded-2xl p-6 text-center space-y-3"
            >
              <div className="flex justify-center">{item.icon}</div>
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
