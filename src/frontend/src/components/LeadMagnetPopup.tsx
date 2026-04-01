import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function LeadMagnetPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("leadMagnetShown");
    if (shown) return;
    const timer = setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem("leadMagnetShown", "1");
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        data-ocid="lead_magnet.dialog"
        className="max-w-md mx-auto p-0 overflow-hidden rounded-2xl"
        showCloseButton={false}
      >
        <div className="p-8">
          <button
            type="button"
            data-ocid="lead_magnet.close_button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X size={20} />
          </button>
          {sent ? (
            <div
              data-ocid="lead_magnet.success_state"
              className="text-center py-4"
            >
              <CheckCircle size={48} className="text-primary mx-auto mb-4" />
              <h3 className="font-extrabold text-xl text-foreground mb-2">
                Checklist Sent!
              </h3>
              <p className="text-muted-foreground text-sm">
                Check your inbox — your 23-point Meta Ads audit checklist is on
                its way.
              </p>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <span className="text-3xl">📋</span>
                <h2 className="text-xl font-extrabold text-foreground mt-3 mb-2">
                  Free: Meta Ads Audit Checklist
                </h2>
                <p className="text-muted-foreground text-sm">
                  The exact 23-point checklist I use to diagnose failing ad
                  accounts. Used on 291+ projects.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  data-ocid="lead_magnet.email.input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                />
                <Button
                  data-ocid="lead_magnet.submit.primary_button"
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                >
                  Send Me the Checklist
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  No spam. Unsubscribe anytime.
                </p>
              </form>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
