import React from "react";
import { Box, styled } from "@mui/material";

const CustomContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  width: "100%",
  margin: "0 auto",
  padding: "0 16px",

  [theme.breakpoints.up("sm")]: {
    padding: "0 24px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 32px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "0 40px",
  },
}));

const CenteredContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <CustomContainer>{children}</CustomContainer>;
};

export default CenteredContainer;
