import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Classic from "./pages/Classic";
import Lucky7 from "./pages/Lucky7";
import FruitFrenzy from "./pages/FruitFrenzy";
import CashCarnival from "./pages/CashCarnival";
import DiamondDeluxe from "./pages/DiamondDeluxe";

function App() {
  return (
    <Router>
      <Box bg="gray.900" minHeight="100vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Classic />} />
          <Route path="/lucky7" element={<Lucky7 />} />
          <Route path="/fruitfrenzy" element={<FruitFrenzy />} />
          <Route path="/cashcarnival" element={<CashCarnival />} />
          <Route path="/diamonddeluxe" element={<DiamondDeluxe />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
