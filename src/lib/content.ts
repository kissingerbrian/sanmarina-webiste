export const company = {
  name: "San Marina Engineering Limited",
  shortName: "San Marina",
  brandLine: "SM Solar & Electrical",
  tagline: "Engineering Reliable Power. Building a Sustainable Future.",
  headline: "Engineering Reliable Power.",
  supportingHeadline: "Building a Sustainable Future.",
  positioning:
    "Solar, critical power and electrical systems designed around your needs, installed professionally and supported beyond handover.",
  blurb:
    "San Marina Engineering Limited is an engineering-led power systems company delivering solar, electrical, critical-power, safety and maintenance solutions for homes, businesses and institutions across Kenya.",
  proofLine: "Assess · Design · Install · Support",
  mission:
    "To deliver practical energy and electrical solutions through sound engineering, quality equipment, professional workmanship and dependable support.",
  vision:
    "To be a trusted engineering partner for reliable, efficient and sustainable power solutions.",
  values: [
    "Engineering Excellence",
    "Safety",
    "Quality",
    "Integrity",
    "Accountability",
    "Long-Term Value",
  ],
} as const;

export const brandLogo = {
  src: "/brand/sm-solar-electrical.webp",
  alt: "SM Solar & Electrical — San Marina Engineering Limited",
  width: 250,
  height: 120,
} as const;

export const navLinks = [
  { href: "/#capabilities", label: "Solutions" },
  { href: "/projects", label: "Projects" },
  { href: "/#approach", label: "How we work" },
  { href: "/about", label: "About" },
  { href: "/solar-packages", label: "Packages" },
  { href: "/contact", label: "Contact" },
] as const;

export const siteImages = {
  rooftopSolarCrew: {
    src: "/images/rooftop-solar-crew.jpg",
    alt: "San Marina crew installing a large commercial rooftop solar array under clear Kenyan sky",
  },
  westernFresh: {
    src: "/images/western-fresh-industries.jpg",
    alt: "Western Fresh Industries sunflower processing facility in Kisumu with rooftop solar array",
  },
  distributionBoardOpen: {
    src: "/images/distribution-board-open.jpg",
    alt: "Open electrical distribution board showing busbars, meters, and circuit protection",
  },
  distributionBoardWiring: {
    src: "/images/distribution-board-wiring.jpg",
    alt: "Interior of a commissioned distribution board with organised power wiring",
  },
  distributionBoardDetail: {
    src: "/images/distribution-board-detail.jpg",
    alt: "Detail of an open multi-compartment distribution board on a concrete wall",
  },
  distributionBoardClosed: {
    src: "/images/distribution-board-closed.jpg",
    alt: "Closed distribution board with status indicator lights after installation",
  },
  siteDriveInstall: {
    src: "/images/site-drive-install.jpg",
    alt: "Industrial drive and protection equipment installed on site with cable trunking",
  },
  driveProtectionDetail: {
    src: "/images/drive-protection-detail.jpg",
    alt: "Close view of installed drive controller and protection enclosure",
  },
  cablingThroughPit: {
    src: "/images/cabling-through-pit.jpg",
    alt: "Power and control cabling routed through an underground pit during site installation",
  },
} as const;

export const capabilities = [
  {
    id: "solar",
    title: "Solar energy",
    meta: "PV · Hybrid · Off-grid · Pumping",
    summary:
      "Generate, store and manage energy with systems engineered around actual consumption.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    id: "critical-power",
    title: "Critical power",
    meta: "BESS · UPS · Generators · ATS",
    summary:
      "Stay online when the grid fails — storage and standby power for what matters most.",
    image: siteImages.siteDriveInstall,
  },
  {
    id: "building-electrical",
    title: "Building electrical",
    meta: "Design · Distribution · Lighting",
    summary:
      "Safe wiring, distribution and lighting that make buildings ready for daily use.",
    image: siteImages.distributionBoardClosed,
  },
  {
    id: "safety",
    title: "Safety & compliance",
    meta: "Testing · Earthing · Surge · LPS",
    summary:
      "Protection and verification built into delivery — not treated as optional extras.",
    image: siteImages.distributionBoardOpen,
  },
  {
    id: "maintenance",
    title: "Care & maintenance",
    meta: "Preventive · Corrective · Lifecycle",
    summary:
      "Ongoing support that protects your investment after commissioning.",
    image: siteImages.driveProtectionDetail,
  },
] as const;

