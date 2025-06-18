import React, { memo, useCallback, useEffect, useRef } from "react";

const GlowingEffect = memo(({
  blur = 0,
  inactiveZone = 0.7,
  proximity = 0,
  spread = 20,
  variant = "default",
  glow = false,
  className = "",
  movementDuration = 2,
  borderWidth = 1,
  disabled = true,
}) => {
  const containerRef = useRef(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(0);
  const requestAnim = window.requestAnimationFrame;
  const cancelAnim = window.cancelAnimationFrame;

  const animateValue = (from, to, duration, onUpdate) => {
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = from + (to - from) * eased;
      onUpdate(value);
      if (progress < 1) requestAnim(step);
    };
    requestAnim(step);
  };

  const handleMove = useCallback(
    (e) => {
      if (!containerRef.current) return;
      if (animationFrameRef.current) cancelAnim(animationFrameRef.current);

      animationFrameRef.current = requestAnim(() => {
        const el = containerRef.current;
        const rect = el.getBoundingClientRect();
        const mouseX = e?.x ?? lastPosition.current.x;
        const mouseY = e?.y ?? lastPosition.current.y;

        if (e) lastPosition.current = { x: mouseX, y: mouseY };

        const center = [rect.left + rect.width / 2, rect.top + rect.height / 2];
        const dist = Math.hypot(mouseX - center[0], mouseY - center[1]);
        const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * inactiveZone;

        if (dist < inactiveRadius) {
          el.style.setProperty("--active", "0");
          return;
        }

        const active =
          mouseX > rect.left - proximity &&
          mouseX < rect.left + rect.width + proximity &&
          mouseY > rect.top - proximity &&
          mouseY < rect.top + rect.height + proximity;

        el.style.setProperty("--active", active ? "1" : "0");
        if (!active) return;

        const currentAngle = parseFloat(el.style.getPropertyValue("--start")) || 0;
        let targetAngle =
          (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) / Math.PI + 90;
        const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
        const newAngle = currentAngle + angleDiff;

        animateValue(currentAngle, newAngle, movementDuration, (val) => {
          el.style.setProperty("--start", val.toString());
        });
      });
    },
    [inactiveZone, proximity, movementDuration]
  );

  useEffect(() => {
    if (disabled) return;
    const onScroll = () => handleMove();
    const onPointerMove = (e) => handleMove(e);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.body.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      if (animationFrameRef.current) cancelAnim(animationFrameRef.current);
      window.removeEventListener("scroll", onScroll);
      document.body.removeEventListener("pointermove", onPointerMove);
    };
  }, [handleMove, disabled]);

  const computedGradient = variant === "white"
    ? `repeating-conic-gradient(from 236.84deg at 50% 50%, black, black calc(25% / 5))`
    : `radial-gradient(circle, #dd7bbb 10%, #dd7bbb00 20%),
       radial-gradient(circle at 40% 40%, #d79f1e 5%, #d79f1e00 15%),
       radial-gradient(circle at 60% 60%, #5a922c 10%, #5a922c00 20%), 
       radial-gradient(circle at 40% 60%, #4c7894 10%, #4c789400 20%),
       repeating-conic-gradient(from 236.84deg at 50% 50%, #dd7bbb 0%, #d79f1e 5%, #5a922c 10%, #4c7894 15%, #dd7bbb 20%)`;

  return (
    <>
      <div
        className={`pointer-events-none absolute -inset-px hidden rounded-[inherit] border transition-opacity ${glow ? "opacity-100" : "opacity-0"} ${variant === "white" ? "border-white" : ""} ${disabled ? "!block" : ""}`}
      />
      <div
        ref={containerRef}
        style={{
          "--blur": `${blur}px`,
          "--spread": spread,
          "--start": 0,
          "--active": 0,
          "--glowingeffect-border-width": `${borderWidth}px`,
          "--gradient": computedGradient,
        }}
        className={`pointer-events-none absolute inset-0 rounded-[inherit] ${glow ? "opacity-100" : "opacity-0"} ${blur > 0 ? "blur-[var(--blur)]" : ""} ${disabled ? "!hidden" : ""} ${className}`}
      >
        <div
          className="glow rounded-[inherit] after:content-[''] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))] after:border after:border-transparent after:bg-[var(--gradient)] after:bg-fixed after:opacity-[var(--active)] after:transition-opacity after:duration-300 after:mask-clip-padding-box,after:mask-composite-intersect after:mask-image-[linear-gradient(#0000,#0000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]"
        />
      </div>
    </>
  );
});

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
