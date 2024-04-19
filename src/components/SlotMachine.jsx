import React, { useState } from "react";
import { Box, Button, Heading, SimpleGrid, Text, VStack, Spinner, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from "@chakra-ui/react";

const SlotMachine = ({ config, onJackpotWin, onBonusGameTrigger, onBalanceChange, onSpinHistoryUpdate, onSaveFavoriteBet, onScheduleAutoSpin, onSocialShare, onSetLossLimit, onBuyInsurance, onCustomizeTheme, onInviteFriend }) => {
  const [spinHistory, setSpinHistory] = useState([]);
  const [favoriteBets, setFavoriteBets] = useState([]);
  const [autoSpinInterval, setAutoSpinInterval] = useState(null);
  const [lossLimit, setLossLimit] = useState(null);
  const [insurance, setInsurance] = useState(false);
  const [customTheme, setCustomTheme] = useState(null);
  const [referralBonus, setReferralBonus] = useState(null);

  const updateSpinHistory = (result, payout) => {
    const newHistory = [{ result, payout }, ...spinHistory].slice(0, 10);
    setSpinHistory(newHistory);
    onSpinHistoryUpdate(newHistory);
  };

  const saveFavoriteBet = (bet) => {
    const newFavorites = [...favoriteBets, bet];
    setFavoriteBets(newFavorites);
    onSaveFavoriteBet(newFavorites);
  };

  const scheduleAutoSpin = (interval) => {
    clearInterval(autoSpinInterval);
    const newInterval = setInterval(() => spin(), interval);
    setAutoSpinInterval(newInterval);
    onScheduleAutoSpin(newInterval);
  };

  const shareWin = (payout) => {
    const message = `I just won ${payout} on Double Diamond Slots!`;
    navigator.share({ title: "Double Diamond Slots Win", text: message });
    onSocialShare(message);
  };

  const handleLossLimit = (limit) => {
    setLossLimit(limit);
    onSetLossLimit(limit);
  };

  const buyInsurance = () => {
    setInsurance(true);
    onBuyInsurance();
  };

  const customizeTheme = (theme) => {
    setCustomTheme(theme);
    onCustomizeTheme(theme);
  };

  const inviteFriend = (email) => {
    console.log(`Invite sent to ${email}`);
    setReferralBonus(referralBonus + 100);
    onInviteFriend(email);
  };

  const [slots, setSlots] = useState(Array.from({ length: 5 }, () => Array(3).fill(config.symbols[Math.floor(Math.random() * config.symbols.length)])));
  const [jackpot, setJackpot] = useState(config.jackpot);
  const [paylines, setPaylines] = useState(1);
  const [bonusGame, setBonusGame] = useState(null);
  const [gamble, setGamble] = useState(null);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(config.betOptions[0]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wilds, setWilds] = useState(config.wilds || []);
  const [scatters, setScatters] = useState(config.scatters || []);

  const [lastWin, setLastWin] = useState(0);
  const spin = () => {
    setIsSpinning(true);
    const spinSound = new Audio("/sounds/spin.mp3");
    spinSound.play();
    spinSound.volume = 0.5;
    setTimeout(() => {
      let winnings = 0;
      const newSlots = slots.map(() => config.symbols[Math.floor(Math.random() * config.symbols.length)]);
      setSlots(newSlots);
      winnings = newSlots.reduce((acc, line) => {
        const payout = config.payouts.find((p) => p.symbols.every((symbol, index) => symbol === line[index]))?.payout || 0;
        const multiplier = line.length === new Set(line).size ? 1 : line.length;
        return acc + payout * bet * multiplier;
      }, 0);
      setBalance(balance + winnings);
      setLastWin(winnings);
      updateSpinHistory(newSlots, winnings);
      setIsSpinning(false);
    }, 1000);
  };

  const maxBet = () => {
    setBet(config.betOptions[config.betOptions.length - 1]);
    spin();
  };

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
    <Box borderWidth={2} borderRadius="lg" p={4} bg="gray.900" boxShadow="dark-lg" overflow="hidden">
      <Box bg="blue.900" p={2} mb={4} borderRadius="md">
        <Heading color="white" size="lg">
          Slot Machine: {config.theme}
        </Heading>
      </Box>
      <VStack spacing={4} animation="fadeIn 1s" transform="scale(1.1)" transition="transform 0.3s ease-in-out">
        <Heading color="white" textShadow="0 0 10px rgba(255,255,255,0.9)">
          Balance: ${balance}
        </Heading>
        <Heading color="yellow.300" size="lg" textShadow="0 0 10px rgba(255,215,0,0.9)">
          Jackpot: ${jackpot.toFixed(2)}
        </Heading>
        <Box display="flex" justifyContent="center" alignItems="center" bg="blackAlpha.800" borderRadius="md" p={4} boxShadow="dark-lg">
          <SimpleGrid columns={3} spacing={5} animation="spin 1s ease-in-out">
            {slots.map((reel, i) => (
              <VStack key={i}>
                {reel.map((symbol, j) => (
                  <Box key={`${i}-${j}`} bg="gray.700" p={2} borderRadius="md" fontSize="5xl" textShadow="0 0 10px rgba(255,255,255,0.9)" transition="transform 0.5s" _hover={{ transform: "scale(1.1)" }}>
                    {symbol}
                  </Box>
                ))}
              </VStack>
            ))}
          </SimpleGrid>
        </Box>
        <Box>
          <Text color="white" animation="fadeIn 1s">
            Bet per line:
          </Text>
          <Slider aria-label="bet-slider" defaultValue={bet} min={config.betOptions[0]} max={config.betOptions[config.betOptions.length - 1]} step={config.betOptions[1] - config.betOptions[0]} onChangeEnd={(val) => setBet(val)}>
            <SliderTrack bg="blue.100">
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
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
        <Button
          onClick={() => spin()}
          colorScheme="green"
          size="lg"
          boxShadow="0 0 20px rgba(0,255,0,0.5)"
          isLoading={isSpinning}
          spinner={<Spinner size="lg" />}
          loadingText="Spinning..."
          _hover={{ boxShadow: "0 0 40px rgba(0,255,0,1.2)", transform: "scale(1.1)" }}
          onAnimationEnd={() => setBalance((balance) => balance + 100)}
          onDoubleClick={() => {
            spin();
            setTimeout(spin, 500);
          }}
        >
          Spin
        </Button>
        <Button colorScheme="orange" size="lg" boxShadow="0 0 20px rgba(255,165,0,0.5)" _hover={{ boxShadow: "0 0 20px rgba(255,165,0,0.8)" }} ml={4} onClick={maxBet}>
          Max Bet
        </Button>
        <Text color="yellow.300" fontSize="xl" mt={4} animation="bounce 2s infinite">
          Last Win: ${lastWin}
        </Text>
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
