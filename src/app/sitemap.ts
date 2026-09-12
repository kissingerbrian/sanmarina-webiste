import type { MetadataRoute } from "next";
import { capabilities, featuredProjects, siteImages } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const imageUrls = [
    absoluteUrl("/og.png"),
    absoluteUrl("/brand/sm-solar-electrical.webp"),
    ...Object.values(siteImages).map((image) => absoluteUrl(image.src)),
  ];

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/projects", priority: 0.9 },
    { path: "/contact", priority: 0.9 },
    { path: "/solar-packages", priority: 0.85 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: absoluteUrl(route.path),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route.priority,
      images: route.path === "/" ? imageUrls : undefined,
    })),
    ...capabilities.map((item) => ({
      url: absoluteUrl(`/solutions/${item.id}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...featuredProjects.map((project) => ({
      url: absoluteUrl(`/projects/${project.id}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      images: [absoluteUrl(project.image.src)],
    })),
  ];
}
