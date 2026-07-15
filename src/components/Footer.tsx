import SageLogo from "./SageLogo";

function YouTubeIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="4" />
      <polygon points="10,8 16,12 10,16" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <line x1="8" y1="11" x2="8" y2="17" />
      <line x1="8" y1="7" x2="8" y2="7.01" />
      <path d="M12 17V13C12 11.5 13 11 14 11C15 11 16 11.5 16 13V17" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="3" />
      <path d="M16 8H14C12.9 8 12 8.9 12 10V22" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-forest px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <SageLogo className="h-10 w-auto" />
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#" className="text-sm text-white/70 transition-colors hover:text-white">Home</a>
              <a href="#services" className="text-sm text-white/70 transition-colors hover:text-white">Services</a>
              <a href="#about" className="text-sm text-white/70 transition-colors hover:text-white">About</a>
              <a href="#contact" className="text-sm text-white/70 transition-colors hover:text-white">Contact</a>
            </nav>
          </div>

          {/* Greenpage Digital */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Greenpage Digital
            </h4>
            <p className="text-sm text-white/70">
              Part of the Greenpage Digital family
            </p>
          </div>

          {/* Follow Us */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-white/70 transition-colors hover:text-white" aria-label="YouTube">
                <YouTubeIcon />
              </a>
              <a href="https://www.instagram.com/sagebygpd?igsh=MTBzNzRzY3d6ZmFiNQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-white/70 transition-colors hover:text-white" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591468593466&mibextid=wwXIfr&rdid=KMdJeGCb2LsZPzRC&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1LC37sjMGH%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="text-white/70 transition-colors hover:text-white" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
            <div className="mt-2 flex gap-4">
              <span className="text-xs text-white/40">
                Privacy Policy
              </span>
              <span className="text-xs text-white/40">
                Terms of Service
              </span>
            </div>
          </div>
        </div>

        {/* Gold tagline */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-serif italic text-warm-gold">
            Strategy is our foundation. Growth is our promise.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sage by GPD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
