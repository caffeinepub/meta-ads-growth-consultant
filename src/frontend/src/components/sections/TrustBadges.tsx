import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const badges = [
  {
    name: "Meta Business Partner",
    icon: "M",
    color: "#1877F2",
    description: "Official Partner",
  },
  {
    name: "Google Analytics",
    icon: "G",
    color: "#E37400",
    description: "Certified Expert",
  },
  {
    name: "Shopify Partner",
    icon: "S",
    color: "#96BF48",
    description: "Verified Partner",
  },
  {
    name: "Klaviyo",
    icon: "K",
    color: "#222222",
    description: "Master Partner",
  },
];

export default function TrustBadges() {
  return (
    <section id="services" className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
            Certified & Trusted Partner
          </p>
          <h2 className="text-xl font-display font-bold text-foreground">
            Every platform certified. Every strategy battle-tested.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-premium rounded-xl p-5 flex flex-col items-center text-center"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-xl mb-3"
                style={{ backgroundColor: badge.color }}
              >
                {badge.icon}
              </div>
              <p className="text-foreground font-semibold text-sm mb-0.5">
                {badge.name}
              </p>
              <div className="flex items-center gap-1 text-muted-foreground text-xs">
                <CheckCircle2 size={12} className="text-green-500" />
                {badge.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
