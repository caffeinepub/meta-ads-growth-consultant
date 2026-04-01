import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Zap } from "lucide-react";

const included = [
  "Full Funnel Analysis",
  "Pixel & Tracking Check",
  "Conversion Leak Identification",
  "Ad Account Review",
  "Scaling Recommendations",
  "BONUS: Quick Wins Report",
];

export default function AuditOffer() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Get a $99 Funnel Audit — <span className="text-primary">Free</span>
        </h2>
        <p className="text-white/60 mb-8">
          Everything I normally charge $99 for, yours at no cost.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-premium-lg text-left">
          <h3 className="font-bold text-foreground text-lg mb-5">
            What's Included:
          </h3>
          <ul className="space-y-3 mb-6">
            {included.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-foreground font-medium"
              >
                <CheckCircle size={16} className="text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-5 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-foreground flex items-center gap-2">
                <Zap size={14} className="text-amber-500" />
                Only 10 businesses accepted weekly
              </span>
              <span className="text-muted-foreground font-medium">
                8/10 filled
              </span>
            </div>
            <Progress value={80} className="h-2 progress-green" />
            <p className="text-xs text-muted-foreground">
              8 of 10 slots filled this week
            </p>
          </div>

          <Button
            data-ocid="audit_offer.claim.primary_button"
            onClick={scrollToContact}
            size="lg"
            className="w-full mt-6 bg-gold hover:bg-gold/90 text-foreground font-bold text-base py-3 shadow-md hover:shadow-lg transition-all"
          >
            Claim Free Audit →
          </Button>
        </div>
      </div>
    </section>
  );
}
