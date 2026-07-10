const steps = [
  {
    number: "01",
    title: "Book a Free Strategy Call",
    description:
      "Before we touch a single piece of content, we get into your business. Your market, your goals, what’s worked and what hasn’t. No templates, no assumptions. Just a clear conversation about where you want to go.",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#C5964C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Notepad / clipboard */}
        <rect x="7" y="4" width="18" height="24" rx="2" />
        {/* Clipboard clip */}
        <path d="M12 4v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
        {/* Lines on notepad */}
        <line x1="11" y1="11" x2="21" y2="11" />
        <line x1="11" y1="15" x2="21" y2="15" />
        <line x1="11" y1="19" x2="21" y2="19" />
        <line x1="11" y1="23" x2="17" y2="23" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get Your Custom Growth Plan",
    description:
      "From that conversation, we build your plan. SEO, content, and social mapped together, with clear priorities and targets you can hold us to.",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#C5964C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Document body */}
        <rect x="7" y="3" width="18" height="26" rx="2" />
        {/* Checklist items */}
        <rect x="11" y="9" width="3" height="3" rx="0.5" />
        <path d="M11.5 11l1 1 2-2" />
        <line x1="17" y1="10.5" x2="22" y2="10.5" />
        <rect x="11" y="15" width="3" height="3" rx="0.5" />
        <path d="M11.5 17l1 1 2-2" />
        <line x1="17" y1="16.5" x2="22" y2="16.5" />
        <rect x="11" y="21" width="3" height="3" rx="0.5" />
        <line x1="17" y1="22.5" x2="22" y2="22.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "We Execute. You Scale.",
    description:
      "Content goes live. Rankings build. Your social presence grows on a schedule that compounds over time. We track what’s moving, report in plain numbers, and double down on what’s working.",
    icon: (
      <svg
        className="h-8 w-8"
        viewBox="0 0 32 32"
        fill="none"
        stroke="#C5964C"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Bar chart bars */}
        <rect x="5" y="20" width="5" height="8" rx="1" />
        <rect x="13" y="14" width="5" height="14" rx="1" />
        <rect x="21" y="8" width="5" height="20" rx="1" />
        {/* Upward trend arrow */}
        <path d="M6 18L15 11l6 3 5-7" />
        <path d="M23 7h4v4" />
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
              {/* Connector arrow between cards — desktop only */}
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-5 z-10 hidden -translate-y-1/2 md:block">
                  <svg
                    className="h-6 w-6 text-forest"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}

              <div className="rounded-2xl border-l-4 border-sage-core bg-sage-whisper p-8 text-center">
                {/* Large step number */}
                <span className="font-serif text-5xl font-bold text-sage-core/30">
                  {step.number}
                </span>

                {/* Icon circle — dark green bg, gold-outlined icon */}
                <div className="mx-auto mt-5 flex h-16 w-16 items-center justify-center rounded-full bg-forest">
                  {step.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold text-forest">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-forest/70">
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
