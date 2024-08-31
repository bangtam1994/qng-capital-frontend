import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      courses: "Courses",
      contact: "Contact",
      testimony: "Testimonials",
      welcome_message: "Trade better,",
      welcome_message_next: "Trade smarter",
      subtitle_message: "Learn to trade like a pro with our online courses!",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      courses: "Abonnements",
      contact: "Contact",
      testimony: "Témoignages",
      welcome_message: "Trade better,",
      welcome_message_next: "Trade smarter",
      subtitle_message: "Transforme le chaos en opportunité",
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
