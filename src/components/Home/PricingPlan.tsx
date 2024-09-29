import React, { useRef, useState } from "react";
import {
  Container,
  Typography,
  Grid2,
  Card,
  CardContent,
  List,
  ToggleButtonGroup,
  ToggleButton,
  Box,
} from "@mui/material";
import { Plan, plans } from "../../utils/plans";
import { useNavigate } from "react-router-dom";
import CustomButton from "../Button";
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import theme from "../../theme/theme";
import MotionWrapper from "../MotionWrapper";
import Title from "../Title";

const PricingPlans: React.FC = () => {
  const [pricingOption, setPricingOption] = useState<"monthly" | "annual">(
    "monthly"
  );
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [inView, setInView] = React.useState<boolean>(false);
  const handleInView = (entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      setInView(true);
    }
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => handleInView(entry));
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  const handlePricingChange = (
    _event: React.MouseEvent<HTMLElement>,
    newPricingOption: "monthly" | "annual"
  ) => {
    if (newPricingOption !== null) {
      setTimeout(() => setPricingOption(newPricingOption), 100);
    }
  };
  const navigate = useNavigate();
  const { t } = useTranslation();

  const notMainColor = "#F3F4F6";
  const mainColor = "#0db595";
  const backgroundColor = "#F3F4F6";

  return (
    <Container
      ref={ref}
      id="pricing-section"
      maxWidth={false}
      sx={{
        padding: "60px 0px",
        backgroundColor: backgroundColor,
        maxWidth: { md: "100vw" },
        width: "100vw",
        color: "black",
      }}
    >
      <MotionWrapper maxWidth={false}>
        <Title variant="h2" text="Nos offres du moment" />

        <Typography align="center" paragraph margin={4}>
          Choisissez votre abonnement à QNG Capital qui vous correspond le
          mieux, et faites monter votre capital aujourd'hui.
        </Typography>

        {/* Toggle Button for monthly/annual Pricing */}
        <Typography align="center" paragraph sx={{ marginBottom: "36px" }}>
          <ToggleButtonGroup
            value={pricingOption}
            exclusive
            onChange={handlePricingChange}
            aria-label="pricing option"
            color="secondary"
          >
            <ToggleButton
              value="monthly"
              aria-label="monthly pricing"
              sx={{
                borderRadius: "24px 0px 0px 24px",
                padding: "12px 22px",
              }}
            >
              Mensuel
            </ToggleButton>
            <ToggleButton
              value="annual"
              aria-label="annual pricing"
              sx={{
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
                onClick={() => navigate(`/${plan.type}`)}
                sx={{
                  width: { sm: "100%", xs: "90%" },
                  maxWidth: "400px",
                  height: "100%",
                  margin: "0 auto",
                  borderRadius: "16px",
                  padding: "2.5rem",

                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  // borderColor: plan.type === "trading_academy" ? mainColor : notMainColor,
                  border: `2px solid ${
                    plan.type === "trading_academy" ? mainColor : notMainColor
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
                    height: "100%",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      padding: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                        minHeight: "30%",
                        borderBottom: "1px solid lightGrey",
                      }}
                    >
                      <Typography
                        variant="h4"
                        component="div"
                        gutterBottom
                        sx={{
                          fontWeight:
                            plan.type === "trading_academy" ? 700 : 500,
                        }}
                      >
                        {plan.name}
                      </Typography>

                      {/* PRICE */}
                      <motion.div
                        key={pricingOption}
                        initial={{ opacity: 0.3, scale: 0.9 }}
                        animate={{ opacity: 0.9, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "baseline",
                            mb: 2,
                          }}
                        >
                          <Typography
                            variant="h2"
                            sx={{
                              fontWeight: "bold",
                            }}
                          >
                            {Number(
                              pricingOption === "annual"
                                ? plan.type !== "elite_performance"
                                  ? plan.annualPrice
                                  : plan.threeMonthPrice
                                : plan.monthlyPrice
                            ).toFixed(
                              plan.type !== "elite_performance" ? 2 : 0
                            )}
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
                            {pricingOption === "annual" ? "/an" : "/mois"}
                          </Typography>{" "}
                        </Box>
                        {pricingOption === "annual" && (
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.grey[800],
                            }}
                          >
                            Au lieu de{" "}
                            {plan.type !== "elite_performance"
                              ? plan.baseAnnualPrice
                              : plan.baseThreeMonthPrice}{" "}
                            €
                          </Typography>
                        )}
                      </motion.div>

                      <Typography variant="body2" margin={"22px 0px"}>
                        {plan.description}
                      </Typography>
                    </Box>

                    <List sx={{ marginTop: 2, marginBottom: 2 }}>
                      {plan.features.map((feature, index) => (
                        <Box key={index} sx={{ paddingLeft: 0 }}>
                          {/* <CheckCircleIcon
                            sx={{
                              color: mainColor,
                              marginRight: 1,
                            }}
                          /> */}

                          <Typography
                            textAlign="left"
                            fontSize={16}
                            gutterBottom
                          >
                            {feature}
                          </Typography>
                        </Box>
                      ))}
                    </List>
                  </CardContent>
                  <CustomButton
                    buttonType="secondary"
                    variant="outlined"
                    sx={{
                      color:
                        plan.type === "trading_academy"
                          ? notMainColor
                          : mainColor,
                      backgroundColor:
                        plan.type === "trading_academy"
                          ? mainColor
                          : notMainColor,
                      border: `2px solid ${
                        plan.type === "trading_academy" ? mainColor : mainColor
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
      </MotionWrapper>
      {/* </motion.div> */}
    </Container>
  );
};

export default PricingPlans;
