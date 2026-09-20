"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { ChevronsUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setIsVisible(window.scrollY > 480);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const criticalStyle: CSSProperties = {
    appearance: "none",
    position: "fixed",
    left: 24,
    bottom: 24,
    zIndex: 140,
    width: 58,
    minWidth: 58,
    height: 58,
    minHeight: 58,
    display: "grid",
    placeItems: "center",
    padding: 0,
    color: "#fff",
    background: "#1f5962",
    border: "2px solid #fff",
    borderRadius: "50%",
    boxShadow: "0 0 0 1px rgba(31, 79, 89, 0.18), 0 14px 34px rgba(6, 17, 31, 0.28)",
    opacity: isVisible ? 1 : 0,
    pointerEvents: isVisible ? "auto" : "none",
  };

  return (
    <button
      className={`scroll-to-top${isVisible ? " is-visible" : ""}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      style={criticalStyle}
    >
      <span className="scroll-to-top-icon" aria-hidden="true">
        <ChevronsUp size={27} strokeWidth={2.2} />
      </span>
    </button>
  );
}
