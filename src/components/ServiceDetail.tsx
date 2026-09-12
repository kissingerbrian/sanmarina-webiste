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
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <header>
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
                <ul className="text-muted mt-3 space-y-2 text-sm" role="list">
                  {asideItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {image ? (
              <figure className="border-border relative mt-8 aspect-[4/3] overflow-hidden border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </figure>
            ) : null}
          </header>

          <div>
            <h3 className="sr-only">{title} service list</h3>
            <ul
              className="border-border border-l-accent columns-1 gap-x-8 border-l-2 pl-4 sm:columns-2"
              aria-label={`${title} offerings`}
              role="list"
            >
              {items.map((item) => (
                <li
                  key={item}
                  className="text-ink break-inside-avoid py-1.5 text-sm leading-snug"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
