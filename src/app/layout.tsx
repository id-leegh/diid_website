import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "DI Web | 예약이 일어나는 병원 홈페이지 제작",
    template: "%s | DI Web",
  },
  description:
    "DI Web은 병원 홈페이지를 환자가 이해하고, 신뢰하고, 예약하는 구조로 설계합니다. 진료과목, 의료진, 시설, 치료 콘텐츠, 예약 연결까지 병원에 필요한 홈페이지를 제작합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
