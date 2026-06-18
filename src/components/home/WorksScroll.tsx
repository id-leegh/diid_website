"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDragScroll } from "@/hooks/useInteractions";

const works = [
  { category: "정형외과", title: "척추·관절·통증·재활", accent: "bg-soft-purple" },
  { category: "내과", title: "건강검진·만성질환·내시경", accent: "bg-white" },
  { category: "치과", title: "임플란트·심미치료", accent: "bg-soft-purple" },
  { category: "산부인과", title: "여성질환·검진·시술", accent: "bg-white" },
  { category: "검진센터", title: "검진 프로그램·예약", accent: "bg-soft-purple" },
  { category: "병원급", title: "다과·전문센터·입원", accent: "bg-white" },
];

export function WorksScroll() {
  const scrollRef = useDragScroll();

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mb-12 overflow-hidden">
        <motion.p
          className="whitespace-nowrap text-6xl font-black text-point-purple/15 md:text-8xl"
          animate={{ x: [0, -1200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          made for booking. made for trust.&nbsp;&nbsp;&nbsp;made for booking. made for trust.&nbsp;&nbsp;&nbsp;
        </motion.p>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h2 className="mb-8 text-3xl font-black text-foreground md:text-4xl">제작 사례</h2>
      </div>

      <div ref={scrollRef} className="flex gap-6 overflow-x-auto px-6 pb-4 md:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {works.map((work, i) => (
          <motion.div
            key={work.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -8 }}
          >
            <Link
              href="/works"
              className={`group relative block h-80 w-72 overflow-hidden rounded-3xl border border-line ${work.accent} p-6 shadow-sm transition-shadow hover:shadow-lg md:h-96 md:w-80`}
            >
              <span className="inline-block rounded-full bg-point-purple/10 px-3 py-1 text-xs font-bold text-point-purple">
                {work.category}
              </span>
              <p className="absolute bottom-6 left-6 right-6 text-xl font-bold text-foreground">{work.title}</p>
              <ArrowRight size={20} className="absolute bottom-6 right-6 text-point-purple opacity-0 transition-all group-hover:opacity-100" />
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 px-6 md:px-10">
        <Link href="/works" className="inline-flex items-center gap-2 text-sm font-bold text-point-purple">
          제작 사례 더보기 <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
}
