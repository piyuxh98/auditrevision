"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Topics" },
  { href: "/practice", label: "Practice" },
  { href: "/revision", label: "Revision" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-base font-bold text-white shadow-card">
            AA
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-muted">ACCA</p>
            <p className="text-lg font-bold text-ink">Audit Mastery</p>
          </div>
        </Link>

        <nav className="flex items-center gap-2 rounded-full border border-line bg-panel p-1.5">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
                pathname === item.href
                  ? "bg-accent text-white shadow-sm"
                  : "text-muted hover:bg-white hover:text-accent"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
