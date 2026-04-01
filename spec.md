# Meta Ads Growth Consultant – Nikhil S

## Current State
The app has 11 sections: Nav, Hero, TrustBadges, Stats, Testimonials, CaseStudies, Process, LeadCapture, FAQ, FinalCTA, Footer. Backend has `submitAuditForm` and `getAllSubmissions`. Color scheme is dark blue/purple.

## Requested Changes (Diff)

### Add
- Section: Authority Stacking (Upwork credentials, stats, CTA to Upwork profile)
- Section: Problem Agitation (6 problem cards + transition + CTA)
- Section: Results Transformation (before/after comparison + metric cards)
- Section: Consultant Intro Video (video placeholder)
- Section: Free Audit Offer (value breakdown, progress bar, urgency)
- Section: Sample Audit Preview (audit document card)
- Section: Risk Reversal (100% Free, No Sales Pitch, trust icons)
- Section: Calendar Option (Calendly embed placeholder)
- Section: Final CTA closing section
- Exit intent popup ("Wait — Want a Free Audit Before Leaving?")
- Lead magnet popup
- Mobile floating CTA bar
- Sticky CTA button in header
- Form fields: Phone number added to lead form
- Progress bar (8/10 slots filled)
- Schema markup / SEO meta tags

### Modify
- Color palette: white background, Upwork green (#14A800) secondary, deep navy authority sections, soft gold accents, dark charcoal text
- Typography: Inter or Poppins
- Hero: new headline "Stop Wasting Money on Meta Ads. Turn Them Into a Predictable Profit Channel.", authority badges (Top Rated Plus, 90% JSS, 15723+ hrs, 291+ projects, 5-star), analytics dashboard visual on right, urgency line, risk reducer text
- Trust bar: scrolling logos, industry labels (Startup, Coaches, Ecommerce, SaaS, Local)
- Nav: brand name "Nikhil S | Meta Ads Consultant", links: Results, Process, Testimonials, FAQ, Contact. Floating mobile CTA
- Testimonials: 6 testimonials with specific results, name, business type, stars
- Case Studies: 3 cards (ROAS 1.8→3.6, CPL -52%, Leads 3X)
- Process: renamed to 5-step (Full Funnel Audit, Tracking Setup, Conversion Opt, Scaling Framework, Performance Monitoring)
- Lead form: add Phone field, Monthly Spend dropdown, Biggest Issue dropdown, button "Claim My Free Audit"
- Footer: email consultwithnikhils@gmail.com, social icons, © 2026 Nikhil S. All rights reserved.

### Remove
- Old dark purple color scheme
- Stats section (absorbed into Hero authority badges and Authority Stacking section)

## Implementation Plan
1. Rewrite `index.css` / tailwind config with new color tokens: green (#14A800), navy (#0A2647), gold (#C9A84C), charcoal (#1A1A2E), white bg
2. Rewrite `Nav.tsx` with new brand, nav links, sticky behavior, mobile CTA bar
3. Rewrite `Hero.tsx` with new headline, authority badges, analytics dashboard mockup, urgency
4. Rewrite `TrustBadges.tsx` with scrolling logo bar + industry labels
5. Create `AuthorityStacking.tsx` (Upwork credentials section)
6. Create `ProblemAgitation.tsx` (6 problem cards + CTA)
7. Create `ResultsTransformation.tsx` (before/after + metric cards)
8. Rewrite `Process.tsx` to 5 steps
9. Create `VideoSection.tsx` (video placeholder)
10. Rewrite `CaseStudies.tsx` (3 case study cards)
11. Rewrite `Testimonials.tsx` (6 testimonials with specific results)
12. Create `AuditOffer.tsx` (value, progress bar, urgency)
13. Create `SampleAuditPreview.tsx`
14. Rewrite `LeadCapture.tsx` with new fields including phone
15. Create `RiskReversal.tsx`
16. Create `CalendarSection.tsx`
17. Rewrite `FAQ.tsx` with new questions
18. Rewrite `FinalCTA.tsx`
19. Rewrite `Footer.tsx`
20. Create `ExitIntentPopup.tsx`
21. Create `LeadMagnetPopup.tsx`
22. Update `App.tsx` to assemble all sections in order
