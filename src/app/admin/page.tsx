import { MessageSquare, Eye, MousePointerClick, TrendingUp } from "lucide-react";

const stats = [
  { label: "오늘 문의", value: "3", icon: MessageSquare, change: "+2" },
  { label: "이번 달 방문", value: "1,284", icon: Eye, change: "+12%" },
  { label: "예약 버튼 클릭", value: "47", icon: MousePointerClick, change: "+8" },
  { label: "전환율", value: "3.7%", icon: TrendingUp, change: "+0.4%" },
];

const recentInquiries = [
  { hospital: "○○정형외과", date: "2026-06-17", status: "신규" },
  { hospital: "△△내과의원", date: "2026-06-16", status: "상담중" },
  { hospital: "□□치과", date: "2026-06-15", status: "완료" },
];

export default function AdminDashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold">대시보드</h2>
      <p className="mt-1 text-sm text-muted">홈페이지 운영 현황을 한눈에 확인합니다.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-white p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted">{stat.label}</span>
              <stat.icon size={18} className="text-primary" />
            </div>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className="mt-1 text-xs text-accent">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-white">
        <div className="border-b border-border px-6 py-4">
          <h3 className="font-semibold">최근 문의 내역</h3>
        </div>
        <div className="divide-y divide-border">
          {recentInquiries.map((item) => (
            <div key={item.hospital} className="flex items-center justify-between px-6 py-4">
              <div>
                <p className="font-medium">{item.hospital}</p>
                <p className="text-sm text-muted">{item.date}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item.status === "신규"
                    ? "bg-accent/10 text-accent"
                    : item.status === "상담중"
                      ? "bg-primary/10 text-primary"
                      : "bg-gray-100 text-muted"
                }`}
              >
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
