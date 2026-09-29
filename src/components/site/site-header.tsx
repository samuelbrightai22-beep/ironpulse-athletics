"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Search,
  ShoppingCart,
  User,
  Menu,
  ChevronDown,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { navCategories, categories } from "@/lib/site-data";
import { useCart } from "@/lib/cart-store";

export function SiteHeader() {
  const cartCount = useCart((s) => s.count());
  const [scrolled, setScrolled] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/shop") {
      return pathname === "/shop" || pathname?.startsWith("/shop/");
    }
    return pathname === href;
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      {/* Announcement bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container-brand flex items-center justify-center gap-2 py-2 text-center text-[11px] font-bold uppercase tracking-[0.18em]">
          <Truck className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Free shipping on orders over $75 — accessories on sale, 40% off, ends soon.</span>
        </div>
      </div>

      {/* Main header */}
      <div className="container-brand flex h-16 items-center gap-4 lg:h-20">
        {/* Mobile nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[320px] sm:w-[380px]">
            <SheetHeader>
              <SheetTitle className="text-left">Browse IRONPULSE</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1">
              <SheetClose asChild>
                <Link
                  href="/shop"
                  className="rounded-none px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                >
                  All Products
                </Link>
              </SheetClose>
              <div className="mt-2 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Categories
              </div>
              {categories.map((cat) => (
                <SheetClose asChild key={cat.slug}>
                  <Link
                    href={`/shop/${cat.slug}`}
                    className="rounded-none px-3 py-2 text-sm font-medium text-foreground/90 hover:bg-muted"
                  >
                    {cat.name}
                  </Link>
                </SheetClose>
              ))}
              <div className="mt-3 border-t border-border pt-2">
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="rounded-none px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/journal"
                    className="rounded-none px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                  >
                    Journal
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/faq"
                    className="rounded-none px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                  >
                    FAQ
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="rounded-none px-3 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground hover:bg-muted"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="IRONPULSE ATHLETICS — home">
          <img
            src="/logo.svg"
            alt="IRONPULSE ATHLETICS — Train Hard. Live Strong."
            width={220}
            height={40}
            className="h-8 w-auto lg:h-10"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex" aria-label="Primary">
          <div className="group relative">
            <Link
              href="/shop"
              className={cn(
                "flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent",
                isActive("/shop") ? "text-accent" : "text-foreground",
              )}
            >
              All Products
              <ChevronDown className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:rotate-180" />
            </Link>
            {/* Mega menu */}
            <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-[640px] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid grid-cols-2 gap-1 rounded-md border border-border bg-card p-3 shadow-lg">
                {categories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={`/shop/${cat.slug}`}
                    className="group/cat flex gap-3 rounded-none p-2.5 hover:bg-muted"
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-none">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        sizes="56px"
                        className="object-cover transition-transform group-hover/cat:scale-105"
                      />
                    </div>
                    <div>
                      <div className="font-display text-sm font-bold uppercase tracking-wider text-foreground">{cat.name}</div>
                      <div className="text-[12px] text-muted-foreground">{cat.tagline}</div>
                      <div className="mt-0.5 text-[11px] font-bold text-accent">{cat.itemCount} items</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navCategories.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "font-display text-sm font-semibold uppercase tracking-wider transition-colors hover:text-accent",
                isActive(item.href) ? "text-accent" : "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Search products"
            className="hidden sm:inline-flex"
            asChild
          >
            <Link href="/shop">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Sign in or register"
            className="hidden sm:inline-flex"
          >
            <User className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label={`Cart with ${cartCount} items`}
            className="relative"
            asChild
          >
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span
                  className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground"
                  aria-hidden="true"
                >
                  {cartCount}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
