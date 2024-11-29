import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Alert,
  TextField,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import CustomButton from "../components/Button";
import theme from "../theme/theme";
import Ebook from "../assets/ebook.png";
import MotionWrapper from "../components/MotionWrapper";
import InspirationalMe from "../components/Home/InspirationalMe";
import { useNavigate } from "react-router-dom";
import TestimonialsCarousel from "../components/Home/Testimonials";

const EbookFree: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/ebook`,
        formData
      );
      if (response.status === 201) {
        setSuccessMessage("Ton e-book a été envoyé à ton adresse email.");
        setErrorMessage("");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box sx={{ backgroundColor: "white", width: "100vw" }}>
        <MotionWrapper>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography
              variant="h1"
              align="center"
              gutterBottom
              my={1}
              lineHeight={1.5}
              sx={{
                color: "white",
                background:
                  "radial-gradient(circle, rgba(97,97,97,1) 0%, rgba(1,30,47,1) 84%, rgba(0,0,0,1) 100%)",
                padding: "0.2em 50px",
                width: "fit-content",
                borderRadius: "18px",
              }}
            >
              <span style={{ display: "block", marginBottom: "12px" }}>
                REÇOIS TON E-BOOK{" "}
                <span style={{ textDecoration: "underline" }}>GRATUIT</span>
              </span>
              <Typography variant="h3">Supply And Demand</Typography>
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box flex={1}>
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      m: { md: 4, xs: 2 },
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      borderRadius: "16px",
                      boxShadow: "0 4px 12px rgba(0, 0.6, 0.6, 0.2)",
                      padding: "2rem",
                      backgroundColor: theme.palette.background.default,
                    }}
                  >
                    {successMessage ? (
                      <Box>
                        <Typography variant="body1" gutterBottom my={2}>
                          Merci ! Tu recevras ton e-book QNG Capital Trading
                          très rapidement sur ta boîte mail !
                        </Typography>{" "}
                        <CustomButton
                          onClick={() => navigate("/")}
                          variant="contained"
                          color="primary"
                        >
                          Revenir à la page d'accueil{" "}
                        </CustomButton>
                      </Box>
                    ) : errorMessage ? (
                      <Box>
                        <Typography variant="body1" gutterBottom my={2}>
                          Désolé, une erreur est survenue. Réessaie ou
                          contacte-moi sur mon adresse mail
                        </Typography>
                        <CustomButton
                          onClick={() => {
                            setFormData({
                              firstName: "",
                              lastName: "",
                              email: "",
                            });
                            setErrorMessage("");
                          }}
                          variant="contained"
                          color="primary"
                        >
                          Réessayer{" "}
                        </CustomButton>
                      </Box>
                    ) : (
                      <>
                        <Typography variant="body1" gutterBottom my={2}>
                          Inscris-toi ci-dessous pour recevoir immédiatement ton
                          e-book gratuit dans ta boîte email 👇
                        </Typography>
                        <TextField
                          label="Prénom"
                          variant="outlined"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          label="Nom"
                          variant="outlined"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        <TextField
                          label="Email"
                          variant="outlined"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          type="email"
                          required
                          sx={{ marginBottom: "20px" }}
                        />
                        <CustomButton
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={loading}
                        >
                          {loading ? (
                            <CircularProgress size={24} />
                          ) : (
                            "Recevoir l'eBook"
                          )}{" "}
                        </CustomButton>
                        <Typography
                          variant="caption"
                          gutterBottom
                          my={2}
                          fontSize={12}
                          color={theme.palette.grey[800]}
                        >
                          En soumettant ce formulaire, tu acceptes que tes
                          données soient utilisées pour t'envoyer des
                          informations concernant l'ebook et mes offres.{" "}
                        </Typography>
                      </>
                    )}
                  </Box>
                </form>
              </Box>
              <Box sx={{ flex: 1 }}>
                <img
                  src={Ebook}
                  height={"100%"}
                  width={"100%"}
                  style={{ objectFit: "contain", alignContent: "center" }}
                />
              </Box>
            </Box>
            {successMessage && (
              <Alert severity="success" sx={{ mt: 2 }}>
                {successMessage}
              </Alert>
            )}
            {errorMessage && (
              <Alert severity="error" sx={{ mt: 2 }}>
                {errorMessage}
              </Alert>
            )}
            <Box sx={{ textAlign: "center", m: 3 }}>
              <Typography variant="h5" gutterBottom>
                Dans mon ebook exclusif, tu apprendras non seulement les bases
                du trading, mais aussi des stratégies éprouvées qui t'aideront à
                naviguer avec confiance dans les marchés financiers. Voici un
                aperçu de ce que tu trouveras à l'intérieur :
              </Typography>
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent={"center"}
                gap={2}
              >
                <Typography variant="h6" align="center" my={3} lineHeight={2}>
                  <strong>📈 Stratégies gagnantes</strong>
                  <br />
                  <strong>📊 Analyse des marchés </strong>
                  <br />
                </Typography>
                <Typography variant="h6" align="center" my={3} lineHeight={2}>
                  {" "}
                  <strong>🧠 Psychologie du trading</strong>
                  <br />
                  <strong>🔧 Outils et ressources</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
        </MotionWrapper>
      </Box>
      <Box sx={{ width: "100vw" }}>
        <InspirationalMe />
        <TestimonialsCarousel />
      </Box>
    </>
  );
};

export default EbookFree;
