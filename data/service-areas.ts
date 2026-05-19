export interface ServiceArea {
  slug: string;
  name: string;
  state: "MD" | "VA";
  fullName: string;
  tagline: string;
  description: string;
  zipCodes: string[];
  neighborhoods: string[];
  mapEmbedUrl: string;
  metaTitle: string;
  metaDesc: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "laurel-md",
    name: "Laurel",
    state: "MD",
    fullName: "Laurel, Maryland",
    tagline: "Your Trusted Hometown HVAC & Plumbing Specialists in Laurel, MD",
    description: "Centrally located right here on Cherry Lane Ct, JDL HVAC & Plumbing Services has been serving Laurel homeowners with top-tier cooling, heating, and plumbing craftsmanship for years. As a local business, we understand the specific DMV weather demands. From repairing a clogged drain in a historic Laurel home to replacing an ancient AC system, our team is dispatched within minutes to restore comfort to your home. We are the faster, more honest alternative to large corporate competitors.",
    zipCodes: ["20707", "20708", "20709", "20723", "20724", "20725"],
    neighborhoods: ["Cherry Lane", "Montpelier", "Maryland City", "Laurel Lakes", "Laurel Historic District", "Wellington", "West Laurel"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49491.73715878479!2d-76.88344588975306!3d39.09849202722883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7def6185bb81d%3A0xc39f886f4a8677e4!2sLaurel%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    metaTitle: "HVAC Services & Plumber Laurel MD | JDL HVAC",
    metaDesc: "Need a trusted HVAC contractor or licensed plumber in Laurel, MD? JDL offers professional AC repair, furnace install, drain cleaning, and 24/7 service. Call (844) 535-4822."
  },
  {
    slug: "bowie-md",
    name: "Bowie",
    state: "MD",
    fullName: "Bowie, Maryland",
    tagline: "Certified Heating, AC & Plumbing Contractors Serving Bowie, MD",
    description: "JDL HVAC & Plumbing Services provides Bowie families with fast, high-quality, same-day repairs and high-efficiency system replacements. Whether you live in a classic Levitt-built colonial in the Belair section or a modern estate in Woodmore, our NATE-certified HVAC technicians and licensed plumbers are equipped to fix any cooling, heating, drain, or water heater issue. We prioritize clean workspaces, upfront pricing, and absolute reliability.",
    zipCodes: ["20715", "20716", "20720", "20721"],
    neighborhoods: ["Belair Town", "Woodmore", "Bowie Forest", "Collington", "Pointer Ridge", "Highbridge", "Bowie Town Center"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49575.760775836854!2d-76.76211874251216!3d38.97686154694498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7ebf984a9e525%3A0x6b30f0f5b9d249!2sBowie%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000001!5m2!1sen!2sus",
    metaTitle: "HVAC Services & Licensed Plumber Bowie MD | JDL HVAC",
    metaDesc: "Searching for reliable AC repair, furnace service, or drain clearing in Bowie, MD? JDL's local master plumbers and technicians are ready. Call (844) 535-4822."
  },
  {
    slug: "columbia-md",
    name: "Columbia",
    state: "MD",
    fullName: "Columbia, Maryland",
    tagline: "Cozy Warmth, Crisp Cool Air & Flawless Plumbing in Columbia, MD",
    description: "Columbia is famous for its beautiful villages and organized community spirit. JDL HVAC & Plumbing Services matches that standard by delivering top-tier plumbing and climate control solutions to Howard County homeowners. Our certified technicians service all heat pumps, ductless systems, furnaces, and AC units across all Columbia villages, including Wilde Lake, Oakland Mills, and Harper's Choice. We handle leaks, water heaters, and drain clogs with flat-rate honesty.",
    zipCodes: ["21044", "21045", "21046"],
    neighborhoods: ["Town Center", "Wilde Lake", "Oakland Mills", "Harper's Choice", "Kings Contrivance", "Hickory Ridge", "River Hill"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49392.298064619725!2d-76.89066606041072!3d39.215579979313936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7dfb8fb5e00fb%3A0xe54d922bb07ee9cf!2sColumbia%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000002!5m2!1sen!2sus",
    metaTitle: "HVAC Contractor & Plumber Columbia MD | JDL HVAC",
    metaDesc: "Top-rated heating, AC, and plumbing services in Columbia, MD. Experienced technicians, same-day repairs, 4.8 stars google rated. Call (844) 535-4822."
  },
  {
    slug: "silver-spring-md",
    name: "Silver Spring",
    state: "MD",
    fullName: "Silver Spring, Maryland",
    tagline: "Professional 24/7 HVAC & Plumbing Service in Silver Spring, MD",
    description: "Silver Spring's diverse homes — ranging from classic 1920s bungalows to modern townhomes — require experienced mechanical expertise. JDL HVAC & Plumbing Services brings fully equipped trucks and certified master tradesmen directly to Montgomery County. We specialize in retrofitting older systems, repairing complex boiler or radiator pipes, sealing leaky ductwork, clearing clogged sewer lines, and executing emergency AC/furnace services. We are fully licensed, background checked, and drug tested.",
    zipCodes: ["20901", "20902", "20903", "20904", "20905", "20906", "20910"],
    neighborhoods: ["Downtown Silver Spring", "Woodside", "Forest Glen", "Wheaton", "Kemp Mill", "White Oak", "Colesville"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49520.19830491873!2d-77.06048107936173!3d39.01452410886561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c8dc91b92bf9%3A0xc39f886f4a8677c3!2sSilver%20Spring%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000003!5m2!1sen!2sus",
    metaTitle: "HVAC Repair & Plumber Silver Spring MD | JDL HVAC",
    metaDesc: "Expert AC repair, heating maintenance, and plumbing services in Silver Spring, MD. Same-day dispatch, 24/7 support, NATE certified. Call (844) 535-4822."
  },
  {
    slug: "rockville-md",
    name: "Rockville",
    state: "MD",
    fullName: "Rockville, Maryland",
    tagline: "Trusted Commercial & Residential HVAC & Plumbing in Rockville, MD",
    description: "As one of Montgomery County's largest hubs, Rockville demands top-tier local service standards. JDL HVAC & Plumbing Services delivers premium HVAC repair, heat pump optimization, tankless water heater upgrades, and drain clearing to residential and light commercial customers throughout Rockville. We carry high-efficiency SEER2 cooling products and modulating gas furnaces, helping homeowners save money while staying perfectly comfortable.",
    zipCodes: ["20850", "20851", "20852", "20853", "20854"],
    neighborhoods: ["Rockville Town Square", "Twinbrook", "North Potomac", "King Farm", "Fallsgrove", "Derwood", "Wootton"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49487.61868516016!2d-77.1950284792683!3d39.08398455799981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cd5a14db2d19%3A0x6b30f0f5b9d24d!2sRockville%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000004!5m2!1sen!2sus",
    metaTitle: "HVAC Services & Emergency Plumber Rockville MD | JDL HVAC",
    metaDesc: "Reliable HVAC and plumbing contractors in Rockville, MD. Upfront pricing, licensed plumbers, same-day heating & AC diagnostics. Call (844) 535-4822."
  },
  {
    slug: "bethesda-md",
    name: "Bethesda",
    state: "MD",
    fullName: "Bethesda, Maryland",
    tagline: "Premium High-Efficiency Home Comfort & Plumbing in Bethesda, MD",
    description: "Homeowners in Bethesda value precision, professionalism, and high-efficiency home design. At JDL, we provide Bethesda homes with state-of-the-art climate and plumbing installations. We design custom ductwork, install whole-house IAQ purifiers, set up endless tankless water heaters, and provide non-invasive acoustic leak detection. We offer clear, tiered quotes, and treat your property with absolute respect, wearing boot covers and leaving work areas pristine.",
    zipCodes: ["20814", "20816", "20817"],
    neighborhoods: ["Downtown Bethesda", "Woodmont Triangle", "Edgemoor", "Bannockburn", "Bradley Hills", "Wyngate", "Glen Echo"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49544.757041042735!2d-77.14781437943564!3d38.98341620955986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7cbe32d56a2fd%3A0x33446b7e87df34a2!2sBethesda%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000005!5m2!1sen!2sus",
    metaTitle: "Premium HVAC Services & Plumber Bethesda MD | JDL HVAC",
    metaDesc: "Experience premium home comfort. Certified Bethesda HVAC and plumbing specialists. High-efficiency SEER2 cooling and tankless upgrades. Call (844) 535-4822."
  },
  {
    slug: "annapolis-md",
    name: "Annapolis",
    state: "MD",
    fullName: "Annapolis, Maryland",
    tagline: "Reliable Shoreline Heating, AC & Plumbing in Annapolis, MD",
    description: "Annapolis's historic bay winds, high humidity, and coastal weather require experienced HVAC and plumbing services. JDL HVAC & Plumbing Services proudly serves the state capital, keeping bay area homes comfortable all year long. From repairing salt-corroded outdoor AC units and heat pumps to running camera diagnostics on old sewer lines, our team delivers honest, professional solutions that stand up to the coastal climate.",
    zipCodes: ["21401", "21403", "21409"],
    neighborhoods: ["Historic Annapolis", "Eastport", "West Annapolis", "Hillsmere Shores", "Bay Ridge", "Admiral Heights", "Cape St. Claire"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49603.95759714397!2d-76.54148404260275!3d38.9685362464731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f66e0adbe9f9%3A0x6b30f0f5b9d242!2sAnnapolis%2C%20MD!5e0!3m2!1sen!2sus!4v1700000000006!5m2!1sen!2sus",
    metaTitle: "HVAC Services & Licensed Plumber Annapolis MD | JDL HVAC",
    metaDesc: "Bay area HVAC repairs and professional plumbing. Fast Annapolis dispatch for AC fix, heat pump install, water heater repair, and leak checks. Call (844) 535-4822."
  },
  {
    slug: "arlington-va",
    name: "Arlington",
    state: "VA",
    fullName: "Arlington, Virginia",
    tagline: "Fast 24/7 HVAC & Plumbing Service Across Arlington, VA",
    description: "Just across the Potomac, Arlington townhomes and residential neighborhoods depend on fast mechanical assistance. JDL HVAC & Plumbing Services crosses the DMV bridge equipped with NATE-certified technicians and master plumbers. We diagnose and repair all heating, cooling, and plumbing issues rapidly, specializing in vertical air handlers, heat pumps, leak locating, and drain clearing in high-density urban environments.",
    zipCodes: ["22201", "22202", "22203", "22204", "22205", "22206", "22207", "22209", "22213"],
    neighborhoods: ["Ballston", "Clarendon", "Crystal City", "Pentagon City", "Rosslyn", "Shirlington", "Columbia Pike"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49575.642959828456!2d-77.13524584251172!3d38.87700209694676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b69fb76711bb%3A0x6b30f0f5b9d24a!2sArlington%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000007!5m2!1sen!2sus",
    metaTitle: "HVAC Repair & Licensed Plumber Arlington VA | JDL HVAC",
    metaDesc: "Need immediate AC or heating help in Arlington, VA? JDL provides certified emergency HVAC repairs, drain snaking, and toilet repairs. Call (844) 535-4822."
  },
  {
    slug: "alexandria-va",
    name: "Alexandria",
    state: "VA",
    fullName: "Alexandria, Virginia",
    tagline: "Trusted HVAC & Plumbing Services in Historic Alexandria, VA",
    description: "Alexandria's blend of historic brick properties and modern waterfront townhomes requires specialized mechanical skill. JDL HVAC & Plumbing Services offers expert heating, cooling, and plumbing repairs tailored for Northern Virginia's historic architecture. We specialize in ductless mini-split system design, copper water line repiping, emergency drain clog clearing, and professional water heater installation with upfront pricing.",
    zipCodes: ["22301", "22302", "22304", "22305", "22314"],
    neighborhoods: ["Old Town Alexandria", "Del Ray", "Rosemont", "Potomac Yard", "West End", "Carlyle", "Arlandria"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49632.72149591461!2d-77.12781437965902!3d38.816654209849235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b1b3bcf9c279%3A0xc39f886f4a8677b1!2sAlexandria%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000008!5m2!1sen!2sus",
    metaTitle: "HVAC Contractor & Plumber Alexandria VA | JDL HVAC",
    metaDesc: "Alexandria's reliable plumbing and HVAC specialists. Same-day AC fixes, furnace repairs, and professional water line plumbing services. Call (844) 535-4822."
  },
  {
    slug: "fairfax-va",
    name: "Fairfax",
    state: "VA",
    fullName: "Fairfax, Virginia",
    tagline: "Reliable HVAC and Plumbing Repair Services in Fairfax, VA",
    description: "JDL HVAC & Plumbing Services proudly serves Fairfax County, providing residential and commercial clients with elite climate and plumbing services. If your heat pump is freezing up, your furnace refuses to fire, your drains are backing up, or you want to upgrade to a high-efficiency tankless water heater, our NATE-certified technicians are dispatched 24/7 to resolve the issue with upfront pricing and true local accountability.",
    zipCodes: ["22030", "22031", "22032", "22033"],
    neighborhoods: ["Fairfax Old Town", "Greenbriar", "Fair Oaks", "George Mason University area", "Mantua", "Fair Ridge", "Franklin Farm"],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49603.95759714397!2d-77.34148404260275!3d38.8485362464731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e5256e2eb6b%3A0x6b30f0f5b9d24c!2sFairfax%2C%20VA!5e0!3m2!1sen!2sus!4v1700000000009!5m2!1sen!2sus",
    metaTitle: "HVAC Services & Local Plumber Fairfax VA | JDL HVAC",
    metaDesc: "Searching for experienced heating, air conditioning, or plumbing service in Fairfax, VA? JDL provides NATE-certified experts and master plumbers. Call (844) 535-4822."
  }
];
