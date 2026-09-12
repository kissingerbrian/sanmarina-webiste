import Image from "next/image";
import { featuredProjects } from "@/lib/content";

export function FeaturedProjects() {
  const [lead, ...rest] = featuredProjects;

  return (
    <section
      id="projects"
      className="safe-px section-y border-border scroll-mt-20 border-t"
      aria-labelledby="projects-heading"
      aria-describedby="projects-intro"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl">
          <p className="font-display text-accent text-xs font-semibold tracking-[0.18em] uppercase">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="font-display text-ink mt-3 text-[clamp(1.5rem,3.5vw,2rem)] font-bold tracking-tight text-balance"
          >
            Engineering you can see.
          </h2>
          <p
            id="projects-intro"
            className="text-muted mt-3 text-[clamp(0.95rem,2.2vw,1.05rem)] text-pretty"
          >
            From commercial solar to distribution boards and site cabling, our
            work combines engineering design, quality equipment and professional
            delivery on Kenyan sites.
          </p>
        </header>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
          <article className="border-border group relative min-h-[22rem] overflow-hidden border sm:min-h-[28rem] lg:col-span-7">
            <Image
              src={lead.image.src}
              alt={lead.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,28,36,0.88)_0%,rgba(15,28,36,0.25)_55%,transparent_100%)]"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="font-display text-[0.65rem] font-semibold tracking-[0.16em] text-teal-100/90 uppercase">
                {lead.category}
              </p>
              <h3 className="font-display mt-2 text-xl font-bold text-balance text-white sm:text-2xl">
                {lead.title}
              </h3>
              <p className="mt-1 text-sm text-white/75">{lead.location}</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-pretty text-white/85">
                {lead.summary}
              </p>
            </div>
          </article>

          <ul
            className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1 lg:gap-5"
            role="list"
            aria-label="Additional featured projects"
          >
            {rest.map((project) => (
              <li key={project.id}>
                <article className="border-border group relative min-h-[14rem] overflow-hidden border sm:min-h-[15.5rem]">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 38vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[linear-gradient(to_top,rgba(15,28,36,0.9)_0%,rgba(15,28,36,0.35)_60%,transparent_100%)]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                    <p className="font-display text-[0.65rem] font-semibold tracking-[0.14em] text-teal-100/90 uppercase">
                      {project.category}
                    </p>
                    <h3 className="font-display mt-1.5 text-lg font-semibold text-balance text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">
                      {project.location}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-pretty text-white/85">
                      {project.summary}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
