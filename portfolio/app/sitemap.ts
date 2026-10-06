import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: profile.siteUrl, priority: 1 }, ...projects.map((p) => ({ url: `${profile.siteUrl}/projects/${p.slug}`, priority: 0.7 }))];
}
