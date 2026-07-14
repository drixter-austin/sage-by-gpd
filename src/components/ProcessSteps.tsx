import { Fragment } from "react";

const steps = [
  {
    number: "01",
    title: "Book a Free Strategy Call",
    description:
      "Before we touch a single piece of content, we get into your business. Your market, your goals, what's worked and what hasn't. No templates, no assumptions. Just a clear conversation about where you want to go.",
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 32 32"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="4" width="18" height="24" rx="2" />
        <path d="M12 4v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
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
        className="h-7 w-7"
        viewBox="0 0 32 32"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="7" y="3" width="18" height="26" rx="2" />
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
      "Content goes live. Rankings build. Your social presence grows on a schedule that compounds over time. We track what's moving, report in plain numbers, and double down on what's working.",
    icon: (
      <svg
        className="h-7 w-7"
        viewBox="0 0 32 32"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="20" width="5" height="8" rx="1" />
        <rect x="13" y="14" width="5" height="14" rx="1" />
        <rect x="21" y="8" width="5" height="20" rx="1" />
        <path d="M6 18L15 11l6 3 5-7" />
        <path d="M23 7h4v4" />
      </svg>
    ),
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-[#F5F5F0] px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
          Simple to Start. Built to Scale.
        </h2>

        <div className="relative mt-16 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {steps.map((step, i) => (
            <Fragment key={step.number}>
              <div
                className="rounded-2xl p-8 shadow-lg"
                style={{
                  background: "linear-gradient(180deg, #EAF2E8 0%, #D4E5D0 100%)",
                }}
              >
                {/* Large step number — top left */}
                <span className="font-serif text-5xl font-bold text-sage-core/25 sm:text-6xl">
                  {step.number}
                </span>

                {/* Icon + title — horizontal layout */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-forest">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-forest/65">
                  {step.description}
                </p>
              </div>

              {/* Arrow between cards */}
              {i < steps.length - 1 && (
                <div className="hidden items-center justify-center md:flex">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#5A8F6E"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="#5A8F6E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-warm-gold px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:bg-warm-gold-hover hover:shadow-xl sm:text-base"
          >
            Book Your Free Strategy Call
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
