const values = [
  {
    title: "Strategic & Insightful",
    description:
      "Every decision is backed by data and tied to your growth goals. No guessing, no filler.",
    icon: "💡",
  },
  {
    title: "Friendly & Approachable",
    description:
      "We cut the jargon and keep it real. You'll always know what we're doing and why.",
    icon: "🤝",
  },
  {
    title: "Innovative & Bold",
    description:
      "We stay ahead of trends and aren't afraid to try new approaches that move the needle.",
    icon: "🎯",
  },
  {
    title: "Results-Driven",
    description:
      "Growth isn't a promise — it's a process. We track everything and optimize relentlessly.",
    icon: "📈",
  },
];

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
              <span className="text-3xl">{v.icon}</span>
              <h3 className="mt-3 text-lg font-bold text-white">{v.title}</h3>
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
