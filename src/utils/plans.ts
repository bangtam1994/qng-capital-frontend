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
  faq?: { question: string; response: string }[];
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
    faq: [
      {
        question:
          "Est ce que la Formation QNG Academy est faite pour tout le monde ?",
        response:
          "Que tu sois expert, novice ou trader à temps partiel avec un travail/étude à côté, le contenu est applicable sur toutes les timeframes et tous les marchés donc adaptable à tout type de profils. Ma méthode permet de valider des challenges peut importe ta situation, si tu t'y met sérieusement !",
      },
      {
        question: "La statégie est applicable qu'au forex ?",
        response:
          "Non, elle est applicable également aux indices, NASDAQ, DOWJONES et même la Crypto ! Tu pourras vérifier par toi-même, elle a fait ses preuves en crypto et aux indices pour ma part et également pour de nombreux élèves.",
      },
      {
        question: "Combien de temps vais-je mettre avant d'être rentable ?",
        response:
          "La rentabilité dépend de chacun, certains peuvent mettre 3 mois tandis que d'autres 2 ans ou plus. Tout dépend de ton niveau d'implication et ton organisation.. car oui , l'emploi du temps n'est pas une excuse si tu veux réellement la liberté financière !",
      },
      {
        question: "Est-ce que je peux payer par crypto ?",
        response:
          "Oui, seulement en annuel, envoie moi un message privé sur télégram à https://telegram.me/alxqng je t'expliquerais",
      },
      {
        question: "Mon paiement ne passe pas, que faire ?",
        response:
          "Si tu reçois un message d'erreur lors du paiement désactive bien ton VPN et change de navigateur, ça a toujours fonctionné. Si tu as besoin d'aide supplémentaire, n'hésite pas à me contacter à l'adresse suivante : contact@qngcapital.com",
      },
    ],
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
    faq: [
      {
        question: "Les signaux sont-ils envoyés avec les analyses ?",
        response:
          "Oui, 80% du temps j'envoie les signaux avec les analyses qui suivent, car ca aide à mieux comprendre et ne pas laisser place à des prises de positions 'hasardeuses'. Comme ça, tu sauras POURQUOI j'ai prit ce trade !",
      },
      {
        question: "Les signaux sont-ils 100% gagnants ?",
        response:
          "Alors tu sais bien qu'il n'y a aucune méthode miracle en trading, mais avec un money management strict, tu auras 70% de taux de réussite, et par conséquent, positif la plupart du temps.",
      },

      {
        question:
          "En combien de temps puis-je valider les prop firms avec QNG Smart Signals ?",
        response:
          " Tout dépend de ton risque, je conseills de risquer 0,5% / signaux, et ainsi survivre le plus longtemps possible pour ne pas cramer ton capital.Mais généralement entre 2 semaines à 1 mois !",
      },

      {
        question: "Que faire si je veux annuler mon abonnement ?",
        response:
          "C'est très simple, envoies moi un message à contact@qngcapital.com, mon équipe et moi annulerons l'abonnement. Tu auras cependant l'accès jusqu'à la date du mois suivant où tu as effectué ton paiement.",
      },

      {
        question: "Quelles sessions trades-tu ?",
        response:
          "Mes trades se déroulent généralement pendant la session de Londres et le chevauchement de Londres/New York !",
      },

      {
        question: "Quel capital minimum pour débuter ?",
        response:
          "Tu n'as pas besoin d'un capital élevé pour débuter. Généralement l'idéal est de 500€, mais sinon tu peux utiliser les prop firms comme moyen de levier, c'est plus rentable.",
      },
    ],
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
    faq: [
      {
        question:
          "En quoi consiste le programme de coaching privé en trading ?",
        response:
          "Le programme est conçu pour vous accompagner de manière personnalisée dans votre parcours de trader. Il inclut des sessions individuelles pour travailler sur votre stratégie, gérer vos émotions, et maîtriser les outils de trading. Mon approche est basée sur la patience et la pédagogie pour m'assurer que vous comprenez chaque étape avant d'avancer.",
      },
      {
        question:
          "Quels sont les principaux avantages de ce programme par rapport à d'autres formations ?",
        response:
          "Contrairement aux formations en ligne standard, ce coaching privé est entièrement adapté à votre niveau et à vos besoins. Nous avançons à votre rythme, et je suis disponible pour répondre à toutes vos questions. Mon objectif est de vous voir réussir en tant que trader indépendant. Mon accompagnement est intensif, avec une vraie implication dans votre progression.",
      },

      {
        question: "Comment se déroulent les séances de coaching ?",
        response:
          "Les séances sont planifiées en fonction de vos disponibilités et se déroulent via visioconférence. Chaque session dure généralement entre 1h et 1h30. Nous abordons des sujets variés : analyse technique, gestion des émotions, gestion des risques, et stratégie de trading. Entre les sessions, vous aurez également des exercices pratiques pour consolider vos acquis.",
      },

      {
        question: "Est-ce que ce programme est adapté aux débutants ?",
        response:
          "Oui, le programme est adapté aux traders de tous niveaux, y compris les débutants. Mon approche pédagogique permet d’introduire progressivement les concepts essentiels du trading. Vous n'avez pas besoin d'expérience préalable : je vous guiderai pas à pas pour que vous puissiez progresser en toute confiance.",
      },

      {
        question:
          "Combien de temps faut-il pour commencer à voir des résultats ?",
        response:
          "Les résultats dépendent de votre implication et de votre capacité d'apprentissage. En général, mes clients constatent des améliorations dans leur compréhension du marché et leur discipline de trading dès les premières semaines. Cependant, le trading est une compétence à long terme : l’objectif est de bâtir des bases solides pour une progression durable.",
      },

      {
        question: "Je peux payer en plusieurs fois ?",
        response:
          "Oui, je propose une formule qui permet d'étalonner le paiement sur 3 mois. Le prix est de 500€ par mois, avec résultats garantis si vous appliquer à la lettre ma stratégie et mes conseils.",
      },
      {
        question:
          "Si je rencontre des difficultés, est-il possible de demander des conseils supplémentaires entre les sessions ?",
        response:
          "Absolument ! Mon engagement est de vous voir réussir, et je comprends que le trading peut poser des défis uniques. Je reste disponible par messagerie ou e-mail pour répondre à vos questions ou vous guider en cas de besoin entre les sessions programmées.",
      },
      {
        question: "Quels résultats pouvez-vous garantir avec ce programme ?",
        response:
          "En trading, il est impossible de garantir des gains financiers, car cela dépend de nombreux facteurs, dont le marché et votre discipline personnelle. Cependant, je vous garantis un accompagnement de qualité, avec des conseils pratiques et une méthodologie solide qui vous aideront à développer les compétences et la mentalité nécessaires pour réussir dans le trading.",
      },
      {
        question:
          "Comment puis-je être sûr que le programme correspondra à mes attentes ?",
        response:
          "Avant de vous engager, nous pouvons organiser un appel gratuit pour discuter de vos objectifs et de vos attentes. Cet échange nous permettra de mieux comprendre si ce programme répond à vos besoins et vous donnera un aperçu de ma méthode d’accompagnement.",
      },
      {
        question:
          "Que faire si je souhaite arrêter le coaching en cours de programme ?",
        response:
          "Le programme est un engagement de trois mois pour des résultats optimaux. Cependant, si vous rencontrez des difficultés ou avez besoin de suspendre les sessions pour des raisons personnelles, nous pourrons trouver une solution ensemble pour adapter l’accompagnement à votre situation.",
      },
    ],
  },
];
