import React from "react";
import Hero from "../components/Home/Hero";
import ScrollingBanner from "../components/Home/ScrollingBanner";
import { Box } from "@mui/material";
// import plansSection from "../components/Home/plansection";
import PricingPlans from "../components/Home/PricingPlan";
import InspirationalMe from "../components/Home/InspirationalMe";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Hero />
      <ScrollingBanner />

      <PricingPlans />
      <InspirationalMe />
    </Box>
  );
};

export default Home;
