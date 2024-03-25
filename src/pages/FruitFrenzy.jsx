import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const FruitFrenzy = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={8} textAlign="center" color="white">
        Fruit Frenzy Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Fruit Frenzy",
          symbols: ["🍒", "🍊", "🍋", "🍉", "🍇", "🍓", "🍍", "🥝"],
          payouts: [
            { symbols: ["🍒", "🍒", "🍒"], payout: 2 },
            { symbols: ["🍊", "🍊", "🍊"], payout: 4 },
            { symbols: ["🍋", "🍋", "🍋"], payout: 6 },
            { symbols: ["🍉", "🍉", "🍉"], payout: 8 },
            { symbols: ["🍇", "🍇", "🍇"], payout: 10 },
            { symbols: ["🍓", "🍓", "🍓"], payout: 20 },
            { symbols: ["🍍", "🍍", "🍍"], payout: 50 },
            { symbols: ["🥝", "🥝", "🥝"], payout: 100 },
          ],
          jackpot: 1000,
          bonusSymbol: "🍓",
          bonusMultiplier: 2,
          betOptions: [1, 2, 3, 5],
        }}
      />
    </Box>
  );
};

export default FruitFrenzy;
