import React from "react";
import { Box, Typography } from "@mui/material";

import MotionWrapper from "../MotionWrapper";
import EmailCTA from "../emailCTA/EmailCTA";
import WaveBg from "../../assets/wavebreak.png";

const CTANewsletter = () => {
  const ctaBoxStyle = {
    backgroundImage: `url(${WaveBg})`,
    backgroundSize: "100% 300%",
    backgroundPosition: "60% 60%",
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
