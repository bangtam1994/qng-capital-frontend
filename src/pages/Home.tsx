import React from "react";
import Hero from "../components/Home/Hero";
import ScrollingBanner from "../components/Home/ScrollingBanner";
import { Box } from "@mui/material";
import PricingPlans from "../components/Home/PricingPlan";
import InspirationalMe from "../components/Home/InspirationalMe";
import FAQPage from "../components/Home/FAQ";
import CTAEbook from "../components/Home/CTAebook";
import TestimonialsCarousel from "../components/Home/Testimonials";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Hero />
      <ScrollingBanner />
      <PricingPlans />
      <InspirationalMe />
      <CTAEbook />
      <TestimonialsCarousel />
      <FAQPage />
    </Box>
  );
};

export default Home;
