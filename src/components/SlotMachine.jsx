import React, { useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const SlotMachine = ({ config }) => {
  const [slots, setSlots] = useState(Array(3).fill(config.symbols[0]));
  const [balance, setBalance] = useState(100);
  const [bet, setBet] = useState(config.betOptions[0]);

  const spin = () => {
    if (balance >= bet) {
      const newSlots = slots.map(() =>
        config.symbols[Math.floor(Math.random() * config.symbols.length)]
      );
      setSlots(newSlots);
      setBalance(balance - bet);
      const payout = config.payouts.find((payout) =>
        payout.symbols.every((symbol, i) => newSlots[i] === symbol)
      )?.payout;
      if (payout) {
        setBalance(balance + payout * bet);
      }
    }
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Heading color="white">Balance: ${balance}</Heading>
        <Box display="flex" justifyContent="center">
          {slots.map((slot, i) => (
            <Box key={i} fontSize="6xl" mx={4}>
              {slot}
            </Box>
          ))}
        </Box>
        <Box>
          <Text color="white">Bet:</Text>
          <Box display="flex">
            {config.betOptions.map((option) => (
              <Button
                key={option}
                onClick={() => setBet(option)}
                variant={bet === option ? "solid" : "outline"}
                colorScheme="blue"
                mx={2}
              >
                ${option}
              </Button>
            ))}
          </Box>
        </Box>
        <Button onClick={spin} colorScheme="green" size="lg">
          Spin
        </Button>
      </VStack>
    </Box>
  );
};

export default SlotMachine;