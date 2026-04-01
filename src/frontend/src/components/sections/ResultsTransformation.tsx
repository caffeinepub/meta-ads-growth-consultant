import { CheckCircle, XCircle } from "lucide-react";

const before = [
  "Low ROAS",
  "High CPL",
  "Random, unpredictable results",
  "Budget waste with no visibility",
  "Poor funnel flow",
];

const after = [
  "Improved ROAS (avg. 2.1×)",
  "Lower CPL (avg. 48% reduction)",
  "Predictable, scalable results",
  "Stable performance & clear ROI",
  "Clear growth roadmap",
];

const metrics = [
  {
    label: "Average ROAS Improvement",
    value: "2.1×",
    sub: "across all clients",
  },
  { label: "Average CPL Reduction", value: "48%", sub: "within 60 days" },
  { label: "Conversion Lift", value: "3.2×", sub: "average increase" },
];

export default function ResultsTransformation() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            What Happens After Optimization
          </h2>
          <p className="text-muted-foreground">
            Real transformations from real clients.
          </p>
        </div>

        {/* Before / After */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
            <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
              <XCircle size={20} /> Before
            </h3>
            <ul className="space-y-3">
              {before.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-red-800"
                >
                  <XCircle size={14} className="text-red-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <h3 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
              <CheckCircle size={20} /> After
            </h3>
            <ul className="space-y-3">
              {after.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-green-800"
                >
                  <CheckCircle
                    size={14}
                    className="text-primary flex-shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="card-premium rounded-2xl p-6 text-center"
            >
              <p className="text-4xl font-extrabold text-primary mb-1">
                {m.value}
              </p>
              <p className="font-semibold text-foreground text-sm mb-1">
                {m.label}
              </p>
              <p className="text-xs text-muted-foreground">{m.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
