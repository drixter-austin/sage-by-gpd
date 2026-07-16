"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/meta-events";
import { captureUtmParams } from "@/lib/utm";

export default function MetaTracking() {
  useEffect(() => {
    const utm = captureUtmParams();
    trackEvent("PageView", Object.keys(utm).length > 0 ? utm : undefined);
  }, []);

  return null;
}