export const featuredProjects = [
  {
    id: "western-fresh",
    title: "Western Fresh Industries",
    location: "Kisumu, Kenya",
    category: "Commercial solar & electrical",
    sector: "Industrial",
    role: "Solar works and electrical works by San Marina",
    summary:
      "Rooftop solar and electrical works for a sunflower processing facility — generation on the roof, disciplined distribution on the ground.",
    requirement:
      "The facility needed reliable, cost-conscious power support for industrial processing operations in Kisumu.",
    approach:
      "San Marina delivered commercial solar and electrical works coordinated around the site’s operational needs and existing infrastructure.",
    result:
      "A commissioned installation that pairs rooftop generation with professional electrical delivery for day-to-day plant operations.",
    image: siteImages.westernFresh,
    gallery: [
      siteImages.westernFresh,
      siteImages.rooftopSolarCrew,
      siteImages.distributionBoardWiring,
    ],
    featured: true,
  },
  {
    id: "rooftop-array",
    title: "Commercial rooftop solar",
    location: "Kenya",
    category: "Solar PV installation",
    sector: "Commercial",
    role: "Installed by San Marina",
    summary:
      "A large rooftop array delivered by our on-site team — work you can see from the ground up.",
    requirement:
      "The client needed a professionally installed commercial rooftop solar array with organised cabling and commissioning.",
    approach:
      "Our crew handled installation, array alignment and site coordination under real Kenyan site conditions.",
    result:
      "A completed rooftop solar installation ready for operational use and ongoing maintenance support.",
    image: siteImages.rooftopSolarCrew,
    gallery: [siteImages.rooftopSolarCrew, siteImages.westernFresh],
    featured: false,
  },
  {
    id: "distribution-works",
    title: "Power distribution upgrade",
    location: "Kenya",
    category: "Building electrical",
    sector: "Infrastructure",
    role: "Electrical works by San Marina",
    summary:
      "Organised metering and protection so the building’s power is safer and easier to manage.",
    requirement:
      "The site required clear distribution, metering and protection for safe, inspectable power infrastructure.",
    approach:
      "We installed and organised distribution equipment with attention to protection, labelling and maintainability.",
    result:
      "A cleaner, more manageable electrical distribution setup suitable for ongoing inspection and operation.",
    image: siteImages.distributionBoardWiring,
    gallery: [
      siteImages.distributionBoardWiring,
      siteImages.distributionBoardOpen,
      siteImages.distributionBoardClosed,
    ],
    featured: false,
  },
  {
    id: "site-cabling",
    title: "Site cabling through pit",
    location: "Kenya",
    category: "Electrical infrastructure",
    sector: "Infrastructure",
    role: "Electrical infrastructure by San Marina",
    summary:
      "Cabling routed through an underground pit — durable infrastructure that keeps connections protected.",
    requirement:
      "Power and control cabling needed a protected underground route that would remain maintainable over time.",
    approach:
      "Cables were routed through a site pit with practical protection for long-term durability.",
    result:
      "Hidden but critical infrastructure that supports reliable connections beyond the visible installation.",
    image: siteImages.cablingThroughPit,
    gallery: [siteImages.cablingThroughPit, siteImages.siteDriveInstall],
    featured: false,
  },
] as const;

