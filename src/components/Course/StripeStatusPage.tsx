import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import MotionWrapper from "../MotionWrapper";
import GradientButton from "../GradientButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoDisturbAltTwoToneIcon from "@mui/icons-material/DoDisturbAltTwoTone";

type SessionData = {
  status: string;
  session: {
    id: string;
    amount_total: number;
    customer_email: string;
    customer_details: { name: string };
    metadata: { firstName: string; lastName: string };
  };
  message: string;
};

const SuccessPage: React.FC = () => {
  const [data, setData] = useState<SessionData | null>();

  const [loading, setLoading] = useState<boolean>(true);
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const statusPage = searchParams.get("status");
  const productPage = searchParams.get("product");
  const navigate = useNavigate();
  console.log("statusPage", statusPage);
  useEffect(() => {
    const fetchSessionDetails = async () => {
      if (statusPage === "success" && sessionId) {
        try {
          // Request the backend to retrieve the Checkout session
          const response = await axios.post(
            `${
              import.meta.env.VITE_BACKEND_URL
            }/payment/checkout-session-details`,
            { sessionId }
          );
          console.log(">>>>>>>>>", response.data);
          if (response.data) {
            setData(response.data);
          }
          // Process the response from your backend (e.g., show payment statusPage)
        } catch (error) {
          console.error("Error fetching session details:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [statusPage, sessionId]);

  return (
    <Container>
      <MotionWrapper>
        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box
            sx={{
              py: 6,
              display: "flex",
              gap: "3rem",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Typography variant="h1" gutterBottom mt={6} align="center">
              Paiement{" "}
              {statusPage === "success" ? (
                <span>
                  effectué
                  <CheckCircleOutlineIcon
                    fontSize={"large"}
                    sx={{ marginLeft: "12px" }}
                  />
                </span>
              ) : (
                <span>
                  annulé
                  <DoDisturbAltTwoToneIcon
                    fontSize={"large"}
                    sx={{ marginLeft: "12px" }}
                  />
                </span>
              )}
            </Typography>
            {statusPage !== "success" ? (
              <div>Ton paiement a été annulé. Tu ne seras pas débité. </div>
            ) : (
              <div>
                Merci pour ton paiement, {data?.session.metadata.firstName} !
                <br />
                <br />
                Consulte tes emails pour recevoir le détail de ton offre
                <br />
                <b>{productPage?.toUpperCase()}</b> <br />
                <br />
                (N'oublie pas de vérifier tes indésirables !)
              </div>
            )}
            <GradientButton
              variant="contained"
              color="primary"
              sx={{ margin: { xs: "0 auto", md: 0 } }}
              onClick={() => navigate(`/${productPage ?? ""}`)}
              endIcon={<ChevronRightIcon />}
            >
              Retour à la page de l'offre
            </GradientButton>
          </Box>
        )}
      </MotionWrapper>
    </Container>
  );
};

export default SuccessPage;
