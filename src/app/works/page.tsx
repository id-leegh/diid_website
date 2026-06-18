import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, CTASection } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "DI Web 제작 사례 | 병원 홈페이지 포트폴리오",
  description: "DI Web이 제작한 병원 홈페이지 사례를 확인하세요.",
};

const works = [
  { category: "정형외과", title: "정형외과 홈페이지", desc: "척추, 관절, 통증, 재활 진료를 환자가 쉽게 이해할 수 있도록 구성한 홈페이지" },
  { category: "내과", title: "내과 홈페이지", desc: "건강검진, 만성질환, 내시경, 예방접종 정보를 명확하게 정리한 홈페이지" },
  { category: "치과", title: "치과 홈페이지", desc: "임플란트, 충치치료, 심미치료, 의료진 신뢰를 중심으로 구성한 홈페이지" },
  { category: "산부인과", title: "산부인과 홈페이지", desc: "여성질환, 검진, 시술 정보를 부담스럽지 않고 편안하게 확인할 수 있는 홈페이지" },
  { category: "병원급", title: "병원급 홈페이지", desc: "여러 진료과, 전문센터, 입원, 검사, 수술 정보를 한눈에 볼 수 있도록 설계한 홈페이지" },
];

export default function WorksPage() {
  return (
    <SiteLayout>
      <PageHero
        title={"병원의 첫인상을\n예약 가능한 화면으로 바꿉니다."}
        description="병원마다 보여줘야 할 강점은 다릅니다. DI Web은 진료과목, 의료진, 시설, 환자 동선에 맞춰 홈페이지 구조를 설계합니다."
      />

      <Section variant="alt">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <article key={work.title} className="group overflow-hidden rounded-3xl border border-line bg-white transition-shadow hover:shadow-lg">
              <div className="h-32 bg-soft-purple p-6 flex flex-col justify-end">
                <span className="inline-block w-fit rounded-full bg-point-purple/10 px-3 py-1 text-xs font-bold text-point-purple">{work.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground">{work.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{work.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-point-purple opacity-60">
                  데모 준비 중 <ArrowRight size={14} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <CTASection title="병원에 맞는 홈페이지 구조를 제안드립니다." />
    </SiteLayout>
  );
}
