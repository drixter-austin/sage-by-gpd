const plans = [
  {
    name: "Launch",
    badge: null,
    description: "For brands just getting started with organic growth.",
    icon: "🚀",
    features: [
      "SEO foundation audit",
      "Keyword strategy",
      "2 blog posts/month",
      "Monthly reporting",
      "Email support",
    ],
    highlighted: false,
  },
  {
    name: "Grow",
    badge: "Best Fit for Growth",
    description: "For brands ready to compound their online presence.",
    icon: "🌿",
    features: [
      "Full SEO strategy & execution",
      "4 blog posts/month",
      "Social media management",
      "Content calendar",
      "Bi-weekly reporting",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    badge: null,
    description: "For brands ready to dominate their market.",
    icon: "⛰️",
    features: [
      "Everything in Grow",
      "8+ blog posts/month",
      "Advanced link building",
      "Conversion optimization",
      "Weekly reporting",
      "Dedicated strategist",
    ],
    highlighted: false,
  },
];

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
          and stage. You get what makes sense for where you are. Nothing pushed
          out for the sake of it.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-shadow hover:shadow-xl ${
                plan.highlighted
                  ? "border-2 border-warm-gold bg-white shadow-lg"
                  : "border border-sage-whisper bg-white"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-forest px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">
                  {plan.badge}
                </span>
              )}

              <div className="text-3xl">{plan.icon}</div>
              <h3 className="mt-3 text-2xl font-bold text-forest">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-forest/60">{plan.description}</p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-forest/80">
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
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-base text-forest/60">
            Not sure where you fit? That&rsquo;s what the call is for.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block rounded-full border-2 border-forest bg-forest px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-forest-light sm:text-base"
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
