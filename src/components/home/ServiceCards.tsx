"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useDragScroll } from "@/hooks/useInteractions";
import { FloatingCardsScene } from "@/components/three/DynamicScenes";
import { Reveal } from "@/components/ui/Motion";

const services = [
  {
    en: "Hospital Website",
    ko: "병원 홈페이지 제작",
    items: ["메인 페이지 · 병원 소개", "의료진 · 진료과목", "장비와 시설 · 오시는 길", "공지사항 · 모바일 최적화"],
  },
  {
    en: "Booking System",
    ko: "예약 연결 구조",
    items: ["전화 · 카카오채널 연결", "네이버예약 · 상담폼", "빠른 문의 버튼", "모바일 하단 고정 CTA"],
  },
  {
    en: "Admin & Analytics",
    ko: "관리 · 성과 확인",
    items: ["공지 · 팝업 · 진료시간", "의료진 · 이벤트 관리", "문의 내역 · 버튼 클릭", "성과 확인 리포트"],
  },
];

export function ServiceCards() {
  const scrollRef = useDragScroll();
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <FloatingCardsScene />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-muted">우리는 이런 일을 해요</p>
              <h2 className="mt-2 text-4xl font-black text-foreground md:text-5xl">Hospital Service</h2>
            </div>
            <Link href="/service" className="inline-flex items-center gap-2 rounded-full bg-point-purple px-5 py-2.5 text-sm font-bold text-white">
              메뉴 더보기 <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div ref={scrollRef} className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {services.map((svc, i) => (
            <motion.div
              key={svc.en}
              onMouseEnter={() => setActive(i)}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`min-w-[280px] shrink-0 overflow-hidden rounded-3xl border bg-white shadow-lg md:min-w-0 ${
                active === i ? "border-point-purple shadow-point-purple/10" : "border-line"
              }`}
            >
              <div className="border-b border-line bg-soft-purple/50 px-6 py-5">
                <p className="text-sm font-bold text-point-purple">{svc.en}</p>
                <p className="mt-1 text-lg font-bold text-foreground">{svc.ko}</p>
              </div>
              <div className="px-6 py-6">
                <ul className="space-y-2.5">
                  {svc.items.map((item) => (
                    <li key={item} className="text-sm text-muted">{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
            기획은 빠르게, 구현은 정교하게. 환자가 이해하고, 신뢰하고, 예약하는 새로운 디지털 경험을 완성해요.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const tags = [
  "#병원홈페이지제작", "#예약연결구조", "#의료진소개", "#진료과목페이지",
  "#관리자시스템", "#모바일최적화", "#네이버예약연동", "#카카오채널",
  "#성과확인", "#반응형홈페이지", "#치료콘텐츠", "#병원리뉴얼",
];

export function HashtagMarquee() {
  const doubled = [...tags, ...tags];

  return (
    <section className="overflow-hidden border-y border-line bg-background py-6">
      <motion.div className="flex whitespace-nowrap" animate={{ x: [0, -1920] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
        {doubled.map((tag, i) => (
          <span key={`${tag}-${i}`} className="mx-6 inline-flex items-center gap-2 text-sm font-medium text-muted md:text-base">
            {tag.includes("예약") && <span className="text-medical-blue">+</span>}
            {tag}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
