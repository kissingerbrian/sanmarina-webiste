import type { MetadataRoute } from "next";
import { siteImages } from "@/lib/content";
import { absoluteUrl, siteConfig } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const imageUrls = [
    absoluteUrl("/og.png"),
    absoluteUrl("/brand/sm-solar-electrical.webp"),
    absoluteUrl("/icon-512.png"),
    ...Object.values(siteImages).map((image) => absoluteUrl(image.src)),
  ];

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      images: imageUrls,
    },
  ];
}
