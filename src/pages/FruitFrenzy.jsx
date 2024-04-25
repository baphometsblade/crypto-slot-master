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
          theme: "Tropical Paradise",
          symbols: ["🌴", "🍍", "🥥", "🍹", "🌺", "🐠", "🏖️", "🌊"],
          payouts: [
            { symbols: ["🌴", "🌴", "🌴"], payout: 50 },
            { symbols: ["🍍", "🍍", "🍍"], payout: 100 },
            { symbols: ["🥥", "🥥", "🥥"], payout: 150 },
            { symbols: ["🍹", "🍹", "🍹"], payout: 200 },
            { symbols: ["🌺", "🌺", "🌺"], payout: 250 },
            { symbols: ["🐠", "🐠", "🐠"], payout: 300 },
            { symbols: ["🏖️", "🏖️", "🏖️"], payout: 350 },
            { symbols: ["🌊", "🌊", "🌊"], payout: 400 },
          ],
          jackpot: 20000,
          bonusSymbol: "🍓",
          bonusMultiplier: 2,
          betOptions: [1, 2, 3, 5],
          layout: "5x3",
        }}
      />
    </Box>
  );
};

export default FruitFrenzy;
