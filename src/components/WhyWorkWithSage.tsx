/* ---------- Gold-outlined SVG line-art icons ---------- */

function CompassIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="15" stroke="#C5964C" strokeWidth="1.5" />
      <circle cx="18" cy="18" r="12.5" stroke="#C5964C" strokeWidth="0.8" opacity="0.4" />
      {/* Compass diamond pointer */}
      <polygon points="18,6 21,18 18,30 15,18" stroke="#C5964C" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
      {/* Inner diamond accent */}
      <polygon points="18,11 20,18 18,25 16,18" stroke="#C5964C" strokeWidth="0.8" fill="none" opacity="0.5" strokeLinejoin="round" />
      {/* Center dot */}
      <circle cx="18" cy="18" r="1.5" fill="#C5964C" />
      {/* Cardinal marks */}
      <line x1="18" y1="2" x2="18" y2="4.5" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="18" y1="31.5" x2="18" y2="34" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="2" y1="18" x2="4.5" y2="18" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="31.5" y1="18" x2="34" y2="18" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function OpenHandsIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Left hand */}
      <path
        d="M8 22C6 20 5 17 5 14C5 12 6 11 7 11C8 11 9 12 9 14V10C9 8 10 7 11 7C12 7 13 8 13 10V9C13 7 14 6 15 6C16 6 17 7 17 9V14"
        stroke="#C5964C"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 14V11C17 9 18 8 19 8C20 8 21 9 21 11V16"
        stroke="#C5964C"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 22C8 22 7 25 8 28C9 31 12 33 16 33C20 33 22 31 23 28"
        stroke="#C5964C"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right hand raised gesture lines */}
      <path d="M23 28L21 22V16" stroke="#C5964C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Radiating welcome lines */}
      <line x1="25" y1="5" x2="27" y2="3" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="29" y1="8" x2="32" y2="7" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="31" y1="13" x2="34" y2="13" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowThroughDoorIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Door / box frame */}
      <rect x="10" y="4" width="16" height="28" rx="2" stroke="#C5964C" strokeWidth="1.5" />
      {/* Door opening */}
      <rect x="14" y="8" width="8" height="20" rx="1" stroke="#C5964C" strokeWidth="0.8" opacity="0.35" />
      {/* Arrow passing through */}
      <line x1="2" y1="18" x2="32" y2="18" stroke="#C5964C" strokeWidth="1.8" strokeLinecap="round" />
      <polyline points="27,13 32,18 27,23" stroke="#C5964C" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Speed lines */}
      <line x1="4" y1="14" x2="8" y2="14" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <line x1="3" y1="22" x2="7" y2="22" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function TargetChartIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Target rings */}
      <circle cx="16" cy="20" r="13" stroke="#C5964C" strokeWidth="1.5" />
      <circle cx="16" cy="20" r="8.5" stroke="#C5964C" strokeWidth="1.2" />
      <circle cx="16" cy="20" r="4" stroke="#C5964C" strokeWidth="1" />
      <circle cx="16" cy="20" r="1.5" fill="#C5964C" />
      {/* Growth chart lines overlay */}
      <polyline
        points="8,28 14,22 20,24 26,14 32,8"
        stroke="#C5964C"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow tip on chart line */}
      <polyline points="29,7 32,8 31,11" stroke="#C5964C" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ---------- Data ---------- */

const values = [
  {
    title: "Strategic & Insightful",
    description:
      "Every plan starts with evidence: your audience, your market, and what the data says is actually working. We don’t pitch what sounds good. We build what holds up.",
    Icon: CompassIcon,
  },
  {
    title: "Friendly & Approachable",
    description:
      "Marketing doesn’t have to feel like a foreign language. We keep it plain: what we’re doing, why, and what it’s doing for your business. No jargon. No noise.",
    Icon: OpenHandsIcon,
  },
  {
    title: "Innovative & Bold",
    description:
      "We don’t wait to see what’s working for everyone else. We track where the market is heading and move your business into position before it gets crowded.",
    Icon: ArrowThroughDoorIcon,
  },
  {
    title: "Results-Driven",
    description:
      "Growth isn’t a promise here. It’s the only measure that matters. We track everything, report in plain numbers, and stand behind what we deliver.",
    Icon: TargetChartIcon,
  },
];

/* ---------- Component ---------- */

export default function WhyWorkWithSage() {
  return (
    <section
      id="about"
      className="bg-forest px-6 py-20 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          What You&rsquo;re Getting When
          <br className="hidden sm:block" /> You Work With Sage.
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-forest-light/50 p-8 backdrop-blur transition-colors hover:bg-forest-light/70"
            >
              <div className="mb-4">
                <v.Icon />
              </div>
              <h3 className="text-lg font-bold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {v.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-white/60">
            Sage is backed by Greenpage Digital, a digital marketing agency with
            a track record of organic growth across the US, UK, and Australia.
            That organic background is the engine behind everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}
