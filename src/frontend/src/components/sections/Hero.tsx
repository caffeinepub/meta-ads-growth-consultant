import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap } from "lucide-react";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const roasData = [
  { month: "Jan", roas: 1.8 },
  { month: "Feb", roas: 2.1 },
  { month: "Mar", roas: 2.5 },
  { month: "Apr", roas: 2.8 },
  { month: "May", roas: 3.2 },
  { month: "Jun", roas: 3.6 },
];

const cplData = [
  { month: "Jan", cpl: 48 },
  { month: "Feb", cpl: 42 },
  { month: "Mar", cpl: 35 },
  { month: "Apr", cpl: 29 },
  { month: "May", cpl: 25 },
  { month: "Jun", cpl: 23 },
];

const authorityBadges = [
  "Top Rated Plus",
  "90% Job Success",
  "15,723+ Hours",
  "291+ Projects",
  "5-Star Rated",
];

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToResults = () =>
    document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="pt-24 pb-16 md:pt-28 md:pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 animate-fade-in-up">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-1.5 text-sm font-semibold">
              <CheckCircle size={14} />
              Top Rated Plus on Upwork • 291+ Projects
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight tracking-tight">
              Stop Wasting Money on Meta Ads.{" "}
              <span className="text-primary">
                Turn Them Into a Predictable Profit Channel.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I help ecommerce brands, coaches and local businesses improve
              ROAS, lower CPL and build scalable Meta Ads systems using proven
              testing and optimization frameworks.
            </p>

            {/* Authority badges */}
            <div className="flex flex-wrap gap-2">
              {authorityBadges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 border border-primary/30 bg-primary/5 text-primary rounded-full px-3 py-1 text-xs font-semibold"
                >
                  <CheckCircle size={11} />
                  {badge}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                data-ocid="hero.audit.primary_button"
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Get Free Funnel Audit
              </Button>
              <Button
                data-ocid="hero.cases.secondary_button"
                onClick={scrollToResults}
                variant="outline"
                size="lg"
                className="border-foreground/20 text-foreground font-semibold text-base px-8 py-3 rounded-lg hover:bg-foreground/5 transition-all"
              >
                View Case Studies
              </Button>
            </div>

            {/* Urgency + Risk */}
            <div className="space-y-1.5">
              <p className="flex items-center gap-2 text-sm font-semibold text-amber-600">
                <Zap size={15} className="fill-amber-500" />
                Only 10 free audits available each month
              </p>
              <p className="text-xs text-muted-foreground">
                Takes 10 minutes. No sales pressure.
              </p>
            </div>
          </div>

          {/* Right: Analytics Dashboard */}
          <div className="relative">
            <div className="bg-navy rounded-2xl p-6 shadow-premium-lg text-white space-y-5">
              {/* Header */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest opacity-60">
                  Performance Dashboard
                </span>
                <span className="text-xs bg-primary/20 text-primary rounded-full px-2 py-0.5 font-semibold">
                  Live Results
                </span>
              </div>

              {/* Metrics row */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-xs opacity-60 mb-1">ROAS</p>
                  <p className="text-lg font-bold text-primary">3.6×</p>
                  <p className="text-xs text-green-300">↑ from 1.8×</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-xs opacity-60 mb-1">CPL Drop</p>
                  <p className="text-lg font-bold text-primary">52%</p>
                  <p className="text-xs text-green-300">↓ lower</p>
                </div>
                <div className="bg-white/10 rounded-xl p-3 text-center">
                  <p className="text-xs opacity-60 mb-1">Conv.</p>
                  <p className="text-lg font-bold text-primary">3×</p>
                  <p className="text-xs text-green-300">↑ increase</p>
                </div>
              </div>

              {/* ROAS Chart */}
              <div>
                <p className="text-xs font-semibold mb-2 opacity-70">
                  ROAS Growth (6 months)
                </p>
                <div className="h-28">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={roasData}
                      margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
                    >
                      <defs>
                        <linearGradient
                          id="roasGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#14A800"
                            stopOpacity={0.4}
                          />
                          <stop
                            offset="95%"
                            stopColor="#14A800"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#ffffff80", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#ffffff80", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                        domain={[1, 4]}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "#0A2647",
                          border: "1px solid #14A800",
                          borderRadius: 8,
                          fontSize: 12,
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#14A800" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="roas"
                        stroke="#14A800"
                        strokeWidth={2}
                        fill="url(#roasGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* CPL Chart */}
              <div>
                <p className="text-xs font-semibold mb-2 opacity-70">
                  CPL Reduction (6 months)
                </p>
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={cplData}
                      margin={{ top: 4, right: 4, bottom: 0, left: -20 }}
                    >
                      <defs>
                        <linearGradient
                          id="cplGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#C9A84C"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#C9A84C"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <XAxis
                        dataKey="month"
                        tick={{ fill: "#ffffff80", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fill: "#ffffff80", fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Tooltip
                        contentStyle={{
                          background: "#0A2647",
                          border: "1px solid #C9A84C",
                          borderRadius: 8,
                          fontSize: 12,
                        }}
                        labelStyle={{ color: "#fff" }}
                        itemStyle={{ color: "#C9A84C" }}
                        formatter={(v) => [`$${v}`, "CPL"]}
                      />
                      <Area
                        type="monotone"
                        dataKey="cpl"
                        stroke="#C9A84C"
                        strokeWidth={2}
                        fill="url(#cplGrad)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
