import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import StripeCheckout from "../components/Course/Checkout";
import { Plan, plans, PlanType } from "../utils/plans";
import theme from "../theme/theme";
import Title from "../components/Title";
import EmailCTA from "../components/emailCTA/EmailCTA";
import TestimonialsCarousel from "../components/Home/Testimonials";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import FAQPage from "../components/FAQ";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Calendly from "../components/Calendly";
import MotionWrapper from "../components/MotionWrapper";

const ImageContainer = styled(Box)({
  // flex: 2,
});

const ContentContainer = styled(Box)({
  flex: 2,
  padding: "1rem",
});

const CheckoutCard = styled(Box)({
  marginTop: "2rem",
  padding: "3rem",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
});

const PlanDetail: React.FC<{ type: string }> = ({ type }) => {
  const [price, setPrice] = useState(0);
  const [data, setData] = useState<Plan>();
  const [paymentSucess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const planData = plans.find((plan) => plan.type === type);
    if (!planData) return;
    setData(planData);
    setPrice(planData?.monthlyPrice);
  }, [type]);
  return (
    <Box
      sx={{
        // padding: "60px 0px",
        maxWidth: { md: "100vw" },
        position: "relative",
        width: "100%",
        overflow: "hidden",
        // backgroundColor: "rgb(34, 34, 34)",
        color: theme.palette.secondary.contrastText,
      }}
    >
      <Container>
        {" "}
        {!data ? (
          <div>No data found for this plan</div>
        ) : (
          <MotionWrapper maxWidth={false}>
            <Title
              variant="h1"
              sx={{ fontSize: { xs: "2.2rem" } }}
              pt={8}
              mb={8}
              text={data.name}
            />

            <Box
              display="flex"
              flexDirection={{ md: "row", xs: "column" }}
              gap={{ md: "3rem", xs: "0.5rem" }}
            >
              <ImageContainer
                sx={{
                  height: { md: "600px", xs: "300px" },
                  textAlign: "center",
                  flex: 2,
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "100%",
                    width: { xs: "60%", md: "100%" },
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  alt={data.details?.picture}
                  src={`${import.meta.env.BASE_URL}${data.details?.picture}`}
                />
              </ImageContainer>

              <ContentContainer textAlign={{ md: "start", xs: "center" }}>
                {data.monthlyPrice > 0 && (
                  <Typography variant="h2" gutterBottom>
                    {data.monthlyPrice.toFixed(2)} €{" "}
                    <span style={{ fontSize: "18px" }}>par mois</span>
                  </Typography>
                )}
                {data.type === PlanType.ELITE_PERFORMANCE && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      gap: "20px",
                    }}
                  >
                    <Typography variant="h3">
                      Organiser un rendez-vous
                    </Typography>
                    <span>
                      Réserve un créneau pour un call gratuit, afin de
                      construire ton plan de mentorat personnalisé.
                    </span>

                    <Calendly url="https://calendly.com/qngcapital/30min" />
                  </Box>
                )}
                <Typography
                  fontWeight={700}
                  color={theme.palette.secondary.main}
                  gutterBottom
                  my={6}
                >
                  {data.description}
                </Typography>
                {data.details?.features.map((feature, i) => {
                  return (
                    <Box
                      mt={0.7}
                      key={i}
                      sx={{
                        paddingLeft: 0,
                        display: "flex",
                        marginBottom: "10px",
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: theme.palette.secondary.dark,
                          marginRight: 1,
                          fontSize: 20,
                          marginTop: "6px",
                        }}
                      />

                      <Typography variant="body1" component="span">
                        {feature}
                      </Typography>
                    </Box>
                  );
                })}
                {data.type !== PlanType.ELITE_PERFORMANCE && (
                  <CheckoutCard>
                    {data.active ? (
                      !paymentSucess ? (
                        <>
                          <Typography variant="h6" gutterBottom>
                            Prêts à devenir des traders confirmés ?
                          </Typography>
                          <StripeCheckout
                            price={Number(price)}
                            priceId={data.priceId}
                            product={data.type}
                            onSuccess={() => {
                              setPaymentSuccess(true);
                            }}
                          />
                        </>
                      ) : (
                        <Box>
                          <Typography variant="h6" mb={4}>
                            Ton paiement a bien été reçu. Consulte tes emails
                            pour recevoir le détail de ton offre !
                          </Typography>
                          <CustomButton
                            onClick={() => {
                              navigate("/");
                            }}
                          >
                            Retour à l'accueil
                          </CustomButton>
                        </Box>
                      )
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <span>
                          Offre disponible très prochainement, inscris-toi sur
                          la liste d'attente pour ne pas manquer sa sortie !
                        </span>
                        <EmailCTA
                          buttonTitle="S'abonner"
                          modalTitle="Place VIP pour les abonnés"
                          modalCaption="La formation QNG Trading Academy sortira en avant première pour les abonnés."
                          from={`page: ${data.name}`}
                        />
                      </Box>
                    )}
                  </CheckoutCard>
                )}
              </ContentContainer>
            </Box>
            <Box margin={"80px 0px"}>
              {data.faq && <FAQPage data={data.faq} isHomepage={false} />}
            </Box>
            <TestimonialsCarousel />
          </MotionWrapper>
        )}
      </Container>
    </Box>
  );
};

export default PlanDetail;
