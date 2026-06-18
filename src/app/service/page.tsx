import type { Metadata } from "next";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { PageHero, CTASection } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Globe, CalendarCheck, Settings, TrendingUp, Phone, MessageCircle, ExternalLink, FileText, MousePointerClick, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "DI Web 서비스 | 병원 홈페이지 제작",
  description: "DI Web은 병원 홈페이지 제작, 예약 연결, 관리자 기능, 성과 확인 구조까지 병원 운영에 필요한 웹사이트를 설계합니다.",
};

const sections = [
  {
    id: "homepage",
    icon: Globe,
    title: "병원의 강점을\n한눈에 이해되는 화면으로 정리합니다.",
    desc: "병원 홈페이지는 많은 정보를 담아야 하지만, 복잡해 보여서는 안 됩니다. DI Web은 환자가 가장 먼저 확인해야 할 정보를 중심으로 화면을 구성합니다.",
    items: ["메인 페이지", "병원 소개", "의료진 소개", "진료과목", "진료센터", "장비와 시설", "오시는 길", "공지사항", "모바일 최적화"],
  },
  {
    id: "booking",
    icon: CalendarCheck,
    title: "정보 확인 후\n바로 예약할 수 있어야 합니다.",
    desc: "환자가 병원에 대한 신뢰를 느낀 순간, 바로 문의하거나 예약할 수 있어야 합니다.",
    items: ["전화 연결", "카카오채널 상담", "네이버예약 연결", "상담폼 접수", "빠른 문의 버튼", "모바일 하단 고정 버튼"],
    icons: [Phone, MessageCircle, ExternalLink, FileText, MousePointerClick, Smartphone],
  },
  {
    id: "admin",
    icon: Settings,
    title: "자주 바뀌는 정보는\n직접 수정할 수 있어야 합니다.",
    desc: "진료시간, 휴진 안내, 이벤트, 의료진 정보, 팝업은 자주 바뀝니다.",
    items: ["공지사항", "팝업", "진료시간", "의료진", "진료과목", "이벤트", "문의 내역"],
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "홈페이지가 어떤 역할을 하는지\n확인할 수 있어야 합니다.",
    desc: "어떤 버튼이 눌렸고, 어떤 문의가 들어왔는지 확인할 수 있어야 다음 개선이 가능합니다.",
    items: [],
  },
];

export default function ServicePage() {
  return (
    <SiteLayout>
      <PageHero
        title={"병원 홈페이지에 필요한 구조를\n처음부터 함께 설계합니다."}
        description="DI Web은 단순히 페이지를 만드는 것이 아니라, 환자가 병원을 이해하고 예약까지 이어질 수 있는 홈페이지 구조를 만듭니다."
      />

      {sections.map((sec, idx) => (
        <Section key={sec.id} id={sec.id} variant={idx % 2 === 0 ? "alt" : "default"}>
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-soft-purple text-point-purple">
            <sec.icon size={24} />
          </div>
          <SectionHeader title={sec.title} description={sec.desc} />
          {sec.items.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {sec.items.map((item) => (
                <span key={item} className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium">
                  {item}
                </span>
              ))}
            </div>
          )}
        </Section>
      ))}

      <CTASection title="병원에 맞는 홈페이지 구조를 제안드립니다." />
    </SiteLayout>
  );
}
