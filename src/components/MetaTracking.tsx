"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/meta-events";

export default function MetaTracking() {
  useEffect(() => {
    trackEvent("PageView");
  }, []);

  return null;
}
