"use client";

export default function MarqueeBanner() {
  const items = [
    "NO CONTRACTS",
    "NO GUESSWORK",
    "JUST A PLAN THAT WORKS",
  ];

  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-forest/10 bg-forest py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="mx-8 text-xs font-semibold tracking-widest text-white/70 uppercase">
            {item}
            <span className="mx-8 text-warm-gold">✦</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
