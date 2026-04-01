import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Results", href: "#results" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAuditClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/95 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-foreground font-bold text-lg tracking-tight hover:text-primary transition-colors"
          >
            <span className="text-primary">Nikhil S</span>
            <span className="hidden sm:inline text-muted-foreground font-normal text-sm ml-2">
              | Meta Ads Consultant
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Button
              data-ocid="nav.audit.primary_button"
              onClick={handleAuditClick}
              className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-5 py-2 rounded-lg"
            >
              Get Free Audit
            </Button>
            <button
              type="button"
              className="lg:hidden p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-lg">
            <nav className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-foreground py-1"
                >
                  {link.label}
                </a>
              ))}
              <Button
                data-ocid="nav.mobile.audit.primary_button"
                onClick={handleAuditClick}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold mt-2"
              >
                Get Free Audit
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile floating CTA bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-primary shadow-lg">
        <button
          type="button"
          data-ocid="nav.mobile.floating.primary_button"
          onClick={handleAuditClick}
          className="w-full text-primary-foreground font-bold text-base py-4 flex items-center justify-center gap-2"
        >
          Claim Free Audit →
        </button>
      </div>
    </>
  );
}
