import React, { useState } from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";

const SlotMachine = ({ config }) => {
  const [slots, setSlots] = useState(Array(3).fill(config.symbols[0]));
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(config.betOptions[0]);

  const spin = () => {
    if (balance >= bet * paylines) {
      setBalance(balance - bet * paylines);
      setJackpot(jackpot + bet * paylines * 0.01);

      const newSlots = [];
      for (let i = 0; i < paylines; i++) {
        newSlots.push(slots.map(() => config.symbols[Math.floor(Math.random() * config.symbols.length)]));
      }
      setSlots(newSlots);

      let winnings = 0;
      newSlots.forEach((line) => {
        const payout = config.payouts.find((payout) => payout.symbols.every((symbol, i) => line[i] === symbol))?.payout;
        if (payout) {
          winnings += payout * bet;
        }
      });

      if (winnings > 0) {
        setBalance(balance + winnings);
        if (Math.random() < 0.1) {
          setBonusGame({ type: "pickAPrize", prizes: [bet * 2, bet * 5, bet * 10] });
        } else if (Math.random() < 0.05) {
          setBonusGame({ type: "freeSpins", spins: 10, multiplier: 3 });
        }
      }

      if (newSlots.some((line) => line.every((symbol) => symbol === config.jackpotSymbol))) {
        setBalance(balance + jackpot);
        setJackpot(config.jackpot);
      }
    }
  };

  const playBonusGame = (prize) => {
    if (bonusGame.type === "pickAPrize") {
      setBalance(balance + prize);
    } else if (bonusGame.type === "freeSpins") {
      let bonusWinnings = 0;
      for (let i = 0; i < bonusGame.spins; i++) {
        const newSlots = slots.map(() => config.symbols[Math.floor(Math.random() * config.symbols.length)]);
        const payout = config.payouts.find((payout) => payout.symbols.every((symbol, i) => newSlots[i] === symbol))?.payout;
        if (payout) {
          bonusWinnings += payout * bet * bonusGame.multiplier;
        }
      }
      setBalance(balance + bonusWinnings);
    }
    setBonusGame(null);
  };

  const playGamble = (choice) => {
    if (choice === gamble.answer) {
      setBalance(balance + gamble.amount);
    } else {
      setBalance(balance - gamble.amount);
    }
    setGamble(null);
  };

  return (
    <Box>
      <VStack spacing={4}>
        <Heading color="white">Balance: ${balance}</Heading>
        <Heading color="white" size="md">
          Jackpot: ${jackpot.toFixed(2)}
        </Heading>
        <Box display="flex" justifyContent="center">
          {slots.map((line, i) => (
            <Box key={i}>
              {line.map((slot, j) => (
                <Box key={j} fontSize="6xl" mx={4}>
                  {slot}
                </Box>
              ))}
            </Box>
          ))}
        </Box>
        <Box>
          <Text color="white">Bet per line:</Text>
          <Box display="flex">
            {config.betOptions.map((option) => (
              <Button key={option} onClick={() => setBet(option)} variant={bet === option ? "solid" : "outline"} colorScheme="blue" mx={2}>
                ${option}
              </Button>
            ))}
          </Box>
        </Box>
        <Box>
          <Text color="white">Paylines:</Text>
          <Box display="flex">
            {[1, 3, 5, 10].map((lines) => (
              <Button key={lines} onClick={() => setPaylines(lines)} variant={paylines === lines ? "solid" : "outline"} colorScheme="blue" mx={2}>
                {lines}
              </Button>
            ))}
          </Box>
        </Box>
        <Button onClick={spin} colorScheme="green" size="lg">
          Spin
        </Button>
        {bonusGame && (
          <Box>
            <Heading color="white">Bonus Game!</Heading>
            {bonusGame.type === "pickAPrize" && (
              <Box>
                <Text color="white">Pick a prize:</Text>
                <Box display="flex">
                  {bonusGame.prizes.map((prize, i) => (
                    <Button key={i} onClick={() => playBonusGame(prize)} colorScheme="purple" mx={2}>
                      ${prize}
                    </Button>
                  ))}
                </Box>
              </Box>
            )}
            {bonusGame.type === "freeSpins" && (
              <Text color="white">
                You won {bonusGame.spins} free spins with a {bonusGame.multiplier}x multiplier!
              </Text>
            )}
          </Box>
        )}
        {gamble && (
          <Box>
            <Heading color="white">Gamble your winnings!</Heading>
            <Text color="white">
              Risk ${gamble.amount} on the {gamble.type}. Win ${gamble.amount * 2}!
            </Text>
            <Box display="flex">
              {gamble.choices.map((choice, i) => (
                <Button key={i} onClick={() => playGamble(choice)} colorScheme="orange" mx={2}>
                  {choice}
                </Button>
              ))}
            </Box>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default SlotMachine;
