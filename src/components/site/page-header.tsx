"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs = [],
  className,
  children,
}: PageHeaderProps) {
  return (
    <section className={cn("border-b border-border bg-secondary/40", className)}>
      <div className="container-brand py-10 lg:py-14">
        {crumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              {crumbs.map((c, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-muted-foreground/60" />
                  {c.href ? (
                    <Link href={c.href} className="hover:text-accent transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <div className="mb-2 inline-flex items-center gap-2 rounded-none border border-accent bg-accent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-volt-pulse" aria-hidden="true" />
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl font-bold uppercase leading-[0.95] text-foreground sm:text-5xl lg:text-6xl text-balance">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
