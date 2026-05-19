import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import EmergencyBanner from "@/components/EmergencyBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import Breadcrumbs from "@/components/Breadcrumbs";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "JDL HVAC & Plumbing Services | Laurel, MD & DMV Area",
  description: "Laurel's trusted NATE-certified HVAC and licensed plumbing specialists. 24/7 emergency AC repair, furnace install, drain cleaning, and water heaters.",
  keywords: "HVAC Services Laurel MD, AC Repair Laurel MD, Plumber Laurel MD, Emergency HVAC Laurel, Water Heater Repair Laurel, HVAC Contractor Maryland, DMV Plumber",
  openGraph: {
    title: "JDL HVAC & Plumbing Services | Laurel, MD & DMV Area",
    description: "Reliable HVAC & plumbing experts. 24/7 same-day service, NATE-certified tech, honest flat-rate pricing. Serving Laurel and the greater DMV area.",
    url: "https://jdlhvacservices.com",
    siteName: "JDL HVAC & Plumbing Services",
    type: "website",
    locale: "en_US",
  },
  alternates: {
    canonical: "https://jdlhvacservices.com",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich LocalBusiness JSON-LD Schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "JDL HVAC & Plumbing Services",
    "image": "https://jdlhvacservices.com/og-image.jpg",
    "@id": "https://jdlhvacservices.com/#business",
    "url": "https://jdlhvacservices.com",
    "telephone": "(844) 535-4822",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "14300 Cherry Lane Ct Ste 116",
      "addressLocality": "Laurel",
      "addressRegion": "MD",
      "postalCode": "20707",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.098495,
      "longitude": -76.843657
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Laurel, MD" },
      { "@type": "AdministrativeArea", "name": "Bowie, MD" },
      { "@type": "AdministrativeArea", "name": "Columbia, MD" },
      { "@type": "AdministrativeArea", "name": "Silver Spring, MD" },
      { "@type": "AdministrativeArea", "name": "Rockville, MD" },
      { "@type": "AdministrativeArea", "name": "Bethesda, MD" },
      { "@type": "AdministrativeArea", "name": "Annapolis, MD" },
      { "@type": "AdministrativeArea", "name": "Arlington, VA" },
      { "@type": "AdministrativeArea", "name": "Alexandria, VA" },
      { "@type": "AdministrativeArea", "name": "Fairfax, VA" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/JDLHVACSERVICES/"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "246"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased text-primary bg-bgSlate`}>
        {/* Schema injection */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />

        {/* Global Component Shell */}
        <EmergencyBanner />
        <Navbar />
        <Breadcrumbs />
        
        <main className="min-h-screen">
          {children}
        </main>
        
        <StickyCTA />
        <Footer />
      </body>
    </html>
  );
}
