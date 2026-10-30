"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { site } from "@/content/site";
import { awardYears, companyAwardCount } from "@/content/awards";
import { ButtonLink } from "@/components/ui";

const credentials = [
  "Co-Founder & CEO, DRE Homes",
  "Bayut TruBroker\u2122",
  "Gulf News GN Focus, 2024",
  `${companyAwardCount} company honours since ${awardYears.from}`,
];

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : 60]);

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-ivory pt-24">
      <div className="relative">
        <div aria-hidden className="absolute top-16 right-0 bottom-0 hidden w-[30%] overflow-hidden bg-charcoal lg:block">
          <Image
            src="/images/dubai-skyline.jpg"
            alt=""
            fill
            sizes="30vw"
            className="object-cover object-[50%_25%] opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-charcoal/10" />
          <div className="pinstripe absolute inset-0" />
        </div>
        <div className="container-luxe relative grid min-h-[calc(100svh-6rem)] items-center gap-10 lg:grid-cols-12 lg:gap-0">
          <div className="relative z-10 order-2 pb-14 lg:order-1 lg:col-span-7 lg:pr-10 lg:pb-24">
            <motion.p {...fade(0.1)} className="eyebrow flex items-center gap-4 text-champagne-dark">
              <span aria-hidden className="h-px w-10 bg-gold" />
              Dubai &middot; Est. 2007
            </motion.p>
            <motion.h1
              id="hero-title"
              {...fade(0.2)}
              className="mt-6 font-serif text-[clamp(3.4rem,8.4vw,8rem)] leading-[0.9] font-medium tracking-tight text-charcoal"
            >
              Mudasir
              <br />
              <span className="italic">Mushtaq</span>
            </motion.h1>
            <motion.p {...fade(0.4)} className="mt-9 font-serif text-2xl leading-snug text-charcoal sm:text-[2rem]">
              {site.tagline.map((line, i) => (
                <span key={line} className={`block ${i === 2 ? "text-champagne-dark italic" : ""}`}>
                  {line}
                </span>
              ))}
            </motion.p>
            <motion.p
              {...fade(0.5)}
              className="mt-6 max-w-xl text-sm leading-relaxed tracking-wide text-charcoal/70 sm:text-base"
            >
              {site.subtitle}
            </motion.p>
            <motion.div {...fade(0.65)} className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="#journey">Discover My Journey</ButtonLink>
              <ButtonLink href="#awards" variant="outline">
                Explore My Achievements
              </ButtonLink>
            </motion.div>
          </div>

          <div className="relative order-1 pt-4 lg:order-2 lg:col-span-5 lg:flex lg:justify-end lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto aspect-[4/5] max-h-[50svh] w-full max-w-[420px] sm:aspect-[675/1024] sm:max-h-none lg:mx-0 lg:h-[min(calc(100svh-10rem),760px)] lg:w-auto lg:max-w-none"
            >
              <div className="absolute inset-0 overflow-hidden bg-[#f4f4f4]">
                <motion.div style={{ y: imageY }} className="absolute inset-x-0 -top-[4%] h-[108%]">
                  <Image
                    src={site.portrait}
                    alt="Mudasir Mushtaq, Co-Founder and Chief Executive Officer of DRE Homes, in a pinstripe suit with arms crossed"
                    fill
                    priority
                    sizes="(min-width: 1024px) 500px, 420px"
                    className="object-cover object-[50%_10%]"
                  />
                </motion.div>
              </div>
              <div
                aria-hidden
                className="absolute -bottom-3 -left-3 h-24 w-24 border-b border-l border-gold sm:-bottom-5 sm:-left-5"
              />
              <p className="absolute bottom-8 -left-4 hidden bg-ink px-6 py-5 text-ivory shadow-[0_30px_50px_-25px_rgba(22,22,22,0.6)] sm:block lg:-left-14">
                <span className="block font-serif text-4xl leading-none text-gold-soft">2007</span>
                <span className="eyebrow mt-2 block text-ivory/75">Co-founded DRE</span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative bg-ink text-ivory">
        <ul className="container-luxe flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 md:justify-between">
          {credentials.map((c) => (
            <li key={c} className="flex items-center gap-3 font-serif text-base text-ivory/80 italic sm:text-lg">
              <span aria-hidden className="h-1.5 w-1.5 rotate-45 bg-gold" />
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
