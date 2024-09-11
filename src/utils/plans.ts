// utils/pricingPlans.ts

export interface Plan {
  type: "basic" | "premium" | "gold";
  name: string;
  monthlyPrice: string;
  annualPrice: string;
  description: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    type: "basic",
    name: "Trader Base",
    monthlyPrice: "19.99€",
    annualPrice: "199.99€",
    description: "Le pack parfait pour débuter en trading.",
    features: ["Canal Télégram", "Signaux", "Coaching 2x/semaine"],
  },
  {
    type: "premium",
    name: "Trader Premium",
    monthlyPrice: "49.99€",
    annualPrice: "499.99€",
    description: "Idéal pour devenir un trader confirmé",
    features: [
      "Canal Télégram",
      "E-book privé",
      "Signaux",
      "Coaching 2x/semaine",
    ],
  },
  {
    type: "gold",
    name: "Trader Gold",
    monthlyPrice: "99.99€",
    annualPrice: "999.99€",
    description: "Devenez un expert en bourse.",
    features: [
      "Canal Télégram",
      "E-book privé",
      "Signaux",
      "Coaching 3x/semaine",
      "Accompagnement live",
    ],
  },
];
