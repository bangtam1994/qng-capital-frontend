import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9d9d9d",
      main: "#1d1d1f",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#c465f7",
      main: "#a215ee",
      dark: "#7a2eac",
      contrastText: "#e0f3f2",
    },

    background: {
      default: "#ffffff",
      paper: "#E1E3EA",
    },
  },

  typography: {
    fontFamily: [
      "Plus Jakarta Sans",
      "Raleway",
      "Inter",
      "Plus Jakarta Sans",
    ].join(","),
    allVariants: {
      fontFamily: "Raleway",
      textTransform: "none",
    },
    button: { fontSize: "1.2rem" },
    h1: {
      fontSize: "3.2rem",
      fontWeight: 700,
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.9rem",
      fontWeight: 800,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      "@media (max-width:600px)": {
        fontSize: "1.8rem",
      },
    },
    h4: {
      fontSize: "1.65rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "1.3rem",
      },
    },
    h6: {
      fontSize: "1.2rem",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "1.1rem",
      },
    },
    body1: {
      fontSize: "1.2rem",
      fontWeight: 400,
      "@media (max-width:600px)": {
        fontSize: "1rem",
      },
    },
    body2: {
      fontSize: "1.1rem",
      fontWeight: 500,
      "@media (max-width:600px)": {
        fontSize: "0.9rem",
      },
    },
  },
});

export default theme;
