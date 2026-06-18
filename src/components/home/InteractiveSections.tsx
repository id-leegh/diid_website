"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CTABoxScene } from "@/components/three/DynamicScenes";
import { Reveal } from "@/components/ui/Motion";

const solutions = [
  { num: "01", name: "Basic", title: "기본 병원 홈페이지", desc: "병원 소개, 의료진, 진료과목, 오시는 길" },
  { num: "02", name: "Standard", title: "예약 중심 홈페이지", desc: "예약 CTA, 카카오·네이버 연결, 관리자", featured: true },
  { num: "03", name: "Growth", title: "관리·성과 확인 패키지", desc: "이벤트, 랜딩, 문의관리, 월간 리포트" },
  { num: "04", name: "Custom", title: "맞춤형 병원 홈페이지", desc: "병원 규모와 진료과목에 맞춘 설계" },
];

export function SolutionsCarousel() {
  const [current, setCurrent] = useState(1);
  const [direction, setDirection] = useState(0);

  function go(dir: number) {
    setDirection(dir);
    setCurrent((c) => Math.max(0, Math.min(solutions.length - 1, c + dir)));
  }

  const active = solutions[current];

  return (
    <section className="border-y border-line bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <Reveal direction="left">
            <p className="text-sm font-medium text-point-purple">기본부터 성장까지</p>
            <h2 className="mt-2 text-3xl font-black text-foreground md:text-4xl whitespace-pre-line">{"패키지로\n선택하세요."}</h2>
            <div className="mt-8 flex items-center gap-4">
              <motion.button type="button" onClick={() => go(-1)} whileHover={{ scale: 1.1 }} disabled={current === 0} className="text-point-purple disabled:opacity-30">
                <ArrowLeft size={24} />
              </motion.button>
              <span className="text-sm text-muted">{current + 1} / {solutions.length}</span>
              <motion.button type="button" onClick={() => go(1)} whileHover={{ scale: 1.1 }} disabled={current === solutions.length - 1} className="text-point-purple disabled:opacity-30">
                <ArrowRight size={24} />
              </motion.button>
            </div>
          </Reveal>

          <div className="relative h-72 md:h-80">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
                transition={{ type: "spring", stiffness: 280, damping: 28 }}
                className={`absolute inset-0 overflow-hidden rounded-3xl border shadow-lg ${
                  active.featured ? "border-point-purple bg-soft-purple" : "border-line bg-white"
                }`}
              >
                <div className="flex h-full flex-col justify-between p-8">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted">packages</span>
                    <span className="text-2xl font-black text-point-purple/30">{active.num}</span>
                  </div>
                  <div>
                    {active.featured && (
                      <span className="mb-3 inline-block rounded-full bg-point-purple px-3 py-1 text-xs font-bold text-white">추천</span>
                    )}
                    <p className="text-3xl font-black text-foreground">{active.name}</p>
                    <p className="mt-2 text-lg font-bold text-foreground/80">{active.title}</p>
                    <p className="mt-2 text-sm text-muted">{active.desc}</p>
                  </div>
                  <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-bold text-point-purple">
                    자세히 보기 <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

const awards = [
  { year: "2025", title: "정형외과 홈페이지", desc: "척추, 관절, 통증, 재활 진료를 환자가 쉽게 이해할 수 있도록 구성" },
  { year: "2025", title: "내과 홈페이지", desc: "건강검진, 만성질환, 내시경, 예방접종 정보를 명확하게 정리" },
  { year: "2024", title: "치과 홈페이지", desc: "임플란트, 충치치료, 심미치료, 의료진 신뢰를 중심으로 구성" },
  { year: "2024", title: "산부인과 홈페이지", desc: "여성질환, 검진, 시술 정보를 편안하게 확인할 수 있는 구조" },
  { year: "2024", title: "검진센터 홈페이지", desc: "검진 프로그램, 장비, 예약 흐름을 체계적으로 안내" },
  { year: "2023", title: "병원급 홈페이지", desc: "여러 진료과, 전문센터, 입원, 검사 정보를 한눈에 설계" },
];

export function AwardAccordion() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-point-purple">병원의 첫인상을 바꿉니다</p>
              <h2 className="mt-2 text-4xl font-black text-foreground md:text-5xl">Works</h2>
            </div>
            <Link href="/works" className="inline-flex items-center gap-2 rounded-full bg-point-purple px-5 py-2.5 text-sm font-bold text-white">
              더보기 <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="flex h-80 gap-2 md:h-96">
          {awards.map((award, i) => (
            <motion.button
              key={award.title}
              type="button"
              onClick={() => setActive(i)}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`relative overflow-hidden rounded-2xl border ${
                active === i ? "border-point-purple bg-soft-purple" : "border-line bg-background hover:bg-soft-purple/30"
              }`}
              style={{ flex: active === i ? 4 : 1 }}
            >
              <AnimatePresence mode="wait">
                {active === i ? (
                  <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex h-full flex-col justify-between p-6 md:p-8 text-left">
                    <div className="flex items-start justify-between">
                      <span className="rounded bg-point-purple px-2 py-1 text-[10px] font-bold text-white">DI WEB</span>
                      <span className="text-sm font-bold text-muted">{award.year}</span>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-foreground md:text-3xl">{award.title}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{award.desc}</p>
                    </div>
                    <ArrowRight size={20} className="text-point-purple" />
                  </motion.div>
                ) : (
                  <motion.div key="collapsed" className="flex h-full items-center justify-center">
                    <span className="text-xs font-bold text-muted" style={{ writingMode: "vertical-rl" }}>
                      {award.year} {award.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTABox() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 text-center md:px-10">
        <motion.h2
          className="text-3xl font-black leading-tight text-foreground md:text-5xl whitespace-pre-line"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {"홈페이지는 병원의\n첫인상이자 예약 전 마지막 화면입니다."}
        </motion.h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
          DI Web은 그 화면을 더 쉽게, 더 분명하게, 예약이 일어나는 구조로 만듭니다.
        </p>
        <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-point-purple px-8 py-4 text-base font-bold text-white shadow-lg shadow-point-purple/20">
          홈페이지 제작 상담하기 <ArrowRight size={18} />
        </Link>
        <div className="relative mx-auto mt-16 h-64 max-w-sm overflow-hidden rounded-3xl border border-line bg-background">
          <CTABoxScene />
        </div>
      </div>
    </section>
  );
}
