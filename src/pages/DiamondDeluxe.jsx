import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import SlotMachine from "../components/SlotMachine";

const DiamondDeluxe = () => {
  return (
    <Box p={8}>
      <Heading size="2xl" mb={8} textAlign="center" color="white">
        Diamond Deluxe Slot Machine
      </Heading>
      <SlotMachine
        config={{
          theme: "Diamond Deluxe",
          symbols: ["💎", "🔷", "🔶", "❤️", "🔵", "🟢", "🟡", "🟣", "🔴", "⚪", "⚫", "🟠"],
          payouts: [
            { symbols: ["❤️", "❤️", "❤️"], payout: 10 },
            { symbols: ["🔵", "🔵", "🔵"], payout: 20 },
            { symbols: ["🟢", "🟢", "🟢"], payout: 30 },
            { symbols: ["🟡", "🟡", "🟡"], payout: 40 },
            { symbols: ["🟣", "🟣", "🟣"], payout: 50 },
            { symbols: ["🔶", "🔶", "🔶"], payout: 100 },
            { symbols: ["🔷", "🔷", "🔷"], payout: 250 },
            { symbols: ["💎", "💎", "💎"], payout: 1000 },
          ],
          jackpot: 200000,
          bonusSymbol: "💎",
          bonusMultiplier: 5,
          betOptions: [1, 2, 5, 10, 20, 50],
          layout: "5x3",
        }}
      />
    </Box>
  );
};

export default DiamondDeluxe;
