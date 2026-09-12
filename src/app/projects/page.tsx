import type { Metadata } from "next";
import { featuredProjects } from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { SiteShell } from "@/components/SiteShell";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Solar & Electrical Projects Kenya | SM Solar & Electrical",
  description:
    "Featured San Marina Engineering projects across Kenya — commercial solar, building electrical and infrastructure cabling delivered by our teams.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <SiteShell mainLabel="San Marina projects">
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Projects
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Engineered in the field.
            </h1>
            <p className="text-muted mt-3 text-pretty">
              Real projects. Real sites. Real engineering work — with clear
              scope labels for what San Marina delivered.
            </p>
          </header>

          <ul className="mt-10 grid gap-5 sm:grid-cols-2" role="list">
            {featuredProjects.map((project) => (
              <li key={project.id}>
                <BrandMediaCard
                  href={`/projects/${project.id}`}
                  image={project.image}
                  title={project.title}
                  description={project.summary}
                  eyebrow={project.category}
                  meta={`${project.location} · ${project.sector}`}
                  cta="View case study"
                  imageHeightClassName="h-52 sm:h-56"
                />
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Button href="/contact">Start a project</Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
