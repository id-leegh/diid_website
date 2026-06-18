import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DI Web 상담 문의 | 병원 홈페이지 제작 상담",
  description:
    "DI Web에 병원 홈페이지 제작을 문의하세요. 병원 규모, 진료과목, 필요한 기능에 맞춰 예약이 일어나는 홈페이지 구조를 제안드립니다.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
