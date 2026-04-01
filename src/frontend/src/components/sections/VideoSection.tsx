import { Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
          Meet Your Meta Ads Consultant
        </h2>
        <p className="text-muted-foreground mb-8">
          Quick breakdown of how I approach Meta Ads growth.
        </p>

        {/* Video placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-premium-lg bg-navy aspect-video flex items-center justify-center cursor-pointer group">
          <div className="absolute inset-0 bg-gradient-to-br from-navy/80 to-navy" />
          <div className="relative z-10 flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center group-hover:bg-primary/30 transition-colors">
              <Play
                size={32}
                className="text-primary ml-1"
                fill="currentColor"
              />
            </div>
            <p className="text-white/70 text-sm">
              Quick breakdown of how I approach Meta Ads growth
            </p>
          </div>
        </div>

        <p className="mt-6 text-muted-foreground text-sm">
          <strong className="text-foreground">10+ years</strong> performance
          marketing experience.{" "}
          <strong className="text-foreground">$10M+</strong> in ad spend
          managed.
        </p>
      </div>
    </section>
  );
}
