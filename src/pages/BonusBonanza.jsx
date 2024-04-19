import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const BonusBonanza = () => {
  return (
    <Box p={8}>
      <Heading size="xl" mb="4" textAlign="center" color="yellow.300">
        Bonus Bonanza Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Bonus Bonanza",
          symbols: ["💎", "🎁", "🎉", "🎊", "💵", "💲", "🤑", "🏦"],
          payouts: [
            { symbols: ["💵", "💵", "💵"], payout: 300 },
            { symbols: ["💲", "💲", "💲"], payout: 600 },
            { symbols: ["🎁", "🎁", "🎁"], payout: 900 },
            { symbols: ["🎉", "🎉", "🎉"], payout: 1200 },
            { symbols: ["🎊", "🎊", "🎊"], payout: 1500 },
            { symbols: ["🤑", "🤑", "🤑"], payout: 3000 },
            { symbols: ["💎", "💎", "💎"], payout: 10000 },
          ],
          jackpot: 3000000,
          jackpotSymbol: "💎",
          bonusSymbol: "🎁",
          bonusMultiplier: 3,
          betOptions: [1, 5, 10, 20, 50, 100],
          layout: "5x3",
          layout: "5x3",
        }}
      />
    </Box>
  );
};

export default BonusBonanza;
