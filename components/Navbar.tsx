"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, ShieldCheck, Flame, Wrench, Calendar } from "lucide-react";
import { SERVICES } from "@/data/services";
import { cn } from "@/lib/utils";
import { Dialog } from "@/components/ui/dialog";
import LeadForm from "@/components/LeadForm";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Set mounted
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Close menus on route change
  React.useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Handle scroll shadowing
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hvacServices = SERVICES.filter((s) => s.category === "hvac");
  const plumbingServices = SERVICES.filter((s) => s.category === "plumbing");

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Service Areas", href: "/service-areas" },
    { name: "Financing", href: "/financing" },
    { name: "Reviews", href: "/reviews" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-30 w-full transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4 border-b border-slate-100"
        )}
      >
        <div className="custom-container flex items-center justify-between">
          
          {/* Logo Brand */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-secondary to-accent text-white font-black text-xl shadow-md group-hover:scale-105 transition-all">
              J
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-extrabold tracking-tight text-primary leading-none">
                JDL <span className="text-secondary">HVAC</span> & PLUMBING
              </span>
              <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-accent leading-none mt-1">
                Same-Day DMV Experts
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-3.5 xl:space-x-5 font-black text-primary text-[11px] xl:text-xs uppercase tracking-wider">
            <Link
              href="/"
              className={cn(
                "hover:text-secondary transition-colors py-2",
                pathname === "/" && "text-secondary"
              )}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={cn(
                "hover:text-secondary transition-colors py-2",
                pathname === "/about" && "text-secondary"
              )}
            >
              About
            </Link>

            {/* Services Mega-Menu Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={cn(
                  "flex items-center space-x-1 py-2 hover:text-secondary transition-colors focus:outline-none",
                  pathname.startsWith("/services") && "text-secondary"
                )}
              >
                <span>Services</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 transition-transform duration-200",
                    servicesDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {mounted && (
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[650px] bg-white shadow-2xl rounded-2xl border border-slate-100 p-6 grid grid-cols-2 gap-6"
                    >
                      {/* HVAC Column */}
                      <div>
                        <div className="flex items-center space-x-2 border-b border-slate-100 pb-2 mb-3 text-secondary">
                          <Flame className="h-5 w-5 fill-secondary/20" />
                          <h4 className="font-extrabold uppercase text-xs tracking-wider">
                            Heating & AC Services
                          </h4>
                        </div>
                        <div className="grid gap-2 text-xs">
                          {hvacServices.slice(0, 10).map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                            >
                              <span className="block font-bold text-primary hover:text-secondary text-sm">
                                {service.name}
                              </span>
                              <span className="block text-mutedSlate text-[11px] line-clamp-1">
                                {service.shortDesc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Plumbing Column */}
                      <div>
                        <div className="flex items-center space-x-2 border-b border-slate-100 pb-2 mb-3 text-accent">
                          <Wrench className="h-5 w-5" />
                          <h4 className="font-extrabold uppercase text-xs tracking-wider">
                            Professional Plumbing
                          </h4>
                        </div>
                        <div className="grid gap-2 text-xs">
                          {plumbingServices.slice(0, 10).map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block rounded-lg p-2 hover:bg-slate-50 transition-colors"
                            >
                              <span className="block font-bold text-primary hover:text-secondary text-sm">
                                {service.name}
                              </span>
                              <span className="block text-mutedSlate text-[11px] line-clamp-1">
                                {service.shortDesc}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>

            <Link
              href="/service-areas"
              className={cn(
                "hover:text-secondary transition-colors py-2",
                pathname.startsWith("/service-area") && "text-secondary"
              )}
            >
              Service Areas
            </Link>

            <Link
              href="/financing"
              className={cn(
                "hover:text-secondary transition-colors py-2",
                pathname === "/financing" && "text-secondary"
              )}
            >
              Financing
            </Link>

            <Link
              href="/reviews"
              className={cn(
                "hover:text-secondary transition-colors py-2",
                pathname === "/reviews" && "text-secondary"
              )}
            >
              Reviews
            </Link>

            <Link
              href="/blog"
              className={cn(
                "hover:text-secondary transition-colors py-2",
                pathname === "/blog" && "text-secondary"
              )}
            >
              Blog
            </Link>
          </nav>

          {/* Desktop Right Panel */}
          <div className="hidden lg:flex items-center space-x-3.5">
            <a
              href="tel:8445354822"
              className="flex items-center space-x-1.5 text-primary font-black hover:text-secondary transition-colors"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-secondary">
                <Phone className="h-3.5 w-3.5" />
              </div>
              <div className="flex flex-col">
                <span className="hidden xl:inline text-[9px] text-mutedSlate leading-none font-extrabold uppercase tracking-wider">
                  Talk to a Tech
                </span>
                <span className="text-xs xl:text-sm font-black leading-none mt-0.5">(844) 535-4822</span>
              </div>
            </a>

            <button
              onClick={() => setModalOpen(true)}
              className="flex items-center space-x-1.5 bg-secondary hover:bg-secondary-dark text-white font-black py-2 px-3.5 rounded-xl text-xs shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="h-3.5 w-3.5" />
              <span>Book Online</span>
            </button>
          </div>

          {/* Mobile Actions/Hamburger */}
          <div className="flex lg:hidden items-center space-x-3">
            <a
              href="tel:8445354822"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-secondary"
            >
              <Phone className="h-4.5 w-4.5" />
            </a>
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-xl p-2 text-primary hover:bg-slate-100 transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Menu Flyout Drawer */}
      {mounted && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
              />

              {/* Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
                className="fixed inset-y-0 right-0 z-10 w-full max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto"
              >
                {/* Header */}
                <div>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div className="flex items-center space-x-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary text-white font-black text-lg">
                        J
                      </div>
                      <span className="font-extrabold text-primary text-base">
                        JDL HVAC & PLUMBING
                      </span>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-primary"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Nav Links */}
                  <div className="mt-6 space-y-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={cn(
                          "block font-bold text-lg text-primary py-1 border-b border-slate-50 hover:text-secondary",
                          pathname === link.href && "text-secondary"
                        )}
                      >
                        {link.name}
                      </Link>
                    ))}

                    {/* Mobile Services Accordion */}
                    <div className="border-b border-slate-50 py-1">
                      <button
                        onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                        className="flex items-center justify-between w-full font-bold text-lg text-primary py-1 text-left focus:outline-none"
                      >
                        <span>Services Offered</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-slate-400 transition-transform",
                            servicesDropdownOpen && "rotate-180"
                          )}
                        />
                      </button>
                      
                      {servicesDropdownOpen && (
                        <div className="mt-2 pl-4 pr-2 max-h-[250px] overflow-y-auto space-y-2 py-2 bg-slate-50 rounded-xl border border-slate-100">
                          <div className="text-[10px] uppercase font-bold tracking-wider text-secondary pt-1">
                            AC & Heating
                          </div>
                          {hvacServices.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block text-sm font-semibold text-slate-700 hover:text-secondary"
                            >
                              {service.name}
                            </Link>
                          ))}
                          
                          <div className="text-[10px] uppercase font-bold tracking-wider text-accent pt-2">
                            Plumbing Services
                          </div>
                          {plumbingServices.map((service) => (
                            <Link
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              className="block text-sm font-semibold text-slate-700 hover:text-secondary"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-12 border-t border-slate-100 pt-6 space-y-4">
                  <a
                    href="tel:8445354822"
                    className="flex items-center justify-center space-x-2 bg-slate-100 hover:bg-slate-200 text-primary font-bold py-3 px-4 rounded-full text-center shadow-inner transition-colors"
                  >
                    <Phone className="h-4.5 w-4.5 text-secondary fill-secondary" />
                    <span>Call (844) 535-4822</span>
                  </a>

                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setModalOpen(true);
                    }}
                    className="w-full flex items-center justify-center space-x-1.5 bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-full text-center shadow-md"
                  >
                    <Calendar className="h-4.5 w-4.5" />
                    <span>Book Service Online</span>
                  </button>

                  <div className="flex items-center justify-center space-x-1.5 text-xs text-mutedSlate">
                    <ShieldCheck className="h-4 w-4 text-green-500" />
                    <span>Licensed, Bonded & Insured DMV Expert</span>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      )}

      {/* Booking Form Modal */}
      {mounted && (
        <Dialog
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Schedule Professional Service"
        >
          <div className="p-1">
            <p className="text-sm text-mutedSlate mb-4">
              Fill out this quick form and one of our DMV coordinators will call you back within 15 minutes to confirm your scheduling.
            </p>
            <LeadForm onSubmitSuccess={() => setModalOpen(false)} />
          </div>
        </Dialog>
      )}
    </>
  );
}
