import React from "react";
import CenteredContainer from "../components/CustomContainer";
import { Outlet } from "react-router-dom";

import { Typography } from "@mui/material";

const Courses: React.FC = () => {
  return (
    <CenteredContainer>
      <Typography variant="h3" align="center" gutterBottom>
        Nos offres
      </Typography>
      <Outlet />
    </CenteredContainer>
  );
};

export default Courses;
