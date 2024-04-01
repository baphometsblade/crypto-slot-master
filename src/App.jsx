import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Classic from "./pages/Classic";
import Lucky7 from "./pages/Lucky7";
import FruitFrenzy from "./pages/FruitFrenzy";
import CashCarnival from "./pages/CashCarnival";
import DiamondDeluxe from "./pages/DiamondDeluxe";
import BonusBonanza from "./pages/BonusBonanza";

function App() {
  return (
    <Router>
      <Box bg="gray.900" minHeight="100vh">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/lucky7" element={<Lucky7 />} />
          <Route path="/fruitfrenzy" element={<FruitFrenzy />} />
          <Route path="/cashcarnival" element={<CashCarnival />} />
          <Route path="/diamonddeluxe" element={<DiamondDeluxe />} />
          <Route path="/bonusbonanza" element={<BonusBonanza />} />
          // Removed routes that were causing warnings due to undeclared components
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
