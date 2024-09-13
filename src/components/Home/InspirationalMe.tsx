import React, { useRef } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";

import { motion, useAnimation, useInView } from "framer-motion";

const VideoContainer = styled(Box)({
  flex: 1,
  minWidth: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const ContentContainer = styled(Box)({
  flex: 1,
});

const InspirationalMe = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);
  return (
    <Container
      sx={{
        padding: "60px 0px",
        color: "black",
      }}
    >
      <motion.div
        animate={controls}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <Box
          ref={ref}
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          gap={{ md: "3rem", xs: "2rem" }}
          minHeight={"380px"}
          padding={2}
        >
          <VideoContainer>
            <iframe
              width="100%"
              height={"90%"}
              src="https://www.youtube.com/embed/DfIs4DwNR9c?si=jnztLgAf28OLLE-P"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </VideoContainer>

          <ContentContainer textAlign={{ md: "start", xs: "center" }}>
            <Typography variant="h4" gutterBottom fontWeight={700}>
              Devenez le Trader que Vous Rêvez d'Être
            </Typography>
            <Typography margin={"40px 0px"}>
              Chaque voyage commence par un premier pas, et le vôtre commence
              ici. Vous avez le désir, l'ambition et le rêve de devenir trader —
              mais savoir où commencer et comment progresser peut être
              intimidant. Ne laissez pas le doute freiner votre ascension.
              <br />
              Au contraire, laissez-le être le moteur qui vous propulse vers
              l'excellence.
            </Typography>
            <Typography margin={"10px 0px"} fontWeight={600}>
              Votre avenir vous attend. Prenez le contrôle maintenant.
            </Typography>
          </ContentContainer>
        </Box>
      </motion.div>
    </Container>
  );
};

export default InspirationalMe;
