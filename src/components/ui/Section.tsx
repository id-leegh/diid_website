import { cn } from "@/lib/utils";

export function Section({ id, className, children, variant = "default" }: { id?: string; className?: string; children: React.ReactNode; variant?: "default" | "alt" | "dark" | "purple" }) {
  const bg = { default: "bg-background", alt: "bg-soft-purple/30", dark: "bg-obsidian text-white", purple: "bg-deep-purple text-white" };
  return <section id={id} className={cn("py-20 md:py-28", bg[variant], className)}><div className="mx-auto max-w-7xl px-6 md:px-10">{children}</div></section>;
}

export function SectionHeader({ title, description, align = "left", light = false }: { title: React.ReactNode; description?: string; align?: "left" | "center"; light?: boolean }) {
  return (
    <div className={cn("mb-12 md:mb-16", align === "center" && "text-center mx-auto max-w-3xl")}>
      <h2 className={cn("text-3xl font-black leading-tight whitespace-pre-line md:text-4xl lg:text-5xl", light ? "text-white" : "text-point-purple")}>{title}</h2>
      {description && <p className={cn("mt-5 text-lg leading-relaxed", light ? "text-soft-purple/70" : "text-muted")}>{description}</p>}
    </div>
  );
}
