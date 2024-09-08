import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import theme from "./theme/theme";
import CourseDetail from "./pages/CourseDetail";
// import Témoignages from "./pages/Témoignages";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Normalize styles */}
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />}>
              <Route path="basic" element={<CourseDetail type="basic" />} />
              <Route path="premium" element={<CourseDetail type="premium" />} />
              <Route path="gold" element={<CourseDetail type="gold" />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
