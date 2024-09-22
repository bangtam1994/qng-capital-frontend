import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import MotionWrapper from "../MotionWrapper";

const VideoContainer = styled(Box)({
  flex: 1.5,
  minWidth: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "370px",
});

const ContentContainer = styled(Box)({
  flex: 1,
});

const InspirationalMe = () => {
  return (
    <MotionWrapper>
      <Typography
        variant="h2"
        gutterBottom
        fontWeight={700}
        align="center"
        mb={8}
      >
        Deviens le trader que tu rêves d'être
      </Typography>
      <Box
        display="flex"
        flexDirection={{ md: "row", xs: "column" }}
        gap="3rem"
        padding={{ xs: 2 }}
      >
        <VideoContainer>
          <Box
            component="iframe"
            src="https://www.youtube.com/embed/tFWAJE2UYT8?si=GHQEo7xotrdiwnKY"
            sx={{
              height: {
                xs: "200px",
                md: "400px",
              },
              width: "100%",
              border: "none",
            }}
            allowFullScreen
          />
        </VideoContainer>

        <ContentContainer
          textAlign={{ md: "start", xs: "center" }}
          height={"100%"}
        >
          <Typography variant="h5">
            Chaque voyage commence par un premier pas, et le tien commence ici.
            Tu as le désir, l'ambition et le rêve de devenir trader — mais
            savoir où commencer et comment progresser peut être intimidant. Ne
            laisses pas le doute freiner ton ascension.
            <br />
            Au contraire, laissez-le être le moteur qui te propulse vers
            l'excellence.
          </Typography>
          <Typography margin={"10px 0px"} variant="h6" fontWeight={600}>
            Ton avenir t'attend. Prends le contrôle maintenant.
          </Typography>
        </ContentContainer>
      </Box>
    </MotionWrapper>
  );
};

export default InspirationalMe;
