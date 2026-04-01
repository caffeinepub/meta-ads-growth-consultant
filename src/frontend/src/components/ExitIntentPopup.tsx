import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useEffect, useState } from "react";

export default function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("exitIntentShown");
    if (shown) return;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("exitIntentShown", "1");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  const handleClaim = () => {
    setOpen(false);
    setTimeout(() => {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-ocid="exit_popup.dialog"
        className="max-w-md mx-auto p-0 overflow-hidden rounded-2xl"
        showCloseButton={false}
      >
        <div className="bg-navy p-8 text-center">
          <button
            type="button"
            data-ocid="exit_popup.close_button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
          <div className="text-4xl mb-4">🚨</div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Wait — Want a Free Audit Before Leaving?
          </h2>
          <p className="text-white/70 text-sm mb-6">
            Get your $99 Meta Ads funnel audit for free. Takes 10 minutes. No
            sales pitch.
          </p>
          <Button
            data-ocid="exit_popup.claim.primary_button"
            onClick={handleClaim}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base mb-3"
          >
            Yes, Get Free Audit
          </Button>
          <button
            type="button"
            data-ocid="exit_popup.decline.cancel_button"
            onClick={() => setOpen(false)}
            className="text-white/40 hover:text-white/70 text-xs transition-colors underline"
          >
            No thanks, I'll keep wasting money
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
