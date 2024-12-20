import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import theme from "./theme/theme";
import PlanDetail from "./pages/PlanDetail";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutMe from "./pages/AboutMe";
import EbookFree from "./pages/EbookFree";
import { Toaster } from "sonner";

import StripeStatusPage from "./components/Course/StripeStatusPage";

// import Témoignages from "./pages/Témoignages";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Toaster
          position="bottom-left"
          toastOptions={{
            duration: 4000,
            style: {
              backgroundColor: "#333",
              color: "#fff",
              borderRadius: "8px",
              padding: "16px",
            },
          }}
        />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/payment-status" element={<StripeStatusPage />} />{" "}
            <Route
              path="smart_signals"
              element={<PlanDetail type="smart_signals" />}
            />
            <Route
              path="trading_academy"
              element={<PlanDetail type="trading_academy" />}
            />
            <Route
              path="elite_performance"
              element={<PlanDetail type="elite_performance" />}
            />
            <Route path="/contact" element={<Contact />} />{" "}
            <Route path="/ebook/free" element={<EbookFree />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
