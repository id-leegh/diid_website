import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-line bg-soft-purple/60">
      <Link
        href="/contact"
        className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-6 py-2.5 text-center text-xs font-medium text-foreground md:text-sm"
      >
        <span className="rounded bg-point-purple/10 px-2 py-0.5 text-[10px] font-bold text-point-purple md:text-xs">NEW</span>
        병원 홈페이지 구조 무료 제안 · 상담 신청
        <ArrowRight size={14} className="text-point-purple" />
      </Link>
    </div>
  );
}
