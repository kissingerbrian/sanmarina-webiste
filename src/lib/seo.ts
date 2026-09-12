import { featuredProjects, siteImages } from "@/lib/content";

export const siteConfig = {
  name: "San Marina Engineering Limited",
  shortName: "San Marina Engineering",
  brandLine: "SM Solar & Electrical",
  legalName: "San Marina Engineering Limited",
  url: "https://www.sanmarina.engineering",
  locale: "en_KE",
  language: "en",
  email: "info@sanmarina.engineering",
  phone: "+254717411822",
  phoneDisplay: "+254 717 411 822",
  phoneAlt: "+254750411822",
  phoneAltDisplay: "+254 750 411 822",
  whatsapp: "254717411822",
  tagline: "Engineering Reliable Power. Building a Sustainable Future.",
  description:
    "San Marina Engineering Limited is a Kisumu, Kenya solar and electrical engineering company. We design, install and support solar PV, hybrid systems, battery storage, critical power, building electrical works, safety inspections and maintenance for homes, businesses and institutions.",
  longDescription:
    "Looking for a trusted solar company in Kisumu or electrical contractor in Kenya? San Marina Engineering Limited (SM Solar & Electrical) delivers end-to-end solar energy, hybrid solar systems, battery energy storage, UPS and standby power, building electrical installation, earthing and surge protection, and operations & maintenance. From residential 5 kW and 10 kW hybrid packages to commercial rooftop solar and industrial electrical works, our teams assess, design, install and support reliable power systems across Kenya.",
  foundingLocation: "Kisumu, Kenya",
  address: {
    streetAddress: "Ground Floor, Mega City Mall, Shop FGB-034",
    addressLocality: "Kisumu",
    addressRegion: "Kisumu County",
    addressCountry: "KE",
    postalCode: "",
  },
  geo: {
    latitude: -0.0917,
    longitude: 34.768,
  },
  areaServed: [
    "Kisumu",
    "Kenya",
    "Western Kenya",
    "Nyanza",
    "East Africa",
  ],
  keywords: [
    "San Marina Engineering",
    "SM Solar & Electrical",
    "solar company Kenya",
    "solar company Kisumu",
    "solar installation Kisumu",
    "solar panels Kenya",
    "hybrid solar system Kenya",
    "5kW solar system Kenya",
    "10kW solar system Kenya",
    "battery storage Kenya",
    "commercial solar Kenya",
    "solar water pumping Kenya",
    "electrical contractor Kisumu",
    "electrical engineering Kenya",
    "electrical inspection Kenya",
    "critical power Kenya",
    "UPS installation Kenya",
    "rooftop solar Kenya",
    "off-grid solar Kenya",
    "grid-tied solar Kenya",
    "solar PV installation",
    "building electrical Kisumu",
    "earthing and surge protection",
    "lightning protection Kenya",
    "solar maintenance Kenya",
  ],
  services: [
    {
      id: "solar",
      name: "Solar Energy Solutions",
      description:
        "Residential, commercial and institutional solar PV and hybrid systems designed for Kenyan sites — including grid-tied, off-grid and solar water pumping.",
    },
    {
      id: "critical-power",
      name: "Critical Power & Battery Storage",
      description:
        "UPS, battery energy storage, standby generators and transfer systems that keep essential operations running when the grid fails.",
    },
    {
      id: "building-electrical",
      name: "Building Electrical Services",
      description:
        "Electrical design, installation, distribution boards, lighting, cable management and infrastructure cabling for homes and commercial buildings.",
    },
    {
      id: "safety",
      name: "Electrical Safety & Compliance",
      description:
        "Testing, inspection, certification, earthing, surge and lightning protection to keep people and property safer.",
    },
    {
      id: "maintenance",
      name: "Operations & Maintenance",
      description:
        "Preventive and corrective maintenance for solar, batteries, generators and electrical systems after installation.",
    },
  ],
} as const;

