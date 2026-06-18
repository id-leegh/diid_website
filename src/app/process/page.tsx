import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, CTASection } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "DI Web 제작 방식 | 빠르지만 가볍지 않은 병원 홈페이지 제작",
  description: "DI Web은 병원 분석, 구조 기획, 카피 작성, 디자인, 개발, 관리자 세팅, 배포까지 병원 홈페이지 제작 전 과정을 체계적으로 진행합니다.",
};

const steps = [
  { num: "01", title: "병원 분석", desc: "진료과목, 의료진, 시설, 장비, 병원의 강점을 확인합니다." },
  { num: "02", title: "구조 기획", desc: "환자가 어떤 순서로 정보를 확인하고 예약까지 이어질지 페이지 구조를 설계합니다." },
  { num: "03", title: "카피 작성", desc: "어렵고 긴 설명보다, 환자가 쉽게 이해할 수 있는 문장으로 정리합니다." },
  { num: "04", title: "디자인 제작", desc: "넓은 여백, 강한 타이포, 실제 사진, 직관적인 화면 구성을 바탕으로 디자인합니다." },
  { num: "05", title: "개발 구축", desc: "Next.js, Supabase, Vercel 기반으로 빠르고 관리 가능한 홈페이지를 구축합니다." },
  { num: "06", title: "관리자 세팅", desc: "공지사항, 팝업, 의료진, 진료시간 등 병원에서 직접 수정할 수 있는 기능을 설정합니다." },
  { num: "07", title: "예약 연결", desc: "전화, 카카오, 네이버예약, 상담폼 등 병원 운영 방식에 맞게 연결합니다." },
  { num: "08", title: "오픈 후 확인", desc: "모바일 화면, 예약 버튼, 문의 흐름, 주요 페이지를 점검한 뒤 오픈합니다." },
];

export default function ProcessPage() {
  return (
    <SiteLayout>
      <PageHero
        title={"빠르게 만들되,\n가볍게 만들지는 않습니다."}
        description="좋은 병원 홈페이지는 디자인만으로 완성되지 않습니다. DI Web은 기획부터 개발까지 하나의 흐름으로 진행합니다."
      />

      <Section variant="alt">
        <SectionHeader title="제작 프로세스" align="center" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="rounded-3xl border border-line bg-white p-6 transition-shadow hover:shadow-lg">
              <span className="text-3xl font-black text-point-purple/30">{step.num}</span>
              <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="alt">
        <div className="text-center">
          <h3 className="text-2xl font-black text-point-purple">기술 스택</h3>
          <p className="mt-3 text-muted">빠르고 안정적이며, 장기적으로 관리하기 쉬운 기술로 구축합니다.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Next.js", "Supabase", "Vercel", "TypeScript", "Tailwind CSS"].map((tech) => (
              <span key={tech} className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-point-purple">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <CTASection title="제작 방식이 궁금하시면 상담해 주세요." />
    </SiteLayout>
  );
}
