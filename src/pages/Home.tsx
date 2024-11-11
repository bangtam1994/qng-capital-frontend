import React from "react";
import Hero from "../components/Home/Hero";
import ScrollingBanner from "../components/Home/ScrollingBanner";
import { Box } from "@mui/material";
import PricingPlans from "../components/Home/PricingPlan";
import InspirationalMe from "../components/Home/InspirationalMe";
import FAQPage from "../components/FAQ";
import CTANewsletter from "../components/Home/CTANewletter";
import TestimonialsCarousel from "../components/Home/Testimonials";
import { faqData } from "../utils/faq";

const Home: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        // width: "100vw",
      }}
    >
      <Hero />
      <ScrollingBanner />
      <PricingPlans />
      <InspirationalMe />
      <TestimonialsCarousel />
      <CTANewsletter />

      <FAQPage data={faqData} isHomepage />
    </Box>
  );
};

export default Home;
