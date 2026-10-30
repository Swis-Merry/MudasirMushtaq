"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import Link from "next/link";
import type { ReactNode } from "react";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

export function Reveal({ delay = 0, y = 24, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  index,
  align = "left",
  tone = "dark",
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  index?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const centered = align === "center";
  const light = tone === "light";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow flex items-center gap-4 ${centered ? "justify-center" : ""} ${light ? "text-gold-soft" : "text-champagne-dark"}`}>
        {index && <span className="font-serif text-sm tracking-normal text-gold">{index}</span>}
        <span aria-hidden className="h-px w-10 bg-gold" />
        {eyebrow}
      </p>
      <h2
        className={`mt-6 font-serif text-4xl leading-[1.08] font-medium tracking-tight sm:text-5xl lg:text-[3.6rem] ${
          light ? "text-ivory" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-6 text-base leading-relaxed sm:text-lg ${light ? "text-ivory/75" : "text-charcoal/70"}`}>{intro}</p>
      )}
    </Reveal>
  );
}

const variants = {
  solid: "bg-charcoal text-ivory hover:bg-ink hover:text-gold-soft",
  outline: "border border-charcoal/30 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
  gold: "bg-gold text-ink hover:bg-gold-soft",
  ghost: "border border-ivory/30 text-ivory hover:border-gold hover:text-gold-soft",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  external?: boolean;
}) {
  const className = `group inline-flex items-center gap-3 px-7 py-4 text-[0.74rem] font-semibold tracking-[0.22em] uppercase transition-colors duration-500 ${variants[variant]}`;
  const arrow = (
    <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1">
      &rarr;
    </span>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      {arrow}
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
      {arrow}
    </Link>
  );
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`inline-flex h-9 w-9 items-center justify-center border border-gold font-serif text-[0.95rem] leading-none tracking-tight text-gold ${className}`}
    >
      MM
    </span>
  );
}
