const painPoints = [
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Circular arrows (recycling loop) */}
        <path d="M20 6a14 14 0 0 1 12.1 7" />
        <path d="M30 8l3 5-5 1" />
        <path d="M34 20a14 14 0 0 1-7 12.1" />
        <path d="M32 30l-5 3-1-5" />
        <path d="M20 34a14 14 0 0 1-12.1-7" />
        <path d="M10 32l-3-5 5-1" />
        <path d="M6 20a14 14 0 0 1 7-12.1" />
        <path d="M8 10l5-3 1 5" />
        {/* Chain links in center */}
        <ellipse cx="17" cy="18" rx="3.5" ry="5" transform="rotate(-30 17 18)" />
        <ellipse cx="23" cy="22" rx="3.5" ry="5" transform="rotate(-30 23 22)" />
      </svg>
    ),
    title: "Content that doesn’t compound.",
    description:
      "You’re putting out good work, but it isn’t building anything. Each post starts from zero and the momentum never carries forward.",
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Browser window frame */}
        <rect x="4" y="6" width="32" height="28" rx="3" />
        <line x1="4" y1="13" x2="36" y2="13" />
        {/* Browser dots */}
        <circle cx="9" cy="9.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="13" cy="9.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="17" cy="9.5" r="1" fill="currentColor" stroke="none" />
        {/* Grid layout inside browser */}
        <rect x="8" y="17" width="10" height="6" rx="1" />
        <rect x="22" y="17" width="10" height="6" rx="1" />
        <rect x="8" y="27" width="10" height="4" rx="1" />
        {/* Diagonal hatched / hidden section */}
        <rect x="22" y="27" width="10" height="4" rx="1" strokeDasharray="2 2" />
        <line x1="22" y1="31" x2="32" y2="27" strokeDasharray="2 2" />
        <line x1="24" y1="31" x2="32" y2="29" strokeDasharray="2 2" opacity="0.5" />
      </svg>
    ),
    title: "Invisible in search.",
    description:
      "Your audience is out there looking for exactly what you offer. If your content isn’t optimized, they’re finding someone else.",
  },
  {
    icon: (
      <svg
        className="h-10 w-10"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Puzzle piece 1 — top-left, drifting away */}
        <g transform="translate(-2, -2) rotate(-8 14 14)">
          <path d="M6 10h4a2 2 0 0 1 0 4h0v4H6V10z" />
          <path d="M10 10v4h4v4h-4" />
        </g>
        {/* Puzzle piece 2 — top-right, drifting away */}
        <g transform="translate(4, -3) rotate(10 30 10)">
          <path d="M26 8h6v8h-4a2 2 0 0 1 0-4h0V8z" />
        </g>
        {/* Puzzle piece 3 — bottom-left, drifting away */}
        <g transform="translate(-3, 4) rotate(6 10 30)">
          <path d="M8 26v6h8v-4a2 2 0 0 1-4 0v0H8z" />
        </g>
        {/* Puzzle piece 4 — bottom-right, drifting away */}
        <g transform="translate(3, 3) rotate(-6 30 30)">
          <path d="M26 24h6v8h-6v-4a2 2 0 0 0-4 0v4" />
        </g>
        {/* Small gap indicators */}
        <line x1="18" y1="16" x2="22" y2="14" strokeDasharray="2 2" opacity="0.4" />
        <line x1="16" y1="22" x2="14" y2="26" strokeDasharray="2 2" opacity="0.4" />
        <line x1="24" y1="22" x2="26" y2="24" strokeDasharray="2 2" opacity="0.4" />
      </svg>
    ),
    title: "Growth that stops when spend stops.",
    description:
      "When everything runs on paid, the moment the budget pauses, so does the progress. That’s not a strategy. That’s a treadmill.",
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
