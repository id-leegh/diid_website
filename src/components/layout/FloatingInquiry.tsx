"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function FloatingInquiry() {
  const pathname = usePathname();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const el = document.getElementById("floating-inquiry");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * 0.12);
      y.set((e.clientY - (rect.top + rect.height / 2)) * 0.12);
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  if (pathname.startsWith("/admin")) return null;

  return (
    <motion.div id="floating-inquiry" className="fixed bottom-8 right-8 z-40" style={{ x: springX, y: springY }}>
      <Link href="/contact" className="relative flex h-20 w-20 items-center justify-center" aria-label="프로젝트 문의">
        <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs><path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" /></defs>
            <text className="fill-point-purple text-[11px] font-semibold uppercase tracking-wider">
              <textPath href="#circle">Project Inquiry · Project Inquiry · </textPath>
            </text>
          </svg>
        </motion.div>
        <motion.div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg ring-2 ring-point-purple/20" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
          <span className="text-2xl">🏥</span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
