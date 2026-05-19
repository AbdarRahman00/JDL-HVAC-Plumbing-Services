import { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://jdlhvacservices.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/service-areas",
    "/financing",
    "/reviews",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Single Service Pages (18 nodes)
  const servicePages = SERVICES.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. Dynamic Service Area Pages (10 nodes)
  const serviceAreaPages = SERVICE_AREAS.map((area) => ({
    url: `${baseUrl}/service-area/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...servicePages, ...serviceAreaPages];
}
