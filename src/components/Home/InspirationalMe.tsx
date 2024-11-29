import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import MotionWrapper from "../MotionWrapper";
import Title from "../Title";
import theme from "../../theme/theme";

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
    <Box
      sx={{
        backgroundColor: "black",
        py: { md: 6, xs: 7 },
        width: "100%",
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        position: { md: "relative", xs: "initial" },
        gap: "20px",
      }}
    >
      {" "}
      <MotionWrapper>
        {" "}
        <Title
          variant="h2"
          text="Deviens le trader que tu rêves d'être"
          mb={8}
          textColor={theme.palette.primary.contrastText}
        />
        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          gap="3rem"
          padding={{ xs: 2 }}
        >
          <VideoContainer>
            <Box
              component="iframe"
              src="https://www.youtube.com/embed/oTOBKf8JKC0?si=5g9bQsKWq1NPD14W"
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
            color={theme.palette.primary.contrastText}
          >
            <Typography variant="h6">
              Chaque voyage commence par un premier pas, et le tien commence
              ici. Tu as le désir, l'ambition et le rêve de devenir trader —
              mais savoir où commencer et comment progresser peut être
              intimidant.
              <br />
              Ne laisse pas le doute freiner ton ascension.
              <br />
              Au contraire, laissez-le être le moteur qui te propulse vers
              l'excellence.
              <br />
              <br />
            </Typography>
            <Typography margin={"10px 0px"} variant="h5" fontWeight={600}>
              Ton avenir t'attend. Prends le contrôle maintenant.
            </Typography>
          </ContentContainer>
        </Box>
      </MotionWrapper>
    </Box>
  );
};

export default InspirationalMe;
