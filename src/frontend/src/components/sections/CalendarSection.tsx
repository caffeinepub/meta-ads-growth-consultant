import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video } from "lucide-react";

export default function CalendarSection() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
          Prefer Talking Directly?
        </h2>
        <p className="text-white/60 mb-10">
          Book a free 20-minute consultation call. No preparation needed.
        </p>

        <div className="bg-white/10 border border-white/20 rounded-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-6 text-white">
            <div className="flex items-center gap-3">
              <Clock size={20} className="text-primary" />
              <span className="text-sm font-medium">20 minutes</span>
            </div>
            <div className="flex items-center gap-3">
              <Video size={20} className="text-primary" />
              <span className="text-sm font-medium">Google Meet / Zoom</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar size={20} className="text-primary" />
              <span className="text-sm font-medium">Mon – Fri</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl py-10 px-6">
            <p className="text-white/50 text-sm">
              Calendar loading... | Powered by Calendly
            </p>
            <p className="text-white/30 text-xs mt-1">
              Connect directly for availability
            </p>
          </div>
        </div>

        <Button
          data-ocid="calendar.book.primary_button"
          asChild
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-10"
        >
          <a
            href="https://calendly.com/consultwithnikhils"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Consultation Call
          </a>
        </Button>
      </div>
    </section>
  );
}
