import React, { useState } from "react";
import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import CustomButton from "../Button";
import axios from "axios";

interface EmailCTAProps {
  buttonTitle: string;
  modalTitle: string;
  modalCaption: string;
  from: string;
}

const EmailCTA = ({
  buttonTitle,
  modalTitle,
  modalCaption,
  from,
}: EmailCTAProps) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setErrorMessage("");
    setSuccessMessage("");
    setLoading(false);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", md: "600px" },
    height: { md: "300px" },
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    console.log(email);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/user/suscribe`,
        { email, from }
      );
      if (response.status === 201) {
        setSuccessMessage(
          "Merci! Tu seras tenu au courant des prochaines actus de QNG Capital."
        );
        setErrorMessage("");
      } else if (response.status === 409) {
        setErrorMessage("Ton adresse mail a déjà été enregistrée.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);

      setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      setSuccessMessage("");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={handleOpen}
        sx={{ mt: 2 }}
      >
        {buttonTitle}
      </CustomButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {successMessage ? (
            <Box textAlign={"center"}>
              <Typography variant="body1" gutterBottom my={2}>
                Merci ! Tu recevras toutes les news de QNG Capital Trading très
                rapidement sur ta boîte mail !
              </Typography>{" "}
              <CustomButton
                onClick={() => handleClose()}
                variant="contained"
                color="primary"
              >
                Fermer
              </CustomButton>
            </Box>
          ) : errorMessage ? (
            <Box>
              <Typography variant="body1" gutterBottom my={2}>
                Désolé, une erreur est survenue. Réessaie ou contacte-moi sur
                mon adresse mail contact@qngcapital.com
              </Typography>
              <CustomButton
                onClick={() => {
                  setEmail("");
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
              <Typography
                variant="h5"
                component="h2"
                fontWeight={600}
                gutterBottom
              >
                {modalTitle}
              </Typography>
              <Typography variant="body2" sx={{ mb: 4 }}>
                {modalCaption}
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 2,
                    mb: 2,
                  }}
                >
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    type="email"
                    onChange={handleEmail}
                    value={email}
                    required
                  />
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<TelegramIcon />}
                  fullWidth
                  disabled={loading}
                  type="submit"
                >
                  S'abonner
                </Button>
              </form>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default EmailCTA;
