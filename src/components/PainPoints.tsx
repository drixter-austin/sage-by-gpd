const painPoints = [
  {
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="14" height="14" rx="2" />
        <rect x="22" y="4" width="14" height="14" rx="2" />
        <rect x="4" y="22" width="14" height="14" rx="2" />
        <rect x="22" y="22" width="14" height="14" rx="2" />
        <line x1="11" y1="11" x2="11" y2="11.01" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
    title: "Content that doesn't compound.",
    description:
      "You're creating content, but it's not building on itself. Each post starts from zero instead of compounding over time.",
  },
  {
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="20" cy="20" r="16" />
        <path d="M15 15h10v10H15z" />
        <line x1="20" y1="10" x2="20" y2="15" />
        <line x1="20" y1="25" x2="20" y2="30" />
        <line x1="10" y1="20" x2="15" y2="20" />
        <line x1="25" y1="20" x2="30" y2="20" />
      </svg>
    ),
    title: "Invisible in search.",
    description:
      "If your customers can't find you on Google, they're finding someone else. You need a real SEO strategy, not just keywords.",
  },
  {
    icon: (
      <svg className="h-10 w-10" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 8h10v10H8zM22 8h10v10H22zM8 22h10v10H8z" />
        <path d="M22 22h10v10H22z" strokeDasharray="3 3" />
        <circle cx="27" cy="27" r="3" fill="currentColor" opacity="0.3" />
      </svg>
    ),
    title: "Growth that stops when spend stops.",
    description:
      "Ads bring traffic, but the moment you pause the budget, everything disappears. You need owned growth that compounds.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-white px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mx-auto max-w-3xl text-center text-2xl leading-snug font-bold text-forest sm:text-3xl md:text-4xl">
          You&rsquo;re posting content. You&rsquo;re showing up online.
          <br className="hidden sm:block" /> So why does growth still feel out
          of reach?
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-sage-whisper bg-mist p-8 transition-shadow hover:shadow-lg"
            >
              <div className="text-forest">{point.icon}</div>
              <h3 className="mt-4 text-lg font-bold text-forest">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-forest/70">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-forest/70 sm:text-xl">
            That&rsquo;s not a talent problem.
            <br />
            It&rsquo;s a strategy gap.
          </p>
          <p className="mt-2 text-xl font-bold text-forest sm:text-2xl">
            Sage is built to close it.
          </p>
        </div>
      </div>
    </section>
  );
}
