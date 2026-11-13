export interface KnowledgeDocument {
  id: string
  title: string
  category: "wooden" | "plastic" | "custom" | "repair" | "buyback" | "company" | "faq" | "pricing"
  keywords: string[]
  content: string
}

export const KNOWLEDGE_BASE: KnowledgeDocument[] = [
  {
    id: "company-overview",
    title: "Company Identity, Location, and Operating Hours",
    category: "company",
    keywords: ["salaar", "about", "location", "address", "phone", "contact", "email", "hours", "karachi", "baldia town"],
    content: `Salaar Pallet Solutions is a premier Karachi-based manufacturer, supplier, repairer, and buyer of heavy-duty wooden and HDPE plastic pallets.
Factory Yard Address: Baldia Town 4/5, Timber Market, Karachi, Sindh, Pakistan.
Operating Hours: Monday through Sunday, 10:00 AM – 10:00 PM (PKT).
Direct Phone & WhatsApp: 0333 8538388 (+92 333 8538388).
Official Email: nabeelalimanjhoti@gmail.com.
Core Services: New wooden pallets, industrial HDPE plastic skids, custom CAD dimension manufacturing, pallet lifecycle repair, and used/damaged scrap pallet buyback.
Service Area: Factory direct dispatch across Karachi (SITE, Korangi, Port Qasim, North Karachi, F.B. Area, Hub) with dedicated truckload deliveries across Pakistan (Lahore, Faisalabad, Multan, Islamabad, Hyderabad).`,
  },
  {
    id: "wooden-pallets-specs",
    title: "Standard & Export Wooden Pallet Specifications",
    category: "wooden",
    keywords: ["wooden", "wood", "timber", "pine", "hardwood", "dimensions", "size", "ispm 15", "heat treated", "load", "capacity"],
    content: `Wooden Pallet Technical Specifications:
- Dimensions: Standard Industrial (1200 × 1000 × 144 mm) and Euro Standard (1200 × 800 × 144 mm). Custom heights, widths, and lengths available on order.
- Timber Materials: Selected Grade-A kiln-dried Pakistani pine (softwood) and dense structural hardwood.
- Dynamic Load Rating: 1,500 kg to 2,000 kg for active transit and forklift operations.
- Static Load Rating: 4,000 kg safe stationary warehouse stacking capacity.
- Racking Capacity: Up to 1,000 kg on open-beam pallet racking.
- Forklift Access: 4-way entry (accessible by forklift and hand pallet jacks from all four sides). 2-way solid stringer builds available on request.
- Fasteners: Heavy-duty annular ring-shank and screw-shank nails driven by pneumatic tooling for superior pull-out resistance and zero board separation.
- Phytosanitary Standard: 100% ISPM-15 certified heat-treatment (HT) at 56°C core temperature for 30 minutes in certified chambers. Stamped with official IPPC seal (PK-104 / HT / DB) for international sea freight and export compliance.`,
  },
  {
    id: "plastic-pallets-specs",
    title: "HDPE Hygienic Plastic Pallet Specifications",
    category: "plastic",
    keywords: ["plastic", "hdpe", "polymer", "hygienic", "washable", "pharma", "food", "clean room", "waterproof"],
    content: `HDPE Plastic Pallet Specifications:
- Material: High-density polyethylene (HDPE) or polypropylene (PP) copolymer blend. Virgin food-grade and heavy-duty recycled options.
- Standard Footprints: 1200 × 1000 mm and 1200 × 800 mm skids.
- Temperature Tolerance: Engineered to operate reliably from -20°C in cold storage / blast freezers up to +60°C in industrial warehouses.
- Dynamic Load Rating: 1,200 kg to 1,500 kg.
- Static Load Rating: 4,500 kg.
- Hygiene & Cleanliness: 100% waterproof, non-porous, and splinter-free. Will not absorb liquids, harbor bacteria, or degrade under chemical washdowns. Ideal for pharmaceutical GMP facilities, food processing plants, and dairy/meat cold chains.
- Export Advantages: Completely exempt from ISPM-15 wood fumigation regulations. Ready for immediate global shipping without paperwork delays.
- Lifespan: 5 to 8+ years under normal industrial usage. 100% recyclable into secondary industrial polymer feedstocks.`,
  },
  {
    id: "custom-manufacturing",
    title: "Custom Pallet Design & Engineered Dimensions",
    category: "custom",
    keywords: ["custom", "bespoke", "dimensions", "drawing", "cad", "sizing", "stringer", "wing", "overhang", "machinery"],
    content: `Custom Pallet Manufacturing Services:
- Capabilities: We manufacture custom wooden and plastic skids to any length, width, or deck-board spacing required by non-standard machinery, oversized equipment, or automated warehouse systems.
- Heavy Machinery Skids: Reinforced solid-stringer 2-way and 4-way bases capable of supporting payloads exceeding 3,000 kg.
- Deck Configurations:
  1. Close-boarded solid top decks for fragile goods, loose boxes, or bagged chemicals to prevent sagging.
  2. Spaced top decks optimized for ventilation and reduced tare weight.
  3. Single-wing or double-wing overhangs for secure crane sling lifting and export lashing.
- Workflow:
  1. Share product dimensions, weight distribution, racking type, and transit mode.
  2. Our engineering team calculates timber thickness, notch pocket depths, and fastener patterns.
  3. Sample prototype assembly and load testing in our Baldia Town facility.
  4. Batch production and coordinated flatbed dispatch across Pakistan within agreed lead times.`,
  },
  {
    id: "pallet-repair-service",
    title: "Pallet Repair, Reconditioning, and Maintenance",
    category: "repair",
    keywords: ["repair", "fix", "damaged", "broken", "recondition", "maintenance", "refurbish", "cost savings"],
    content: `Pallet Repair & Reconditioning Services:
- Purpose: Significantly lower ongoing supply-chain packaging costs by extending pallet working life instead of buying replacements.
- Repair Scope: Replacement of cracked or broken top deck boards, reinforcement of fractured stringers and lead boards, re-nailing loose joints with pneumatic ring-shank fasteners, and squareness truing.
- Quality Assurance: Reconditioned pallets are load-inspected to guarantee structural integrity before returning to service.
- Turnaround: Rapid turnaround in Karachi for commercial warehouses and distribution hubs.
- Exchange Program: We offer damaged-for-reconditioned exchange programs so your warehouse never runs out of active stock.`,
  },
  {
    id: "scrap-pallet-buyback",
    title: "Buying Used, Surplus, and Damaged Pallets",
    category: "buyback",
    keywords: ["buy", "sell", "scrap", "used", "damaged", "purchasing", "buyback", "surplus", "pickup", "cash", "credit"],
    content: `Scrap & Surplus Pallet Buyback Program:
- What We Buy:
  1. New, surplus, or excess pallets taking up valuable warehouse space.
  2. Used, functional wooden and plastic pallets (1200×1000mm, Euro 1200×800mm, standard sizes).
  3. Broken, fractured, or damaged wooden pallets suitable for repair or timber recycling.
  4. Broken or cracked plastic pallets purchased by polymer weight for recycling.
- How It Works:
  1. Tell us your approximate quantity, pallet type (wood/plastic), and condition.
  2. Send photos via WhatsApp to 0333 8538388 for an instant preliminary quote.
  3. For bulk quantities (50+ units), we provide free on-site inspection across Karachi.
  4. Arranged flatbed truck transportation and prompt settlement (cash, bank transfer, or credit toward new pallets).
- Free Karachi Pickup: Arranged for qualified bulk volumes across SITE, Korangi, Landhi, Port Qasim, Hub, and North Karachi.`,
  },
  {
    id: "pricing-quotes-policy",
    title: "Pricing Policy & How to Get a Formal Quote",
    category: "pricing",
    keywords: ["price", "cost", "quote", "quotation", "rate", "bulk", "discount", "order"],
    content: `Pricing Policy & Quotations:
- Why Prices Are Custom: Pallet prices depend on order quantity, lumber grade (pine vs. hardwood), exact dimensions, load capacity, and whether ISPM-15 heat-treatment certification is required.
- Competitive Factory Pricing: Because we operate our own sawmill and fabrication yard in Baldia Town without intermediary brokers, our rates are among the most competitive in Pakistan.
- How to Request a Quote:
  1. Click "Get a Quote" or message our technical desk in this chat.
  2. Provide required dimensions (e.g. 1200×1000mm), quantity (e.g. 100 units), material (wood vs. plastic), and destination city.
  3. Call or WhatsApp our factory manager directly at 0333 8538388 for immediate pricing within 2 to 4 hours.
- Payment Terms: Standard enterprise commercial terms available for contracted recurring orders.`,
  },
  {
    id: "frequently-asked-questions",
    title: "Frequently Asked Questions (FAQs)",
    category: "faq",
    keywords: ["faq", "delivery", "moisture", "customs", "export", "ispm", "time", "turnaround"],
    content: `Frequently Asked Questions:
Q: Do you deliver outside Karachi?
A: Yes! While our factory is in Baldia Town, Karachi, we ship full truckload (FTL) and less-than-truckload (LTL) consignments to Lahore, Faisalabad, Multan, Gujranwala, Sialkot, Hyderabad, Hub, and all industrial zones across Pakistan.

Q: Are your export pallets certified for international customs?
A: Yes. All our export wooden pallets undergo certified heat treatment to 56°C for 30 minutes in compliance with ISPM-15 international phytosanitary standards. Each pallet is stamped with the official IPPC mark (PK-104) and accompanied by formal chamber certificates.

Q: How quickly can you deliver an order?
A: Standard 1200×1000mm and Euro pallets in ready stock can be dispatched within 24 to 48 hours in Karachi. Custom dimensions or large-scale production orders typically require 3 to 7 business days depending on volume.

Q: Can you manufacture pallets for specific racking systems?
A: Yes. We engineer pallets with specific bottom runner configurations (3-runner, 5-runner perimeter base) to ensure stable deflection ratings across selective, drive-in, or push-back pallet racks.`,
  },
]
