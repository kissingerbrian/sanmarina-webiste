import { featuredProjects, siteImages } from "@/lib/content";

export const siteConfig = {
  name: "San Marina Engineering Limited",
  shortName: "SM Solar & Electrical",
  brandLine: "SM Solar & Electrical",
  legalName: "San Marina Engineering Limited",
  url: "https://www.sanmarina.engineering",
  locale: "en_KE",
  language: "en",
  email: "sanmarinaengineering@gmail.com",
  phone: "+254717411822",
  phoneDisplay: "+254 717 411 822",
  phoneAlt: "+254750411822",
  phoneAltDisplay: "+254 750 411 822",
  whatsapp: "254717411822",
  tagline: "Engineered Power. Reliable Results.",
  description:
    "Solar, battery storage, critical power and electrical engineering solutions for homes, businesses and institutions in Kenya.",
  longDescription:
    "SM Solar & Electrical is the renewable energy and electrical solutions business of San Marina Engineering Limited. Based in Kisumu, we design, deliver and support solar PV, battery energy storage, critical power, building electrical systems, electrical safety and compliance, solar water pumping, consultancy and maintenance for homes, businesses and institutions across Kenya.",
  foundingLocation: "Kisumu, Kenya",
  address: {
    streetAddress:
      "Ground Floor, Mega City Mall, Shop FGB-034, Kisumu–Nairobi Highway",
    addressLocality: "Kisumu",
    addressRegion: "Kisumu County",
    addressCountry: "KE",
    postalCode: "",
    lines: [
      "Ground Floor, Mega City Mall",
      "Shop FGB-034",
      "Kisumu–Nairobi Highway",
      "Kisumu, Kenya",
    ] as const,
  },
  geo: {
    latitude: -0.0917,
    longitude: 34.768,
  },
  areaServed: ["Kisumu", "Kenya", "Western Kenya", "Nyanza", "East Africa"],
  keywords: [
    "SM Solar & Electrical",
    "San Marina Engineering",
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
      id: "solar-energy",
      name: "Solar Energy Solutions",
      description:
        "Residential, commercial and institutional solar PV and hybrid systems — including grid-tied, off-grid and solar water pumping.",
      url: "/solutions/solar-energy",
    },
    {
      id: "battery-storage",
      name: "Battery Energy Storage",
      description:
        "Battery solutions for solar storage, backup power, load shifting and critical loads.",
      url: "/solutions/battery-storage",
    },
    {
      id: "critical-power",
      name: "Critical Power",
      description:
        "UPS, battery energy storage, standby generators and voltage-management solutions for operational continuity.",
      url: "/solutions/critical-power",
    },
    {
      id: "electrical-infrastructure",
      name: "Electrical Infrastructure",
      description:
        "Electrical design, installation, distribution, verification and commissioning for buildings and facilities.",
      url: "/solutions/electrical-infrastructure",
    },
    {
      id: "electrical-safety",
      name: "Electrical Safety & Compliance",
      description:
        "Testing, inspection, earthing, surge and lightning protection, and compliance support.",
      url: "/services/electrical-safety-compliance",
    },
    {
      id: "maintenance",
      name: "Operations & Maintenance",
      description:
        "Preventive and corrective maintenance for solar, batteries and electrical systems.",
      url: "/services/maintenance",
    },
  ],
} as const;

export const faqItems = [
  {
    question:
      "Does SM Solar & Electrical install solar in Kisumu and across Kenya?",
    answer:
      "Yes. SM Solar & Electrical is based in Kisumu and delivers solar PV, hybrid systems, electrical works and maintenance for homes, businesses and institutions across Kenya.",
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
        alternateName: [
          shortName,
          brandLine,
          "San Marina",
          "San Marina Engineering Limited",
        ],
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
        name: brandLine,
        alternateName: name,
        description,
        publisher: { "@id": `${url}/#organization` },
        inLanguage: "en-KE",
        potentialAction: {
          "@type": "CommunicateAction",
          name: "Request a site assessment",
          target: `${url}/contact`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: "SM Solar & Electrical | Solar & Electrical Engineering Kenya",
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
          `${url}/solutions`,
          `${url}/services`,
          `${url}/projects`,
          `${url}/contact`,
        ],
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["#hero-heading", "#contact-heading"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#professional-service`,
        name: brandLine,
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
          name: "SM Solar & Electrical solutions",
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
                  url: absoluteUrl(service.url),
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
          url: absoluteUrl(service.url),
          description: service.description,
        })),
      },
      {
        "@type": "ItemList",
        "@id": `${url}/#projects-list`,
        name: "Featured SM Solar & Electrical projects",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: featuredProjects.length,
        itemListElement: featuredProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: absoluteUrl(`/projects/${project.id}`),
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
            item: `${url}/solutions`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Projects",
            item: `${url}/projects`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Contact",
            item: `${url}/contact`,
          },
        ],
      },
      {
        "@type": "ImageGallery",
        "@id": `${url}/#gallery`,
        name: "SM Solar & Electrical project photography",
        about: { "@id": `${url}/#organization` },
        image: Object.values(siteImages).map((image) => ({
          "@type": "ImageObject",
          contentUrl: absoluteUrl(image.src),
          description: image.alt,
          creditText: brandLine,
        })),
      },
    ],
  };
}
