"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible]   = useState(false);
  const [isMobile, setIsMobile]     = useState(true);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  /* Spotlight — large, drifts softly behind the cursor */
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 90, mass: 0.9 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 90, mass: 0.9 });

  /* Inner halo — medium lag */
  const haloX = useSpring(mouseX, { damping: 22, stiffness: 260, mass: 0.3 });
  const haloY = useSpring(mouseY, { damping: 22, stiffness: 260, mass: 0.3 });

  /* Center dot — near-instant */
  const dotX = useSpring(mouseX, { damping: 18, stiffness: 1400, mass: 0.04 });
  const dotY = useSpring(mouseY, { damping: 18, stiffness: 1400, mass: 0.04 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(isTouchDevice);
    if (isTouchDevice) return;

    document.body.style.cursor = "none";

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true);
    };
    const onDown = () => setIsClicking(true);
    const onUp   = () => setIsClicking(false);
    const onEnterHover = () => setIsHovering(true);
    const onLeaveHover = () => setIsHovering(false);
    const onWindowLeave = () => setIsVisible(false);
    const onWindowEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onWindowLeave);
    window.addEventListener("mouseenter", onWindowEnter);

    const els = document.querySelectorAll("a, button, [data-hover], input, textarea, select");
    els.forEach((el) => {
      (el as HTMLElement).style.cursor = "none";
      el.addEventListener("mouseenter", onEnterHover);
      el.addEventListener("mouseleave", onLeaveHover);
    });

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onWindowLeave);
      window.removeEventListener("mouseenter", onWindowEnter);
      els.forEach((el) => {
        (el as HTMLElement).style.cursor = "";
        el.removeEventListener("mouseenter", onEnterHover);
        el.removeEventListener("mouseleave", onLeaveHover);
      });
    };
  }, []);

  if (isMobile || !isVisible) return null;

  const glowSize = isClicking ? 160 : isHovering ? 440 : 280;
  const haloSize = isClicking ? 40  : isHovering ? 60  : 44;
  const dotSize  = isClicking ? 3   : isHovering ? 5   : 4;

  return (
    <>
      {/* ── Large soft spotlight ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9994] will-change-transform"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ width: glowSize, height: glowSize }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="rounded-full"
          style={{
            background: isClicking
              ? "radial-gradient(circle, rgba(251,191,36,0.18) 0%, rgba(251,191,36,0.05) 45%, transparent 70%)"
              : isHovering
              ? "radial-gradient(circle, rgba(251,191,36,0.13) 0%, rgba(251,191,36,0.04) 50%, transparent 70%)"
              : "radial-gradient(circle, rgba(251,191,36,0.07) 0%, rgba(251,191,36,0.02) 50%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ── Inner halo — no border, just a tighter warm glow ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9996] will-change-transform"
        style={{ x: haloX, y: haloY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ width: haloSize, height: haloSize, opacity: isHovering ? 0.6 : 0.3 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(251,191,36,0.35) 0%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ── Center dot ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ width: dotSize, height: dotSize }}
          transition={{ duration: 0.1 }}
          className="rounded-full"
          style={{
            background: "#fbbf24",
            boxShadow: "0 0 6px rgba(251,191,36,1), 0 0 14px rgba(251,191,36,0.55)",
          }}
        />
      </motion.div>
    </>
  );
};
