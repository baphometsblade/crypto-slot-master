import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Classic from "./pages/Classic";
import Lucky7 from "./pages/Lucky7";
import FruitFrenzy from "./pages/FruitFrenzy";
import CashCarnival from "./pages/CashCarnival";
import DiamondDeluxe from "./pages/DiamondDeluxe";
import BonusBonanza from "./pages/BonusBonanza";
import GoldenWheel from "./pages/GoldenWheel";
import JackpotJester from "./pages/JackpotJester";
import MegaFortune from "./pages/MegaFortune";
import RoyalRiches from "./pages/RoyalRiches";

function App() {
  return (
    <Router>
      <Box bg="background.500" minHeight="100vh" p={4} bgImage="url('/images/casino-bg.jpg')" bgSize="cover" bgPosition="center">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/classic" element={<Classic />} />
          <Route path="/lucky7" element={<Lucky7 />} />
          <Route path="/fruitfrenzy" element={<FruitFrenzy />} />
          <Route path="/cashcarnival" element={<CashCarnival />} />
          <Route path="/diamonddeluxe" element={<DiamondDeluxe />} />
          <Route path="/bonusbonanza" element={<BonusBonanza />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/goldenwheel" element={<GoldenWheel />} />
          <Route path="/jackpotjester" element={<JackpotJester />} />
          <Route path="/megafortune" element={<MegaFortune />} />
          <Route path="/royalriches" element={<RoyalRiches />} />
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
