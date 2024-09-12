import React from "react";
import Hero from "../components/Home/Hero";
import ScrollingBanner from "../components/Home/ScrollingBanner";
import { Box } from "@mui/material";
// import CoursesSection from "../components/Home/CourseSection";
import PricingPlans from "../components/Home/PricingPlan";

const Home: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Hero />
      <ScrollingBanner />
      {/* <CoursesSection /> */}
      <PricingPlans />
    </Box>
  );
};

export default Home;
