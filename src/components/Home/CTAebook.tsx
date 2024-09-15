import React, { useState } from "react";
import {
  Box,
  Button,
  Modal,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import CustomButton from "../Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MotionWrapper from "../MotionWrapper";

const CTAEbook = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(0);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setStep(0);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const ctaBoxStyle = {
    background: "linear-gradient(135deg, #a1d4ca, #0db595)",
    borderRadius: "20px",
    padding: "30px",
    textAlign: "center",
    color: "#fff",
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 500,
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <MotionWrapper>
      <Box sx={ctaBoxStyle}>
        <Typography variant="h5" gutterBottom>
          Télécharge mon e-book trader finance !
        </Typography>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ mt: 2 }}
        >
          Recevoir l'e-book gratuitement
        </CustomButton>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {step === 0 ? (
            <>
              {" "}
              <Typography variant="h6" component="h2" gutterBottom>
                Rejoignez notre canal Telegram pour recevoir votre e-book
                gratuitement
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                J'y partage aussi des analyses et des news chaque semaine{" "}
              </Typography>
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
                  onChange={handleEmail}
                />
                <IconButton
                  onClick={() => {
                    console.log("entered email>>>>", email);
                    setStep(1);
                  }}
                >
                  <ArrowRightAltIcon />
                </IconButton>
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<TelegramIcon />}
                href="https://t.me/qngcapital"
                fullWidth
                target="_blank"
              >
                Rejoindre le canal Telegram
              </Button>
            </>
          ) : (
            <Typography variant="h6" component="h2" gutterBottom>
              Merci ! Vous recevrez votre e-book dans les plus bref délais.
            </Typography>
          )}
        </Box>
      </Modal>
    </MotionWrapper>
  );
};

export default CTAEbook;
