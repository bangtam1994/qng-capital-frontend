import React from "react";
import { Box, Typography } from "@mui/material";

import MotionWrapper from "../MotionWrapper";
import EmailCTA from "../emailCTA/EmailCTA";

const CTANewsletter = () => {
  const ctaBoxStyle = {
    background: "linear-gradient(135deg, #a1d4ca, #0db595)",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    color: "#fff",
    width: "100%",
  };

  return (
    <MotionWrapper>
      <Box sx={ctaBoxStyle}>
        <Typography variant="h5" gutterBottom>
          Abonne-toi à ma newsletter !
        </Typography>
        <EmailCTA
          buttonTitle="S'abonner"
          modalTitle="Abonnez-vous à la newsletter"
          modalCaption="Vous recevrez toutes les news à propos des formations à venir et actualités de QNG Capital."
          from={`page: Homepage newsletter`}
        />
      </Box>
    </MotionWrapper>
  );
};

export default CTANewsletter;
