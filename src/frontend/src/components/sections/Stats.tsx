import { Award, DollarSign, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    icon: Award,
    value: "7+",
    unit: "Years",
    label: "Experience Running Meta Ads",
    bar: 70,
    sub: "Since 2017",
  },
  {
    icon: DollarSign,
    value: "$50M+",
    unit: "",
    label: "Total Ad Spend Managed",
    bar: 85,
    sub: "Across all platforms",
  },
  {
    icon: TrendingUp,
    value: "$200M+",
    unit: "",
    label: "Client Revenue Generated",
    bar: 95,
    sub: "Attributed revenue",
  },
  {
    icon: Users,
    value: "120+",
    unit: "",
    label: "Brands Served Worldwide",
    bar: 60,
    sub: "eCommerce, SaaS, D2C",
  },
];

export default function Stats() {
  return (
    <section id="results" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-gold mb-2">
            By The Numbers
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-deep mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            7+ years of real-world performance data, not agency fluff.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-premium rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-gold" />
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-display font-bold text-navy-deep">
                    {stat.value}
                  </span>
                  {stat.unit && (
                    <span className="text-navy-deep font-semibold text-lg">
                      {stat.unit}
                    </span>
                  )}
                </div>
                <p className="text-foreground font-semibold text-sm mb-1">
                  {stat.label}
                </p>
                <p className="text-muted-foreground text-xs mb-4">{stat.sub}</p>
                <div className="stat-bar">
                  <motion.div
                    className="stat-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stat.bar}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: i * 0.15,
                      ease: "easeOut",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-6 bg-muted rounded-2xl flex flex-wrap gap-3 items-center justify-center"
        >
          <span className="text-sm font-semibold text-foreground mr-2">
            Industries:
          </span>
          {[
            "eCommerce",
            "DTC Fashion",
            "Beauty & Skincare",
            "Health & Wellness",
            "SaaS",
            "B2B Tech",
            "Home Goods",
            "Pet Products",
            "Food & Beverage",
          ].map((industry) => (
            <span
              key={industry}
              className="bg-white border border-border text-foreground text-xs px-3 py-1.5 rounded-full font-medium shadow-xs"
            >
              {industry}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
