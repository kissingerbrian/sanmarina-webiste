export const company = {
  name: "San Marina Engineering Limited",
  shortName: "San Marina",
  tagline: "Engineering Reliable Power. Building a Sustainable Future.",
  positioning:
    "End-to-end solar and electrical engineering for organizations that cannot afford downtime, ambiguity, or non-compliant work.",
  blurb:
    "A leading engineering company specializing in solar energy and electrical engineering solutions for residential, commercial, industrial, and institutional clients.",
  proofLine:
    "Design · Installation · Testing · Commissioning · Long-term maintenance",
} as const;

export const navLinks = [
  { href: "#capabilities", label: "Capabilities" },
  { href: "#projects", label: "Projects" },
  { href: "#approach", label: "Approach" },
  { href: "#industries", label: "Industries" },
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
      "Engineered PV and hybrid systems sized for yield, reliability, and the client's operational reality.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    id: "critical-power",
    title: "Critical power",
    summary:
      "UPS, storage, generation, and transfer systems for continuous, stable supply where interruption is not an option.",
    image: siteImages.siteDriveInstall,
  },
  {
    id: "building-electrical",
    title: "Building electrical",
    summary:
      "Design through commissioning for safe, efficient, code-compliant power distribution and lighting.",
    image: siteImages.distributionBoardClosed,
  },
  {
    id: "safety",
    title: "Safety & compliance",
    summary:
      "Inspection, certification, earthing, surge, and lightning protection grounded in applicable standards.",
    image: siteImages.distributionBoardOpen,
  },
  {
    id: "maintenance",
    title: "Operations & maintenance",
    summary:
      "Preventive and corrective programmes that protect assets, performance, and uptime after handover.",
    image: siteImages.driveProtectionDetail,
  },
] as const;

export const featuredProjects = [
  {
    id: "western-fresh",
    title: "Western Fresh Industries",
    location: "Kisumu, Kenya",
    category: "Commercial solar & electrical",
    summary:
      "Commercial solar and electrical works for a sunflower processing facility — generation on the roof, disciplined distribution on the ground.",
    image: siteImages.westernFresh,
    featured: true,
  },
  {
    id: "rooftop-array",
    title: "Commercial rooftop solar",
    location: "Kenya",
    category: "Solar PV installation",
    summary:
      "Large-format rooftop array delivered by an on-site engineering and installation team.",
    image: siteImages.rooftopSolarCrew,
    featured: false,
  },
  {
    id: "distribution-works",
    title: "Distribution board works",
    location: "Kenya",
    category: "Building electrical",
    summary:
      "Metering, protection, and organised distribution for safe, inspectable power infrastructure.",
    image: siteImages.distributionBoardWiring,
    featured: false,
  },
  {
    id: "site-cabling",
    title: "Site cabling through pit",
    location: "Kenya",
    category: "Electrical infrastructure",
    summary:
      "Power and control cabling routed through an underground pit — the hidden work that makes installations durable and maintainable.",
    image: siteImages.cablingThroughPit,
    featured: false,
  },
] as const;

export const approachSteps = [
  {
    title: "Diagnose",
    body: "Clarify loads, constraints, risk, and compliance requirements before proposing hardware.",
  },
  {
    title: "Engineer",
    body: "Produce designs that balance energy yield, resilience, budget, and future expansion.",
  },
  {
    title: "Deliver",
    body: "Install, test, and commission to professional standards with documented verification.",
  },
  {
    title: "Sustain",
    body: "Maintain performance through structured O&M, monitoring, and responsive support.",
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
    title: "Qualified engineering team",
    body: "Projects delivered by experienced engineers and technicians accountable for technical outcomes.",
  },
  {
    title: "Quality assurance",
    body: "Trusted manufacturers and disciplined execution — not commodity shortcuts.",
  },
  {
    title: "Tailored solutions",
    body: "Scope shaped around technical requirements, budget discipline, and growth plans.",
  },
  {
    title: "Safety first",
    body: "Compliance and risk control integrated from design through maintenance.",
  },
  {
    title: "Reliable support",
    body: "A continuing technical relationship after commissioning — not a one-off handover.",
  },
] as const;

export const industries = [
  {
    title: "Industrial facilities",
    summary: "Power infrastructure for demanding production environments.",
    image: siteImages.westernFresh,
  },
  {
    title: "Commercial buildings",
    summary: "Energy systems designed around business operations.",
    image: siteImages.rooftopSolarCrew,
  },
  {
    title: "Agricultural operations",
    summary: "Solar, pumping, and electrical solutions for productive sites.",
    image: siteImages.siteDriveInstall,
  },
  {
    title: "Institutions & campuses",
    summary: "Reliable electrical and backup power for critical facilities.",
    image: siteImages.distributionBoardClosed,
  },
  {
    title: "Infrastructure cabling",
    summary: "Routed power and control cabling built for longevity.",
    image: siteImages.cablingThroughPit,
  },
  {
    title: "Safety-critical sites",
    summary: "Inspection-ready distribution and protection systems.",
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
