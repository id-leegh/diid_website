"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Stethoscope, Users } from "lucide-react";
import { HeroFlowScene, MiniRobotScene } from "@/components/three/DynamicScenes";
import { Reveal } from "@/components/ui/Motion";

const flowSteps = [
  { icon: Stethoscope, label: "진료과목 확인" },
  { icon: Users, label: "의료진 확인" },
  { icon: CalendarCheck, label: "예약 연결" },
];

export function HeroMain() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
    });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-background pt-28 pb-20 md:pt-36"
      onMouseMove={onMouseMove}
    >
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-soft-purple/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-20 h-72 w-72 rounded-full bg-medical-blue/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 md:px-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-line bg-background px-4 py-1.5 text-xs font-semibold text-point-purple">
              Hospital Website Agency
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-foreground md:text-5xl lg:text-6xl whitespace-pre-line">
              {"병원 홈페이지,\n예약이 일어나는\n구조로."}
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted whitespace-pre-line">
              환자가 병원을 찾고, 비교하고, 마지막으로 확인하는 곳은 홈페이지입니다.{"\n"}
              DI Web은 병원의 진료 강점과 예약 동선을 하나의 흐름으로 설계합니다.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              {flowSteps.map((step) => (
                <span
                  key={step.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                >
                  <step.icon size={16} className="text-point-purple" />
                  {step.label}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-point-purple px-8 py-4 text-base font-bold text-white shadow-lg shadow-point-purple/20"
                >
                  홈페이지 제작 상담하기
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/process"
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-8 py-4 text-base font-bold text-foreground hover:border-point-purple hover:text-point-purple"
                >
                  제작 방식 보기
                </Link>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <p className="mt-8 text-sm leading-relaxed text-muted">
              좋은 홈페이지는 병원을 예쁘게 보여주는 데서 끝나지 않습니다. 환자가 필요한 정보를 쉽게 찾고, 안심하고 예약할 수 있어야 합니다.
            </p>
          </Reveal>
        </div>

        <Reveal direction="right" delay={0.2}>
          <div className="relative h-[380px] w-full md:h-[460px]">
            <div className="absolute inset-0 rounded-3xl border border-line bg-background/80 shadow-xl shadow-point-purple/5" />
            <HeroFlowScene mouse={mouse} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const menus = ["병원 홈페이지", "예약 연결", "관리자", "성과 확인"];

export function ServiceOrder() {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <section className="border-y border-line bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal direction="left">
            <p className="text-sm font-semibold text-medical-blue">Service</p>
            <h2 className="mt-2 text-4xl font-black leading-tight text-foreground md:text-5xl whitespace-pre-line">
              {"병원에 필요한 구조를\n처음부터 함께 설계합니다."}
            </h2>
            <p className="mt-6 text-lg text-muted">
              진료과목, 의료진, 예약 버튼, 관리자 기능까지 병원 운영에 필요한 요소를 하나의 흐름으로 정리합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {menus.map((menu, i) => (
                <motion.button
                  key={menu}
                  type="button"
                  onClick={() => setActiveMenu(i)}
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all ${
                    activeMenu === i
                      ? "bg-point-purple text-white shadow-md shadow-point-purple/20"
                      : "border border-line bg-white text-foreground"
                  }`}
                >
                  {menu}
                </motion.button>
              ))}
            </div>

            <Link
              href="/service"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold text-white"
            >
              {menus[activeMenu]} 자세히 <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="relative h-[360px] w-full overflow-hidden rounded-3xl border border-line bg-background">
              <MiniRobotScene label={menus[activeMenu]} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
