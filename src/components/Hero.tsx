export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest px-6 pt-24 pb-16 lg:px-16">
      {/* Radial glow in center */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(61,107,79,0.5) 0%, rgba(27,58,45,0) 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Gold decorative line */}
        <div className="mx-auto mb-8 h-[2px] w-20 bg-warm-gold sm:w-28" />

        <h1 className="text-4xl leading-tight font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build Growth{" "}
          <span className="font-serif italic text-warm-gold">That Keeps</span>
          <br />
          Working.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg md:text-xl">
          Sage by GPD grows your audience through SEO, content strategy, and
          social media management. Meta Ads available for brands that want to
          move faster.
        </p>

        <div className="mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-warm-gold px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-warm-gold-hover hover:shadow-xl sm:text-base"
          >
            Book Your Free Strategy Call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
