import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const CashCarnival = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={8} textAlign="center" color="white">
        Cash Carnival Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Cash Carnival",
          symbols: ["🤡", "🎪", "🎡", "🎢", "🍭", "🍿", "💰", "🎟️", "🃏", "🎈", "🎉", "🎊"],
          payouts: [
            { symbols: ["🍭", "🍭", "🍭"], payout: 100 },
            { symbols: ["🍿", "🍿", "🍿"], payout: 200 },
            { symbols: ["🎪", "🎪", "🎪"], payout: 500 },
            { symbols: ["🎡", "🎡", "🎡"], payout: 1000 },
            { symbols: ["🎢", "🎢", "🎢"], payout: 2000 },
            { symbols: ["🤡", "🤡", "🤡"], payout: 5000 },
            { symbols: ["💰", "💰", "💰"], payout: 20000 },
          ],
          jackpot: 4000000,
          jackpotSymbol: "🃏",
          bonusSymbol: "🎟️",
          bonusMultiplier: 3,
          betOptions: [1, 2, 5, 10, 20, 50, 100],
          gamble: {
            type: "color",
            choices: ["Red", "Black"],
            multiplier: 2,
          },
        }}
      />
    </Box>
  );
};

export default CashCarnival;
