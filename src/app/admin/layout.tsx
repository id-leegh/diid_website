import type { Metadata } from "next";
import Link from "next/link";
import {
  LayoutDashboard,
  MessageSquare,
  Megaphone,
  Layers,
  Stethoscope,
  Clock,
  CalendarDays,
  Briefcase,
  Settings,
  LogOut,
} from "lucide-react";

export const metadata: Metadata = {
  title: "관리자",
  description: "DI Web 관리자 페이지",
};

const menuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "대시보드" },
  { href: "/admin/inquiries", icon: MessageSquare, label: "문의 내역" },
  { href: "/admin/notices", icon: Megaphone, label: "공지사항" },
  { href: "/admin/popups", icon: Layers, label: "팝업 관리" },
  { href: "/admin/doctors", icon: Stethoscope, label: "의료진 관리" },
  { href: "/admin/departments", icon: Briefcase, label: "진료과목 관리" },
  { href: "/admin/hours", icon: Clock, label: "진료시간 관리" },
  { href: "/admin/events", icon: CalendarDays, label: "이벤트 관리" },
  { href: "/admin/works", icon: Briefcase, label: "제작 사례 관리" },
  { href: "/admin/settings", icon: Settings, label: "사이트 설정" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background">
      <aside className="relative hidden w-64 shrink-0 border-r border-border bg-white md:block">
        <div className="flex h-16 items-center gap-2 border-b border-border px-6">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white">
            DI
          </span>
          <span className="font-bold text-primary">DI Web Admin</span>
        </div>
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition-colors hover:bg-primary/5 hover:text-primary"
                >
                  <item.icon size={18} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 border-t border-border p-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <LogOut size={16} />
            사이트로 돌아가기
          </Link>
        </div>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-border bg-white px-6">
          <h1 className="text-lg font-semibold md:hidden">DI Web Admin</h1>
          <span className="text-sm text-muted">관리자</span>
        </header>
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