export const approachSteps = [
  {
    title: "Understand",
    body: "We listen to your needs, energy consumption, site conditions and operational requirements before recommending anything.",
  },
  {
    title: "Engineer",
    body: "We translate requirements into a technically sound solution designed around actual loads, space, safety and future needs.",
  },
  {
    title: "Deliver",
    body: "We supply, install, test and commission the system professionally.",
  },
  {
    title: "Sustain",
    body: "We remain available for maintenance, troubleshooting, monitoring and future upgrades.",
  },
] as const;

export const solarServices = [
  "Residential Solar PV Systems",
  "Commercial & Industrial Solar Power Systems",
  "Institutional Solar Installations",
  "Solar Water Pumping Systems",
  "Solar Water Heating Systems",
  "Off-Grid Solar Systems",
  "Hybrid Solar Systems",
  "Grid-Tied Solar Systems",
  "Solar Engineering Design & Consultancy",
  "Solar Feasibility Studies",
  "System Performance Assessment",
  "Solar Operations & Maintenance",
  "System Upgrades & Optimization",
] as const;

export const solarBenefits = [
  "High-quality components from reputable manufacturers",
  "Professional engineering design",
  "Maximum energy yield and system reliability",
  "Compliance with local and international standards",
  "Comprehensive after-sales support",
] as const;

export const criticalPowerServices = [
  "Battery Energy Storage Systems (BESS)",
  "Uninterruptible Power Supply (UPS) Systems",
  "Standby Generator Systems",
  "Automatic Transfer Switch (ATS) Systems",
  "Voltage Stabilization Systems",
  "Power Factor Correction Systems",
  "Power Quality Analysis & Improvement",
  "Energy Monitoring & Power Management Systems",
] as const;

export const criticalPowerApplications = [
  "Hospitals",
  "Commercial Buildings",
  "Manufacturing Plants",
  "Data Centres",
  "Schools & Universities",
  "Telecommunications Facilities",
  "Financial Institutions",
] as const;

export const buildingElectricalServices = [
  "Electrical Engineering Design",
  "Electrical Design Review & Verification",
  "Residential Electrical Installations",
  "Commercial Electrical Installations",
  "Industrial Electrical Installations",
  "Lighting Systems",
  "Power Distribution Systems",
  "Cable Management Systems",
  "Switchgear & Distribution Boards",
  "Project Supervision",
  "Contract Administration",
  "Electrical System Upgrades & Retrofitting",
] as const;

export const safetyServices = [
  "Electrical Testing, Inspection & Certification",
  "Initial Installation Verification",
  "Periodic Electrical Inspection & Testing",
  "Electrical Safety Audits",
  "Regulatory Compliance Verification",
  "Lightning Protection Systems",
  "Earthing & Grounding Systems",
  "Surge Protection Systems",
  "Electrical Fault Investigations",
  "Corrective Recommendations",
] as const;

export const maintenanceServices = [
  "Preventive Maintenance",
  "Corrective Maintenance",
  "Emergency Breakdown Response",
  "Solar System Maintenance",
  "Electrical System Maintenance",
  "Battery Health Assessment",
  "Generator Maintenance",
  "UPS Maintenance",
  "Fault Diagnosis & Troubleshooting",
  "Performance Monitoring",
  "Asset Management & Lifecycle Support",
] as const;

export const whyChooseUs = [
  {
    title: "People who show up",
    body: "You work with a real team that owns the result — from the first visit to the final handover.",
  },
  {
    title: "Quality you can feel",
    body: "We choose equipment and install it carefully so your system lasts, not just looks finished.",
  },
  {
    title: "Solutions that fit you",
    body: "Homes, shops, factories, and institutions get plans shaped around their real energy needs.",
  },
  {
    title: "Safety built in",
    body: "Protection and compliance are part of every job — not optional extras.",
  },
  {
    title: "Support after install",
    body: "When something needs attention, you still have a partner who knows your system.",
  },
] as const;

