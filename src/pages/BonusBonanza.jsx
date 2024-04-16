import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const BonusBonanza = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb="8" textAlign="center" color="white">
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
          jackpot: 150000,
          jackpotSymbol: "💎",
          bonusSymbol: "🎁",
          bonusMultiplier: 3,
          betOptions: [1, 5, 10, 20, 50, 100],
        }}
      />
    </Box>
  );
};

export default BonusBonanza;
