import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const Lucky7 = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={8} textAlign="center" color="white">
        Lucky 7 Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Lucky 7",
          symbols: ["🎰", "🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣"],
          payouts: [
            { symbols: ["🍒", "🍒", "🍒"], payout: 5 },
            { symbols: ["🍊", "🍊", "🍊"], payout: 10 },
            { symbols: ["🍋", "🍋", "🍋"], payout: 15 },
            { symbols: ["🍉", "🍉", "🍉"], payout: 20 },
            { symbols: ["🔔", "🔔", "🔔"], payout: 25 },
            { symbols: ["⭐", "⭐", "⭐"], payout: 50 },
            { symbols: ["7️⃣", "7️⃣", "7️⃣"], payout: 250 },
          ],
          jackpot: 2500,
          bonusSymbol: "🎰",
          bonusMultiplier: 5,
          betOptions: [1, 2, 3, 5, 10, 20],
        }}
      />
    </Box>
  );
};

export default Lucky7;
