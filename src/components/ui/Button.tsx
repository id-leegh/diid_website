import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary: "bg-point-purple text-white hover:bg-deep-purple shadow-lg shadow-point-purple/25",
  secondary: "bg-obsidian text-white hover:bg-deep-purple",
  outline: "border-2 border-point-purple text-point-purple hover:bg-soft-purple",
  ghost: "text-point-purple hover:bg-soft-purple",
};

const sizes = { sm: "px-5 py-2 text-sm", md: "px-6 py-3 text-base", lg: "px-8 py-4 text-base font-bold" };

export function Button({ href, variant = "primary", size = "md", className, children, type = "button", onClick }: ButtonProps) {
  const classes = cn("inline-flex items-center justify-center rounded-full transition-all duration-200 font-semibold", variants[variant], sizes[size], className);
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} className={classes} onClick={onClick}>{children}</button>;
}
