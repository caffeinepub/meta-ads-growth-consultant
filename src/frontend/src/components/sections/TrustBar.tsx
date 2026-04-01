const categories = [
  { label: "Ecommerce Brands", icon: "🛍️" },
  { label: "SaaS Companies", icon: "💻" },
  { label: "Coaching Businesses", icon: "🎯" },
  { label: "Local Businesses", icon: "📍" },
  { label: "D2C Startups", icon: "🚀" },
  { label: "Service Providers", icon: "⚙️" },
  { label: "Online Retailers", icon: "🏪" },
  { label: "B2B Companies", icon: "🤝" },
];

const doubled = [
  ...categories.map((c) => ({ ...c, id: `a-${c.label}` })),
  ...categories.map((c) => ({ ...c, id: `b-${c.label}` })),
];

export default function TrustBar() {
  return (
    <section className="border-y border-border py-6 bg-white overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
        Trusted By Growing Brands Worldwide
      </p>
      <div className="relative overflow-hidden">
        <div
          className="flex gap-4 animate-marquee whitespace-nowrap"
          style={{ width: "max-content" }}
        >
          {doubled.map((cat) => (
            <span
              key={cat.id}
              className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 text-sm font-medium text-muted-foreground border border-border flex-shrink-0"
            >
              <span>{cat.icon}</span>
              {cat.label}
            </span>
          ))}
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-4">
        Helping businesses from startup stage to scaling phase.
      </p>
    </section>
  );
}
