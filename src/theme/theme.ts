import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#9d9d9d",
      main: "#2b2b2b",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#b3e1dc",
      main: "#007f6f",
      dark: "#005344",
      contrastText: "#e0f3f2",
    },
    background: {
      default: "#ffffff", // Fond principal
      paper: "#f5f5f5", // Fond des éléments en papier (comme les cartes)
    },
  },
  typography: {
    fontFamily: ["Inter"].join(","),
    allVariants: {
      fontFamily: "Inter",
      textTransform: "none",
    },
  },
});

export default theme;
