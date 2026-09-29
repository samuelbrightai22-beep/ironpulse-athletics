"use client";

import * as React from "react";
import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ProductCard } from "@/components/site/product-card";
import { PageHeader } from "@/components/site/page-header";
import { categories, getProductsByCategory } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export default function CategoryPage() {
  const params = useParams<{ slug: string }>();
  const slug = params?.slug;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const products = getProductsByCategory(category.slug);

  return (
    <>
      <PageHeader
        eyebrow={`${category.itemCount} items`}
        title={category.name}
        description={category.description}
        crumbs={[{ label: "Shop", href: "/shop" }, { label: category.name }]}
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-none">
            <Link href="/shop">
              <ArrowLeft className="h-4 w-4" /> <span className="font-display font-bold uppercase tracking-wider">All products</span>
            </Link>
          </Button>
        </div>
      </PageHeader>

      <section className="py-10 lg:py-14">
        <div className="container-brand">
          {/* Featured category banner */}
          <div className="relative mb-10 overflow-hidden rounded-none">
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white lg:p-8">
                <div className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-accent">
                  {category.tagline}
                </div>
                <div className="mt-1 font-display text-2xl font-bold uppercase sm:text-3xl">
                  Curated by our coaches
                </div>
              </div>
            </div>
          </div>

          {/* Other categories chips */}
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Other categories:
            </span>
            {categories
              .filter((c) => c.slug !== category.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/shop/${c.slug}`}
                  className="rounded-none border border-border bg-card px-3 py-1 font-display text-[12px] font-bold uppercase tracking-wider text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                >
                  {c.name}
                </Link>
              ))}
          </div>

          <div className="mb-4 text-[12px] font-bold uppercase tracking-wider text-muted-foreground">
            {products.length} products in {category.name}
          </div>

          {products.length === 0 ? (
            <div className="rounded-none border border-border bg-card p-12 text-center">
              <p className="font-display text-base font-bold uppercase text-foreground">
                More {category.name} coming soon.
              </p>
              <p className="mt-1 text-[13px] text-muted-foreground">
                Our coaches are working on it — check back next week.
              </p>
              <Button asChild className="mt-4 gap-2 rounded-none">
                <Link href="/shop">
                  <span className="font-display font-bold uppercase tracking-wider">Browse all products</span> <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
