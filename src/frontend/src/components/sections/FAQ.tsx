import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "industries",
    q: "What industries do you work with?",
    a: "I work with ecommerce brands, coaching and consulting businesses, SaaS companies, local businesses, D2C brands, and service-based businesses. If you're running Meta Ads and want better results, I can help.",
  },
  {
    id: "experience",
    q: "How long have you been running Meta Ads?",
    a: "10+ years of performance marketing experience across industries, with over $10M in managed ad spend and 291+ completed Upwork projects. I've consistently maintained Top Rated Plus status with a 90% job success score.",
  },
  {
    id: "timeline",
    q: "How quickly can I see results?",
    a: "Most clients see measurable improvements within 2–4 weeks after implementing audit recommendations. Full system optimization typically shows compounding results over 60–90 days.",
  },
  {
    id: "case-studies",
    q: "Do you have case studies?",
    a: "Yes — real results across multiple industries including ROAS improvements from 1.8× to 3.6×, 52% CPL reductions, and 3× lead volume increases. All case studies are based on real client campaigns.",
  },
  {
    id: "budget",
    q: "What monthly ad spend do you work with?",
    a: "Minimum $1,000/month in ad spend. Most of my active clients are in the $3,000–$50,000/month range. I'm focused on delivering measurable ROI, not managing small test budgets.",
  },
  {
    id: "communication",
    q: "How do we communicate?",
    a: "Weekly performance reports, Slack or WhatsApp updates for quick questions, and monthly strategy calls to review results and plan the next phase. You'll always know what's happening with your account.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know before booking your audit.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              data-ocid={`faq.item.${i + 1}`}
              className="border border-border rounded-xl px-5 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground text-sm py-4 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
