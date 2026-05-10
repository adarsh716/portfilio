"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export const CustomCursor = () => {
  const [hoverType, setHoverType] = useState<"none" | "link" | "text" | "card">("none");
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible]   = useState(false);
  const [isMobile, setIsMobile]     = useState(true);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-600);
  const mouseY = useMotionValue(-600);

  /* Spotlight — large, drifts softly behind the cursor */
  const glowX = useSpring(mouseX, { damping: 30, stiffness: 90, mass: 0.9 });
  const glowY = useSpring(mouseY, { damping: 30, stiffness: 90, mass: 0.9 });

  /* Inner elements — tighter response */
  const cursorX = useSpring(mouseX, { damping: 20, stiffness: 400, mass: 0.2 });
  const cursorY = useSpring(mouseY, { damping: 20, stiffness: 400, mass: 0.2 });

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

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverEl = target.closest("a, button, [data-cursor], input, textarea");
      
      if (hoverEl) {
        const type = hoverEl.getAttribute("data-cursor") as any || (hoverEl.tagName === "A" || hoverEl.tagName === "BUTTON" ? "link" : "text");
        setHoverType(type);
        setCursorText(hoverEl.getAttribute("data-cursor-text") || "");
      } else {
        setHoverType("none");
        setCursorText("");
      }
    };

    const onWindowLeave = () => setIsVisible(false);
    const onWindowEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", handleHover);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseleave", onWindowLeave);
    window.addEventListener("mouseenter", onWindowEnter);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", handleHover);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseleave", onWindowLeave);
      window.removeEventListener("mouseenter", onWindowEnter);
    };
  }, []);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* ── Large soft spotlight ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9994] will-change-transform"
        style={{ x: glowX, y: glowY, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ 
            width: hoverType === "card" ? 400 : 280, 
            height: hoverType === "card" ? 400 : 280,
            opacity: hoverType !== "none" ? 0.15 : 0.08
          }}
          className="rounded-full bg-primary/40 blur-[80px]"
        />
      </motion.div>

      {/* ── Innovative Cursor Elements ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <AnimatePresence mode="wait">
          {hoverType === "text" ? (
            <motion.div
              key="text"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              exit={{ scaleY: 0, opacity: 0 }}
              className="w-[2px] h-6 bg-primary shadow-[0_0_8px_rgba(251,191,36,0.8)]"
            />
          ) : hoverType === "link" ? (
            <motion.div
              key="link"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="relative flex items-center justify-center"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-10 h-10 border border-primary/30 border-dashed rounded-full"
              />
              <div className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
            </motion.div>
          ) : hoverType === "card" ? (
            <motion.div
              key="card"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="w-20 h-20 bg-primary/10 backdrop-blur-md border border-primary/40 rounded-full flex items-center justify-center overflow-hidden"
            >
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-[8px] font-black uppercase tracking-widest text-primary"
              >
                {cursorText || "VIEW"}
              </motion.span>
              <motion.div 
                animate={{ x: [-100, 100] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
              />
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ scale: 0 }}
              animate={{ scale: isClicking ? 0.6 : 1 }}
              exit={{ scale: 0 }}
              className="w-4 h-4 relative flex items-center justify-center"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border border-primary/40 rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
