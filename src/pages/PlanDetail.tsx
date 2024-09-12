import React, { useEffect, useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import StripeCheckout from "../components/Course/Checkout";
import { Plan, plans } from "../utils/plans";

const ImageContainer = styled(Box)({
  height: "600px",
});

const ContentContainer = styled(Box)({
  flex: 2,
  padding: "2rem",
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

  useEffect(() => {
    const planData = plans.find((plan) => plan.type === type);
    if (!planData) return;
    setData(planData);
    setPrice(planData.monthlyPrice);
  }, [type]);

  return (
    <Container>
      {!data ? (
        <div>No data found for this plan</div>
      ) : (
        <Box
          display="flex"
          flexDirection={{ md: "row", xs: "column" }}
          gap={{ md: "3rem", xs: "0.5rem" }}
        >
          <ImageContainer>
            <img
              src={import.meta.env.BASE_URL + data.details?.picture}
              height={"100%"}
              width={"100%"}
              style={{ objectFit: "contain" }}
            />
          </ImageContainer>

          <ContentContainer textAlign={{ md: "start", xs: "center" }}>
            <Typography variant="h4" gutterBottom>
              {data.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {data.description}
            </Typography>
            <Typography variant="h4" color="primary" gutterBottom>
              {data.monthlyPrice} € / mois
            </Typography>
            <CheckoutCard>
              <Typography variant="h6" gutterBottom>
                Prêts à devenir des traders confirmés ?
              </Typography>

              <StripeCheckout
                price={Number(price)}
                onSuccess={() => console.log("success, callback")}
              />
            </CheckoutCard>
          </ContentContainer>
        </Box>
      )}
    </Container>
  );
};

export default PlanDetail;
