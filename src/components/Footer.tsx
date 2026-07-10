import SageLogo from "./SageLogo";

export default function Footer() {
  return (
    <footer className="bg-forest border-t border-white/10 px-6 py-12 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <SageLogo className="h-8 w-auto" />
            <p className="mt-3 max-w-xs text-center text-xs leading-relaxed text-white/40 md:text-left">
              Strategy is our foundation. Growth is our promise.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 md:items-end">
            <p className="text-xs text-white/30">
              Part of the Greenpage Digital family
            </p>
            <nav className="flex gap-6">
              <a href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">
                Privacy Policy
              </a>
              <a href="#" className="text-xs text-white/40 transition-colors hover:text-white/70">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Sage by GPD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
