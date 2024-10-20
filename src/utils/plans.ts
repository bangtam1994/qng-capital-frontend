export interface Plan {
  type: PlanType;
  name: string;
  active: boolean;
  priceId: string;
  monthlyPrice: number;
  annualPrice?: number;
  baseAnnualPrice?: number;
  description: string;
  features: string[];
  threeMonthPrice?: number;
  baseThreeMonthPrice?: number;
  details?: { caption: string; picture: string; features: string[] };
}

export enum PlanType {
  SMART_SIGNALS = "smart_signals",
  TRADING_ACADEMY = "trading_academy",
  ELITE_PERFORMANCE = "elite_performance",
}
export const plans: Plan[] = [
  {
    type: PlanType.TRADING_ACADEMY,
    name: "QNG Trading Academy™",
    active: false,
    priceId: "price_1Q8mnAJ4HMnfuly583NQ8VIo",
    // monthlyPrice: 49.9,
    // annualPrice: 490,
    // baseAnnualPrice: 599,
    monthlyPrice: 0,
    threeMonthPrice: 0,
    baseThreeMonthPrice: 0,
    description:
      "Découvrez la meilleure stratégie pour trader sereinement et dominer les marchés grâce à la VRAIE smart money.",
    features: [
      "🎥  Accès aux modules vidéos (tous niveaux)",
      "📚  Accès E-books et supports",
      "🔍  Études de cas pratiques sur des trades réussis et ratés",
      "🛠  Outils exclusifs de backtesting",
      "💡  Checklist quotidienne de prépa trading",
      "📊  Analyse technique et fondamentale",
      "🔒  Accès au groupe Discord d'apprentissage et échange avec d'autres membres",
      "🧠  2 LIVE/mois",
    ],
    details: {
      caption:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP",
      picture: "assets/phone_qng.png",
      features: [
        "🧩 Stratégies testées et validées par des traders financés",
        "📚 E-books et supports pédagogiques téléchargeables",
        "🎥 Accès à tout les modules vidéos (débutant/intermédiaire/avancé)",
        "🔍 Études de cas pratiques sur des trades réussis et ratés",
        "🛠 Outils exclusifs de backtesting pour affiner vos stratégies",
        "💡 Checklist quotidienne de préparation pour optimiser chaque session de trading en PDF",
        "📊 Analyse technique et fondamentale : maîtrisez les deux aspects du marché",
        "🔒 Accès à un groupe Discord d'apprentissage pour échanger avec d'autres membres",
        "🧠 2 LIVE/mois pour répondre à vos questions",
      ],
    },
  },
  {
    type: PlanType.SMART_SIGNALS,
    name: "Smart Signals ™",
    active: true,
    priceId: "price_1Q8mIsJ4HMnfuly54F57827t",
    monthlyPrice: 29.9,
    annualPrice: 200,
    baseAnnualPrice: 358,
    description:
      "Suivez, gagnez et validez des prop firms avec des signaux de trading ultra-précis.",

    features: [
      "📈  Alertes quotidiennes sur les meilleures opportunités de trading ",
      "💱  2 à 5 signaux de qualité par semaine (70% win rate)",
      "🔔  Notifications instantanées via télégram",
      "🎯  Focus sur la validation des prop firms : passez les challenges avec aisance",
      "🏆  Accès au groupe privé QNG Capital Gold",
    ],
    details: {
      caption:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP",
      picture: "assets/picture_signals.png",
      features: [
        "📈  Alertes quotidiennes sur les meilleures opportunités de trading en temps réel",
        "💱  2 à 5 signaux de qualité par semaine (70% win rate)",
        "⚡️   Signaux simples à suivre avec des points d'entrée, de sortie et des stop-loss définis",
        "🔔  Notifications instantanées via télégram",
        "🎯  Focus sur la validation des prop firms : passez les challenges avec aisance",
        "🏆  Accès au groupe privé QNG Capital Gold",
      ],
    },
  },
  {
    type: PlanType.ELITE_PERFORMANCE,
    name: "Elite Performance ™",
    active: false,
    priceId: "price_1Q8mp9J4HMnfuly5N59m8sJ3",
    monthlyPrice: 0,
    threeMonthPrice: 0,
    baseThreeMonthPrice: 0,
    description:
      "Accélérez votre parcours de trader avec un mentorat personnalisé pour atteindre vos objectifs.",
    features: [
      "👨‍🏫 Coaching individuel 1-on-1 , 4x/mois",
      "🧠 Plan d’action personnalisé",
      "🎁 Formation 'QNG Trading Academy' OFFERT en Support",
      "📱 Accès VIP à moi même",
      "🔬 Optimisation de votre stratégie",
      "🚀 Accès à des stratégies avancées (1 million d'€ en gestion prop firm)",
      "📊 Revue mensuelle de votre portefeuille",
      "🎯 Développement d’un mindset de trader pro",
      "🛠 Accès à des outils premium pour une analyse plus fine des marchés ",
      "📈 Suivi des performances",
    ],
    details: {
      caption:
        "Vous aurez accès aux : Signaux, Canal Télégram privé, E-learning vidéos VIP, Coaching 3x/semaine",
      picture: "assets/phone_qng.png",
      features: [
        " 👨‍🏫 Coaching individuel 1-on-1 , 4x par mois (Session d'1 heure)",
        " 🧠 Plan d’action personnalisé pour développer vos compétences et améliorer vos performances",
        "🎁 Formation 'QNG Trading Academy' OFFERT en Support",
        "📱Accès VIP à moi même",
        "🔬 Optimisation des stratégies de trading en fonction de vos objectifs personnels",
        "🚀 Accès à des stratégies avancées exclusives utilisées pour gérer 1 million d'€ en gestion prop firm.",
        "📊 Revue mensuelle de votre portefeuille pour ajuster les objectifs de performance",
        "🎯 Développement d’un mindset de trader pro : gestion des émotions et discipline",
        "🛠 Accès à des outils premium pour une analyse plus fine des marchés",
        "📈 Suivi des performances et ajustements continus pour maximiser vos profits",
      ],
    },
  },
];
