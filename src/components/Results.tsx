const stats = [
  {
    value: "4.2x",
    label: "Average ROAS Across Managed Accounts",
  },
  {
    value: "150+",
    label: "Brands Supported",
  },
  {
    value: "68%",
    label: "Average Increase in Qualified Traffic",
  },
];

const testimonials = [
  {
    quote:
      "Our paid and organic content is finally working together — we're seeing compounding results for the first time.",
    author: "Sophie R.",
    role: "E-commerce Brand Owner",
  },
  {
    quote:
      "Our ROAS went from 1.8x to 4.2x in just 90 days. Sage doesn't just run ads — they build a system.",
    author: "Jordan L.",
    role: "DTC Founder",
  },
  {
    quote:
      "We went from invisible on Google to ranking on the first page for 12 key terms in under six months.",
    author: "Mia T.",
    role: "Service Business Owner",
  },
];

export default function Results() {
  return (
    <section className="bg-white px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-forest sm:text-4xl md:text-5xl">
          Built on Real Results.
        </h2>

        {/* Testimonials */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded-2xl border border-sage-whisper bg-mist p-8"
            >
              <div className="text-4xl font-serif text-sage-core/30">
                &ldquo;
              </div>
              <p className="mt-2 text-sm leading-relaxed text-forest/80 italic">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-sm font-bold text-white">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-forest">
                    {t.author}
                  </p>
                  <p className="text-xs text-forest/60">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-forest p-10 sm:grid-cols-3 md:p-14">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-bold text-warm-gold sm:text-5xl">
                {s.value}
              </div>
              <p className="mt-2 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
