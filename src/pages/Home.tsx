import React from "react";
import Hero from "../components/Home/Hero";
import ScrollingBanner from "../components/Home/ScrollingBanner";
import { Box } from "@mui/material";
import PricingPlans from "../components/Home/PricingPlan";
import InspirationalMe from "../components/Home/InspirationalMe";
import FAQPage from "../components/Home/FAQ";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Hero />
      <ScrollingBanner />
      <PricingPlans />
      <InspirationalMe />
      <FAQPage />
    </Box>
  );
};

export default Home;
