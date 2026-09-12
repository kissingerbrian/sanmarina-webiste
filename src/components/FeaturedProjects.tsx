import Link from "next/link";
import { featuredProjects } from "@/lib/content";
import { BrandMediaCard } from "@/components/BrandMediaCard";
import { Button } from "@/components/Button";

export function FeaturedProjects() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section
      id="projects"
      className="safe-px section-y border-border scroll-mt-20 border-t bg-white"
      aria-labelledby="projects-heading"
      aria-describedby="projects-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="font-display text-ink mt-3 text-[clamp(1.55rem,3.5vw,2.15rem)] font-bold tracking-tight text-balance"
          >
            Engineered in the field.
          </h2>
          <p
            id="projects-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            Real projects. Real sites. Real engineering work across Kenya.
          </p>
        </header>

        <div className="mt-10 grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <BrandMediaCard
              href={`/projects/${lead.id}`}
              image={lead.image}
              title={lead.title}
              description={lead.summary}
              eyebrow={lead.category}
              meta={`${lead.location} · ${lead.role}`}
              cta="View project"
              imageHeightClassName="h-64 sm:h-80"
            />
          </div>

          <ul
            className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1"
            role="list"
            aria-label="More projects"
          >
            {rest.map((project) => (
              <li key={project.id}>
                <BrandMediaCard
                  href={`/projects/${project.id}`}
                  image={project.image}
                  title={project.title}
                  description={project.summary}
                  eyebrow={project.category}
                  meta={project.location}
                  cta="View project"
                  imageHeightClassName="h-40 sm:h-44 lg:h-36"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex justify-center">
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>
        <p className="sr-only">
          <Link href="/projects">Browse the full projects portfolio</Link>
        </p>
      </div>
    </section>
  );
}
