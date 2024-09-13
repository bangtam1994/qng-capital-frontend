export interface Plan {
  type: "basic" | "premium" | "gold";
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  details?: { caption: string; picture: string };
}

export const plans: Plan[] = [
  {
    type: "basic",
    name: "QNG Signaux ™",
    monthlyPrice: 19.99,
    annualPrice: 199.99,
    description: "Le pack parfait pour débuter en trading.",
    features: ["Canal Télégram", "Signaux", "Coaching 2x/semaine"],
    details: {
      caption:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP",
      picture: "assets/phone_qng.png",
    },
  },
  {
    type: "premium",
    name: "Académie Trading ™",
    monthlyPrice: 49.99,
    annualPrice: 499.99,
    description: "Idéal pour devenir un trader confirmé",
    features: [
      "Canal Télégram",
      "E-book privé",
      "Signaux",
      "Coaching 2x/semaine",
    ],
    details: {
      caption:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP",
      picture: "assets/phone_qng.png",
    },
  },
  {
    type: "gold",
    name: "Masterclass ™",
    monthlyPrice: 99.99,
    annualPrice: 999.99,
    description: "Devenez un expert en bourse.",
    features: [
      "Canal Télégram",
      "E-book privé",
      "Signaux",
      "Coaching 3x/semaine",
      "Accompagnement live",
    ],
    details: {
      caption:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP, Coaching 3x/semaine",
      picture: "assets/phone_qng.png",
    },
  },
];
