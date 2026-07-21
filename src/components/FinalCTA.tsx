"use client";

import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/meta-events";
import { getUtmParams, buildCalendlyUtmQuery } from "@/lib/utm";

export default function FinalCTA() {
  const hasFiredViewContent = useRef(false);
  const [utmQuery, setUtmQuery] = useState("");

  useEffect(() => {
    setUtmQuery(buildCalendlyUtmQuery(getUtmParams()));
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data?.event === "calendly.event_scheduled") {
        const utm = getUtmParams();
        trackEvent("CompleteRegistration", {
          content_name: "Strategy Call Booking",
          status: "complete",
          ...utm,
        });
        if (typeof window.gtag === "function") {
          window.gtag("event", "strategy_call_booked", {
            event_category: "conversion",
            event_label: "Calendly Booking",
            ...utm,
          });
        }
      }
    };

    window.addEventListener("message", handleCalendlyEvent);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleCalendlyEvent);
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("contact");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFiredViewContent.current) {
          hasFiredViewContent.current = true;
          const utm = getUtmParams();
          trackEvent("ViewContent", {
            content_name: "Booking Section",
            content_category: "Strategy Call",
            ...utm,
          });
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const calendlyBase =
    "https://calendly.com/chloe-sagebygpd/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=1B3A2D&primary_color=C5964C";

  return (
    <section id="contact" className="bg-forest px-6 py-20 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Ready to Build Growth
          <br />
          That Keeps Working?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
          Thirty minutes is all it takes to see what a proper strategy looks
          like for your business. No pitch. No hard sell. A real conversation and
          a clear plan forward.
        </p>

        {/* Calendly inline embed — UTM params appended for attribution */}
        <div className="mt-10 overflow-hidden rounded-2xl bg-white">
          <div
            className="calendly-inline-widget"
            data-url={`${calendlyBase}${utmQuery}`}
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>

        <p className="mt-6 text-sm text-white/50">
          30-minute call. No commitment. Built around your goals.
        </p>
      </div>
    </section>
  );
}
