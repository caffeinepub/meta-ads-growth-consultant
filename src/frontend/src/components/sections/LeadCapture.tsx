import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { Loader2, Lock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface FormState {
  fullName: string;
  businessEmail: string;
  company: string;
  website: string;
  monthlyAdSpend: string;
  biggestProblem: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  company?: string;
  website?: string;
  monthlyAdSpend?: string;
  biggestProblem?: string;
}

export default function LeadCapture() {
  const { actor } = useActor();
  const [form, setForm] = useState<FormState>({
    fullName: "",
    businessEmail: "",
    company: "",
    website: "",
    monthlyAdSpend: "",
    biggestProblem: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: FormErrors = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required";
    if (!form.businessEmail.trim()) {
      e.businessEmail = "Email is required";
    } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(form.businessEmail)) {
      e.businessEmail = "Enter a valid email address";
    }
    if (!form.company.trim()) e.company = "Company name is required";
    if (!form.website.trim()) e.website = "Website URL is required";
    if (!form.monthlyAdSpend)
      e.monthlyAdSpend = "Please select monthly ad spend";
    if (!form.biggestProblem)
      e.biggestProblem = "Please select your biggest challenge";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !actor) return;
    setIsSubmitting(true);
    try {
      await actor.submitAuditForm(
        form.fullName,
        form.businessEmail,
        form.company,
        form.website,
        form.monthlyAdSpend,
        form.biggestProblem,
        form.message,
      );
      setSubmitted(true);
      toast.success(
        "🎉 Audit request received! I'll review your account and be in touch within 24 hours.",
      );
    } catch {
      toast.error(
        "Something went wrong. Please try again or email me directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-muted/40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div
            data-ocid="lead_form.success_state"
            className="bg-white rounded-2xl p-12 shadow-premium"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl">🎉</span>
            </div>
            <h2 className="text-2xl font-extrabold text-foreground mb-3">
              You're on the list!
            </h2>
            <p className="text-muted-foreground">
              I'll personally review your ad account and send your free audit
              within 24–48 hours. Check your inbox at{" "}
              <strong>{form.businessEmail}</strong>.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-muted/40">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Request Your Free Funnel Audit
          </h2>
          <p className="text-muted-foreground">
            Takes 10 minutes to review. I personally analyze every account.
          </p>
        </div>

        <form
          data-ocid="lead_form.panel"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-8 shadow-premium space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-sm font-semibold">
                Full Name *
              </Label>
              <Input
                id="fullName"
                data-ocid="lead_form.fullname.input"
                value={form.fullName}
                onChange={(e) => field("fullName", e.target.value)}
                placeholder="John Smith"
                className={errors.fullName ? "border-destructive" : ""}
              />
              {errors.fullName && (
                <p
                  data-ocid="lead_form.fullname.error_state"
                  className="text-xs text-destructive"
                >
                  {errors.fullName}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="businessEmail" className="text-sm font-semibold">
                Business Email *
              </Label>
              <Input
                id="businessEmail"
                data-ocid="lead_form.email.input"
                type="email"
                value={form.businessEmail}
                onChange={(e) => field("businessEmail", e.target.value)}
                placeholder="john@yourbusiness.com"
                className={errors.businessEmail ? "border-destructive" : ""}
              />
              {errors.businessEmail && (
                <p
                  data-ocid="lead_form.email.error_state"
                  className="text-xs text-destructive"
                >
                  {errors.businessEmail}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="company" className="text-sm font-semibold">
                Company / Business Name *
              </Label>
              <Input
                id="company"
                data-ocid="lead_form.company.input"
                value={form.company}
                onChange={(e) => field("company", e.target.value)}
                placeholder="Your Business"
                className={errors.company ? "border-destructive" : ""}
              />
              {errors.company && (
                <p
                  data-ocid="lead_form.company.error_state"
                  className="text-xs text-destructive"
                >
                  {errors.company}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="website" className="text-sm font-semibold">
                Website URL *
              </Label>
              <Input
                id="website"
                data-ocid="lead_form.website.input"
                value={form.website}
                onChange={(e) => field("website", e.target.value)}
                placeholder="https://yourbusiness.com"
                className={errors.website ? "border-destructive" : ""}
              />
              {errors.website && (
                <p
                  data-ocid="lead_form.website.error_state"
                  className="text-xs text-destructive"
                >
                  {errors.website}
                </p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold">
                Monthly Ad Spend *
              </Label>
              <Select
                value={form.monthlyAdSpend}
                onValueChange={(v) => field("monthlyAdSpend", v)}
              >
                <SelectTrigger
                  data-ocid="lead_form.adspend.select"
                  className={errors.monthlyAdSpend ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select range..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under $1K">Under $1,000/mo</SelectItem>
                  <SelectItem value="$1K-$5K">$1,000 – $5,000/mo</SelectItem>
                  <SelectItem value="$5K-$15K">$5,000 – $15,000/mo</SelectItem>
                  <SelectItem value="$15K-$50K">
                    $15,000 – $50,000/mo
                  </SelectItem>
                  <SelectItem value="$50K+">$50,000+/mo</SelectItem>
                </SelectContent>
              </Select>
              {errors.monthlyAdSpend && (
                <p
                  data-ocid="lead_form.adspend.error_state"
                  className="text-xs text-destructive"
                >
                  {errors.monthlyAdSpend}
                </p>
              )}
            </div>
            <div className="space-y-1.5">
              <Label className="text-sm font-semibold">
                Biggest Challenge *
              </Label>
              <Select
                value={form.biggestProblem}
                onValueChange={(v) => field("biggestProblem", v)}
              >
                <SelectTrigger
                  data-ocid="lead_form.challenge.select"
                  className={errors.biggestProblem ? "border-destructive" : ""}
                >
                  <SelectValue placeholder="Select challenge..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Low ROAS">Low ROAS</SelectItem>
                  <SelectItem value="High CPL">High CPL</SelectItem>
                  <SelectItem value="Tracking Problems">
                    Tracking Problems
                  </SelectItem>
                  <SelectItem value="Poor Sales">Poor Sales</SelectItem>
                  <SelectItem value="Budget Waste">Budget Waste</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
              {errors.biggestProblem && (
                <p
                  data-ocid="lead_form.challenge.error_state"
                  className="text-xs text-destructive"
                >
                  {errors.biggestProblem}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-sm font-semibold">
              Message (Optional)
            </Label>
            <Textarea
              id="message"
              data-ocid="lead_form.message.textarea"
              value={form.message}
              onChange={(e) => field("message", e.target.value)}
              placeholder="Tell me more about your business and current Meta Ads challenges..."
              rows={4}
            />
          </div>

          <Button
            data-ocid="lead_form.submit.primary_button"
            type="submit"
            size="lg"
            disabled={isSubmitting || !actor}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base py-3 shadow-md"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              "Claim My Free Audit →"
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
            <Lock size={11} />
            Your data stays private. No spam. No sales calls unless you want
            them.
          </p>
        </form>
      </div>
    </section>
  );
}
