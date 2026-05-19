export interface Service {
  slug: string;
  name: string;
  category: "hvac" | "plumbing";
  iconName: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  metaTitle: string;
  metaDesc: string;
  problemsTitle: string;
  problems: string[];
  benefitsTitle: string;
  benefits: { title: string; desc: string }[];
  processTitle: string;
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  emergency: boolean;
  pricingInfo?: string;
}

export const SERVICES: Service[] = [
  {
    slug: "ac-repair",
    name: "AC Repair & Troubleshooting",
    category: "hvac",
    iconName: "FlameKindling", // Fallback will map to Lucide Wind/Thermometer
    tagline: "Fast, Same-Day Air Conditioning Repair in Laurel & the DMV Area",
    shortDesc: "Don't sweat the DMV summer. Get fast, reliable, same-day AC repair from licensed local experts.",
    longDesc: "When your air conditioning goes out in the middle of a hot, humid Maryland summer, you need speed, honesty, and immediate relief. JDL HVAC & Plumbing Services provides professional, rapid AC repair. Our certified, highly trained technicians arrive with fully loaded trucks, diagnostic tools, and the experience needed to fix any brand, make, or model. We offer flat-rate diagnostic fees and honest pricing before any repairs start.",
    metaTitle: "AC Repair Laurel MD | Air Conditioning Repair DMV | JDL HVAC",
    metaDesc: "Struggling with a broken AC? JDL HVAC & Plumbing Services offers rapid, same-day air conditioning repair in Laurel, MD and the greater DMV. Call (844) 535-4822.",
    problemsTitle: "Signs Your Air Conditioner Needs Repair",
    problems: [
      "AC blowing warm air or barely cooling your rooms",
      "Frequent cycling (turning on and off rapidly)",
      "Unusual squealing, grinding, or banging noises",
      "Strange, musty odors coming from vents",
      "Water pooling around your indoor AC unit",
      "Sudden spike in your monthly electricity bills"
    ],
    benefitsTitle: "Why Choose JDL for AC Repair",
    benefits: [
      { title: "24/7 Availability", desc: "Emergency service dispatch is ready day or night when your AC breaks." },
      { title: "Any Model Fixed", desc: "Expertise across all major brands, ductless mini-splits, and central air systems." },
      { title: "True Honest Pricing", desc: "No bait-and-switch. You receive a clear, upfront quote before any work starts." }
    ],
    processTitle: "Our 4-Step AC Repair Process",
    process: [
      { step: "01", title: "Schedule & Dispatch", desc: "Call us or book online. We dispatch a certified technician to your home." },
      { step: "02", title: "Complete System Diagnosis", desc: "We inspect your thermostat, filter, refrigerant levels, compressor, and electrical systems." },
      { step: "03", title: "Upfront Estimate", desc: "We explain the root cause and provide you with repair options and upfront costs." },
      { step: "04", title: "Precision Repair & Test", desc: "We complete the repair immediately using premium replacement parts and test for peak performance." }
    ],
    faqs: [
      { question: "How much does a typical AC repair cost in Laurel, MD?", answer: "Typical repairs range from minor electrical repairs like capacitors ($150–$350) to medium jobs like fan motors ($350–$700). We provide a flat-rate diagnostic fee and present exact pricing before starting any repair." },
      { question: "Is a leaking AC unit an emergency?", answer: "Yes, it can be. Water leaks can damage your drywalls or ceilings, while refrigerant leaks harm the compressor and environment. It is best to turn the system off and call us immediately." }
    ],
    emergency: true,
    pricingInfo: "$89 Diagnostic Fee - Waived with Completed Repair"
  },
  {
    slug: "ac-installation",
    name: "AC Installation & Replacement",
    category: "hvac",
    iconName: "Snowflake",
    tagline: "Energy-Efficient Air Conditioning Systems Built for DMV Climates",
    shortDesc: "Upgrade to a high-efficiency AC system that lowers utility bills and delivers premium cooling comfort.",
    longDesc: "If your old AC system is more than 10-15 years old, constantly breaks down, or struggles to keep up with Maryland's summer humidity, it is time for an energy-efficient upgrade. At JDL HVAC, we help you select and customize the perfect cooling solution for your home, sizing it perfectly to ensure consistent airflow, low energy bills, and maximum home value. We partner with leading manufacturers and offer flexible financing.",
    metaTitle: "AC Installation & Replacement Laurel MD | JDL HVAC",
    metaDesc: "Premium AC installation in Laurel, MD and DMV area. High-efficiency cooling units, professional sizing, and flexible monthly financing options. Call (844) 535-4822.",
    problemsTitle: "When to Replace Your Old AC System",
    problems: [
      "Your current system is older than 10 to 15 years",
      "You are facing frequent, expensive repairs (exceeding $1,000)",
      "Your home has hot and cold spots that never resolve",
      "Your electric bill is steadily increasing year-over-year",
      "Your system uses R-22 Freon (which is phased out and highly expensive)"
    ],
    benefitsTitle: "Benefits of Next-Gen AC Installation",
    benefits: [
      { title: "Up to 40% Energy Savings", desc: "Modern SEER2 systems use significantly less energy to cool your home." },
      { title: "Enhanced Humidity Control", desc: "Advanced variable-speed blowers remove twice as much humidity." },
      { title: "Industry-Leading Warranties", desc: "Enjoy 10-year parts warranties and JDL's custom labor guarantees." }
    ],
    processTitle: "Our Premium Installation Process",
    process: [
      { step: "01", title: "Free In-Home Consultation", desc: "We evaluate your current ductwork, run load calculations, and discuss your cooling goals." },
      { step: "02", title: "Custom Sizing & Options", desc: "We provide multiple tier options (Standard, Premium, Variable) to fit your budget and house." },
      { step: "03", title: "Flawless Day-of Install", desc: "Our team removes your old unit safely and installs the new system to exact factory specifications." },
      { step: "04", title: "Quality Check & Handover", desc: "We double check refrigerant lines, verify airflow, set up your smart thermostat, and explain the controls." }
    ],
    faqs: [
      { question: "How long does a new AC installation take?", answer: "Most residential change-outs are completed within a single day. Our team arrives early in the morning and leaves your home fully functional and clean by mid-afternoon." },
      { question: "Do you offer financing for new air conditioning installations?", answer: "Yes! We offer flexible financing programs, including low monthly payments and 0% promotional interest terms, subject to credit approval. Ask our consultant for options." }
    ],
    emergency: false,
    pricingInfo: "Free Estimates on New AC Systems"
  },
  {
    slug: "ac-maintenance",
    name: "AC Maintenance & Tune-Up",
    category: "hvac",
    iconName: "Sliders",
    tagline: "Prevent Breakdowns & Extend System Lifespan with a JDL AC Tune-Up",
    shortDesc: "Prepare your air conditioner for the summer with a professional multi-point maintenance check.",
    longDesc: "The best way to avoid a hot, sleepless night in the middle of summer is with preventive AC maintenance. Just like your car, your air conditioner needs regular tune-ups to operate efficiently. Our thorough multi-point AC maintenance includes a full system cleaning, electrical check, safety inspection, and performance tuning. Studies show regular tune-ups pay for themselves in lower utility bills and averted repairs.",
    metaTitle: "AC Tune-Up & Maintenance Laurel MD | JDL HVAC",
    metaDesc: "Keep your cooling system running smoothly. Professional AC maintenance and tune-ups in Laurel, Maryland and the DMV. Fast, clean, and thorough.",
    problemsTitle: "Signs Your AC Needs a Professional Tune-Up",
    problems: [
      "Air feels damp or humid indoors",
      "System hasn't been serviced in over 12 months",
      "Airflow from the vents feels weak or restricted",
      "AC runs constantly to reach your desired temperature",
      "Mild musty odors when the system first kicks on"
    ],
    benefitsTitle: "Why Invest in Professional AC Maintenance?",
    benefits: [
      { title: "Lower Energy Bills", desc: "A clean system transfers heat more efficiently, drawing less electricity." },
      { title: "Prevent 90% of Breakdowns", desc: "We spot worn parts like capacitors and contactors before they cause a shutdown." },
      { title: "Maintains Factory Warranty", desc: "Most major manufacturers require annual maintenance records to honor parts claims." }
    ],
    processTitle: "Our Multi-Point AC Tune-Up Checklist",
    process: [
      { step: "01", title: "Deep Condenser Clean", desc: "We wash away pollen, dirt, and debris from your outdoor condenser coils." },
      { step: "02", title: "Electrical Check", desc: "We inspect wiring connections, measure voltage, and test capacitors for safe ratings." },
      { step: "03", title: "Refrigerant & Airflow Test", desc: "We verify the system has correct refrigerant levels and measure delta-T across the coils." },
      { step: "04", title: "Condensate Drain Clear", desc: "We flush your AC's drain line to prevent algae buildup and catastrophic water blockages." }
    ],
    faqs: [
      { question: "When should I schedule my AC tune-up?", answer: "We highly recommend scheduling your air conditioning maintenance in the spring (March through May) before the hot DMV weather arrives, ensuring your unit is ready for heavy use." },
      { question: "Do you have a yearly maintenance plan?", answer: "Yes, we offer local maintenance memberships that cover both spring AC tune-ups and fall heating checkups, plus members receive discounts on parts and priority booking." }
    ],
    emergency: false,
    pricingInfo: "Spring AC Maintenance Special Only $129"
  },
  {
    slug: "furnace-repair",
    name: "Furnace Repair & Heating Diagnostics",
    category: "hvac",
    iconName: "Flame",
    tagline: "Restore Warmth to Your Home Quickly with Certified Furnace Repairs",
    shortDesc: "Is your furnace blowing cold air or making noise? Get warm today with JDL fast heating service.",
    longDesc: "Maryland winters bring freezing temperatures. When your heating fails, your home can get cold and dangerous incredibly fast. JDL HVAC & Plumbing Services provides fast, reliable, same-day furnace repairs. Whether you have a gas, propane, or electric furnace, our NATE-certified technicians have the expertise to safely diagnose and repair the issue, returning cozy warmth to your home.",
    metaTitle: "Furnace Repair Laurel MD | Heating Repair DMV | JDL HVAC",
    metaDesc: "Broken heating? Certified furnace repair experts in Laurel, MD. Fast response, same-day heating diagnostics, gas & electric furnace repairs. Call (844) 535-4822.",
    problemsTitle: "Common Furnace Problems We Resolve",
    problems: [
      "Furnace blows cold air instead of heat",
      "Thermostat doesn't communicate with the heater",
      "Furnace cycles on and off repeatedly (short-cycling)",
      "Yellow, flickering burner flame (instead of crisp blue)",
      "Blower runs constantly but no warm air comes out",
      "Loud banging, rattling, or whining when starting up"
    ],
    benefitsTitle: "Safe, Professional Heating Repairs",
    benefits: [
      { title: "NATE-Certified Experts", desc: "Technicians fully trained in complex gas valves, ignition systems, and heat exchangers." },
      { title: "Safety First Inspections", desc: "We inspect for dangerous carbon monoxide leaks and cracks in your heat exchanger." },
      { title: "Same-Day Heating Restoration", desc: "We stock common furnace components directly on our service trucks." }
    ],
    processTitle: "Our Furnace Repair Walkthrough",
    process: [
      { step: "01", title: "Prompt Arrival", desc: "Our technician arrives in a JDL service vehicle, fully prepared to diagnose your heating." },
      { step: "02", title: "Combustion & Safety Check", desc: "We inspect gas lines, draft exhausts, and electrical limits for immediate hazards." },
      { step: "03", title: "Clear Diagnostics", desc: "We isolate the faulty part (e.g. flame sensor, hot surface igniter, control board) and quote repair costs." },
      { step: "04", title: "Fast Repair & CO Check", desc: "We install OEM replacements, verify safe ignition, and run a carbon monoxide test." }
    ],
    faqs: [
      { question: "Why is my furnace blowing cold air?", answer: "This can be caused by a dirty air filter blocking airflow, a pilot light going out, a bad flame sensor, or an ignition control failure. Turn the unit off and call us to avoid overheating components." },
      { question: "Do you repair gas furnaces?", answer: "Yes, our technicians are fully licensed and certified to service all residential gas, propane, and electric furnace models with an emphasis on carbon monoxide safety." }
    ],
    emergency: true,
    pricingInfo: "24/7 Same-Day Emergency Dispatch Available"
  },
  {
    slug: "furnace-installation",
    name: "Furnace Installation & Replacement",
    category: "hvac",
    iconName: "ThermometerSun",
    tagline: "High-Efficiency Gas & Electric Furnaces Built for Winter Comfort",
    shortDesc: "Upgrade to a next-generation high-efficiency furnace and stay warm while lowering your gas bill.",
    longDesc: "When your heating system is old and inefficient, it costs a fortune to run during cold DMV winters. JDL HVAC & Plumbing Services installs high-efficiency gas and electric furnaces designed to deliver cozy, reliable warmth at a fraction of the operating cost. We accurately size every furnace using modern ACCA load calculations to ensure your new system lasts longer and distributes heat evenly throughout your house.",
    metaTitle: "Furnace Installation & Replacement Laurel MD | JDL HVAC",
    metaDesc: "Keep your home warm with premium furnace installation in Laurel, MD. High-efficiency gas and electric heating replacement. Free estimates, 0% financing.",
    problemsTitle: "Signs Your Furnace is Ready for Replacement",
    problems: [
      "Furnace is more than 15 to 20 years old",
      "Monthly heating bills are sky-high compared to previous years",
      "Dry, dusty air and irregular temperatures across rooms",
      "A cracked heat exchanger (safety hazard - immediate shut-off)",
      "Frequent calls for repairs over the past two winters"
    ],
    benefitsTitle: "Advantages of a New Energy-Saving Furnace",
    benefits: [
      { title: "Up to 98% AFUE Ratings", desc: "Modern gas furnaces convert virtually all fuel directly into warmth with minimal waste." },
      { title: "Whisper-Quiet Operation", desc: "Insulated cabinets and variable-speed blowers reduce operational noise to a whisper." },
      { title: "Reliability & Peace of Mind", desc: "Forget winter emergency calls. Enjoy brand-new factory warranties and local JDL support." }
    ],
    processTitle: "Our Flawless Heating Installation Steps",
    process: [
      { step: "01", title: "Heat Load Analysis", desc: "We measure your home's insulation, windows, and square footage to calculate exact BTU needs." },
      { step: "02", title: "Equipment Tailoring", desc: "We review gas vs. electric options and single-stage vs. modulating furnaces for your needs." },
      { step: "03", title: "Professional Installation", desc: "Our team secures gas lines, venting, and electrical wiring to meet all strict local Laurel building codes." },
      { step: "04", title: "Commissioning & Safety", desc: "We check gas manifold pressure, run safety limits, calibrate the thermostat, and walk you through system usage." }
    ],
    faqs: [
      { question: "What is AFUE, and why does it matter?", answer: "AFUE stands for Annual Fuel Utilization Efficiency. A 96% AFUE furnace converts 96% of the gas it burns into heat, with only 4% lost up the chimney. Older units are often only 60% to 70% efficient, wasting a third of your fuel." },
      { question: "Do you offer electric heating options?", answer: "Absolutely! We install high-efficiency electric furnaces as well as advanced heat pump systems that provide both heating and cooling." }
    ],
    emergency: false,
    pricingInfo: "Free In-Home Estimates & Flexible Payments"
  },
  {
    slug: "heat-pump-repair",
    name: "Heat Pump Repair & Services",
    category: "hvac",
    iconName: "RefreshCw",
    tagline: "Expert Same-Day Heat Pump Diagnostics and Repair in the DMV",
    shortDesc: "Keep your year-round heating and cooling system running efficiently with certified heat pump repairs.",
    longDesc: "Heat pumps are incredibly smart systems that provide cooling in the summer and heating in the winter. Because they run all year long, they undergo double the wear and tear of separate ACs and furnaces. When your heat pump struggles to switch modes, builds ice, or blows lukewarm air, you need expert assistance. The NATE-certified technicians at JDL HVAC understand heat pump components, reversing valves, and defrost boards.",
    metaTitle: "Heat Pump Repair Laurel MD | Heat Pump Service DMV",
    metaDesc: "Is your heat pump acting up? JDL HVAC & Plumbing Services provides quick, expert heat pump repair in Laurel, MD and DMV areas. 24/7 service available.",
    problemsTitle: "Signs Your Heat Pump Requires Professional Service",
    problems: [
      "System is stuck in 'cool' mode during winter or 'heat' mode during summer",
      "The outdoor unit is covered in heavy ice or frost layers",
      "Outdoor fan runs but the compressor isn't turning on",
      "Constant clicking or humming noises from the unit",
      "System frequently switches to costly 'Auxiliary Heat' mode"
    ],
    benefitsTitle: "Why Choose JDL for Heat Pump Repair?",
    benefits: [
      { title: "Year-Round Experts", desc: "Technicians trained in the refrigeration cycles of heat pumps." },
      { title: "Diagnostic Accuracy", desc: "We test reversing valves, defrost controls, sensors, and thermistors correctly." },
      { title: "Same-Day Emergency Dispatch", desc: "Fast restoration so you don't freeze in winter or overheat in summer." }
    ],
    processTitle: "Our 4-Step Heat Pump Service Path",
    process: [
      { step: "01", title: "Complete System Inspection", desc: "We test your indoor air handler and outdoor compressor, checking filters and airflow." },
      { step: "02", title: "Reversing Valve Check", desc: "We verify the system switches refrigerant direction smoothly when changing modes." },
      { step: "03", title: "Defrost Cycle Test", desc: "We test the defrost control board and temperature sensors to prevent ice accumulation." },
      { step: "04", title: "Charge & Airflow Calibration", desc: "We test and adjust the refrigerant charge and blower speeds for maximum operating efficiency." }
    ],
    faqs: [
      { question: "Why is my heat pump covered in ice?", answer: "This can happen due to a bad defrost control board, a faulty outdoor fan motor, a clogged air filter, or low refrigerant. Turn the unit off to prevent compressor damage and contact us immediately." },
      { question: "What does 'Auxiliary Heat' mean?", answer: "Auxiliary heat is back-up heating (typically electric resistance coils) that triggers when the outdoor temperature is too cold for the heat pump to keep up. If this runs constantly in mild weather, your system needs inspection." }
    ],
    emergency: true,
    pricingInfo: "$89 Diagnostic Fee - Waived with Completed Repair"
  },
  {
    slug: "heat-pump-installation",
    name: "Heat Pump Installation & Replacement",
    category: "hvac",
    iconName: "Sun",
    tagline: "Eco-Friendly, All-in-One Heating and Cooling for DMV Homes",
    shortDesc: "Lower your carbon footprint and save on energy with an ultra-efficient next-generation heat pump system.",
    longDesc: "If you are looking for an all-in-one system that provides air conditioning in the summer and highly efficient heating in the winter, a modern heat pump is the perfect choice. Traditional heating systems burn fuel to create heat, but heat pumps simply transfer heat from the outside air into your home, making them up to 300% efficient. JDL installs high-performance heat pumps designed to deliver comfort even in freezing DMV winters.",
    metaTitle: "Heat Pump Installation & Replacement Laurel MD | JDL HVAC",
    metaDesc: "Upgrade to a highly efficient heat pump system in Laurel, MD. Clean, electric heating and cooling all-in-one. Free consultation, rebate assistance.",
    problemsTitle: "When to Switch to a High-Efficiency Heat Pump",
    problems: [
      "You have an old electric furnace or baseboard heating with high monthly bills",
      "You want to eliminate fossil fuel combustion and carbon monoxide risks",
      "Your current AC and heating systems are both older than 12 years",
      "You want to take advantage of Federal Tax Credits (up to $2,000 under the IRA)"
    ],
    benefitsTitle: "Unparalleled Efficiency & Versatility",
    benefits: [
      { title: "Double Duty Comfort", desc: "One single system manages all your cooling and heating needs year-round." },
      { title: "Massive Heating Savings", desc: "Uses up to 50% less electricity than baseboard heaters or old electric furnaces." },
      { title: "Tax Credits & Rebates", desc: "Qualify for up to $2,000 in federal energy tax credits plus local utility incentives." }
    ],
    processTitle: "Our Flawless Heat Pump Installation Steps",
    process: [
      { step: "01", title: "Sizing & Load Calculation", desc: "We perform a manual load calculation to size the heat pump perfectly, ensuring maximum efficiency." },
      { step: "02", title: "Ductwork Evaluation", desc: "We inspect your duct configuration to ensure it has the airflow capacity required for heat pump performance." },
      { step: "03", title: "System Placement & Install", desc: "We position the outdoor unit on a elevated pad to clear winter snow, and link the indoor handler." },
      { step: "04", title: "Testing & Tax Credit Prep", desc: "We charge the system, document AHRI matched numbers, and provide you with files to claim your credits." }
    ],
    faqs: [
      { question: "Do heat pumps work in freezing DMV winter temperatures?", answer: "Yes! Modern cold-climate heat pumps are designed to operate efficiently in sub-zero temperatures. We can also set up a hybrid system that uses your existing furnace as a backup." },
      { question: "Can I save money on tax credits with a heat pump?", answer: "Yes, under the Inflation Reduction Act, qualifying high-efficiency heat pumps can earn a federal tax credit of up to 30% of the installation cost, capped at $2,000. We will help you select a eligible system." }
    ],
    emergency: false,
    pricingInfo: "Free Heat Pump Consultations & Estimate"
  },
  {
    slug: "indoor-air-quality",
    name: "Indoor Air Quality & Filtration Services",
    category: "hvac",
    iconName: "Wind",
    tagline: "Breathe Cleaner, Healthier Air in Your Laurel & DMV Home",
    shortDesc: "Eliminate allergens, dust, odors, and airborne bacteria with advanced filtration and purification.",
    longDesc: "According to the EPA, indoor air is often two to five times more polluted than outdoor air. Because we spend most of our time indoors, breathing in pet dander, dust mites, pollen, mold spores, viruses, and volatile organic compounds (VOCs) can trigger asthma and respiratory issues. JDL HVAC offers comprehensive indoor air quality audits and installs advanced filtration systems, UV purifiers, and humidifiers directly into your central HVAC.",
    metaTitle: "Indoor Air Quality Services Laurel MD | Air Purification DMV",
    metaDesc: "Protect your family's health with professional indoor air quality solutions in Laurel, MD. UV lights, air purifiers, humidifiers. Call (844) 535-4822.",
    problemsTitle: "Signs Your Home Has Poor Air Quality",
    problems: [
      "Frequent sneezing, coughing, watery eyes, or throat irritation",
      "Excessive dust building up on furniture shortly after cleaning",
      "Lingering cooking, pet, or musty basement odors",
      "Static electricity, dry skin, and chapped lips (low humidity)",
      "Visible mold or damp condensation on windows or bathroom walls"
    ],
    benefitsTitle: "Breathe the JDL Difference",
    benefits: [
      { title: "Whole-Home Purification", desc: "Unlike small portable units, our systems purify 100% of the air moving through your vents." },
      { title: "Kill 99.9% of Pathogens", desc: "Sanitizing UV air purifiers neutralize viruses, bacteria, and mold spores on contact." },
      { title: "Balanced Humidity Control", desc: "Keep winter air from drying out your sinuses, protecting wood floors and furniture." }
    ],
    processTitle: "Our Air Quality Optimization Steps",
    process: [
      { step: "01", title: "Indoor Air Testing", desc: "We measure your home's particulate levels, humidity, carbon dioxide, and chemical VOCs." },
      { step: "02", title: "Custom Solutions", desc: "We recommend targeted upgrades like HEPA media filters, UV lamps, or whole-house dehumidifiers." },
      { step: "03", title: "Direct Integration", desc: "We modify your existing sheet metal ductwork and wire the purification system directly into your HVAC system." },
      { step: "04", title: "Breathe Easy Check", desc: "We verify the system operation, explain filter replacement schedules, and confirm cleaner air." }
    ],
    faqs: [
      { question: "What is a media air cleaner, and is it better than a standard filter?", answer: "Yes, standard 1-inch filters are only designed to protect your HVAC equipment. A whole-house media filter is 4 inches thick and traps up to 95% of fine pollen, dust, and pet dander, purifying your indoor breathing air." },
      { question: "How do UV lights in HVAC systems work?", answer: "We install germicidal UV lamps near the evaporator coil. The ultraviolet light breaks down the DNA of passing bacteria, viruses, and mold spores, making them completely harmless." }
    ],
    emergency: false,
    pricingInfo: "Whole-Home IAQ Packages starting at $499"
  },
  {
    slug: "ductwork-services",
    name: "Ductwork Repair, Sealing & Installation",
    category: "hvac",
    iconName: "Network",
    tagline: "Stop Wasting Energy with Professional Duct Sealing and Repair",
    shortDesc: "Up to 30% of conditioned air escapes through leaky ducts. Seal yours to lower bills and improve comfort.",
    longDesc: "Your air duct system acts as the circulatory system of your home. If your ducts are loose, cracked, or poorly designed, your heating and cooling systems have to work twice as hard to reach the desired temperature. This not only spikes your utility bills but also draws dust and outdoor pollutants into your living spaces. JDL HVAC specializes in professional duct inspection, sheet metal repair, custom fabrication, and Aeroseal-style sealing.",
    metaTitle: "Ductwork Repair & Sealing Laurel MD | JDL HVAC",
    metaDesc: "Professional air duct repair, sealing, and customization services in Laurel, MD. Eliminate drafty rooms and lower utility bills. Upfront estimates.",
    problemsTitle: "Signs of Damaged or Leaking Ductwork",
    problems: [
      "Certain rooms are always drafty, hot, or cold compared to the rest of the house",
      "Heavy dust buildup around supply registers and registers",
      "Musty or dirty odors coming directly from the vents",
      "Collapsing flex ducts or visible disconnected joints in basements or attics",
      "An unexpected increase in heating or cooling expenses"
    ],
    benefitsTitle: "Save Energy & Breathe Cleaner Air",
    benefits: [
      { title: "Balanced Comfort", desc: "Restores proper airflow so every single room feels perfectly conditioned." },
      { title: "Lower Energy Loss", desc: "Sealing ducts prevents costly conditioned air from escaping into attics or crawlspaces." },
      { title: "Longer HVAC Lifespan", desc: "Reduces strain on blower motors by maintaining proper static pressure." }
    ],
    processTitle: "Our 4-Step Duct Restoration Path",
    process: [
      { step: "01", title: "Visual & Pressure Audit", desc: "We check duct runs, joints, insulation levels, and test static pressure to identify air loss." },
      { step: "02", title: "Sealing & Mastic Repair", desc: "We seal joints and seams with high-performance mastic paste and heavy-duty foil tape." },
      { step: "03", title: "Custom Fabrication", desc: "We replace crushed flex ducts or fabricate custom sheet metal connections to improve airflow." },
      { step: "04", title: "Airflow Balancing", desc: "We adjust dampers and register registers to ensure equal heat and cool air distribution." }
    ],
    faqs: [
      { question: "How much energy is lost through typical duct leaks?", answer: "The EPA estimates that a typical home loses about 20% to 30% of its heating and cooling energy through ductwork leaks, holes, and poor connections." },
      { question: "Can you design custom duct systems?", answer: "Yes! If you are adding a room or remodeling, our sheet metal experts can design and install a custom duct system optimized for correct static pressure." }
    ],
    emergency: false,
    pricingInfo: "Duct Inspection & Static Pressure Test $149"
  },
  {
    slug: "emergency-hvac",
    name: "24/7 Emergency HVAC Services",
    category: "hvac",
    iconName: "AlertTriangle",
    tagline: "Cozy Warmth or Crisp Cool Air Restored Fast — Day or Night",
    shortDesc: "HVAC systems don't wait for business hours to break. Neither do we. Get fast emergency service.",
    longDesc: "When DMV temperatures plummet below freezing in January or skyrocket into the humid 90s in July, a broken heating or cooling system is more than just inconvenient — it is a health and safety hazard. You can't wait days for an appointment. JDL HVAC & Plumbing Services maintains a dedicated 24/7 emergency dispatch team. Our trucks are fully stocked with replacement parts, ready to restore comfort to your home immediately.",
    metaTitle: "24/7 Emergency HVAC Laurel MD | Emergency Heating & AC Repair DMV",
    metaDesc: "Need immediate AC or heating help? JDL HVAC & Plumbing Services offers true 24/7 emergency HVAC repair in Laurel, MD and DMV. Call (844) 535-4822 now.",
    problemsTitle: "When to Call for Emergency HVAC Help",
    problems: [
      "Heating goes out during freezing winter temperatures (below 32°F)",
      "Air conditioner fails during dangerous summer heatwaves (above 90°F)",
      "A strong gas smell near your furnace (shut gas off and call us immediately)",
      "Severe water leaks from your ceiling or attic HVAC unit",
      "Electrical burning smells coming from the heating or AC unit"
    ],
    benefitsTitle: "DMV's Trusted Emergency Response",
    benefits: [
      { title: "True 24/7 Dispatch", desc: "Live dispatchers, certified technicians, and fully equipped trucks ready to roll." },
      { title: "No Emergency Upsell", desc: "We charge honest, transparent diagnostic rates, even on weekends and holidays." },
      { title: "Fast DMV Coverage", desc: "Centrally located in Laurel to reach Bowie, Silver Spring, and D.C. quickly." }
    ],
    processTitle: "Our Urgent Response Protocol",
    process: [
      { step: "01", title: "Immediate Live Call Dispatch", desc: "Your call is answered by a live JDL representative who dispatches the nearest technician." },
      { step: "02", title: "Rapid Arrival", desc: "Our technician arrives, identifies themselves, and gets straight to work analyzing the issue." },
      { step: "03", title: "Immediate Solution Presentation", desc: "We give you a clear, upfront repair option and cost breakdown before proceeding." },
      { step: "04", title: "Comfort & Safety Restored", desc: "We complete the repair on the spot, verify safe operation, and clean up thoroughly." }
    ],
    faqs: [
      { question: "Do you charge extra fees for emergency service on weekends?", answer: "We maintain honest, transparent rates. While we do have a standard after-hours diagnostic fee, we never charge exorbitant weekend surcharges, and we present clear repair estimates before beginning." },
      { question: "What should I do while waiting for the technician?", answer: "If you smell gas, exit your home and shut off the main valve immediately. For standard AC or heating failures, turn the system off at the thermostat to prevent electrical or compressor damage." }
    ],
    emergency: true,
    pricingInfo: "24/7 Urgent Dispatch Hotline: (844) 535-4822"
  },
  {
    slug: "plumbing-repair",
    name: "General Plumbing Repair & Fixes",
    category: "plumbing",
    iconName: "Wrench",
    tagline: "Laurel's Trusted Plumbers for Fast, Reliable Plumbing Repairs",
    shortDesc: "From leaky pipes and dripping faucets to running toilets, get professional plumbing help today.",
    longDesc: "A minor plumbing leak can quickly turn into a major headache, resulting in hundreds of dollars in water bills and extensive property damage. JDL HVAC & Plumbing Services employs a team of fully licensed, background-checked master plumbers. We handle everything from repairing running toilets and dripping faucets to repiping copper lines and fixing water pressure problems. We work quickly and leave your home spotless.",
    metaTitle: "Plumbing Repair Laurel MD | Licensed Plumber DMV | JDL HVAC",
    metaDesc: "Need a plumber? JDL HVAC & Plumbing Services provides top-rated, licensed plumbing repairs in Laurel, MD and the greater DMV. Fast, upfront pricing.",
    problemsTitle: "Plumbing Issues We Fix Daily",
    problems: [
      "Dripping kitchen, bathroom, or outdoor faucets",
      "Running, noisy, or leaking toilets",
      "Low water pressure throughout the house",
      "Slow-draining showers, tubs, and kitchen sinks",
      "Water pipe leaks, sweating pipes, and damp walls",
      "Noisy, hammering copper or PEX water lines"
    ],
    benefitsTitle: "Why DMV Homeowners Trust JDL Plumbers",
    benefits: [
      { title: "Licensed Master Plumbers", desc: "Highly trained professionals who understand Maryland plumbing codes inside and out." },
      { title: "Upfront Diagnostic Quotes", desc: "Know the exact price of your plumbing repair before our technician starts work." },
      { title: "Fully Stocked 'Warehouse on Wheels'", desc: "Our trucks carry hundreds of pipes, valves, fittings, and cartridges to complete jobs fast." }
    ],
    processTitle: "Our Standard Plumbing Repair Path",
    process: [
      { step: "01", title: "Visual Assessment", desc: "Our plumber locates the leak, block, or fixture malfunction and traces it to its root cause." },
      { step: "02", title: "Clean Estimate", desc: "We provide you with clear options, from repairing the fixture to replacing it with a modern alternative." },
      { step: "03", title: "Precision Craftsmanship", desc: "We shut off the water safely, replace the worn components, and test for leak-free operation." },
      { step: "04", title: "Pressure & Leak Test", desc: "We run a pressure test, verify proper drainage, and ensure all workspace surfaces are clean." }
    ],
    faqs: [
      { question: "Why is my toilet running constantly?", answer: "This is usually caused by a worn flapper valve, a faulty fill valve, or an improperly adjusted float. It is a quick repair that can save you up to $100 a month on water bills." },
      { question: "Do you offer whole-home repiping?", answer: "Yes! If you have old, corroded galvanized steel or failing polybutylene pipes, we can repipe your entire home with durable, corrosion-resistant PEX piping." }
    ],
    emergency: true,
    pricingInfo: "$89 Diagnostic Fee - Waived with Completed Repair"
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning & Clog Clearing",
    category: "plumbing",
    iconName: "Droplet",
    tagline: "Get Clogs Cleared Today with Fast, Professional Drain Cleaning",
    shortDesc: "Stubborn clog that store-bought chemicals can't clear? Get professional drain cleaning now.",
    longDesc: "Slow or clogged drains are incredibly frustrating and can lead to unsanitary water backups in your kitchen sink, shower, or bathroom. Chemical drain cleaners can corrode your pipes and damage your sewer line. JDL HVAC & Plumbing Services utilizes professional-grade snakes, cameras, and high-pressure water jetting to safely and thoroughly clear any blockage, leaving your drains flowing like new.",
    metaTitle: "Drain Cleaning Laurel MD | Clogged Drain Clearing DMV",
    metaDesc: "Struggling with a stubborn clog? JDL provides same-day drain cleaning and clog clearing in Laurel, Maryland and the DMV. Professional, safe, and clean.",
    problemsTitle: "Signs of a Blocked or Slow Drain",
    problems: [
      "Water drains extremely slowly from bathroom sinks, showers, or tubs",
      "Toilet bowl water level rises dangerously high when flushed",
      "Gurgling sounds coming from the pipes or drains",
      "Foul, sulfur-like odors rising from kitchen or bathroom sinks",
      "Water backs up into the sink when running the washing machine"
    ],
    benefitsTitle: "Safe, Powerful Drain Solutions",
    benefits: [
      { title: "No Harsh Chemicals", desc: "We use physical cleaning methods that are 100% safe for all PVC, copper, and sewer pipes." },
      { title: "State-of-the-Art Cameras", desc: "Our video inspections locate the exact source of deep clogs or tree root intrusions." },
      { title: "Long-Term Clog Prevention", desc: "We clean the entire diameter of the pipe, not just punching a temporary hole." }
    ],
    processTitle: "Our Drain Cleaning Protocol",
    process: [
      { step: "01", title: "Clog Location & Camera Audit", desc: "We determine the location of the block and use a fiber-optic drain camera if needed to inspect pipe health." },
      { step: "02", title: "Method Selection", desc: "We select the safest method: professional cabling/snaking for simple blocks, or hydro-jetting for grease." },
      { step: "03", title: "Professional Clearing", desc: "We clear the blockage completely, restoring full flow capacity to the pipe run." },
      { step: "04", title: "Final Inspection", desc: "We flush the lines with water, double-check flow speed, and run our camera to verify a completely clean pipe." }
    ],
    faqs: [
      { question: "Why should I avoid chemical drain cleaners?", answer: "Chemical drain cleaners contain highly corrosive acids that generate heat. This can warp PVC pipes, melt adhesive joints, and eat through copper and cast-iron lines, causing major leaks." },
      { question: "What is Hydro-Jetting?", answer: "Hydro-jetting uses highly pressurized water (up to 4,000 PSI) to blast away grease, scale, soap scum, and tree roots from the interior walls of your sewer lines, leaving them completely clean." }
    ],
    emergency: true,
    pricingInfo: "Same-Day Drain Clearing Starting at $99"
  },
  {
    slug: "sewer-line-services",
    name: "Sewer Line Repair & Replacements",
    category: "plumbing",
    iconName: "Database",
    tagline: "Restore Your Home's Sewer Main Safely with JDL Experts",
    shortDesc: "Foul smells, slow drains, or wet spots in your yard? Professional sewer line diagnostics & repair.",
    longDesc: "Your sewer main is the single most critical pipe in your entire home plumbing system, carrying wastewater out to the municipal grid. When your sewer line breaks, collapses, or becomes clogged with tree roots, wastewater can back up into your home's lower levels. JDL HVAC & Plumbing Services provides advanced sewer video inspections, spot repairs, trenchless options, and complete main line replacements.",
    metaTitle: "Sewer Line Repair & Replacement Laurel MD | JDL HVAC",
    metaDesc: "Struggling with sewer backups or broken mains? Professional sewer line repair, cleaning, and replacement in Laurel, MD. Trenchless options, free estimates.",
    problemsTitle: "Signs of a Damaged or Blocked Sewer Line",
    problems: [
      "Multiple drains (toilets, tubs, sinks) backing up simultaneously",
      "Foul sewage odors rising from outdoor yards or indoor drains",
      "Soggy, unusually lush green patches of grass in your lawn",
      "Sinking areas in your driveway, patio, or lawn",
      "Indoors, gurgling toilets when you run sink water or wash laundry"
    ],
    benefitsTitle: "State-of-the-Art Sewer Solutions",
    benefits: [
      { title: "HD Sewer Cameras", desc: "See exactly what is inside your pipe. We show you the video recording so you understand the issue." },
      { title: "Trenchless Spot Repairs", desc: "Minimize damage to your lawn, driveway, and landscaping with advanced trenchless piping options." },
      { title: "Certified Excavation", desc: "Safe, legal, fully permitted main sewer line installations that meet all local building codes." }
    ],
    processTitle: "Our 4-Step Sewer Service Path",
    process: [
      { step: "01", title: "Video Camera Diagnostics", desc: "We run a high-resolution camera down the sewer line to locate cracks, offsets, or root intrusions." },
      { step: "02", title: "Repair Options Presentation", desc: "We outline options: hydro-jetting, localized excavation, trenchless lining, or full replacement." },
      { step: "03", title: "Execution & Code Compliance", desc: "Our team performs the repair safely, protecting utility lines and adhering to local county codes." },
      { step: "04", title: "Verification & Backfill", desc: "We run a final camera check to verify the new line, complete county inspections, and backfill the excavation." }
    ],
    faqs: [
      { question: "How do tree roots get into sewer lines?", answer: "Tree roots seek moisture and warmth. Even microscopic cracks in old clay or cast-iron sewer pipes release vapor, attracting roots that grow into the pipe and create severe blockages." },
      { question: "Is a broken sewer line covered by homeowner's insurance?", answer: "Standard homeowner's policies often do not cover the sewer line unless you have a specific sewer/water service line rider. We provide transparent estimates and documents to assist with claims." }
    ],
    emergency: true,
    pricingInfo: "Free Estimates on All Major Sewer Repairs"
  },
  {
    slug: "water-heater-repair",
    name: "Water Heater Repair & Diagnostics",
    category: "plumbing",
    iconName: "ShieldAlert",
    tagline: "Restore Hot Water Fast with Same-Day Water Heater Repairs",
    shortDesc: "Waking up to a freezing cold shower? Get hot water today with JDL professional repair services.",
    longDesc: "We rely on hot water for everything from showering and washing hands to running the dishwasher and laundry. When your water heater breaks down, it disrupts your entire household routine. JDL HVAC & Plumbing Services provides fast, same-day water heater repairs. We diagnose and repair all gas, electric, and hybrid tank models, focusing on safety, speed, and restoring comfort.",
    metaTitle: "Water Heater Repair Laurel MD | Hot Water Service DMV | JDL HVAC",
    metaDesc: "Waking up to cold water? JDL offers fast, same-day water heater repair in Laurel, MD and DMV. Licensed master plumbers, honest pricing. Call (844) 535-4822.",
    problemsTitle: "Signs Your Water Heater Requires Repair",
    problems: [
      "Water is lukewarm, cold, or runs out extremely fast",
      "Popping, rumbling, or knocking noises from the tank",
      "Rusty, discolored, or muddy-looking hot water",
      "Foul, metallic, or sulfur-like odors from hot water",
      "Active water leaking or pooling around the base of the tank",
      "Pilot light goes out frequently on your gas water heater"
    ],
    benefitsTitle: "Licensed Water Heater Services",
    benefits: [
      { title: "Same-Day Restoration", desc: "We stock gas valves, elements, thermostats, and thermocouples on our trucks." },
      { title: "Licensed Master Plumbers", desc: "Safety is our priority. We check pressure relief valves and venting for gas leaks." },
      { title: "Honest Diagnostics", desc: "If the tank is structurally sound, we will recommend a cost-effective repair over replacement." }
    ],
    processTitle: "Our 4-Step Water Heater Repair Path",
    process: [
      { step: "01", title: "Safety Inspection", desc: "We turn off the power/gas and check for dangerous leaks, high pressures, or carbon monoxide venting issues." },
      { step: "02", title: "Diagnostic Testing", desc: "We test heating elements, thermostats, thermocouple sensors, gas valves, and anode rods." },
      { step: "03", title: "Upfront Quote", desc: "We explain the failure, present repair options, and provide upfront pricing." },
      { step: "04", title: "Precision Repair & Test", desc: "We replace the faulty component, flush the tank if necessary to remove sediment, and test water temperature." }
    ],
    faqs: [
      { question: "Why is my water heater making a loud popping noise?", answer: "This is caused by sediment buildup at the bottom of the tank. As water heats up, steam bubbles trap under the sediment and 'pop.' We can flush the tank to remove sediment and quiet the unit." },
      { question: "How long do traditional tank water heaters last?", answer: "Most standard tank water heaters last between 8 to 12 years. If your tank is leaking from the bottom, the inner lining has corroded, and it must be replaced immediately." }
    ],
    emergency: true,
    pricingInfo: "24/7 Same-Day Water Heater Dispatch"
  },
  {
    slug: "water-heater-installation",
    name: "Water Heater Installation & Replacement",
    category: "plumbing",
    iconName: "Flame",
    tagline: "Reliable, Energy-Efficient Hot Water Systems Installed Perfectly",
    shortDesc: "Replace your old, leaking water heater with a high-efficiency tank or hybrid system.",
    longDesc: "A leaking or old water heater is a ticking time bomb for water damage in your home. JDL HVAC & Plumbing Services installs premium, energy-efficient gas, electric, and hybrid tank water heaters from the industry's leading brands. Our licensed plumbers ensure your new water heater is installed with code-compliant safety features, thermal expansion tanks, and sturdy drip pans to protect your property.",
    metaTitle: "Water Heater Installation Laurel MD | Hot Water Replacement DMV",
    metaDesc: "Need a new water heater? JDL provides professional water heater installation in Laurel, MD and DMV. Free estimates, high-efficiency models, 0% financing.",
    problemsTitle: "When to Replace Your Water Heater Tank",
    problems: [
      "Your water heater tank is older than 10 years",
      "Active water leaking from the bottom of the steel tank",
      "Constant repairs and part replacements to keep hot water running",
      "Heavy rust colored water and sediment buildup inside the tank",
      "Fluctuating temperatures that make showering unpredictable"
    ],
    benefitsTitle: "Safe, Professional Installations",
    benefits: [
      { title: "Thermal Expansion Tanks", desc: "We install expansion tanks on every job to protect your pipes from pressure spikes." },
      { title: "Premium Drip Protection", desc: "Every install includes a heavy-duty drip pan and automatic shut-off options." },
      { title: "Warranty & Support", desc: "Enjoy 6-year to 10-year manufacturer tank warranties plus our local labor guarantee." }
    ],
    processTitle: "Our Flawless Installation Process",
    process: [
      { step: "01", title: "Consultation & Load Match", desc: "We review your household hot water usage, gas/electric limits, and select the perfect size (e.g. 40, 50, or 80 gallons)." },
      { step: "02", title: "Safe Old Unit Removal", desc: "We drain your old, heavy tank, disconnect the utilities, and haul it away for recycling." },
      { step: "03", title: "Code-Compliant Setup", desc: "We install the new tank, secure gas/electric feeds, set up the venting, and add local Laurel required safety values." },
      { step: "04", title: "System Fill & Heat Up", desc: "We fill the tank, bleed air from your home's water lines, light the gas or power, and verify temperature output." }
    ],
    faqs: [
      { question: "What is a thermal expansion tank, and is it required?", answer: "Yes, in most DMV counties, plumbing code requires a thermal expansion tank. When water heats up, it expands. The expansion tank absorbs this pressure, preventing pipe leaks and protecting your water heater." },
      { question: "Do you offer energy-efficient hybrid water heaters?", answer: "Yes! Hybrid heat pump water heaters use electricity to pull heat from the surrounding air to warm the water. They are up to 3 times more efficient than standard electric tanks." }
    ],
    emergency: false,
    pricingInfo: "Free Estimates on New Water Heater Systems"
  },
  {
    slug: "tankless-water-heaters",
    name: "Tankless Water Heater Services",
    category: "plumbing",
    iconName: "Zap",
    tagline: "Endless Hot Water & Maximum Energy Savings for Your DMV Home",
    shortDesc: "Never run out of hot water again. Upgrade to a compact, high-efficiency tankless system today.",
    longDesc: "Traditional water heaters constantly heat 40 to 50 gallons of water in a tank, wasting energy when you are asleep or at work. Tankless water heaters only heat water when you turn on a faucet, delivering an endless supply of hot water on demand. JDL HVAC & Plumbing Services is certified in tankless installation, maintenance, flushing, and repair. We help you choose the ideal system to meet your family's hot water needs.",
    metaTitle: "Tankless Water Heater Laurel MD | Endless Hot Water DMV | JDL",
    metaDesc: "Upgrade to a premium tankless water heater in Laurel, MD. Endless hot water, up to 40% energy savings. Certified installers, financing available.",
    problemsTitle: "Why DMV Homeowners Switch to Tankless",
    problems: [
      "You frequently run out of hot water during consecutive showers",
      "You want to lower your monthly gas or electric utility bills by up to 40%",
      "You want to reclaim valuable closet or utility room space (tankless is wall-mounted)",
      "You want a system that lasts twice as long as a standard tank (up to 20 years)",
      "You want to prevent the catastrophic flooding risks of a failing 50-gallon tank"
    ],
    benefitsTitle: "The Tankless Advantage",
    benefits: [
      { title: "Endless Hot Water", desc: "Enjoy back-to-back showers, run the washing machine, and use the dishwasher at the same time." },
      { title: "Compact Wall-Mount Design", desc: "Saves space. Tankless systems are about the size of a carry-on suitcase." },
      { title: "20-Year Lifespan", desc: "Tankless systems contain copper and stainless-steel components that last up to twice as long as tanks." }
    ],
    processTitle: "Our Tankless Installation Path",
    process: [
      { step: "01", title: "Flow Rate Analysis", desc: "We calculate your household's peak water usage to size a unit with the correct Gallons Per Minute (GPM) rating." },
      { step: "02", title: "Utility Assessment", desc: "We inspect your gas lines and electrical service panel to ensure they support the higher BTUs or wattage." },
      { step: "03", title: "Wall-Mount Installation", desc: "We mount the unit, run dedicated concentric venting, and connect the water and gas lines." },
      { step: "04", title: "System Testing & Handover", desc: "We configure the digital temperature settings, check safety limits, and show you how easy it is to operate." }
    ],
    faqs: [
      { question: "Do tankless water heaters require maintenance?", answer: "Yes, tankless systems need an annual flush. Hard water minerals can build up inside the copper heat exchanger. An annual scale flush keeps the system running at peak efficiency and maintains the warranty." },
      { question: "Can a tankless system save money on utility bills?", answer: "Yes, because they eliminate 'standby energy loss,' tankless water heaters are up to 34% more energy efficient than traditional tanks, saving homeowners hundreds of dollars a year." }
    ],
    emergency: false,
    pricingInfo: "Endless Hot Water Upgrades from $99/Month"
  },
  {
    slug: "leak-detection",
    name: "Leak Detection & Pipe Locating",
    category: "plumbing",
    iconName: "Search",
    tagline: "Find & Fix Hidden Water Leaks Before They Cause Costly Damage",
    shortDesc: "Unexplained spike in your water bill? We locate hidden leaks behind walls, under floors, and underground.",
    longDesc: "A hidden pipe leak can quietly rot your drywall, grow toxic mold, and compromise your home's foundation. If you suspect a leak because of a high water bill, damp spots, or a constantly spinning water meter, you need professional assistance. JDL HVAC & Plumbing Services utilizes advanced acoustic listening equipment, thermal imaging cameras, and moisture meters to locate hidden leaks without tear down.",
    metaTitle: "Leak Detection Services Laurel MD | Slab Leak DMV | JDL HVAC",
    metaDesc: "High water bills? JDL offers non-invasive leak detection in Laurel, MD and DMV. Advanced acoustic and thermal imaging technology. Call (844) 535-4822.",
    problemsTitle: "Signs You Have a Hidden Water Leak",
    problems: [
      "Your monthly water bill has spiked without increased usage",
      "The water meter dial spins even when all indoor/outdoor faucets are off",
      "Damp, warm, soft, or discolored spots on drywall, ceilings, or floors",
      "Mildew smells or active mold growth in drywall cavities",
      "The sound of running water behind walls or under floors",
      "Low water pressure that came on suddenly"
    ],
    benefitsTitle: "Non-Invasive Leak Locating",
    benefits: [
      { title: "No Wall Tear Down", desc: "We use acoustic and thermal technology to locate the leak within inches before cutting drywalls." },
      { title: "Save on Water Bills", desc: "Locating and repairing a leak stops the wasted water that drains your wallet." },
      { title: "Prevent Severe Property Damage", desc: "Stopping water intrusion prevents dry rot, mold, and costly foundation settlement." }
    ],
    processTitle: "Our 4-Step Leak Locating Protocol",
    process: [
      { step: "01", title: "Water Meter Spin Check", desc: "We perform a pressure test on your plumbing system to confirm a leak exists." },
      { step: "02", title: "Thermal & Acoustic Scan", desc: "We use infrared cameras to detect moisture and acoustic gear to hear the sound of underground pipe leaks." },
      { step: "03", title: "Leak Isolation & Quote", desc: "We pinpoint the exact leak location (e.g. copper line, slab leak, shower pan) and present repair costs." },
      { step: "04", title: "Precision Pipe Repair", desc: "Our licensed plumbers make a precise opening, repair the pipe with premium materials, and verify it is leak-free." }
    ],
    faqs: [
      { question: "What is a slab leak?", answer: "A slab leak is a water line leak that occurs beneath your home's concrete foundation slab. They can crack your foundation if left unchecked. We locate them using advanced sub-surface acoustic sensors." },
      { question: "My water bill doubled, but I don't see water. Could it be the toilet?", answer: "Yes, a 'silent' toilet leak is very common. Water leaks from the tank into the bowl via a bad flapper. We can quickly test and resolve this for you." }
    ],
    emergency: true,
    pricingInfo: "Advanced Electronic Leak Detection $199"
  },
  {
    slug: "emergency-plumbing",
    name: "24/7 Emergency Plumbing Services",
    category: "plumbing",
    iconName: "ShieldAlert",
    tagline: "Rapid Response for Bursted Pipes, Floods & Severe Clogs",
    shortDesc: "Active flooding? Clogged sewer main? Get a licensed JDL plumber dispatched to your home immediately.",
    longDesc: "Plumbing emergencies are incredibly stressful. A burst pipe or sewer backup can cause thousands of dollars of damage to your flooring, drywall, and valuable belongings within minutes. JDL HVAC & Plumbing Services maintains a dedicated emergency response team available 24 hours a day, 7 days a week. We arrive quickly, locate the main shut-off valve, and stop the water, protecting your home and family.",
    metaTitle: "24/7 Emergency Plumber Laurel MD | Emergency Plumbing DMV",
    metaDesc: "Active plumbing emergency? JDL provides fast, licensed, 24/7 emergency plumbers in Laurel, MD and DMV. Call (844) 535-4822 now for rapid dispatch.",
    problemsTitle: "What Constitutes a Plumbing Emergency?",
    problems: [
      "Burst or frozen water pipes actively flooding your property",
      "Sewer line backing up, discharging sewage into your bathtubs or sinks",
      "A failed water heater actively leaking from the bottom of the tank",
      "Clogged main water lines or absolute loss of running water in the house",
      "A gas line leak (evacuate immediately and call from a safe distance)"
    ],
    benefitsTitle: "Laurel's Best Emergency Plumbing Team",
    benefits: [
      { title: "Licensed Master Plumbers", desc: "Fully licensed, background-checked professionals who resolve issues safely and quickly." },
      { title: "24-Hour Live Dispatch", desc: "We never send you to voicemail. A live, helpful operator handles your call immediately." },
      { title: "Fully Equipped Emergency Trucks", desc: "Our trucks carry PEX, copper, shut-off valves, and high-speed drain cleaners." }
    ],
    processTitle: "Our Urgent Plumbing Response Protocol",
    process: [
      { step: "01", title: "Live Operator Intake", desc: "Our dispatcher takes your call, walks you through how to shut off the main water valve, and dispatches a plumber." },
      { step: "02", title: "Immediate Response", desc: "Our plumber arrives in a JDL service vehicle, quickly locating and securing the water supply." },
      { step: "03", title: "Clear Diagnostics & Upfront Cost", desc: "We identify the failed pipe or valve, present clear options, and provide upfront pricing." },
      { step: "04", title: "Expert Repair & Cleanup", desc: "We complete the repair immediately, test for water pressure, and help clean up standing water." }
    ],
    faqs: [
      { question: "What should I do if a pipe bursts?", answer: "First, locate your home's main water shut-off valve (usually in the basement near the street-facing wall or in a water meter box near the curb) and turn it clockwise to shut off the water. Then, call us immediately." },
      { question: "Do you repair frozen pipes?", answer: "Yes! During winter freezes, we safely thaw frozen pipes and repair any ruptured sections to prevent severe flooding when the pipe thaws." }
    ],
    emergency: true,
    pricingInfo: "24/7 Emergency Dispatch Hotline: (844) 535-4822"
  }
];
