function RocketIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 4C24 4 18 12 18 24C18 30 20 35 24 38C28 35 30 30 30 24C30 12 24 4 24 4Z"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 24L12 30L16 32"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 24L36 30L32 32"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="18" r="2.5" stroke="#1B3A2D" strokeWidth="2" />
      <path
        d="M20 38C20 38 22 44 24 44C26 44 28 38 28 38"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SeedlingIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 40V22"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 28C20 28 14 26 12 20C14 16 20 14 24 18"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 22C28 22 34 18 36 12C34 8 28 6 24 10"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 40H32"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 18C34 14 38 10 40 8"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 24C12 22 8 18 6 16"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ScalesIcon({ className = "h-12 w-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="24"
        y1="6"
        x2="24"
        y2="42"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <line
        x1="8"
        y1="14"
        x2="40"
        y2="14"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 14L4 28H16L8 14Z"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M4 28C4 31 6 32 10 32C14 32 16 31 16 28"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M40 14L36 28H44L40 14Z"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M36 28C36 31 38 32 40 32C42 32 44 31 44 28"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="6" r="2" stroke="#1B3A2D" strokeWidth="2" />
      <line
        x1="18"
        y1="42"
        x2="30"
        y2="42"
        stroke="#1B3A2D"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const plans = [
  {
    name: "Launch",
    badge: null,
    description: "For brands just getting started with organic growth.",
    icon: "rocket" as const,
    features: [
      "Social media management",
      "Content calendar",
      "Monthly performance reporting",
    ],
    benefit: [
      "The right foundation for building your organic presence.",
      "A clear strategy before a single piece of content goes live.",
    ],
    highlighted: false,
  },
  {
    name: "Grow",
    badge: "Best Fit for Growth",
    description: "For brands ready to compound their online presence.",
    icon: "seedling" as const,
    features: [
      "SEO content strategy",
      "Social media management",
      "Content and social aligned to the same plan",
      "Ongoing optimization",
    ],
    benefit: [
      "Organic and social pulling in the same direction.",
      "Better results, more consistently.",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    badge: null,
    description: "For brands ready to dominate their market.",
    icon: "scales" as const,
    features: [
      "Everything in Grow, plus:",
      "Advanced content testing",
      "Priority support",
      "Full visibility reporting",
    ],
    benefit: [
      "Full execution.",
      "Full visibility.",
      "A team that moves when you do.",
    ],
    highlighted: false,
  },
];

function PlanIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "rocket":
      return <RocketIcon className={className} />;
    case "seedling":
      return <SeedlingIcon className={className} />;
    case "scales":
      return <ScalesIcon className={className} />;
    default:
      return null;
  }
}

export default function Pricing() {
  return (
    <section className="bg-mist px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
          Plans That Fit
          <br />
          Where You Are.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-forest/70 sm:text-lg">
          Every Sage plan starts with your goals, then builds around your budget
          and stage. You get what makes sense for where you are. Nothing padded
          out for the sake of it.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-shadow hover:shadow-xl ${
                plan.highlighted
                  ? "border-2 border-warm-gold bg-white shadow-lg"
                  : "border border-sage-whisper bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-warm-gold px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <PlanIcon icon={plan.icon} className="h-12 w-12" />
              <h3 className="mt-3 text-2xl font-bold text-forest">
                {plan.name}
              </h3>

              {/* Gold separator line */}
              <div className="mt-3 h-px w-full bg-warm-gold" />

              <p className="mt-3 text-sm text-forest/60">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-forest/80"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-sage-core"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              {/* Benefit box */}
              <div className="mt-auto pt-6">
                <div className="rounded-lg border-l-4 border-sage-core bg-sage-whisper/60 p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-sage-core">
                    Benefit
                  </p>
                  {plan.benefit.map((line, i) => (
                    <p
                      key={i}
                      className="mt-1 text-sm leading-relaxed text-forest/80"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-base text-forest/60">
            Not sure where you fit?{" "}
            <span className="font-bold">
              That&rsquo;s what the call is for.
            </span>
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-full bg-warm-gold px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-warm-gold-hover sm:text-base"
          >
            Book a Call to Discuss Your Plan
          </a>
        </div>

        {/* Meta Ads add-on */}
        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-sage-whisper bg-white p-8">
          <h3 className="text-lg font-bold text-forest">
            Also Offered: Meta Ads Management
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-forest/70">
            For brands ready to accelerate, Sage runs Meta Ads campaigns built
            on the same strategy foundation as your organic content. Paid and
            organic working together is what makes both more effective.
          </p>
          <p className="mt-4 text-sm font-semibold text-forest">
            Average ROAS across managed accounts:{" "}
            <span className="text-warm-gold">4.2x</span>
          </p>
        </div>
      </div>
    </section>
  );
}
