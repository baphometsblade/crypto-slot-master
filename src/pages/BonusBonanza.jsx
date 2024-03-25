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
            { symbols: ["💵", "💵", "💵"], payout: 15 },
            { symbols: ["💲", "💲", "💲"], payout: 30 },
            { symbols: ["🎁", "🎁", "🎁"], payout: 45 },
            { symbols: ["🎉", "🎉", "🎉"], payout: 60 },
            { symbols: ["🎊", "🎊", "🎊"], payout: 75 },
            { symbols: ["🤑", "🤑", "🤑"], payout: 150 },
            { symbols: ["💎", "💎", "💎"], payout: 500 },
          ],
          jackpot: 7500,
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
