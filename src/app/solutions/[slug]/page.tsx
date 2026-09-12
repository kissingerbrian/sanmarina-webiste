import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  capabilities,
  getCapabilityBySlug,
  solutionDetails,
} from "@/lib/content";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return capabilities.map((item) => ({ slug: item.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  if (!capability) return {};

  const titles: Record<string, string> = {
    solar: "Solar Energy Solutions Kenya | SM Solar & Electrical",
    "critical-power": "Critical Power Solutions Kenya | UPS & Battery Backup",
    "building-electrical":
      "Electrical Engineering Services Kenya | SM Solar & Electrical",
    safety: "Electrical Safety & Compliance Kenya | SM Solar & Electrical",
    maintenance: "Solar & Electrical Maintenance Kenya | SM Solar & Electrical",
  };

  return {
    title: titles[capability.id] ?? `${capability.title} | San Marina`,
    description: capability.summary,
    alternates: { canonical: `/solutions/${capability.id}` },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);
  const detail = solutionDetails[slug as keyof typeof solutionDetails];
  if (!capability || !detail) notFound();

  return (
    <SiteShell mainLabel={`${capability.title} solutions`}>
      <section className="safe-px section-y">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start">
          <div>
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Solutions
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              {capability.title}
            </h1>
            <p className="font-display text-accent mt-2 text-xs font-semibold tracking-[0.14em] uppercase">
              {capability.meta}
            </p>
            <p className="text-muted mt-4 text-[clamp(1rem,2.2vw,1.125rem)] leading-relaxed text-pretty">
              {detail.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a site assessment</Button>
              <Button href="/projects" variant="secondary">
                See related projects
              </Button>
            </div>
          </div>

          <div className="border-border relative aspect-[4/3] overflow-hidden rounded-2xl border">
            <Image
              src={detail.image.src}
              alt={detail.image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="brand-card p-6 sm:p-8">
            <h2 className="font-display text-ink text-lg font-bold">
              What’s included
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2" role="list">
              {detail.items.map((item) => (
                <li
                  key={item}
                  className="text-ink flex gap-2 rounded-lg bg-white/80 px-3 py-2.5 text-sm leading-snug"
                >
                  <span aria-hidden="true" className="text-accent">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {"asideTitle" in detail && detail.asideTitle && detail.asideItems ? (
            <aside className="brand-card h-fit p-6 sm:p-8">
              <h2 className="font-display text-ink text-lg font-bold">
                {detail.asideTitle}
              </h2>
              <ul className="mt-4 space-y-2" role="list">
                {detail.asideItems.map((item) => (
                  <li
                    key={item}
                    className="text-muted flex gap-2 text-sm leading-snug"
                  >
                    <span aria-hidden="true" className="text-accent">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          ) : (
            <aside className="brand-card h-fit p-6 sm:p-8">
              <h2 className="font-display text-ink text-lg font-bold">
                Next step
              </h2>
              <p className="text-muted mt-3 text-sm leading-relaxed text-pretty">
                Tell us about your site and we’ll recommend a practical
                engineering path — not a generic package push.
              </p>
              <Button href="/contact" className="mt-5">
                Talk to an engineer
              </Button>
            </aside>
          )}
        </div>
      </section>
    </SiteShell>
  );
}
