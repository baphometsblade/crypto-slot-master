import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const Classic = () => {
  return (
    <Box p={8} bg="gray.800" borderRadius="lg" boxShadow="dark-lg">
      <Heading size="xl" mb={4} textAlign="center" color="yellow.300">
        Classic Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Vegas Nights",
          symbols: ["🎰", "🎲", "🃏", "🍸", "💰", "👑", "🚗", "🏆"],
          payouts: [
            { symbols: ["🎰", "🎰", "🎰"], payout: 100 },
            { symbols: ["🎲", "🎲", "🎲"], payout: 200 },
            { symbols: ["🃏", "🃏", "🃏"], payout: 300 },
            { symbols: ["🍸", "🍸", "🍸"], payout: 400 },
            { symbols: ["💰", "💰", "💰"], payout: 500 },
            { symbols: ["👑", "👑", "👑"], payout: 600 },
            { symbols: ["🚗", "🚗", "🚗"], payout: 700 },
            { symbols: ["🏆", "🏆", "🏆"], payout: 800 },
          ],
          jackpot: 2000000,
          bonusSymbol: "🍀",
          bonusMultiplier: 3,
          betOptions: [1, 2, 3, 5, 10],
          layout: "5x3",
          wilds: ["🎩"],
          scatters: ["🎰"],
          layout: "5x3",
        }}
      />
    </Box>
  );
};

export default Classic;
