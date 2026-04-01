import { Button } from "@/components/ui/button";
import { CheckCircle, ExternalLink, Star } from "lucide-react";

const stats = [
  "Top Rated Plus Freelancer (Top 3%)",
  "90% Job Success Score",
  "15,723+ Hours Worked",
  "291 Completed Projects",
  "5-Star Client Satisfaction",
  "Consistent Long-Term Clients",
];

const skills = [
  "Meta Ads",
  "Facebook Ads",
  "ROAS",
  "Lead Gen",
  "Funnel Strategy",
  "A/B Testing",
];

export default function AuthorityStacking() {
  return (
    <section id="results" className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Why Businesses Trust My Meta Ads Consulting
          </h2>
          <p className="text-white/60 text-base">
            Verified track record. Real client work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Mock Upwork card */}
          <div className="bg-white rounded-2xl p-6 shadow-premium-lg">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary flex-shrink-0">
                NS
              </div>
              <div>
                <h3 className="font-bold text-lg text-foreground">Nikhil S</h3>
                <p className="text-muted-foreground text-sm">
                  Meta Ads & Performance Marketing Specialist
                </p>
                <div className="flex items-center gap-1 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      size={13}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    5.0 (291 reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-3 py-1.5 text-xs font-bold mb-5">
              <CheckCircle size={13} /> Top Rated Plus — Top 3%
            </div>

            <div className="grid grid-cols-3 gap-3 text-center mb-5">
              <div className="bg-muted rounded-xl p-3">
                <p className="text-xl font-extrabold text-foreground">291</p>
                <p className="text-xs text-muted-foreground">Jobs</p>
              </div>
              <div className="bg-muted rounded-xl p-3">
                <p className="text-xl font-extrabold text-foreground">15K+</p>
                <p className="text-xs text-muted-foreground">Hours</p>
              </div>
              <div className="bg-muted rounded-xl p-3">
                <p className="text-xl font-extrabold text-foreground">90%</p>
                <p className="text-xs text-muted-foreground">Success</p>
              </div>
            </div>

            <div className="border border-border rounded-xl p-4 bg-muted/30">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Skills
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs bg-white border border-border rounded-full px-2.5 py-0.5 text-foreground font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Stats list */}
          <div className="space-y-5">
            {stats.map((stat) => (
              <div key={stat} className="flex items-center gap-4">
                <CheckCircle size={20} className="text-primary flex-shrink-0" />
                <span className="text-white font-medium text-base">{stat}</span>
              </div>
            ))}
            <div className="pt-4 space-y-3">
              <Button
                data-ocid="authority.upwork.secondary_button"
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <a
                  href="https://www.upwork.com/freelancers/nikhils"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  View Full Upwork Profile <ExternalLink size={14} />
                </a>
              </Button>
              <p className="text-white/40 text-xs italic">
                Real client work shown. No inflated numbers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
