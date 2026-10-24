"use client";

import { useEffect, useState } from "react";
import { TOAST_EVENT } from "@/lib/toast";

export default function Toast() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    let timer: number | undefined;

    const onToast = (event: Event) => {
      setMessage((event as CustomEvent<string>).detail);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setMessage(null), 1600);
    };

    window.addEventListener(TOAST_EVENT, onToast);
    return () => {
      window.removeEventListener(TOAST_EVENT, onToast);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed left-1/2 z-[80] -translate-x-1/2 rounded-full bg-fg px-4 py-3 text-[13px] leading-none text-bg transition-all duration-200 ${
        message
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2.5 opacity-0"
      }`}
      style={{ bottom: "calc(24px + env(safe-area-inset-bottom))" }}
    >
      {message ?? ""}
    </div>
  );
}