export const industries = [
  {
    title: "Commercial",
    summary:
      "Offices, retail and mixed-use developments that need reliable day-to-day power.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    title: "Industrial",
    summary:
      "Manufacturing, processing and warehousing environments with demanding loads.",
    image: siteImages.westernFresh,
  },
  {
    title: "Institutional",
    summary:
      "Schools, universities and healthcare facilities where uptime and safety matter.",
    image: siteImages.distributionBoardClosed,
  },
  {
    title: "Hospitality",
    summary:
      "Hotels, apartments and guest facilities that cannot afford avoidable outages.",
    image: siteImages.siteDriveInstall,
  },
  {
    title: "Infrastructure",
    summary:
      "Telecommunications, water utilities and infrastructure cabling works.",
    image: siteImages.cablingThroughPit,
  },
  {
    title: "Public & development",
    summary:
      "Government, NGO and development projects that need accountable delivery.",
    image: siteImages.distributionBoardOpen,
  },
] as const;

export const industryList = [
  "Residential Developments",
  "Commercial Buildings",
  "Industrial Facilities",
  "Educational Institutions",
  "Healthcare Facilities",
  "Hospitality Industry",
  "Agricultural Farms",
  "Religious Institutions",
  "Government Agencies",
  "NGOs & Development Organizations",
  "Telecommunications",
  "Water Utilities",
] as const;

export const solarPackages = [
  {
    id: "home-plus",
    name: "Home Plus",
    capacity: "5 kW Hybrid Solar System",
    summary:
      "A practical residential hybrid configuration for households ready to cut grid dependence and keep essential loads running.",
    includes: [
      "5 kW hybrid inverter",
      "5.12 kWh lithium battery",
      "5 × 620 W solar panels",
      "Protection, cabling and mounting components",
      "Professional installation accessories",
    ],
    note: "Typical configuration. Final system selection is subject to site and load assessment.",
  },
  {
    id: "elite",
    name: "Elite",
    capacity: "10 kW Hybrid Solar System",
    summary:
      "A higher-capacity residential hybrid solution for larger homes or higher daily energy use.",
    includes: [
      "10 kW hybrid inverter",
      "Lithium battery storage (sized to assessment)",
      "High-capacity solar module array",
      "Protection, cabling and mounting components",
      "Professional installation accessories",
    ],
    note: "Typical configuration. Final system selection is subject to site and load assessment.",
  },
] as const;

export function getProjectBySlug(slug: string) {
  return featuredProjects.find((project) => project.id === slug);
}

export function getCapabilityBySlug(slug: string) {
  return capabilities.find((item) => item.id === slug);
}

export const solutionDetails = {
  solar: {
    intro:
      "Custom solar for homes, businesses, farms and institutions in Kisumu and across Kenya — designed to cut costs and keep power reliable.",
    items: solarServices,
    asideTitle: "What you can expect",
    asideItems: solarBenefits,
    image: siteImages.rooftopSolarCrew,
  },
  "critical-power": {
    intro:
      "Keep essential operations running when the grid dips or drops — backup power that protects productivity and sensitive equipment.",
    items: criticalPowerServices,
    asideTitle: "Ideal for",
    asideItems: criticalPowerApplications,
    image: siteImages.siteDriveInstall,
  },
  "building-electrical": {
    intro:
      "From planning to installation — distribution, lighting, cable management and cabling through site pits when the job needs lasting infrastructure.",
    items: buildingElectricalServices,
    image: siteImages.cablingThroughPit,
  },
  safety: {
    intro:
      "Testing, inspection and protection that catch problems early — keeping people and property safer.",
    items: safetyServices,
    image: siteImages.distributionBoardOpen,
  },
  maintenance: {
    intro:
      "Keep systems performing after install — one-time visits or ongoing care that protect your investment.",
    items: maintenanceServices,
    image: siteImages.distributionBoardClosed,
  },
} as const;
