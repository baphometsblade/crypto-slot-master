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
          symbols: ["🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣", "🍀", "🎰", "🎲", "🃏", "👑", "💎", "🎩", "🍾", "🎸", "🎷", "🎺", "🎻", "🥁", "👽", "👾", "🤖", "👻", "🎃"],
          payouts: [
            { symbols: ["🍒", "🍒", "🍒"], payout: 200 },
            { symbols: ["🍊", "🍊", "🍊"], payout: 400 },
            { symbols: ["🍋", "🍋", "🍋"], payout: 600 },
            { symbols: ["🍉", "🍉", "🍉"], payout: 800 },
            { symbols: ["🔔", "🔔", "🔔"], payout: 1000 },
            { symbols: ["⭐", "⭐", "⭐"], payout: 2000 },
            { symbols: ["7️⃣", "7️⃣", "7️⃣"], payout: 10000 },
            { symbols: ["🎰", "🎰", "🎰"], payout: 4000 },
            { symbols: ["🎲", "🎲", "🎲"], payout: 6000 },
            { symbols: ["🃏", "🃏", "🃏"], payout: 8000 },
            { symbols: ["👑", "👑", "👑"], payout: 12000 },
            { symbols: ["💎", "💎", "💎"], payout: 14000 },
            { symbols: ["🎩", "🎩", "🎩"], payout: 16000 },
            { symbols: ["🍾", "🍾", "🍾"], payout: 18000 },
            { symbols: ["🎸", "🎸", "🎸"], payout: 20000 },
            { symbols: ["🎷", "🎷", "🎷"], payout: 22000 },
            { symbols: ["🎺", "🎺", "🎺"], payout: 24000 },
            { symbols: ["🎻", "🎻", "🎻"], payout: 26000 },
            { symbols: ["🥁", "🥁", "🥁"], payout: 28000 },
          ],
          jackpot: 2000000,
          bonusSymbol: "🍀",
          bonusMultiplier: 3,
          betOptions: [1, 2, 3, 5, 10],
        }}
      />
    </Box>
  );
};

export default Classic;
