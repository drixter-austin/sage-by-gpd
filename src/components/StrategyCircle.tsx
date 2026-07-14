const services = [
  {
    name: "Organic Content & SEO",
    description:
      "Your content should be working for you around the clock. Sage builds SEO-driven content that earns search visibility, draws in the right audience, and compounds over time. This is the foundation everything else sits on.",
  },
  {
    name: "Social Media Management",
    description:
      "Consistency is what builds trust. Sage manages your social presence on a schedule that keeps your audience engaged, supports your content, and grows your following with intent.",
  },
  {
    name: "Content Strategy",
    description:
      "Everything Sage does connects. Your SEO content, your social posts, and your campaigns all move together because they're built from the same plan.",
  },
  {
    name: "Meta Ads Management",
    description:
      "When you're ready to accelerate, paid ads work harder with a content foundation behind them. Sage runs Meta Ads for brands that want to move faster without starting from scratch.",
  },
];

/* ---------- Center swan for strategy circle ---------- */

function CenterSwanLogo() {
  return (
    <svg viewBox="0 0 44 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-24 w-auto sm:h-32 md:h-40">
      <g transform="translate(0,64) scale(0.01,-0.01)" fill="none" stroke="none">
        <path
          d="M1226 6335 c-731 -104 -1256 -731 -1223 -1459 19 -436 214 -789 625 -1133 262 -220 460 -343 1091 -677 631 -335 878 -501 1139 -768 332 -338 456 -647 456 -1128 0 -383 -93 -747 -275 -1085 l-43 -79 60 34 c849 480 1303 1103 1306 1790 1 459 -145 757 -481 982 -219 146 -436 231 -1056 413 -974 286 -1426 531 -1793 970 -261 312 -387 614 -399 960 -12 375 108 554 367 543 181 -7 283 -94 558 -473 266 -368 388 -462 680 -526 26 -6 220 -14 432 -19 408 -9 492 -17 770 -74 227 -48 617 -154 824 -226 33 -11 61 -20 63 -20 10 0 -83 168 -144 260 -371 561 -1017 1132 -1631 1442 -453 228 -940 328 -1326 273z"
          fill="#3D6B4F"
        />
        <path
          d="M1280 6298 c-823 -483 -1250 -1059 -1277 -1718 -17 -410 113 -749 364 -952 234 -189 464 -289 1093 -474 657 -193 935 -298 1206 -454 674 -388 1063 -946 1068 -1530 3 -352 -114 -516 -364 -514 -177 1 -290 95 -560 468 -252 348 -383 459 -611 517 -75 19 -125 22 -454 29 -442 10 -583 25 -940 105 -151 34 -460 120 -628 175 -71 23 -131 39 -134 36 -8 -8 71 -149 152 -271 231 -347 610 -740 996 -1032 857 -650 1745 -846 2391 -528 792 390 1030 1418 489 2115 -264 340 -593 577 -1391 1000 -657 348 -895 506 -1150 760 -332 331 -465 636 -477 1096 -11 397 75 766 262 1122 30 56 53 102 52 101 -1 0 -40 -23 -87 -51z"
          fill="#B8D4BC"
        />
      </g>
    </svg>
  );
}

/* ---------- Gold-outlined orbiting icons ---------- */

function OrganicSeoIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="2" width="14" height="18" rx="2" stroke="#C5964C" strokeWidth="1.5" />
      <line x1="7" y1="7" x2="15" y2="7" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="10" x2="13" y2="10" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="7" y1="13" x2="11" y2="13" stroke="#C5964C" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="20" cy="18" r="4.5" stroke="#C5964C" strokeWidth="1.5" />
      <line x1="23.2" y1="21.2" x2="26" y2="24" stroke="#C5964C" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20" cy="16.5" r="1.3" stroke="#C5964C" strokeWidth="1" />
      <path d="M17.5 21C17.5 19.5 18.5 18.5 20 18.5C21.5 18.5 22.5 19.5 22.5 21" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function MetaAdsIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="3" width="18" height="14" rx="2" stroke="#C5964C" strokeWidth="1.5" />
      <line x1="2" y1="7" x2="20" y2="7" stroke="#C5964C" strokeWidth="1.2" />
      <circle cx="5" cy="5" r="0.8" fill="#C5964C" />
      <circle cx="7.5" cy="5" r="0.8" fill="#C5964C" />
      <circle cx="10" cy="5" r="0.8" fill="#C5964C" />
      <path d="M18 14L26 10V22L18 18V14Z" stroke="#C5964C" strokeWidth="1.5" strokeLinejoin="round" />
      <rect x="15" y="14" width="3" height="4" rx="1" stroke="#C5964C" strokeWidth="1.3" />
      <path d="M16 18V22" stroke="#C5964C" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="8" width="10" height="8" rx="1.5" stroke="#C5964C" strokeWidth="1.3" />
      <circle cx="6" cy="12" r="2.2" stroke="#C5964C" strokeWidth="1.2" />
      <rect x="13" y="2" width="8" height="11" rx="1.5" stroke="#C5964C" strokeWidth="1.3" />
      <line x1="15" y1="5.5" x2="19" y2="5.5" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" />
      <line x1="15" y1="8" x2="18" y2="8" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" />
      <rect x="13" y="16" width="13" height="10" rx="2" stroke="#C5964C" strokeWidth="1.3" />
      <path d="M18 19L22 21L18 23V19Z" stroke="#C5964C" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function SocialMediaIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="1" width="12" height="22" rx="2.5" stroke="#C5964C" strokeWidth="1.5" />
      <line x1="10" y1="3" x2="14" y2="3" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" />
      <path d="M10 10C10 8.5 11 8 12 8C13 8 14 8.5 14 10C14 8.5 15 8 16 8C17 8 18 8.5 18 10C18 12 14 15 14 15C14 15 10 12 10 10Z" stroke="#C5964C" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="22" cy="10" r="3" stroke="#C5964C" strokeWidth="1.2" />
      <path d="M19.5 11.5L18 13" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" />
      <circle cx="4" cy="18" r="2.5" stroke="#C5964C" strokeWidth="1.2" />
      <path d="M6.2 16.5L7.5 15" stroke="#C5964C" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/* ---------- Component ---------- */

