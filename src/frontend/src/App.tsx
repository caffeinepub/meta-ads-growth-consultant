import ExitIntentPopup from "@/components/ExitIntentPopup";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import AuditOffer from "@/components/sections/AuditOffer";
import AuthorityStacking from "@/components/sections/AuthorityStacking";
import CalendarSection from "@/components/sections/CalendarSection";
import CaseStudies from "@/components/sections/CaseStudies";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import LeadCapture from "@/components/sections/LeadCapture";
import Nav from "@/components/sections/Nav";
import ProblemAgitation from "@/components/sections/ProblemAgitation";
import Process from "@/components/sections/Process";
import ResultsTransformation from "@/components/sections/ResultsTransformation";
import RiskReversal from "@/components/sections/RiskReversal";
import SampleAuditPreview from "@/components/sections/SampleAuditPreview";
import Testimonials from "@/components/sections/Testimonials";
import TrustBar from "@/components/sections/TrustBar";
import VideoSection from "@/components/sections/VideoSection";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen font-sans antialiased">
        <Nav />
        <main>
          <Hero />
          <TrustBar />
          <AuthorityStacking />
          <ProblemAgitation />
          <ResultsTransformation />
          <Process />
          <VideoSection />
          <CaseStudies />
          <Testimonials />
          <AuditOffer />
          <SampleAuditPreview />
          <LeadCapture />
          <RiskReversal />
          <CalendarSection />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
        <ExitIntentPopup />
        <LeadMagnetPopup />
      </div>
      <Toaster position="top-right" richColors />
    </QueryClientProvider>
  );
}
