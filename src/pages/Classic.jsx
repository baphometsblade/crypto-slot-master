import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const Classic = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={8} textAlign="center" color="white">
        Classic Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Classic",
          symbols: ["🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣", "🍀", "🎰", "🎲", "🃏", "👑", "💎", "🎩", "🍾"],
          payouts: [
            { symbols: ["🍒", "🍒", "🍒"], payout: 10 },
            { symbols: ["🍊", "🍊", "🍊"], payout: 20 },
            { symbols: ["🍋", "🍋", "🍋"], payout: 30 },
            { symbols: ["🍉", "🍉", "🍉"], payout: 40 },
            { symbols: ["🔔", "🔔", "🔔"], payout: 50 },
            { symbols: ["⭐", "⭐", "⭐"], payout: 100 },
            { symbols: ["7️⃣", "7️⃣", "7️⃣"], payout: 500 },
            { symbols: ["🎰", "🎰", "🎰"], payout: 200 },
            { symbols: ["🎲", "🎲", "🎲"], payout: 300 },
            { symbols: ["🃏", "🃏", "🃏"], payout: 400 },
            { symbols: ["👑", "👑", "👑"], payout: 600 },
            { symbols: ["💎", "💎", "💎"], payout: 700 },
            { symbols: ["🎩", "🎩", "🎩"], payout: 800 },
            { symbols: ["🍾", "🍾", "🍾"], payout: 900 },
          ],
          jackpot: 5000,
          bonusSymbol: "🍀",
          bonusMultiplier: 3,
          betOptions: [1, 2, 3, 5, 10],
        }}
      />
    </Box>
  );
};

export default Classic;
