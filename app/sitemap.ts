import type { MetadataRoute } from "next";
import { siteUrl, work } from "@/app/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/work", "/capabilities", "/industries", "/company", "/insights", "/contact", "/privacy", "/terms"];
  return [...routes, ...work.map((item) => `/work/${item.slug}`)].map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 }));
}
