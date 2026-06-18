import { cn } from "@/lib/utils";

export function PageHero({ title, description, children, className, dark = false }: {
  title: React.ReactNode; description?: string; children?: React.ReactNode; className?: string; dark?: boolean;
}) {
  return (
    <section className={cn("relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-white", className)}>
      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <h1 className="max-w-3xl text-4xl font-black leading-tight text-foreground md:text-6xl whitespace-pre-line">{title}</h1>
        {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted whitespace-pre-line">{description}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-4">{children}</div>}
      </div>
    </section>
  );
}

export function CTASection({ title, description }: { title: React.ReactNode; description?: string }) {
  return (
    <section className="border-t border-line bg-soft-purple/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-10">
        <h2 className="text-3xl font-black leading-tight text-foreground md:text-5xl whitespace-pre-line">{title}</h2>
        {description && <p className="mx-auto mt-5 max-w-2xl text-lg text-muted whitespace-pre-line">{description}</p>}
        <div className="mt-8">
          <a href="/contact" className="inline-flex items-center gap-2 rounded-full bg-point-purple px-8 py-4 text-base font-bold text-white shadow-lg shadow-point-purple/20">
            홈페이지 제작 상담하기
          </a>
        </div>
      </div>
    </section>
  );
}
