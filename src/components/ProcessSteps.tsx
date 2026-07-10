const steps = [
  {
    number: "01",
    title: "Book a Free Strategy Call",
    description:
      "Thirty minutes is all it takes to see what a proper strategy looks like for your business.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="6" width="24" height="22" rx="3" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <line x1="10" y1="3" x2="10" y2="8" />
        <line x1="22" y1="3" x2="22" y2="8" />
        <circle cx="16" cy="20" r="3" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Your Custom Growth Plan",
    description:
      "We build a tailored SEO, content, and social/paid strategy designed around your goals, budget, and stage.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 4h20v24H6z" />
        <line x1="10" y1="10" x2="22" y2="10" />
        <line x1="10" y1="14" x2="22" y2="14" />
        <line x1="10" y1="18" x2="18" y2="18" />
        <path d="M18 22l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Execute. You Scale.",
    description:
      "Sage handles the execution — from publishing to optimization — so you can focus on running your business.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 28l7-7M11 21l3-10 10-3-3 10-10 3z" />
        <circle cx="16" cy="16" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-white px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
          Simple to Start. Built to Scale.
        </h2>

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {/* Connector arrow (hidden on last item and mobile) */}
              {i < steps.length - 1 && (
                <div className="absolute top-12 -right-4 hidden text-sage-core/40 md:block">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="rounded-2xl border border-sage-whisper bg-mist p-8 text-center">
                <span className="font-serif text-4xl font-bold text-sage-core/30">
                  {step.number}
                </span>
                <div className="mx-auto mt-4 flex h-14 w-14 items-center justify-center rounded-xl bg-forest text-white">
                  {step.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold text-forest">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-forest/70">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
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
