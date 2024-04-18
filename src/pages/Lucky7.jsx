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
          symbols: ["🎰", "🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣", "🎲", "🃏", "👑", "💎", "🎩", "🍾", "🏆", "🎸", "🎷", "🎺", "🎻", "🥁", "👽", "👾", "🤖", "👻", "🎃"],
          payouts: [
            { symbols: ["🍒", "🍒", "🍒"], payout: 5 },
            { symbols: ["🍊", "🍊", "🍊"], payout: 10 },
            { symbols: ["🍋", "🍋", "🍋"], payout: 15 },
            { symbols: ["🍉", "🍉", "🍉"], payout: 20 },
            { symbols: ["🔔", "🔔", "🔔"], payout: 25 },
            { symbols: ["⭐", "⭐", "⭐"], payout: 50 },
            { symbols: ["7️⃣", "7️⃣", "7️⃣"], payout: 250 },
            { symbols: ["🎲", "🎲", "🎲"], payout: 100 },
            { symbols: ["🃏", "🃏", "🃏"], payout: 150 },
            { symbols: ["👑", "👑", "👑"], payout: 300 },
            { symbols: ["💎", "💎", "💎"], payout: 350 },
            { symbols: ["🎩", "🎩", "🎩"], payout: 400 },
            { symbols: ["🍾", "🍾", "🍾"], payout: 450 },
            { symbols: ["🏆", "🏆", "🏆"], payout: 500 },
            { symbols: ["🎸", "🎸", "🎸"], payout: 550 },
            { symbols: ["🎷", "🎷", "🎷"], payout: 600 },
            { symbols: ["🎺", "🎺", "🎺"], payout: 650 },
            { symbols: ["🎻", "🎻", "🎻"], payout: 700 },
            { symbols: ["🥁", "🥁", "🥁"], payout: 750 },
          ],
          jackpot: 50000,
          bonusSymbol: "🎰",
          bonusMultiplier: 5,
          betOptions: [1, 2, 3, 5, 10, 20],
          wilds: ["👑"],
          scatters: ["🎲"],
        }}
      />
    </Box>
  );
};

export default Lucky7;
