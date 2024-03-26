import React, { useState } from "react";
import { Box, Button, Card, CardBody, CardHeader, Flex, Heading, Image, Input, InputGroup, InputLeftElement, SimpleGrid, Stack, Table, Tbody, Td, Text, Tr, useToast } from "@chakra-ui/react";
import { FaCoins, FaCreditCard, FaBitcoin } from "react-icons/fa";

const SlotMachine = ({ config, toast }) => {
  const { theme, symbols, payouts, jackpot, bonusSymbol, bonusMultiplier, betOptions } = config;

  const [result, setResult] = useState([symbols[0], symbols[0], symbols[0]]);
  const [balance, setBalance] = useState(1000);
  const [bet, setBet] = useState(betOptions[0]);
  const [isBonus, setIsBonus] = useState(false);
  const [bonusSpins, setBonusSpins] = useState(0);

  const spin = () => {
    if (balance >= bet && !isBonus) {
      setBalance(balance - bet);
      const newResult = [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
      setResult(newResult);

      const payout = calculatePayout(newResult);
      if (payout > 0) {
        setBalance(balance + payout);
      }

      if (newResult.includes(bonusSymbol)) {
        setIsBonus(true);
        setBonusSpins(3);
        toast({
          title: "Bonus Round Triggered!",
          description: "You won 3 free bonus spins!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } else if (isBonus && bonusSpins > 0) {
      setBonusSpins(bonusSpins - 1);
      const newResult = [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
      setResult(newResult);

      const payout = calculatePayout(newResult) * bonusMultiplier;
      if (payout > 0) {
        toast({
          title: `Bonus Payout: ${payout} coins!`,
          description: `Your bonus spin payout is multiplied by ${bonusMultiplier}x!`,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setBalance(balance + payout);
      }

      if (bonusSpins === 1) {
        setIsBonus(false);
      }
    }
  };

  const calculatePayout = (result) => {
    let payout = 0;

    payouts.forEach((rule) => {
      if (result.every((symbol) => rule.symbols.includes(symbol))) {
        payout = rule.payout * bet;
      }
    });

    if (result.every((symbol) => symbol === result[0])) {
      payout = jackpot;
    }

    return payout;
  };

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center" boxShadow="md" transition="all 0.2s" _hover={{ boxShadow: "lg" }}>
      <Heading size="lg" mb={4}>
        {theme} Slot Machine
      </Heading>
      <Image src={`../assets/${theme.toLowerCase().replace(/\s/g, "")}.jpg`} alt={`${theme} Slot Machine`} mb={4} mx="auto" />
      <Flex justify="center" mb={4}>
        <Text fontSize="4xl" mx="1rem">
          {result[0]}
        </Text>
        <Text fontSize="4xl" mx="1rem">
          {result[1]}
        </Text>
        <Text fontSize="4xl" mx="1rem">
          {result[2]}
        </Text>
      </Flex>
      <Text mb={4}>Jackpot: {jackpot} coins</Text>
      <Text mb={4}>Balance: {balance} coins</Text>
      <Button onClick={spin} isDisabled={balance < 1}>
        Spin
      </Button>
    </Box>
  );
};

const PaymentOption = ({ icon, title, onSubmit }) => {
  const [amount, setAmount] = useState("");

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center" transition="all 0.2s" _hover={{ boxShadow: "md" }}>
      <Flex align="center" mb={4}>
        {React.cloneElement(icon, { size: 32 })}
        <Heading size="md" ml={2}>
          {title}
        </Heading>
      </Flex>
      <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} mb={4} />
      <Button onClick={() => onSubmit(amount)}>Submit</Button>
    </Box>
  );
};

const Rules = () => (
  <Box borderWidth={1} borderRadius="lg" p={4} mb={8} bg="gray.800">
    <Heading size="lg" mb={4} textAlign="center" color="white">
      Payout Rules
    </Heading>
    <Text color="white">
      3 x 7️⃣ = Jackpot! <br />
      3 x 💎 = 40% of Jackpot <br />
      3 x 🍒 = 25% of Jackpot <br />
      3 x 🔔 = 20% of Jackpot <br />
      3 x ⭐ = 15% of Jackpot <br />
      3 x 🍀 = 10% of Jackpot <br />
      2 matching symbols = 5% of Jackpot <br />
      🌟 = 2% of Jackpot multiplied by up to 5x <br />
      3 of any other matching symbol = 1/64 Jackpot <br />
      🎰 triggers the bonus feature!
    </Text>
  </Box>
);

const Index = () => {
  const toast = useToast();
  const [balance, setBalance] = useState(100);
  const [jackpotWon, setJackpotWon] = useState(null);
  const [isBonusGameTriggered, setIsBonusGameTriggered] = useState(false);

  const handleJackpotWin = (amount) => {
    setJackpotWon(amount);
  };

  const handleBonusGameTrigger = () => {
    setIsBonusGameTriggered(true);
  };

  const handleBalanceChange = (newBalance) => {
    setBalance(newBalance);
  };

  const handleDeposit = (amount) => {
    setBalance(balance + parseInt(amount));
    toast({
      title: "Deposit Successful",
      description: `${amount} coins added to your balance.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleWithdrawal = (amount) => {
    if (balance >= amount) {
      setBalance(balance - parseInt(amount));
      toast({
        title: "Withdrawal Successful",
        description: `${amount} coins withdrawn from your balance.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Insufficient Balance",
        description: "You don't have enough coins to withdraw.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={[4, 8]} bg="gray.900" minHeight="100vh">
      <Heading size={["2xl", "4xl"]} mb={[4, 8]} textAlign="center" color="white">
        Double Diamond Slots
      </Heading>
      <Flex direction={["column", "row"]} justify="space-around" mb={8} wrap="wrap" bg="gray.800" p={[4, 8]} borderRadius="lg" boxShadow="dark-lg" backgroundImage="url('/images/casinobg.jpg')" backgroundSize="cover" backgroundPosition="center">
        <SlotMachine
          config={{
            theme: "Classic",
            symbols: ["🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣", "🍀"],
            payouts: [
              { symbols: ["🍒", "🍒", "🍒"], payout: 10 },
              { symbols: ["🍊", "🍊", "🍊"], payout: 20 },
              { symbols: ["🍋", "🍋", "🍋"], payout: 30 },
              { symbols: ["🍉", "🍉", "🍉"], payout: 40 },
              { symbols: ["🔔", "🔔", "🔔"], payout: 50 },
              { symbols: ["⭐", "⭐", "⭐"], payout: 100 },
              { symbols: ["7️⃣", "7️⃣", "7️⃣"], payout: 500 },
            ],
            jackpot: 5000,
            bonusSymbol: "🍀",
            bonusMultiplier: 3,
            betOptions: [1, 2, 3, 5, 10],
          }}
          toast={toast}
        />
        <SlotMachine
          config={{
            theme: "Lucky 7",
            symbols: ["🎰", "🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣"],
            payouts: [
              { symbols: ["🍒", "🍒", "🍒"], payout: 5 },
              { symbols: ["🍊", "🍊", "🍊"], payout: 10 },
              { symbols: ["🍋", "🍋", "🍋"], payout: 15 },
              { symbols: ["🍉", "🍉", "🍉"], payout: 20 },
              { symbols: ["🔔", "🔔", "🔔"], payout: 25 },
              { symbols: ["⭐", "⭐", "⭐"], payout: 50 },
              { symbols: ["7️⃣", "7️⃣", "7️⃣"], payout: 250 },
            ],
            jackpot: 2500,
            bonusSymbol: "🎰",
            bonusMultiplier: 5,
            betOptions: [1, 2, 3, 5, 10, 20],
          }}
          toast={toast}
        />
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
          toast={toast}
        />

        {}
      </Flex>
      <Text fontSize={["md", "xl"]} mb={4} textAlign="center" color="white">
        Your Balance: {balance} coins
      </Text>
      <SimpleGrid columns={[1, null, 2]} spacing={8} justifyItems="center" mb={8}>
        <Card maxW="sm" borderRadius="lg" boxShadow="md" bg="gray.700">
          <CardHeader>
            <Heading size="md">Deposit Coins</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaCoins color="gray.300" />} />
                <Input type="number" placeholder="Amount" />
              </InputGroup>
              <Button colorScheme="green">Deposit</Button>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW="sm" borderRadius="lg" boxShadow="md" bg="gray.700">
          <CardHeader>
            <Heading size="md">Visa/Mastercard</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaCreditCard color="gray.300" />} />
                <Input type="number" placeholder="Amount" />
              </InputGroup>
              <Button colorScheme="green">Deposit</Button>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW="sm" borderRadius="lg" boxShadow="md" bg="gray.700">
          <CardHeader>
            <Heading size="md">Cryptocurrency</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaBitcoin color="gray.300" />} />
                <Input type="number" placeholder="Amount" />
              </InputGroup>
              <Button colorScheme="green">Deposit</Button>
            </Stack>
          </CardBody>
        </Card>

        <Card maxW="sm" borderRadius="lg" boxShadow="md" bg="gray.700">
          <CardHeader>
            <Heading size="md">Withdraw Coins</Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaCoins color="gray.300" />} />
                <Input type="number" placeholder="Amount" />
              </InputGroup>
              <Button colorScheme="red">Withdraw</Button>
            </Stack>
          </CardBody>
        </Card>
      </SimpleGrid>
      <Box borderWidth={1} borderRadius="lg" p={4} mb={8} bg="gray.800">
        <Heading size="lg" mb={4} textAlign="center" color="white">
          Payout Rules
        </Heading>
        <Table variant="simple" size="sm" color="white">
          <Tbody>
            <Tr>
              <Td>3 x 7️⃣</Td>
              <Td>Jackpot!</Td>
            </Tr>
            <Tr>
              <Td>3 x 💎</Td>
              <Td>40% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x 🍒</Td>
              <Td>25% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x 🔔</Td>
              <Td>20% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x ⭐</Td>
              <Td>15% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x 🍀</Td>
              <Td>10% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>2 matching symbols</Td>
              <Td>5% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>🌟</Td>
              <Td>2% of Jackpot multiplied by up to 5x</Td>
            </Tr>
            <Tr>
              <Td>3 of any other matching symbol</Td>
              <Td>1/64 Jackpot</Td>
            </Tr>
            <Tr>
              <Td>🎰</Td>
              <Td>Triggers the bonus feature!</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Box borderWidth={1} borderRadius="lg" p={4} mb={8} bg="gray.800">
        <Heading size="lg" mb={4} textAlign="center" color="white">
          Payout Rules
        </Heading>
        <Table variant="simple" size="sm" color="white">
          <Tbody>
            <Tr>
              <Td>3 x 7️⃣</Td>
              <Td>Jackpot!</Td>
            </Tr>
            <Tr>
              <Td>3 x 💎</Td>
              <Td>40% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x 🍒</Td>
              <Td>25% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x 🔔</Td>
              <Td>20% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x ⭐</Td>
              <Td>15% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>3 x 🍀</Td>
              <Td>10% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>2 matching symbols</Td>
              <Td>5% of Jackpot</Td>
            </Tr>
            <Tr>
              <Td>🌟</Td>
              <Td>2% of Jackpot multiplied by up to 5x</Td>
            </Tr>
            <Tr>
              <Td>3 of any other matching symbol</Td>
              <Td>1/64 Jackpot</Td>
            </Tr>
            <Tr>
              <Td>🎰</Td>
              <Td>Triggers the bonus feature!</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Index;
