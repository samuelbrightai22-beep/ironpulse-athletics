"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Trash2,
  Minus,
  Plus,
  ArrowRight,
  ArrowLeft,
  ShoppingCart,
  ShieldCheck,
  Truck,
  RotateCcw,
} from "lucide-react";
import { useCart } from "@/lib/cart-store";
import { PageHeader } from "@/components/site/page-header";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const SHIPPING_THRESHOLD = 75;
const FLAT_SHIPPING = 7.95;
const TAX_RATE = 0.08875;

export default function CartPage() {
  const { items, setQuantity, remove, clear, subtotal } = useCart();
  const { toast } = useToast();

  const sub = subtotal();
  const shipping = sub >= SHIPPING_THRESHOLD || sub === 0 ? 0 : FLAT_SHIPPING;
  const tax = sub * TAX_RATE;
  const total = sub + shipping + tax;
  const amountToFreeShipping = Math.max(0, SHIPPING_THRESHOLD - sub);

  const onCheckout = () => {
    toast({
      title: "Order placed",
      description: `Confirmation sent to your email — order #${Math.floor(100000 + Math.random() * 900000)}.`,
    });
    clear();
  };

  if (items.length === 0) {
    return (
      <>
        <PageHeader
          eyebrow="Cart"
          title="Your cart"
          crumbs={[{ label: "Cart" }]}
        />
        <section className="py-16 lg:py-24">
          <div className="container-brand">
            <div className="mx-auto max-w-md rounded-none border border-border bg-card p-8 text-center lg:p-12">
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-secondary">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-display text-2xl font-bold uppercase text-foreground">
                Your cart is empty
              </h2>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                Browse the catalog and add a few pieces. Free shipping over $75.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild className="gap-2 rounded-none">
                  <Link href="/shop"><span className="font-display font-bold uppercase tracking-wider">Shop all products</span> <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="rounded-none">
                  <Link href="/shop/men"><span className="font-display font-bold uppercase tracking-wider">Browse Men</span></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Cart"
        title={`Your cart (${items.length} ${items.length === 1 ? "item" : "items"})`}
        crumbs={[{ label: "Cart" }]}
      />
      <section className="py-10 lg:py-14">
        <div className="container-brand grid gap-8 lg:grid-cols-[1fr_360px] lg:gap-12">
          {/* Line items */}
          <div>
            {/* Free shipping progress */}
            {amountToFreeShipping > 0 ? (
              <div className="mb-6 rounded-none border border-accent/30 bg-accent/10 p-4">
                <div className="flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-wider text-foreground">
                  <Truck className="h-4 w-4 text-accent" />
                  Add ${amountToFreeShipping.toFixed(2)} more for free shipping
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${Math.min(100, (sub / SHIPPING_THRESHOLD) * 100)}%` }}
                  />
                </div>
              </div>
            ) : (
              <div className="mb-6 flex items-center gap-2 rounded-none border border-accent bg-accent/10 p-4 font-display text-[13px] font-bold uppercase tracking-wider text-foreground">
                <Truck className="h-4 w-4 text-accent" />
                Your order qualifies for free shipping.
              </div>
            )}

            <ul className="divide-y divide-border rounded-none border border-border bg-card">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 p-4 lg:p-5">
                  <Link
                    href={`/product/${item.id}`}
                    className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-none bg-muted sm:w-28"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <div className="flex justify-between gap-2">
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                          {item.category}
                        </div>
                        <Link
                          href={`/product/${item.id}`}
                          className="font-display text-base font-bold uppercase text-foreground hover:text-accent transition-colors"
                        >
                          {item.name}
                        </Link>
                        <div className="mt-0.5 text-[13px] text-muted-foreground">
                          ${item.price.toFixed(0)} each
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-display text-base font-bold text-foreground">
                          ${(item.price * item.quantity).toFixed(0)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex items-center rounded-none border border-border">
                        <button
                          onClick={() => setQuantity(item.id, item.quantity - 1)}
                          className="grid h-8 w-8 place-items-center rounded-l-none text-foreground hover:bg-muted"
                          aria-label={`Decrease ${item.name} quantity`}
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-10 text-center text-[13px] font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => setQuantity(item.id, item.quantity + 1)}
                          className="grid h-8 w-8 place-items-center rounded-r-none text-foreground hover:bg-muted"
                          aria-label={`Increase ${item.name} quantity`}
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => {
                          remove(item.id);
                          toast({
                            title: "Removed from cart",
                            description: item.name,
                          });
                        }}
                        className="inline-flex items-center gap-1 text-[12px] font-bold uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center justify-between">
              <Button asChild variant="ghost" className="gap-2 rounded-none">
                <Link href="/shop">
                  <ArrowLeft className="h-4 w-4" /> <span className="font-display font-bold uppercase tracking-wider">Continue shopping</span>
                </Link>
              </Button>
              <button
                onClick={() => {
                  clear();
                  toast({ title: "Cart cleared" });
                }}
                className="font-display text-[12px] font-bold uppercase tracking-wider text-muted-foreground hover:text-destructive transition-colors"
              >
                Clear cart
              </button>
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-32 lg:h-fit">
            <div className="rounded-none border border-border bg-card p-6">
              <h2 className="font-display text-xl font-bold uppercase text-foreground">
                Order summary
              </h2>
              <dl className="mt-4 space-y-3 text-[14px]">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="font-bold text-foreground">${sub.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping</dt>
                  <dd className="font-bold text-foreground">
                    {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Estimated tax</dt>
                  <dd className="font-bold text-foreground">${tax.toFixed(2)}</dd>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-[16px]">
                    <dt className="font-display font-bold uppercase text-foreground">Total</dt>
                    <dd className="font-display font-bold text-foreground">
                      ${total.toFixed(2)}
                    </dd>
                  </div>
                </div>
              </dl>

              <Button
                onClick={onCheckout}
                size="lg"
                className="mt-6 w-full gap-2 rounded-none"
              >
                <span className="font-display font-bold uppercase tracking-wider">Place order</span> <ArrowRight className="h-4 w-4" />
              </Button>

              <div className="mt-4 space-y-2 text-[12px] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-primary" />
                  Secure checkout — Shop Pay, Apple Pay, all major cards
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-3.5 w-3.5 text-primary" />
                  30-day easy returns, no restocking fee
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-3.5 w-3.5 text-primary" />
                  Ships in 1 business day from Brooklyn, NY
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
