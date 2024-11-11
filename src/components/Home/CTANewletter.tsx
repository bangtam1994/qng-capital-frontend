import React from "react";
import { Box, Typography } from "@mui/material";

import MotionWrapper from "../MotionWrapper";
import EmailCTA from "../emailCTA/EmailCTA";

const CTANewsletter = () => {
  const ctaBoxStyle = {
    background:
      "radial-gradient(circle, rgba(162,21,238,1) 0%, rgba(122,46,172,0.9836309523809523) 34%, rgba(3,86,140,1) 100%, rgba(0,107,230,1) 100%)",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    color: "#fff",
    width: "100%",
    margin: "30px 0px",
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
