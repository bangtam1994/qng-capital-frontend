import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Plans from "./pages/Plans";
import Contact from "./pages/Contact";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import theme from "./theme/theme";
import PlanDetail from "./pages/PlanDetail";
// import Témoignages from "./pages/Témoignages";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/plans" element={<Plans />}>
              <Route path="basic" element={<PlanDetail type="basic" />} />
              <Route path="premium" element={<PlanDetail type="premium" />} />
              <Route path="gold" element={<PlanDetail type="gold" />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
