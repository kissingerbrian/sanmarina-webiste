import type { Metadata } from "next";
import { pageSeo } from "@/lib/content";
import { ProjectsBrowser } from "@/components/ProjectsBrowser";
import { SiteShell } from "@/components/SiteShell";

export const metadata: Metadata = {
  title: pageSeo.projects.title,
  description: pageSeo.projects.description,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <SiteShell mainLabel="SM Solar & Electrical projects">
      <section className="safe-px section-y">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl">
            <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
              Projects
            </p>
            <h1 className="font-display text-ink mt-3 text-[clamp(1.8rem,4.5vw,2.75rem)] font-bold tracking-tight text-balance">
              Engineering you can see.
            </h1>
            <p className="text-muted mt-3 text-pretty">
              Our projects bring together engineering design, quality equipment,
              professional installation and practical field experience — from
              residential solar to commercial energy and electrical
              infrastructure.
            </p>
          </header>

          <ProjectsBrowser />
        </div>
      </section>
    </SiteShell>
  );
}
