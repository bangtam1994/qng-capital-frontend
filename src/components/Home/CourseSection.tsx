import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CustomButton from "../Button";
import CenteredContainer from "../CustomContainer";
import theme from "../../theme/theme";
import { useNavigate } from "react-router-dom";

const SectionContainer = styled(Box)({
  textAlign: "center",
  padding: "4rem 2rem",
});

const Title = styled(Typography)({
  fontSize: "2rem",
  fontWeight: 700,
  letterSpacing: ".2rem",
  marginBottom: "2rem",
});

const CardContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "4rem",
  flexWrap: "wrap",
});

const Card = styled(Box, { shouldForwardProp: (prop) => prop !== "color" })<{
  type?: string;
}>(({ type }) => ({
  backgroundColor:
    type === "premium"
      ? theme.palette.secondary.light
      : type === "gold"
      ? theme.palette.secondary.main
      : "#fff",
  color:
    type === "premium"
      ? theme.palette.secondary.dark
      : type === "gold"
      ? theme.palette.secondary.contrastText
      : "#bbbbb",
  borderRadius: "16px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  padding: "2rem",
  width: "100%",
  maxWidth: "300px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
}));

const IncludedList = styled(Box)({
  textAlign: "left",
  marginTop: "1rem",
  marginBottom: "2rem",
  "& li": {
    marginBottom: "0.5rem",
  },
});

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const offers = [
  {
    type: "basic",
    price: "$50",
    items: ["Canal Télégram", "E-book privé", "Signaux", "Coaching 2x/semaine"],
  },
  {
    type: "premium",
    price: "$150",
    items: ["Canal Télégram", "E-book privé", "Signaux", "Coaching 2x/semaine"],
  },
  {
    type: "gold",
    price: "$250",
    items: [
      "Canal Télégram",
      "E-book privé",
      "Signaux",
      "Coaching 3x/semaine",
      "Accompagnement live",
    ],
  },
];

const plansSection: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <CenteredContainer>
      <motion.div
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={sectionVariants}
      >
        <SectionContainer>
          <Title>{t("offers.title")}</Title>
          <CardContainer>
            {offers.map((offer, index) => (
              <Card
                key={index}
                type={offer.type}
                onClick={() => navigate(`plans/${offer.type}`)}
              >
                <Box>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      letterSpacing: ".2rem",
                      textDecoration: "none",
                      color:
                        offer.type === "premium"
                          ? theme.palette.primary.dark
                          : offer.type === "gold"
                          ? theme.palette.secondary.contrastText
                          : "#bbbbb",
                    }}
                  >
                    {t(`offers.${offer.type}.name`)}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    {offer.price}
                  </Typography>
                  <Typography variant="body1">
                    {t(`offers.${offer.type}.caption`)}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <IncludedList>
                    <Typography variant="body2" component="ul">
                      {offer.items.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </Typography>
                  </IncludedList>
                </Box>
                <CustomButton variant="contained" color="primary">
                  {t("offers.cta")}
                </CustomButton>
              </Card>
            ))}
          </CardContainer>
        </SectionContainer>
      </motion.div>
    </CenteredContainer>
  );
};

export default plansSection;
