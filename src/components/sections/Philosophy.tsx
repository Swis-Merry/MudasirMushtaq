import { philosophy, quotes } from "@/content/story";
import { ExternalLink, Reveal, SectionHeading } from "@/components/ui";

export function Philosophy() {
  return (
    <section id="philosophy" aria-labelledby="philosophy-title" className="pinstripe bg-ink py-24 text-ivory lg:py-36">
      <div className="container-luxe">
        <SectionHeading
          tone="light"
          index="06"
          eyebrow="Leadership Philosophy"
          title={
            <span id="philosophy-title">
              Built on people. <span className="italic text-gold-soft">Driven by discipline.</span>
            </span>
          }
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {[quotes.people, quotes.innovation].map((q, i) => (
            <Reveal key={q.text} delay={i * 0.1}>
              <figure className="h-full border-t border-gold/50 pt-8">
                <span aria-hidden className="block font-serif text-7xl leading-none text-gold">
                  &ldquo;
                </span>
                <blockquote className="-mt-4 font-serif text-3xl leading-snug text-ivory italic sm:text-4xl">{q.text}</blockquote>
                <figcaption className="eyebrow mt-8 text-ivory/60">
                  Mudasir Mushtaq &mdash;{" "}
                  <ExternalLink href={q.source} className="underline decoration-gold underline-offset-4 hover:text-gold-soft">
                    {q.publication}
                  </ExternalLink>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <ol className="mt-24 grid gap-px bg-ivory/10 sm:grid-cols-2 lg:grid-cols-4">
          {philosophy.map((p, i) => (
            <li key={p.title} className={`bg-ink ${i === philosophy.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <Reveal delay={(i % 4) * 0.06} className="h-full p-8">
                <span className="font-serif text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight text-ivory">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory/70">{p.body}</p>
              </Reveal>
            </li>
          ))}
          <li aria-hidden className="hidden bg-ink lg:block" />
        </ol>
      </div>
    </section>
  );
}