export default function StrategyCircle() {
  const orbitItems = [
    { label: "Organic SEO", angle: 315, Icon: OrganicSeoIcon },
    { label: "Meta Ads", angle: 225, Icon: MetaAdsIcon },
    { label: "Content", angle: 45, Icon: ContentIcon },
    { label: "Social Media", angle: 135, Icon: SocialMediaIcon },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-forest px-6 py-20 lg:px-16 lg:py-28"
    >
      {/* Dot-grid background texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">
          One Strategy. Every Growth Lever.
        </h2>

        {/* Strategy circle visual */}
        <div className="relative mx-auto mt-14 flex h-[360px] w-[360px] items-center justify-center sm:h-[460px] sm:w-[460px] md:h-[520px] md:w-[520px]">
          {/* Gold circular rings */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 520 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="35%">
                <stop offset="0%" stopColor="#7BB58A" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#1B3A2D" stopOpacity="0" />
              </radialGradient>
              <filter id="iconGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
              </filter>
            </defs>
            {/* Center glow */}
            <circle cx="260" cy="260" r="180" fill="url(#centerGlow)" />
            {/* Main gold ring — thick and prominent */}
            <circle cx="260" cy="260" r="225" stroke="#C5964C" strokeWidth="3.5" opacity="0.65" />
            {/* Thin outer ring */}
            <circle cx="260" cy="260" r="245" stroke="#C5964C" strokeWidth="0.75" opacity="0.2" />
            {/* Inner ring */}
            <circle cx="260" cy="260" r="150" stroke="#C5964C" strokeWidth="1" opacity="0.18" />
            {/* Inner-most ring */}
            <circle cx="260" cy="260" r="110" stroke="#C5964C" strokeWidth="0.75" opacity="0.12" />
          </svg>

          {/* Center logo + text */}
          <div className="z-10 flex flex-col items-center">
            <CenterSwanLogo />
            <span className="mt-2 text-lg font-bold tracking-[0.3em] text-[#B8D4BC] uppercase sm:text-xl md:text-2xl">
              SAGE
            </span>
            <span className="text-xs font-bold tracking-[0.25em] text-[#7BB58A]/70 uppercase sm:text-sm">
              STRATEGY
            </span>
          </div>

          {/* Orbiting items — diamond layout */}
          {orbitItems.map((item) => {
            const rad = (item.angle * Math.PI) / 180;
            const r = 43;
            const x = 50 + r * Math.cos(rad);
            const y = 50 + r * Math.sin(rad);
            return (
              <div
                key={item.label}
                className="absolute flex flex-col items-center gap-1.5"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Glow ring behind circle */}
                <div className="relative">
                  <div
                    className="absolute -inset-3 rounded-full opacity-30"
                    style={{
                      background: "radial-gradient(circle, rgba(123,181,138,0.5) 0%, transparent 70%)",
                    }}
                  />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#234A39] shadow-lg shadow-black/30 ring-1 ring-warm-gold/25 sm:h-14 sm:w-14">
                    <item.Icon />
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-white/80 sm:text-xs">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Service cards — 2x2 grid */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {services.map((svc) => (
            <div
              key={svc.name}
              className="rounded-xl border-l-2 border-warm-gold/40 bg-sage-mint/40 p-6 backdrop-blur transition-colors hover:bg-sage-mint/55"
            >
              <h3 className="text-lg font-bold text-white">{svc.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                {svc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
          Organic builds the <span className="font-bold text-white">foundation</span>.
          Content keeps it <span className="font-bold text-white">compounding</span>.
          <br className="hidden sm:block" /> Ads accelerate when you&rsquo;re{" "}
          <span className="font-bold text-white">ready</span>.
        </p>
      </div>
    </section>
  );
}
