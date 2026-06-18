import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, CTASection } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "DI Web 요금 | 병원 홈페이지 제작 패키지",
  description: "DI Web 병원 홈페이지 제작 패키지를 확인하세요.",
};

const packages = [
  {
    name: "Basic", title: "기본 병원 홈페이지",
    target: "신규 개원 의원, 소규모 병원",
    desc: "병원 소개, 의료진, 진료과목, 오시는 길 등 기본 정보를 정리한 홈페이지입니다.",
    features: ["메인 페이지", "병원 소개", "의료진 소개", "진료과목", "오시는 길", "공지사항", "모바일 최적화", "기본 예약 버튼"],
    featured: false,
  },
  {
    name: "Standard", title: "예약 중심 병원 홈페이지",
    target: "문의와 예약을 늘리고 싶은 병원",
    desc: "환자가 정보를 확인하고 예약까지 이어질 수 있도록 동선을 설계한 홈페이지입니다. DI Web의 대표 패키지입니다.",
    features: ["Basic 포함", "진료센터 페이지", "치료 콘텐츠 페이지", "예약 CTA 설계", "카카오채널 연결", "네이버예약 연결", "팝업 관리", "관리자 기능", "기본 성과 확인 구조"],
    featured: true,
  },
  {
    name: "Growth", title: "관리와 성과 확인까지 포함한 홈페이지",
    target: "홈페이지를 꾸준히 운영하고 개선하고 싶은 병원",
    desc: "홈페이지 제작 이후에도 관리와 성과 확인이 가능한 구조를 갖춘 패키지입니다.",
    features: ["Standard 포함", "이벤트 페이지", "랜딩 페이지", "문의 내역 관리", "버튼 클릭 확인", "월간 유지보수", "콘텐츠 업데이트 지원", "개선 리포트"],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <SiteLayout>
      <PageHero
        title={"필요한 수준에 맞게\n홈페이지 구조를 선택하세요."}
        description="처음부터 모든 기능을 넣을 필요는 없습니다. 병원의 규모, 진료과목, 운영 방식에 맞게 필요한 구조부터 시작할 수 있습니다."
      />

      <Section variant="alt">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`flex flex-col rounded-3xl p-8 ${
                pkg.featured ? "bg-point-purple text-white shadow-2xl scale-[1.02]" : "border border-line bg-white"
              }`}
            >
              {pkg.featured && (
                <span className="mb-4 inline-block w-fit rounded-full bg-white px-3 py-1 text-xs font-bold text-point-purple">추천 패키지</span>
              )}
              <h3 className={`text-3xl font-black ${pkg.featured ? "text-white" : "text-point-purple"}`}>{pkg.name}</h3>
              <p className={`mt-2 text-lg font-bold ${pkg.featured ? "text-white" : ""}`}>{pkg.title}</p>
              <p className={`mt-3 text-sm ${pkg.featured ? "text-white/70" : "text-muted"}`}>{pkg.target}</p>
              <p className={`mt-4 text-sm leading-relaxed ${pkg.featured ? "text-white/80" : "text-muted"}`}>{pkg.desc}</p>
              <ul className="mt-6 flex-1 space-y-3">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={16} className={`mt-0.5 shrink-0 ${pkg.featured ? "text-white" : "text-point-purple"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant={pkg.featured ? "secondary" : "primary"} className={`w-full ${pkg.featured ? "bg-white text-point-purple hover:bg-white/90" : ""}`}>
                  상담 문의
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-line bg-soft-purple/30 p-8 text-center md:p-12">
          <SectionHeader
            title="정확한 견적은 상담을 통해 안내드립니다."
            description="병원의 규모, 페이지 수, 필요한 기능, 관리자 범위에 따라 달라집니다."
            align="center"
          />
          <Button href="/contact" size="lg">홈페이지 제작 상담하기</Button>
        </div>
      </Section>
    </SiteLayout>
  );
}
