import { Facebook, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-bold text-lg mb-1">
              <span className="text-primary">Nikhil S</span>
              <span className="text-white/60 font-normal text-sm ml-2">
                | Meta Ads Consultant
              </span>
            </p>
            <a
              href="mailto:consultwithnikhils@gmail.com"
              className="flex items-center gap-2 text-sm text-white/60 hover:text-primary transition-colors justify-center md:justify-start mt-1"
            >
              <Mail size={13} />
              consultwithnikhils@gmail.com
            </a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white/60"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white/60"
            >
              <Twitter size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-white/60"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Nikhil S. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="hover:text-white/70 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white/70 transition-colors">
              Terms
            </a>
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/70 transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
