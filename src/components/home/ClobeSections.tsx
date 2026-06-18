"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck, Globe, Settings, Stethoscope, TrendingUp, Users } from "lucide-react";
import { Reveal } from "@/components/ui/Motion";

const news = [
  "[제작 사례] 정형외과 홈페이지 — 예약 CTA 구조 적용",
  "[패키지] Standard — 예약 중심 병원 홈페이지",
  "[서비스] 관리자 · 성과 확인 구조 출시",
];

export function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-white shadow-2xl shadow-point-purple/10">
      <div className="flex items-center gap-2 border-b border-line bg-background px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
        </div>
        <div className="mx-auto rounded-md bg-white px-4 py-1 text-xs text-muted">diweb.kr/hospital-demo</div>
      </div>
      <div className="grid gap-0 md:grid-cols-[200px_1fr]">
        <aside className="hidden border-r border-line bg-background p-4 md:block">
          <p className="text-xs font-bold text-point-purple">DI Web Admin</p>
          <ul className="mt-4 space-y-2">
            {["대시보드", "문의 내역", "의료진", "진료과목", "예약 버튼"].map((item, i) => (
              <li key={item} className={`rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-soft-purple font-semibold text-point-purple" : "text-muted"}`}>
                {item}
              </li>
            ))}
          </ul>
        </aside>
        <div className="p-5 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">오늘 방문</p>
              <p className="text-2xl font-bold text-foreground">1,284</p>
            </div>
            <span className="rounded-full bg-medical-blue/10 px-3 py-1 text-xs font-semibold text-medical-blue">+12%</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[
              { label: "예약 클릭", value: "47" },
              { label: "문의", value: "12" },
              { label: "전화", value: "28" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl border border-line bg-background p-3">
                <p className="text-[10px] text-muted">{stat.label}</p>
                <p className="text-lg font-bold text-foreground">{stat.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-line bg-soft-purple/30 p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">예약 버튼 클릭 추이</p>
              <span className="text-xs text-point-purple">실시간</span>
            </div>
            <div className="mt-4 flex h-16 items-end gap-1">
              {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                <div key={i} className="flex-1 rounded-t bg-point-purple/80" style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroClobe() {
  return (
    <section className="bg-white pb-16 pt-10 md:pb-24 md:pt-14">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
        <motion.h1
          className="mx-auto max-w-4xl text-4xl font-black leading-[1.2] tracking-tight text-foreground md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          DI Web으로
          <br />
          <span className="text-point-purple">병원 홈페이지</span>를
          <br />
          간편하게
        </motion.h1>

        <div className="mx-auto mt-8 max-w-xl overflow-hidden">
          <motion.div
            className="flex flex-col gap-2"
            animate={{ y: [0, -72, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            {news.map((item) => (
              <p key={item} className="text-sm text-muted">{item}</p>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="/contact"
            className="rounded-lg bg-point-purple px-6 py-3 text-sm font-semibold text-white shadow-md shadow-point-purple/20 hover:bg-deep-purple"
          >
            상담 시작하기
          </Link>
          <Link
            href="/works"
            className="rounded-lg border border-line bg-white px-6 py-3 text-sm font-semibold text-foreground hover:bg-background"
          >
            제작 사례 보기
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted underline-offset-4 hover:text-point-purple hover:underline">
            문의하기
          </Link>
        </motion.div>

        <motion.div
          className="mt-14 md:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <DashboardMockup />
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Globe,
    title: "병원 홈페이지 제작",
    desc: "메인, 병원 소개, 의료진, 진료과목, 시설, 오시는 길까지 병원에 필요한 기본 구조를 제작합니다.",
  },
  {
    icon: CalendarCheck,
    title: "예약 연결 구조",
    desc: "전화, 카카오채널, 네이버예약, 상담폼 등 병원 운영 방식에 맞는 예약 동선을 설계합니다.",
  },
  {
    icon: Stethoscope,
    title: "진료과목 · 치료 콘텐츠",
    desc: "환자가 자신의 증상과 필요한 진료를 쉽게 찾을 수 있도록 정보를 체계적으로 정리합니다.",
  },
  {
    icon: Users,
    title: "의료진 소개",
    desc: "전문의, 진료 분야, 약력을 신뢰감 있게 보여주어 환자의 마지막 확인을 돕습니다.",
  },
  {
    icon: Settings,
    title: "관리자 시스템",
    desc: "공지, 팝업, 진료시간, 의료진 정보를 병원에서 직접 수정할 수 있는 관리 기능을 제공합니다.",
  },
  {
    icon: TrendingUp,
    title: "성과 확인 구조",
    desc: "예약 버튼 클릭, 문의 접수, 전화 연결 흐름을 확인하여 홈페이지 개선에 활용합니다.",
  },
];

export function FeatureGrid() {
  return (
    <section className="border-t border-line bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="text-center text-3xl font-black leading-tight text-foreground md:text-4xl lg:text-5xl whitespace-pre-line">
            {"DI Web으로\n예약이 일어나는\n병원 홈페이지를 만드세요."}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-soft-purple text-point-purple">
                  <f.icon size={20} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const packages = [
  { title: "Basic", desc: "기본 병원 홈페이지 — 소개, 의료진, 진료과목" },
  { title: "Standard", desc: "예약 중심 — CTA, 카카오·네이버 연결, 관리자", featured: true },
  { title: "Growth", desc: "운영·성과 확인 — 이벤트, 문의관리, 리포트" },
];

export function ValueSection() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="text-center text-3xl font-black text-foreground md:text-4xl whitespace-pre-line">
            {"필요한 수준에 맞게\n홈페이지 구조를 선택하세요."}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            처음부터 모든 기능을 넣을 필요는 없습니다. 병원 규모와 운영 방식에 맞게 시작할 수 있습니다.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`rounded-2xl border p-6 ${pkg.featured ? "border-point-purple bg-soft-purple/40" : "border-line bg-background"}`}
            >
              {pkg.featured && <span className="text-xs font-bold text-point-purple">추천</span>}
              <h3 className="mt-1 text-xl font-black text-foreground">{pkg.title}</h3>
              <p className="mt-2 text-sm text-muted">{pkg.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="rounded-lg bg-point-purple px-6 py-3 text-sm font-semibold text-white">
            상담 시작하기
          </Link>
          <Link href="/pricing" className="rounded-lg border border-line px-6 py-3 text-sm font-semibold text-foreground hover:bg-background">
            요금 자세히 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

const trustItems = [
  { title: "Next.js 기반", desc: "빠르고 SEO에 유리한 최신 웹 기술로 구축합니다." },
  { title: "모바일 최적화", desc: "환자의 대부분이 모바일로 접속합니다. 모바일 우선 설계." },
  { title: "예약 CTA 설계", desc: "정보 확인 후 바로 예약할 수 있는 동선을 설계합니다." },
  { title: "관리자 제공", desc: "자주 바뀌는 정보는 병원에서 직접 수정할 수 있습니다." },
  { title: "성과 데이터", desc: "버튼 클릭과 문의 흐름을 확인할 수 있는 구조." },
  { title: "Vercel 배포", desc: "안정적이고 빠른 글로벌 CDN 기반 호스팅." },
];

export function TrustGrid() {
  return (
    <section className="border-t border-line bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="text-center text-3xl font-black text-foreground md:text-4xl whitespace-pre-line">
            {"DI Web의 제작 방식으로\n병원 홈페이지를 지킵니다."}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            기획부터 개발, 관리자 세팅, 배포까지 체계적인 프로세스로 진행합니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <div key={item.title} className="rounded-2xl border border-line bg-white p-5">
              <h3 className="font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "홈페이지에서 진료과목과 의료진 정보를 찾기 어려웠는데, DI Web 구조로 바꾸고 예약 문의가 눈에 띄게 늘었습니다.",
    company: "○○정형외과",
    role: "원장",
  },
  {
    quote: "관리자에서 진료시간과 공지를 직접 수정할 수 있어 운영이 훨씬 편해졌습니다.",
    company: "△△내과의원",
    role: "실장",
  },
  {
    quote: "모바일에서 예약 버튼까지의 흐름이 자연스럽게 설계되어 환자 반응이 좋습니다.",
    company: "□□치과",
    role: "마케팅 담당",
  },
];

export function TestimonialSection() {
  return (
    <section className="border-t border-line bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <h2 className="text-center text-3xl font-black text-foreground md:text-4xl whitespace-pre-line">
            {"병원과 함께\n홈페이지를 바꾸고 있습니다."}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.company} className="flex h-full flex-col rounded-2xl border border-line bg-background p-6">
              <p className="flex-1 text-sm leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="font-bold text-foreground">{t.company}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/works" className="inline-flex items-center gap-2 text-sm font-semibold text-point-purple">
            다양한 사례 보기 <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="border-t border-line bg-soft-purple/30 py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
        <h2 className="text-3xl font-black text-foreground md:text-4xl">병원에 맞는 홈페이지 구조를 제안드립니다</h2>
        <p className="mt-4 text-muted">현재 병원 상황과 필요한 기능을 알려주시면, DI Web이 맞춤 구조를 제안합니다.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/contact" className="rounded-lg bg-point-purple px-8 py-3.5 text-sm font-semibold text-white">
            상담 시작하기
          </Link>
          <Link href="/process" className="rounded-lg border border-line bg-white px-8 py-3.5 text-sm font-semibold text-foreground">
            제작 방식 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
