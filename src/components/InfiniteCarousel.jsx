import React, { useEffect, useRef } from "react";

/**
 * Infinite auto-scrolling carousel (looping horizontally).
 * - items: array of React nodes
 * - speed: pixels per second
 * - itemWidth: width of each item in px (used only for layout / smoothing)
 *
 * Important: Items will be rendered twice for seamless looping.
 */
export default function InfiniteCarousel({ items = [], speed = 50, itemWidth = 256 }) {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
  const rafRef = useRef(null);
  const offsetRef = useRef(0);
  const hoveringRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    const wrapper = wrapperRef.current;
    if (!container || !wrapper || items.length === 0) return;

    // Ensure the wrapper has at least width of one set of items
    const singleWidth = wrapper.scrollWidth / 2; // because we render items twice

    let lastTime = performance.now();

    function tick(now) {
      const dt = (now - lastTime) / 1000; // seconds
      lastTime = now;
      if (!hoveringRef.current) {
        // move left
        offsetRef.current -= speed * dt;
        // reset when we've moved one set width
        if (Math.abs(offsetRef.current) >= singleWidth) {
          offsetRef.current += singleWidth;
        }
        container.style.transform = `translateX(${offsetRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    // cleanup
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [items, speed]);

  // Pause on hover
  const handleMouseEnter = () => {
    hoveringRef.current = true;
  };
  const handleMouseLeave = () => {
    hoveringRef.current = false;
  };

  // Render items twice for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="w-full overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        ref={containerRef}
        className="flex gap-6"
        style={{ willChange: "transform", display: "flex", alignItems: "stretch" }}
      >
        <div
          ref={wrapperRef}
          className="flex gap-6"
          // wrapper contains the doubled set
          style={{ display: "flex", alignItems: "stretch" }}
        >
          {doubled.map((item, idx) => (
            <div
              key={idx}
              // make sure card can shrink and wrap text
              className="flex-shrink-0 w-64 min-w-0"
              style={{ width: `${itemWidth}px` }}
            >
              {typeof item === "function" ? item() : item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
