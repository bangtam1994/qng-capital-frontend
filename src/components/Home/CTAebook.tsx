import React, { useState } from "react";
import { Box, Button, Modal, Typography, TextField } from "@mui/material";
import TelegramIcon from "@mui/icons-material/Telegram";
import CustomButton from "../Button";
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
    width: "100%",
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "400px", md: "600px" },
    height: { md: "300px" },
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const handleSubmit = () => {
    console.log("submitted", email);
  };
  return (
    <MotionWrapper>
      <Box sx={ctaBoxStyle}>
        <Typography variant="h5" gutterBottom>
          Abonne-toi à ma newsletter !
        </Typography>
        <CustomButton
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ mt: 2 }}
        >
          S'abonner
        </CustomButton>
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          {step === 0 ? (
            <>
              {" "}
              <Typography variant="h6" component="h2" gutterBottom>
                Abonnez-vous à la newsletter
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Vous recevrez toutes les news à propos des formations à venir et
                actualités de QNG Capital.
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
              </Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<TelegramIcon />}
                fullWidth
                onClick={handleSubmit}
              >
                S'abonner
              </Button>
            </>
          ) : (
            <Typography variant="h6" component="h2" gutterBottom>
              Merci pour votre inscription ! Vous recevrez toutes les news de
              QNG sur votre boîte mail.
            </Typography>
          )}
        </Box>
      </Modal>
    </MotionWrapper>
  );
};

export default CTAEbook;
