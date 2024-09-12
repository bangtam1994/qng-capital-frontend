import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      plans: "Plans",
      contact: "Contact",
      testimony: "Testimonials",
      welcome_message: "Trade better,",
      welcome_message_next: "Trade smarter",
      subtitle_message: "Tranform chaos to opportunities",
      subtitle_message_2: "Become a Trader Pro",
      subtitle_message_3: "Catch the signals, maximize the profits",
      offers: {
        title: "Our offers",
        cta: "Apply",
        basic: {
          name: "Basic",
          price: "Price",
          caption: "The basics of trading",
        },
      },
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      plans: "Abonnements",
      contact: "Contact",
      testimony: "Témoignages",
      welcome_message: "Rejoins la",
      welcome_message_next: "Smart Trader Family",
      subtitle_message: "Transforme le chaos en opportunité",
      subtitle_message_2: "Deviens un trader pro",
      subtitle_message_3: "Attrape les signaux, maximise tes profits",
      offers: {
        title: "Nos offres",
        cta: "Choisir",
        basic: {
          name: "Basic",

          caption: "Les bases du trading",
        },
        premium: {
          name: "Premium",

          caption: "Devenir un trader confirmé",
        },
        gold: {
          name: "Gold",

          caption: "Devenez un expert, apprenez de plus grands",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr", // Langue par défaut
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
