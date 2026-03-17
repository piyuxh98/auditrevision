"use client";

import { useEffect } from "react";

const CACHE_PREFIX = "acca-audit-mastery-";

export function ServiceWorkerRegistrar() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) {
      return;
    }

    if (process.env.NODE_ENV !== "production") {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          void registration.unregister();
        });
      });

      if ("caches" in window) {
        caches.keys().then((keys) => {
          keys.forEach((key) => {
            if (key.startsWith(CACHE_PREFIX)) {
              void caches.delete(key);
            }
          });
        });
      }

      return;
    }

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // Silent failure keeps the app usable even if registration is blocked.
    });
  }, []);

  return null;
}
