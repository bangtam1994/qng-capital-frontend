import React from "react";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Grid,
  Paper,
  Divider,
  useTheme,
} from "@mui/material";
import Me from "../assets/me.jpg";
import Me2 from "../assets/me_2.jpg";
const personalInfo = {
  name: "Alexandre Pham",
  title: "Trader Forex",
  bio: `Je suis un trader autodidacte passionné par les marchés financiers.  Grâce à une approche rigoureuse et à un apprentissage constant, j'ai développé une expertise approfondie en trading et en analyse de marché.
  Je suis aussi passionné de sport et de culture. J'aime créer du contenu qualitatif à propos du trading et du développement personnel en général : devenir la meilleure version de soi-même. `,
  skills: ["trading", "eurousd", "street workout", "forex", "coaching"],
  contact: {
    email: "pqhl.alexandre@gmail.com",
    telegram: "https://t.me/qngcapital",
    linkedIn: "https://www.linkedin.com/in/alexandre-phm-8593511b1",
  },
};

const AboutMe: React.FC = () => {
  const theme = useTheme();

  return (
    <Container>
      <Typography variant="h1" gutterBottom mt={6} align="center">
        A propos de moi
      </Typography>
      <Box sx={{ py: 6 }}>
        <Grid container spacing={10} alignItems="center">
          <Grid item xs={12} sm={4} container justifyContent="center">
            <Avatar
              alt={personalInfo.name}
              src={Me}
              sx={{
                width: { md: 400, xs: 300 },
                height: { md: 400, xs: 300 },
                borderRadius: "50%",
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <Typography variant="h2" gutterBottom>
              {personalInfo.name}
            </Typography>
            <Typography variant="h4" color="text.secondary" gutterBottom>
              {personalInfo.title}
            </Typography>
            <Typography paragraph>{personalInfo.bio}</Typography>
          </Grid>
        </Grid>

        <Box sx={{ my: 4 }}>
          <Typography variant="h3" gutterBottom mt={10}>
            Compétences
          </Typography>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography paragraph>
              {personalInfo.skills.map((skill, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "inline-block",
                    m: 1,
                    p: 1,
                    borderRadius: "4px",
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

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            justifyContent: { md: "space-between", xs: "center" },
            alignItems: { md: "space-between", xs: "center" },

            gap: 10,
          }}
        >
          <Box>
            <Typography variant="h3" gutterBottom>
              Contact
            </Typography>
            <Typography paragraph>
              Vous pouvez me contacter à l'adresse suivante :
              <br />
              <a
                href={`mailto:${personalInfo.contact.email}`}
                style={{ color: theme.palette.primary.main }}
              >
                {personalInfo.contact.email}
              </a>
            </Typography>
            <Typography paragraph>
              Retrouvez-moi sur LinkedIn :
              <br />
              <a
                href={personalInfo.contact.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.palette.primary.main }}
              >
                LinkedIn
              </a>
            </Typography>
            <Typography paragraph>
              Découvrez mon Télégram :
              <br />
              <a
                href={personalInfo.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.palette.primary.main }}
              >
                Télégram
              </a>
            </Typography>
          </Box>
          <Avatar
            alt={personalInfo.name}
            src={Me2}
            sx={{
              width: { md: 500, xs: 300 },
              height: { md: 500, xs: 300 },
              borderRadius: "10%",
            }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutMe;
