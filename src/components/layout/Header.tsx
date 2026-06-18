"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/service", label: "서비스" },
  { href: "/process", label: "제작 방식" },
  { href: "/works", label: "사례" },
  { href: "/pricing", label: "요금" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
              <circle cx="10" cy="16" r="6" fill="#6D5BFF" />
              <circle cx="22" cy="10" r="5" fill="#6D5BFF" />
              <circle cx="22" cy="22" r="5" fill="#2563EB" />
            </svg>
            <span className="text-base font-bold text-foreground">DI Web</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-muted transition-colors hover:text-foreground",
                  pathname === item.href && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link href="/contact" className="text-sm font-medium text-muted hover:text-foreground">
              문의하기
            </Link>
            <Link
              href="/contact"
              className="rounded-lg bg-point-purple px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-point-purple/20 transition hover:bg-deep-purple"
            >
              상담 시작하기
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line md:hidden"
            aria-label="메뉴"
          >
            <Menu size={18} />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[100] bg-white md:hidden">
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <span className="font-bold">DI Web</span>
            <button type="button" onClick={() => setOpen(false)} aria-label="닫기">
              <X size={20} />
            </button>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            {[...navItems, { href: "/contact", label: "상담하기" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium hover:bg-soft-purple/50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
