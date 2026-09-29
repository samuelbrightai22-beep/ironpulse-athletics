import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container-brand">
        <div className="mx-auto max-w-xl rounded-none border border-border bg-card p-8 text-center lg:p-12">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary">
            <Search className="h-6 w-6 text-primary" />
          </div>
          <div className="font-display text-7xl font-bold uppercase text-accent sm:text-8xl">
            404
          </div>
          <h1 className="mt-3 font-display text-2xl font-bold uppercase text-foreground sm:text-3xl">
            This page wandered off the platform.
          </h1>
          <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
            The page you&apos;re looking for doesn&apos;t exist — or has been moved. Try the homepage, or browse the catalog.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild className="gap-2 rounded-none">
              <Link href="/">
                <Home className="h-4 w-4" /> <span className="font-display font-bold uppercase tracking-wider">Back to home</span>
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 rounded-none">
              <Link href="/shop">
                <span className="font-display font-bold uppercase tracking-wider">Shop all products</span> <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 border-t border-border pt-6 text-[13px] text-muted-foreground">
            <p className="font-display font-bold uppercase tracking-wider text-foreground">Popular destinations:</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              <Link href="/about" className="rounded-none bg-secondary px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider hover:bg-muted">About</Link>
              <Link href="/journal" className="rounded-none bg-secondary px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider hover:bg-muted">Journal</Link>
              <Link href="/shipping-returns" className="rounded-none bg-secondary px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider hover:bg-muted">Shipping & returns</Link>
              <Link href="/faq" className="rounded-none bg-secondary px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider hover:bg-muted">FAQ</Link>
              <Link href="/contact" className="rounded-none bg-secondary px-3 py-1 font-display text-[11px] font-bold uppercase tracking-wider hover:bg-muted">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
