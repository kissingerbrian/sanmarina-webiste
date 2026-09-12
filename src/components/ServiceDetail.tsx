import Image from "next/image";

type ServiceImage = {
  src: string;
  alt: string;
};

type ServiceDetailProps = {
  id: string;
  title: string;
  intro: string;
  items: readonly string[];
  asideTitle?: string;
  asideItems?: readonly string[];
  image?: ServiceImage;
};

export function ServiceDetail({
  id,
  title,
  intro,
  items,
  asideTitle,
  asideItems,
  image,
}: ServiceDetailProps) {
  const headingId = `${id}-heading`;
  const introId = `${id}-intro`;

  return (
    <section
      id={id}
      className="safe-px border-border scroll-mt-20 border-b py-12 sm:py-14"
      aria-labelledby={headingId}
      aria-describedby={introId}
    >
      <div className="mx-auto max-w-6xl">
        <div className="brand-card group grid overflow-hidden lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="p-6 sm:p-8">
            <h2
              id={headingId}
              className="font-display text-ink text-[clamp(1.35rem,3vw,1.75rem)] font-bold tracking-tight text-balance"
            >
              {title}
            </h2>
            <p
              id={introId}
              className="text-muted mt-3 text-[clamp(0.95rem,2.1vw,1.05rem)] leading-relaxed text-pretty"
            >
              {intro}
            </p>
            {asideTitle && asideItems ? (
              <div className="mt-6">
                <h3 className="font-display text-accent text-sm font-semibold tracking-wide uppercase">
                  {asideTitle}
                </h3>
                <ul className="mt-3 space-y-2" role="list">
                  {asideItems.map((item) => (
                    <li
                      key={item}
                      className="text-muted flex gap-2 text-sm leading-snug"
                    >
                      <span aria-hidden="true" className="text-accent mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            {image ? (
              <figure className="brand-card-media relative mt-8 aspect-[4/3] rounded-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="rounded-xl object-cover"
                />
              </figure>
            ) : null}
          </div>

          <div className="border-border bg-bg-muted/40 border-t p-6 sm:p-8 lg:border-t-0 lg:border-l">
            <h3 className="font-display text-ink text-sm font-semibold tracking-wide uppercase">
              What’s included
            </h3>
            <ul
              className="mt-4 grid gap-2 sm:grid-cols-2"
              aria-label={`${title} offerings`}
              role="list"
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="text-ink flex gap-2 rounded-lg bg-white/80 px-3 py-2.5 text-sm leading-snug"
                >
                  <span aria-hidden="true" className="text-accent shrink-0">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="brand-card-cta mt-6">
              <a href="#contact" className="hover:underline">
                Request this solution
              </a>
              <span aria-hidden="true" data-arrow>
                →
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
