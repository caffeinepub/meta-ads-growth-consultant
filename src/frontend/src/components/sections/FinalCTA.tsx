import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function FinalCTA() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-20 bg-primary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-foreground mb-4">
          Ready To Fix Your Meta Ads?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Get expert insights before spending another dollar.
        </p>
        <Button
          data-ocid="final_cta.audit.primary_button"
          onClick={scrollToContact}
          size="lg"
          className="bg-white text-primary hover:bg-white/90 font-bold text-base px-10 py-3 shadow-lg"
        >
          Get Free Audit Now
        </Button>
        <p className="mt-5 text-primary-foreground/60 text-sm flex items-center justify-center gap-2">
          <Zap size={14} className="fill-current" />
          Next intake closing soon — only 2 spots left this week
        </p>
      </div>
    </section>
  );
}
