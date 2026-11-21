import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/data/site";
import { PROJECTS } from "@/data/projects";
import { INSIGHTS } from "@/data/insights";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/industries",
    "/solutions",
    "/capabilities",
    "/projects",
    "/quality",
    "/insights",
    "/contact",
  ].map((route) => ({
    url: `${SITE_CONFIG.domain}${route}`,
    lastModified: new Date("2026-11-21"),
  }));

  const projectRoutes = PROJECTS.map((p) => ({
    url: `${SITE_CONFIG.domain}/projects/${p.slug}`,
    lastModified: new Date("2026-11-21"),
  }));

  const insightRoutes = INSIGHTS.map((a) => ({
    url: `${SITE_CONFIG.domain}/insights/${a.slug}`,
    lastModified: new Date(a.publishedAt),
  }));

  return [...staticRoutes, ...projectRoutes, ...insightRoutes];
}
