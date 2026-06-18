import Link from "next/link";

const productLinks = [
  { href: "/service", label: "병원 홈페이지 제작" },
  { href: "/service#booking", label: "예약 연결" },
  { href: "/service#admin", label: "관리자 시스템" },
  { href: "/pricing", label: "요금" },
];

const companyLinks = [
  { href: "/process", label: "제작 방식" },
  { href: "/works", label: "제작 사례" },
  { href: "/contact", label: "상담 문의" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <p className="text-lg font-bold text-foreground">DI Web</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              병원 홈페이지를 환자가 이해하고, 신뢰하고, 예약하는 구조로 설계합니다.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">제품 및 서비스</h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-muted hover:text-foreground">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">회사 정보</h3>
            <ul className="mt-4 space-y-2">
              {companyLinks.map((l) => (
                <li key={l.href}><Link href={l.href} className="text-sm text-muted hover:text-foreground">{l.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              <li><a href="mailto:contact@diweb.kr" className="hover:text-foreground">contact@diweb.kr</a></li>
              <li><a href="tel:0212345678" className="hover:text-foreground">02-1234-5678</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-muted md:flex-row">
          <p>Copyright © DI Web. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/contact" className="hover:text-foreground">문의하기</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
