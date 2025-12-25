// data for the features list and mockup
export interface FeatureItem {
  id: string;
  title: string;
  desc: string;
}

export const FEATURES: FeatureItem[] = [
  {
    id: "f1",
    title: "Your Virtual Store",
    desc: "Showcase your products online with a professional store front. Get discovered by buyers 24/7 and manage everything from one dashboard.",
  },
  {
    id: "f2",
    title: "Dynamic Pricing Tool",
    desc: "Configure pricing rules, discounts and time-based promotions to maximize conversions and profit margins.",
  },
  {
    id: "f3",
    title: "Auto Quoting Setup",
    desc: "Automatically generate quotes for bulk buyers with custom templates, terms and export options.",
  },
  {
    id: "f4",
    title: "Pricing Engine",
    desc: "Powerful pricing engine that factors in currency, freight, taxes and customer tiers for correct quotes.",
  },
  {
    id: "f5",
    title: "Buyer Database",
    desc: "Organize leads and buyers, track communications and discover repeat customers through analytics tools.",
  },
];
