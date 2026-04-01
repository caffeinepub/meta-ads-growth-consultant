import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "SM",
    name: "Sarah M.",
    type: "Ecommerce Owner",
    result: "ROAS: 1.9 → 4.2",
    quote:
      "ROAS went from 1.9 to 4.2 in 8 weeks. Nikhil completely transformed our ad account. Best investment we've made.",
  },
  {
    initials: "JT",
    name: "James T.",
    type: "Online Coach",
    result: "CPL: $48 → $19",
    quote:
      "CPL dropped from $48 to $19. My coaching calendar is now fully booked 3 weeks out. Outstanding work.",
  },
  {
    initials: "PK",
    name: "Priya K.",
    type: "SaaS Founder",
    result: "Leads tripled in 60 days",
    quote:
      "Leads tripled in 60 days. The tracking setup alone was worth every penny. Finally have real data to work with.",
  },
  {
    initials: "DR",
    name: "David R.",
    type: "Local Restaurant Chain",
    result: "12 → 47 leads/week",
    quote:
      "We went from 12 leads per week to 47. The local funnel strategy Nikhil built is absolutely outstanding.",
  },
  {
    initials: "ML",
    name: "Monica L.",
    type: "D2C Brand Owner",
    result: "Revenue up 68% in 3 months",
    quote:
      "Finally have a predictable system. Revenue up 68% in 3 months and the growth is consistent every week.",
  },
  {
    initials: "AB",
    name: "Alex B.",
    type: "B2B Services",
    result: "40% less wasted spend",
    quote:
      "Reduced wasted ad spend by 40% in the first month alone. Nikhil genuinely knows his stuff inside and out.",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} size={13} className="fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground">
            Real feedback from real businesses.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              data-ocid={`testimonials.item.${i + 1}`}
              className="card-premium rounded-2xl p-6 space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.type}</p>
                </div>
              </div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold rounded-full px-3 py-1">
                {t.result}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{t.quote}"
              </p>
              <Stars />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
