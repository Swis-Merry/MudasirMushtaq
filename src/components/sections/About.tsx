import Image from "next/image";
import { ButtonLink, ExternalLink, Reveal } from "@/components/ui";
import { quotes } from "@/content/story";
import { sources } from "@/content/sources";

const pillars = ["Financial discipline", "Resilience", "Integrity", "Long-term vision"];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-white py-24 lg:py-36">
      <div className="container-luxe grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          <div className="relative aspect-[4/3] overflow-hidden bg-sand">
            {/* TODO: replace with the official office portrait (bookshelf with awards) once supplied. */}
            <Image
              src="/images/mudasir-qurat-property-time.jpg"
              alt="Mudasir Mushtaq with his sister and DRE co-founder, Qurat Ul Ain"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[47%_30%]"
            />
          </div>
          <div aria-hidden className="absolute -top-4 -right-4 -z-0 hidden h-full w-full border border-gold/60 lg:block" style={{ zIndex: -1 }} />
          <p className="absolute -bottom-6 left-6 bg-ink px-6 py-4 font-serif text-lg text-ivory italic">
            Co-Founder &amp; CEO &middot; DRE Homes
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow flex items-center gap-4 text-champagne-dark">
              <span className="font-serif text-sm tracking-normal text-gold">01</span>
              <span aria-hidden className="h-px w-10 bg-gold" />
              Meet Mudasir
            </p>
            <h2 id="about-title" className="mt-6 font-serif text-4xl leading-[1.08] font-medium tracking-tight sm:text-5xl lg:text-[3.6rem]">
              The financial mind behind <span className="italic text-champagne-dark">a Tier One brokerage.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-5 text-base leading-relaxed text-charcoal/75 sm:text-lg">
            <p>
              Mudasir Mushtaq holds a Master&rsquo;s degree in International Business and Banking/Finance &mdash; a foundation that has
              been pivotal in strengthening DRE&rsquo;s financial strategy and overall stability.
            </p>
            <p>
              In 2007, with a clear vision, limited resources and boundless determination, he co-founded DRE with his sister, Qurat
              Ul Ain, now Co-Founder &amp; CLO. From their first office in Karama to headquarters in Dubai Hills Estate, DRE is
              regarded among its peers as a Tier One, award-winning real estate company.
            </p>
            <p>
              As Co-Founder &amp; Chief Executive Officer, his leadership is distinguished by a commitment to excellence and a sharp
              ability to navigate the complexities of the brokerage landscape &mdash; positioning DRE as a trusted, forward-thinking
              market leader.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="mt-8 flex flex-wrap gap-3">
              {pillars.map((p) => (
                <li key={p} className="border border-charcoal/15 px-4 py-2 text-sm text-charcoal/80">
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-charcoal/55">
              Source:{" "}
              <ExternalLink href={sources.dreAbout} className="underline decoration-gold underline-offset-4 hover:text-charcoal">
                DRE Homes, About Us
              </ExternalLink>
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-serif text-2xl leading-snug text-charcoal italic sm:text-3xl">&ldquo;{quotes.people.text}&rdquo;</p>
              <footer className="mt-3 text-sm text-charcoal/60">
                &mdash; Mudasir Mushtaq,{" "}
                <ExternalLink href={quotes.people.source} className="underline decoration-gold underline-offset-4">
                  {quotes.people.publication}
                </ExternalLink>
              </footer>
            </blockquote>
            <div className="mt-10">
              <ButtonLink href="#journey">Read My Story</ButtonLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
