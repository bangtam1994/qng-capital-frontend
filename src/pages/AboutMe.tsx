import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Paper,
  useTheme,
} from "@mui/material";
import Me2 from "../assets/me_2.jpg";
import MotionWrapper from "../components/MotionWrapper";
const personalInfo = {
  name: "Alexandre",
  title: "Trader Forex",
  bio: `Je suis un trader autodidacte passionné par les marchés financiers.  Grâce à une approche rigoureuse et à un apprentissage constant, j'ai développé une expertise approfondie en trading et en analyse de marché. 
  `,
  bio_suite:
    "Je suis aussi passionné de sport et de culture. J'aime créer du contenu qualitatif à propos du trading et du développement personnel en général : devenir la meilleure version de soi-même.",
  skills: ["trading", "eurousd", "forex", "street workout", "coaching"],
  contact: {
    email: "pqhl.alexandre@gmail.com",
    telegram: "https://telegram.me/qngcapital",
    telegram_private: "https://telegram.me/alxqng",
  },
};

const AboutMe: React.FC = () => {
  const theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <MotionWrapper>
        <Typography variant="h1" gutterBottom mt={6} align="center">
          A propos de moi
        </Typography>
        <Box
          sx={{
            py: 6,
            display: "flex",
            gap: "3rem",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box>
            <Avatar
              alt={personalInfo.name}
              src={Me2}
              sx={{
                width: { md: 500, xs: 300 },
                height: { md: 500, xs: 300 },
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box textAlign={{ xs: "center", sm: "left" }}>
            <Typography variant="h2" gutterBottom>
              {personalInfo.name}
            </Typography>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              {personalInfo.title}
            </Typography>
            <Typography variant="h6">{personalInfo.bio}</Typography>
            <br />
            <Typography variant="h6">{personalInfo.bio_suite}</Typography>
          </Box>
        </Box>

        <Box sx={{ my: 6 }}>
          <Typography variant="h3" gutterBottom my={4}>
            Compétences
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 1,
              width: "fit-content",
              textAlign: "center",
            }}
          >
            <Typography>
              {personalInfo.skills.map((skill, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "inline-block",
                    m: 1,
                    p: 1,
                    borderRadius: "6px",
                    backgroundColor: theme.palette.primary.dark,
                    color: theme.palette.primary.contrastText,
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: { md: "space-between", xs: "center" },
            alignItems: { md: "space-between", xs: "center" },
            gap: 10,
          }}
        >
          <Box
            gap={3}
            display={"flex"}
            flexDirection={"column"}
            textAlign={{ xs: "center", sm: "left" }}
          >
            <Typography variant="h3" gutterBottom>
              Contact
            </Typography>
            <Typography paragraph>
              Vous pouvez me contacter à l'adresse suivante :
              <br />
              <a
                href={`mailto:${personalInfo.contact.email}`}
                style={{
                  color: "blue",
                }}
              >
                {personalInfo.contact.email}
              </a>
            </Typography>

            <Typography paragraph>
              Rejoignez le canal Télégram public:
              <br />
              <a
                href={personalInfo.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                }}
              >
                QNG CAPITAL
              </a>
            </Typography>
            <Typography paragraph>
              Mon Télégram perso:
              <br />
              <a
                href={personalInfo.contact.telegram_private}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: theme.palette.secondary.main,
                  textDecoration: "none",
                }}
              >
                Alxqng
              </a>
            </Typography>
          </Box>
        </Box>
      </MotionWrapper>
    </Container>
  );
};

export default AboutMe;
