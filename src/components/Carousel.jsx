import React, { useEffect, useMemo, useState, useRef } from "react";

/**
 * Simple responsive carousel:
 * - items: array of React nodes or data objects (we accept elements)
 * - visibleBreakpoints: array of [minWidth, slidesToShow] ordered ascending
 * - autoplayDelay: ms (0 to disable)
 *
 * This carousel renders `slidesToShow` items at a time (wrapping),
 * auto-advances the start index, and pauses on hover.
 */
export default function Carousel({ items = [], visibleBreakpoints = [[0,1],[640,2],[768,3],[1024,5]], autoplayDelay = 2500 }) {
  const [start, setStart] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const hoverRef = useRef(false);
  const len = items.length;

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      // pick biggest breakpoint <= w
      let slides = 1;
      for (const [minW, s] of visibleBreakpoints) {
        if (w >= minW) slides = s;
      }
      setSlidesToShow(Math.min(Math.max(1, slides), len || 1));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [visibleBreakpoints, len]);

  useEffect(() => {
    if (!autoplayDelay || len <= slidesToShow) return;
    const id = setInterval(() => {
      if (hoverRef.current) return;
      setStart((prev) => (prev + 1) % len);
    }, autoplayDelay);
    return () => clearInterval(id);
  }, [autoplayDelay, len, slidesToShow]);

  const visibleItems = useMemo(() => {
    // produce slidesToShow items starting from start, wrapping around
    const out = [];
    for (let i = 0; i < slidesToShow; i++) {
      out.push(items[(start + i) % len]);
    }
    return out;
  }, [items, start, slidesToShow, len]);

  // small handlers for arrows
  const prev = () => setStart((s) => (s - 1 + len) % len);
  const next = () => setStart((s) => (s + 1) % len);

  return (
    <div
      className="w-full"
      onMouseEnter={() => (hoverRef.current = true)}
      onMouseLeave={() => (hoverRef.current = false)}
    >
      <div className="relative">
        {/* visible grid */}
        <div className="flex gap-6 items-stretch">
          {visibleItems.map((it, idx) => (
            <div key={idx} className="carousel-item flex-1">
              {typeof it === "function" ? it() : it}
            </div>
          ))}
        </div>

        {/* controls */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-black/40 shadow-md hover:scale-105 transition transform"
        >
          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-black/40 shadow-md hover:scale-105 transition transform"
        >
          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
        </button>
      </div>

      {/* pagination dots */}
      <div className="flex items-center justify-center gap-2 mt-4">
        {Array.from({ length: len }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            className={`w-2 h-2 rounded-full ${i === start ? "bg-primary" : "bg-slate-300 dark:bg-slate-600"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