export const faqItems = [
  {
    question: "Does San Marina install solar in Kisumu and across Kenya?",
    answer:
      "Yes. San Marina Engineering Limited is based in Kisumu and delivers solar PV, hybrid systems, electrical works and maintenance for homes, businesses and institutions across Kenya.",
  },
  {
    question: "What is included in a site assessment?",
    answer:
      "A site assessment reviews your electricity use, roof or ground space, existing electrical setup and goals. We then recommend a practical system size and next steps — with no obligation to buy immediately.",
  },
  {
    question: "Do you offer hybrid solar systems with batteries?",
    answer:
      "Yes. We design and install hybrid solar systems with lithium battery storage so you can use solar by day and keep essential loads running during outages.",
  },
  {
    question: "Can you handle commercial and industrial solar projects?",
    answer:
      "Yes. We deliver commercial rooftop solar and electrical works for businesses and industrial sites, including projects such as Western Fresh Industries in Kisumu.",
  },
  {
    question: "Do you provide electrical inspection and safety services?",
    answer:
      "Yes. Our electrical safety services include testing, inspection, earthing, surge protection and corrective recommendations so installations remain safer and easier to maintain.",
  },
  {
    question: "What happens after solar installation?",
    answer:
      "After commissioning we can provide maintenance, troubleshooting and upgrades. You keep a technical partner who already knows your system.",
  },
] as const;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function buildJsonLd() {
  const {
    name,
    url,
    email,
    phone,
    phoneAlt,
    description,
    longDescription,
    tagline,
    shortName,
    brandLine,
    address,
    geo,
    areaServed,
    services,
  } = siteConfig;

  const logoUrl = absoluteUrl("/brand/sm-solar-electrical.webp");
  const ogImage = absoluteUrl("/og.png");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness"],
        "@id": `${url}/#organization`,
        name,
        legalName: siteConfig.legalName,
        alternateName: [shortName, brandLine, "San Marina", "SM Solar & Electrical"],
        url,
        email,
        telephone: [phone, phoneAlt],
        description: longDescription,
        slogan: tagline,
        image: [ogImage, absoluteUrl(siteImages.rooftopSolarCrew.src), logoUrl],
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
          width: 250,
          height: 120,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: address.streetAddress,
          addressLocality: address.addressLocality,
          addressRegion: address.addressRegion,
          addressCountry: address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: geo.latitude,
          longitude: geo.longitude,
        },
        hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.streetAddress}, ${address.addressLocality}, Kenya`)}`,
        areaServed: areaServed.map((place) => ({
          "@type": "Place",
          name: place,
        })),
        knowsAbout: [
          "Solar photovoltaic systems",
          "Hybrid solar systems",
          "Battery energy storage",
          "Critical power and UPS",
          "Building electrical installation",
          "Electrical safety and compliance",
          "Solar water pumping",
          "Operations and maintenance",
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: phone,
            email,
            areaServed: "KE",
            availableLanguage: ["English", "Swahili"],
          },
          {
            "@type": "ContactPoint",
            contactType: "sales",
            telephone: phone,
            email,
            areaServed: "KE",
            availableLanguage: ["English", "Swahili"],
          },
        ],
        priceRange: "$$",
        currenciesAccepted: "KES",
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name,
        alternateName: brandLine,
        description,
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "en-KE",
        potentialAction: {
          "@type": "CommunicateAction",
          name: "Request a site assessment",
          target: `${url}/#contact`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: `${name} | Solar Company Kisumu & Electrical Engineering Kenya`,
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#organization` },
        description: longDescription,
        inLanguage: "en-KE",
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: ogImage,
          width: 1200,
          height: 630,
        },
        significantLink: [
          `${url}/#capabilities`,
          `${url}/#projects`,
          `${url}/#solar`,
          `${url}/#contact`,
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-heading", "#contact-heading"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#professional-service`,
        name,
        url,
        image: ogImage,
        description: longDescription,
        provider: { "@id": `${url}/#organization` },
        areaServed: areaServed.map((place) => ({
          "@type": "AdministrativeArea",
          name: place,
        })),
        serviceType: services.map((service) => service.name),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "San Marina engineering solutions",
          itemListElement: services.map((service, index) => ({
            "@type": "OfferCatalog",
            name: service.name,
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  "@id": `${url}/#${service.id}`,
                  name: service.name,
                  description: service.description,
                  url: `${url}/#${service.id}`,
                  provider: { "@id": `${url}/#organization` },
                  areaServed: "Kenya",
                },
                position: index + 1,
              },
            ],
          })),
        },
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#services-list`,
        name: "Solar and electrical services in Kenya",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: services.length,
        itemListElement: services.map((service, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: service.name,
          url: `${url}/#${service.id}`,
          description: service.description,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#projects-list`,
        name: "Featured San Marina projects",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: featuredProjects.length,
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${url}/#projects`,
          description: `${project.summary} (${project.location})`,
          image: absoluteUrl(project.image.src),
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${url}/#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Solutions",
            item: `${url}/#capabilities`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: `${url}/#projects`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: `${url}/#contact`,
          },
        ],
      },
      {
        "@type": "ImageGallery",
        "@id": `${url}/#gallery`,
        name: "San Marina project photography",
        about: { "@id": `${url}/#organization` },
        image: Object.values(siteImages).map((image) => ({
          "@type": "ImageObject",
          contentUrl: absoluteUrl(image.src),
          description: image.alt,
          creditText: name,
        })),
      },
    ],
  };
}
