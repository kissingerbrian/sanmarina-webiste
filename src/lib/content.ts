export const company = {
  name: "San Marina Engineering Limited",
  shortName: "San Marina",
  brandLine: "SM Solar & Electrical",
  tagline: "Engineering Reliable Power. Building a Sustainable Future.",
  positioning:
    "Solar, backup power, and electrical solutions that keep homes and businesses running — planned carefully, installed properly, and supported after handover.",
  blurb:
    "San Marina helps homes, businesses, and institutions across Kenya get dependable solar and electrical systems they can trust.",
  proofLine: "Assess · Design · Install · Support",
} as const;

export const brandLogo = {
  src: "/brand/sm-solar-electrical.webp",
  alt: "SM Solar & Electrical — San Marina Engineering Limited",
  width: 250,
  height: 120,
} as const;

export const navLinks = [
  { href: "#capabilities", label: "Solutions" },
  { href: "#projects", label: "Projects" },
  { href: "#approach", label: "How we work" },
  { href: "#industries", label: "Who we serve" },
  { href: "#contact", label: "Contact" },
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
    summary:
      "Generate your own power and cut electricity costs with systems sized for how you actually live or work.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    id: "critical-power",
    title: "Backup & critical power",
    summary:
      "Stay online when the grid fails — batteries, UPS, and standby power for what matters most.",
    image: siteImages.siteDriveInstall,
  },
  {
    id: "building-electrical",
    title: "Building electrical",
    summary:
      "Safe wiring, distribution, and lighting that make your building ready for daily use.",
    image: siteImages.distributionBoardClosed,
  },
  {
    id: "safety",
    title: "Safety & compliance",
    summary:
      "Testing and protection that keep people, property, and equipment out of harm’s way.",
    image: siteImages.distributionBoardOpen,
  },
  {
    id: "maintenance",
    title: "Care & maintenance",
    summary:
      "Ongoing support that protects your investment and keeps systems performing year after year.",
    image: siteImages.driveProtectionDetail,
  },
] as const;

export const featuredProjects = [
  {
    id: "western-fresh",
    title: "Western Fresh Industries",
    location: "Kisumu, Kenya",
    category: "Commercial solar",
    summary:
      "Rooftop solar and electrical works for a sunflower processing facility — cleaner power for a busy industrial site.",
    image: siteImages.westernFresh,
    featured: true,
  },
  {
    id: "rooftop-array",
    title: "Commercial rooftop solar",
    location: "Kenya",
    category: "Solar installation",
    summary:
      "A large rooftop array delivered by our on-site team — work you can see from the ground up.",
    image: siteImages.rooftopSolarCrew,
    featured: false,
  },
  {
    id: "distribution-works",
    title: "Power distribution upgrade",
    location: "Kenya",
    category: "Building electrical",
    summary:
      "Organised metering and protection so the building’s power is safer and easier to manage.",
    image: siteImages.distributionBoardWiring,
    featured: false,
  },
  {
    id: "site-cabling",
    title: "Site cabling through pit",
    location: "Kenya",
    category: "Infrastructure",
    summary:
      "Cabling routed through an underground pit — durable infrastructure that keeps connections protected.",
    image: siteImages.cablingThroughPit,
    featured: false,
  },
] as const;

export const approachSteps = [
  {
    title: "Understand",
    body: "We listen to your needs, your bills, and your site — before recommending anything.",
  },
  {
    title: "Design",
    body: "You get a clear plan that fits your budget, your space, and how you use power.",
  },
  {
    title: "Install",
    body: "Professional installation and commissioning so systems work the way we promised.",
  },
  {
    title: "Support",
    body: "We stay available for maintenance, troubleshooting, and upgrades after handover.",
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
    title: "Homes & estates",
    summary: "Comfortable, reliable power for modern living.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    title: "Businesses",
    summary: "Lower bills and fewer interruptions for your operations.",
    image: siteImages.westernFresh,
  },
  {
    title: "Farms & agribusiness",
    summary: "Solar and pumping solutions that keep production moving.",
    image: siteImages.siteDriveInstall,
  },
  {
    title: "Schools & institutions",
    summary: "Dependable electrical systems for places that serve people.",
    image: siteImages.distributionBoardClosed,
  },
  {
    title: "Industrial sites",
    summary: "Power infrastructure built for demanding environments.",
    image: siteImages.distributionBoardOpen,
  },
  {
    title: "Infrastructure works",
    summary: "Cabling and distribution that hold up over time.",
    image: siteImages.cablingThroughPit,
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
