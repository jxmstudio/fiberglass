"use client";

import { useEffect } from "react";
import { initializeTracking } from "@/lib/utm";
import { pageview } from "@/lib/gtm";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function TrackingInitInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initializeTracking();
  }, []);

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    pageview(url);
  }, [pathname, searchParams]);

  return null;
}

export function TrackingInit() {
  return (
    <Suspense fallback={null}>
      <TrackingInitInner />
    </Suspense>
  );
}
