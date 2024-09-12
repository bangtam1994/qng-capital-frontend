// PricingPlans.tsx

import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ToggleButtonGroup,
  ToggleButton,
  Box,
  //   Button,
} from "@mui/material";
import { Plan, plans } from "../../utils/plans";
// import theme from "../../theme/theme";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Button";
import { useTranslation } from "react-i18next";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PricingPlans: React.FC = () => {
  const [pricingOption, setPricingOption] = useState<"Mensuel" | "Annuel">(
    "Mensuel"
  );

  const handlePricingChange = (
    _event: React.MouseEvent<HTMLElement>,
    newPricingOption: "Mensuel" | "Annuel"
  ) => {
    if (newPricingOption !== null) {
      setPricingOption(newPricingOption);
    }
  };
  const navigate = useNavigate();
  const { t } = useTranslation();

  const notMainColor = "#F3F4F6";
  const mainColor = "#0db595";
  const backgroundColor = "#F3F4F6";
  return (
    <Container
      sx={{
        padding: "60px 0px",
        // marginBottom: "60px",
        backgroundColor: backgroundColor,
        maxWidth: { md: "100vw" },
        width: "100vw",
        color: "black",
      }}
    >
      <Typography variant="h3" align="center" fontWeight={700} gutterBottom>
        Nos offres du moment
      </Typography>
      <Typography align="center" paragraph margin={4}>
        Choisissez votre abonnement à QNG Capital qui vous correspond le mieux,
        et faites monter votre capital aujourd'hui.
      </Typography>

      {/* Toggle Button for Mensuel/Annuel Pricing */}
      <Typography align="center" paragraph sx={{ marginBottom: "36px" }}>
        <ToggleButtonGroup
          value={pricingOption}
          exclusive
          onChange={handlePricingChange}
          aria-label="pricing option"
          color="secondary"
        >
          <ToggleButton
            value="Mensuel"
            aria-label="monthly pricing"
            sx={{
              //   backgroundColor: backgroundColor,
              borderRadius: "24px 0px 0px 24px",
              padding: "12px 22px",
              //   color: "lightgrey",
            }}
          >
            Mensuel
          </ToggleButton>
          <ToggleButton
            value="Annuel"
            aria-label="annual pricing"
            sx={{
              //   color: "lightgrey",
              //   backgroundColor: "#3b5273",
              borderRadius: " 0px 24px 24px 0px",
              padding: "12px 22px",
            }}
          >
            Annuel
          </ToggleButton>
        </ToggleButtonGroup>
      </Typography>

      <Grid2 container spacing={6} justifyContent="center">
        {plans.map((plan: Plan) => (
          <Grid2
            columnSpacing={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={plan.name}
          >
            <Card
              variant="outlined"
              onClick={() => navigate(`courses/${plan.type}`)}
              sx={{
                width: "340px",
                maxWidth: "350px",
                margin: "0 auto",
                borderRadius: "16px",
                padding: "2rem",

                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                // borderColor: plan.type === "premium" ? mainColor : notMainColor,
                border: `2px solid ${
                  plan.type === "premium" ? mainColor : notMainColor
                }`,
                backgroundColor: notMainColor,
                color: "black",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                },
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-center",
                    height: "500px",
                  }}
                >
                  <Box
                    sx={{
                      minHeight: "40%",
                      borderBottom: "1px solid lightGrey",
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="div"
                      gutterBottom
                      sx={{
                        fontWeight: plan.type === "premium" ? 700 : 300,
                      }}
                    >
                      {plan.name}
                    </Typography>

                    {/* PRICE */}
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      {" "}
                      <Typography
                        variant="body2"
                        sx={{
                          textDecoration: "line-through",
                          color:
                            plan.type === "premium" ? notMainColor : "gray",
                          mr: 1,
                        }}
                      >
                        {(pricingOption === "Mensuel"
                          ? Number(plan.monthlyPrice) * 1.2
                          : Number(plan.annualPrice) * 1.2
                        ).toFixed(2)}{" "}
                        €
                      </Typography>
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          marginBottom: 1,
                        }}
                      >
                        {pricingOption === "Annuel"
                          ? plan.annualPrice
                          : plan.monthlyPrice}{" "}
                        €
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontSize: "0.75rem",
                          marginBottom: 1,
                        }}
                        gutterBottom
                      >
                        {pricingOption === "Annuel" ? "/an" : "/mois"}
                      </Typography>
                    </Box>

                    <Typography variant="body2" margin={"22px 0px"}>
                      {plan.description}
                    </Typography>
                  </Box>

                  <List sx={{ marginTop: 2, marginBottom: 2 }}>
                    {plan.features.map((feature, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 0 }}>
                        <CheckCircleIcon
                          sx={{
                            color: mainColor,
                            marginRight: 1,
                          }}
                        />

                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CustomButton
                  buttonType="secondary"
                  variant="outlined"
                  sx={{
                    color: plan.type === "premium" ? notMainColor : mainColor,
                    backgroundColor:
                      plan.type === "premium" ? mainColor : notMainColor,
                    border: `2px solid ${
                      plan.type === "premium" ? mainColor : mainColor
                    }`,
                    fontWeight: 700,
                  }}
                >
                  {t("offers.cta").toUpperCase()}
                </CustomButton>
              </Box>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default PricingPlans;
