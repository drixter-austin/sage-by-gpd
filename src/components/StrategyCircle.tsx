const services = [
  {
    name: "Organic SEO",
    description:
      "Technical audits, keyword strategy, on-page optimization, and link building to grow your organic visibility.",
    icon: "🔍",
  },
  {
    name: "Content Strategy",
    description:
      "Blog posts, landing pages, and evergreen content designed to rank and convert.",
    icon: "📝",
  },
  {
    name: "Social Media Management",
    description:
      "Platform strategy, content calendars, community management, and growth across your key channels.",
    icon: "📱",
  },
  {
    name: "Meta Ads Management",
    description:
      "Performance-driven ad campaigns built on the same strategy foundation as your organic content.",
    icon: "📊",
  },
];

export default function StrategyCircle() {
  return (
    <section
      id="services"
      className="bg-forest px-6 py-20 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          One Strategy. Every Growth Lever.
        </h2>

        {/* Strategy circle visual */}
        <div className="relative mx-auto mt-16 flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-warm-gold/40" />
          <div className="absolute inset-3 rounded-full border border-warm-gold/20" />

          {/* Center logo */}
          <div className="z-10 flex flex-col items-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-forest-light shadow-xl ring-2 ring-warm-gold/30 sm:h-24 sm:w-24">
              <span className="text-2xl font-bold text-warm-gold sm:text-3xl">
                S
              </span>
            </div>
            <span className="mt-2 text-xs font-semibold tracking-[0.2em] text-white/60 uppercase">
              Sage Strategy
            </span>
          </div>

          {/* Orbiting service labels */}
          {[
            { label: "Organic SEO", angle: -45, color: "text-warm-gold" },
            { label: "Content", angle: 45, color: "text-pale-sage" },
            { label: "Social Media", angle: 135, color: "text-warm-gold" },
            { label: "Meta Ads", angle: 225, color: "text-pale-sage" },
          ].map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const r = 52;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div
                key={item.label}
                className={`absolute text-xs font-semibold ${item.color}`}
                style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
              >
                <div className="rounded-full bg-forest-light/80 px-3 py-1.5 text-center shadow-md backdrop-blur">
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Service cards */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="rounded-xl bg-forest-light/60 p-6 backdrop-blur transition-colors hover:bg-forest-light"
            >
              <span className="text-2xl">{svc.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{svc.name}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/60">
                {svc.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
          Organic builds the foundation. Content keeps it compounding.
          <br className="hidden sm:block" /> Ads accelerate when you&rsquo;re
          ready.
        </p>
      </div>
    </section>
  );
}
