const stats = [
  {
    value: "150+",
    label: "clients across the US, UK, and Australia",
  },
  {
    value: "68%",
    label: "average increase in qualified leads",
  },
];

const testimonials = [
  {
    quote:
      "Finally, a team that explains the why behind the numbers. Reporting is clear and actually helps us make decisions.",
    author: "Mark T.",
    role: "Home Services Business",
    country: "United States",
  },
  {
    quote:
      "Our paid and organic content is finally working together. More qualified leads and lower cost per lead.",
    author: "Sophie K.",
    role: "SaaS Company",
    country: "United Kingdom",
  },
  {
    quote:
      "Our ROAS went from 1.6x to 4.2x in just 90 days. Sage knows how to put ad spend to work.",
    author: "Jessica L.",
    role: "E-commerce Brand Owner",
    country: "Australia",
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
              className="flex flex-col rounded-2xl border border-sage-whisper bg-mist p-8"
            >
              {/* Gold quotation mark */}
              <div className="text-5xl font-serif leading-none text-warm-gold">
                &ldquo;
              </div>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-forest/80 italic">
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
                  <p className="text-xs text-forest/60">
                    {t.role}, {t.country}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-forest p-10 sm:grid-cols-2 md:p-14">
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
