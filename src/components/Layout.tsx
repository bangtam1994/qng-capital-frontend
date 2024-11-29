import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";

import Header from "./Header";
import Footer from "./Footer";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ width: "100vw" }}>
      <Header />
      <Box
        sx={{
          width: "100%",
          padding: 0,
          // backgroundColor: "rgb(34, 34, 34)",
          // color: theme.palette.secondary.contrastText,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
