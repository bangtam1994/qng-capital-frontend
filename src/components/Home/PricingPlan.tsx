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
} from "@mui/material";
import { Plan, plans } from "../../utils/plans";
import theme from "../../theme/theme";
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

  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        Nos offres du moment
      </Typography>
      <Typography align="center" paragraph>
        Choisissez votre abonnement à QNG Capital qui vous correspond le mieux,
        et faites monter votre capital aujourd'hui.
      </Typography>

      {/* Toggle Button for Mensuel/Annuel Pricing */}
      <Typography align="center" paragraph sx={{ marginBottom: "36px" }}>
        <ToggleButtonGroup
          color="secondary"
          value={pricingOption}
          exclusive
          onChange={handlePricingChange}
          aria-label="pricing option"
        >
          <ToggleButton value="Mensuel" aria-label="monthly pricing">
            Mensuel
          </ToggleButton>
          <ToggleButton value="Annuel" aria-label="annual pricing">
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
                maxWidth: "350px", // Adjust width here
                margin: "0 auto", // Center the card in the grid cell
                borderRadius: "16px",
                padding: "2rem",
                border: plan.type === "premium" ? "none" : "1px solid #e0e0e0",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",

                borderColor:
                  plan.type === "premium"
                    ? "transparent"
                    : `1px solid ${theme.palette.primary.light}`,
                backgroundColor:
                  plan.type === "premium"
                    ? theme.palette.secondary.main
                    : "#ffffff",
                color:
                  plan.type === "premium"
                    ? theme.palette.secondary.contrastText
                    : theme.palette.primary.main,
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                },
                textAlign: "center",
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
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: "bold",
                        marginBottom: 1,
                      }}
                    >
                      {pricingOption === "Annuel"
                        ? plan.annualPrice
                        : plan.monthlyPrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "0.75rem",
                        marginBottom: 1,
                      }}
                      gutterBottom
                    >
                      {pricingOption === "Annuel" ? "par an" : "par mois"}
                    </Typography>
                    <Typography variant="body2" margin={"22px 0px"}>
                      {plan.description}
                    </Typography>
                  </Box>

                  <List sx={{ marginTop: 2, marginBottom: 2 }}>
                    {plan.features.map((feature, index) => (
                      <ListItem key={index} sx={{ paddingLeft: 0 }}>
                        <CheckCircleIcon
                          sx={{
                            color:
                              plan.type === "premium"
                                ? "white"
                                : theme.palette.secondary.main,
                            marginRight: 1,
                          }}
                        />

                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <CustomButton
                //   variant={plan.type === "premium" ? "contained" : "outlined"}
                //   buttonType={plan.type === "premium" ? "primary" : "secondary"}
                //   sx={{
                //     backgroundColor:
                //       plan.type === "premium" ? "white" : "secondary",
                //     color:
                //       plan.type === "premium"
                //         ? theme.palette.primary.main
                //         : "secondary",
                //   }}
                >
                  {t("offers.cta")}
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
