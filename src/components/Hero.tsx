export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-forest px-6 pt-24 pb-16 lg:px-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest to-forest-light opacity-80" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
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
            className="inline-block rounded-full bg-warm-gold px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-warm-gold-hover hover:shadow-xl sm:text-base"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
