"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import { SERVICES } from "@/data/services";
import { SERVICE_AREAS } from "@/data/service-areas";

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const paths = pathname.split("/").filter(Boolean);

  const getBreadcrumbName = (segment: string) => {
    // Check services data
    const service = SERVICES.find((s) => s.slug === segment);
    if (service) return service.name;

    // Check service area data
    const area = SERVICE_AREAS.find((a) => a.slug === segment);
    if (area) return area.fullName;

    // Standard mappings
    const mappings: Record<string, string> = {
      about: "About Us",
      services: "Services",
      "service-area": "Service Areas",
      "service-areas": "Service Areas",
      contact: "Contact",
      financing: "Financing Plans",
      reviews: "Customer Reviews",
      blog: "Expert Blog",
      "privacy-policy": "Privacy Policy",
      "terms-and-conditions": "Terms & Conditions",
    };

    return mappings[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  };

  const breadcrumbsList = paths.map((segment, index) => {
    const href = "/" + paths.slice(0, index + 1).join("/");
    return {
      name: getBreadcrumbName(segment),
      href,
    };
  });

  // Generate JSON-LD Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jdlhvacservices.com"
      },
      ...breadcrumbsList.map((item, idx) => ({
        "@type": "ListItem",
        "position": idx + 2,
        "name": item.name,
        "item": `https://jdlhvacservices.com${item.href}`
      }))
    ]
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-100/60 border-y border-slate-200/50 py-3 mb-6">
      <div className="custom-container flex items-center space-x-2 text-sm text-slate-500 overflow-x-auto whitespace-nowrap">
        <Link
          href="/"
          className="flex items-center text-slate-600 hover:text-secondary transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          <span className="sr-only">Home</span>
        </Link>

        {breadcrumbsList.map((item, index) => {
          const isLast = index === breadcrumbsList.length - 1;

          return (
            <div key={item.href} className="flex items-center space-x-2">
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 flex-shrink-0" />
              {isLast ? (
                <span className="font-medium text-primary truncate max-w-[200px] md:max-w-xs" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-secondary text-slate-600 transition-colors truncate max-w-[150px]"
                >
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </nav>
  );
}
