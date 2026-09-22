import type { MetadataRoute } from "next";
import { capabilities, siteUrl, work } from "@/app/data/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/solutions", "/work", "/industries", "/company", "/insights", "/contact", "/privacy", "/terms"];
  return [...routes, ...capabilities.map((item) => `/services/${item.slug}`), ...work.map((item) => `/work/${item.slug}`)].map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: route === "" ? "weekly" as const : "monthly" as const, priority: route === "" ? 1 : 0.7 }));
}
