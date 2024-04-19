import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const GoldenWheel = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={8} textAlign="center" color="white">
        Golden Wheel Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Golden Wheel",
          symbols: ["🎡", "🎢", "🎠", "🎪", "🎟️", "🍿", "🍭", "🎭"],
          payouts: [
            { symbols: ["🎡", "🎡", "🎡"], payout: 100 },
            { symbols: ["🎢", "🎢", "🎢"], payout: 200 },
            { symbols: ["🎠", "🎠", "🎠"], payout: 300 },
            { symbols: ["🎪", "🎪", "🎪"], payout: 400 },
            { symbols: ["🎟️", "🎟️", "🎟️"], payout: 500 },
            { symbols: ["🍿", "🍿", "🍿"], payout: 600 },
            { symbols: ["🍭", "🍭", "🍭"], payout: 700 },
            { symbols: ["🎭", "🎭", "🎭"], payout: 800 },
          ],
          jackpot: 50000,
          bonusSymbol: "🎟️",
          bonusMultiplier: 3,
          betOptions: [1, 2, 5, 10, 20],
          layout: "5x3",
        }}
      />
    </Box>
  );
};

export default GoldenWheel;
