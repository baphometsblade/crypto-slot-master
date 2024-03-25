import React, { useState } from "react";
import { Box, Button, Flex, Heading, Image, Input, Text, useToast } from "@chakra-ui/react";
import { FaCoins, FaCreditCard, FaBitcoin } from "react-icons/fa";

const SlotMachine = ({ theme, jackpot, toast }) => {
  const [result, setResult] = useState(["🍒", "🍒", "🍒"]);
  const [balance, setBalance] = useState(100);

  const spin = () => {
    if (balance >= 1) {
      setBalance(balance - 1);
      const symbols = ["🍒", "🍊", "🍋", "🍉", "🔔", "⭐", "7️⃣", "💎", "🍀", "🎰", "🍍", "🥝", "🍇", "🍓", "🍭", "🎲", "🎯", "🎳", "🏆", "💰"];
      const newResult = [symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)], symbols[Math.floor(Math.random() * symbols.length)]];
      setResult(newResult);

      if (newResult.every((symbol) => symbol === "7️⃣")) {
        setBalance(balance + jackpot);
      } else if (newResult.every((symbol) => symbol === "💎")) {
        setBalance(balance + jackpot / 2);
      } else if (newResult.every((symbol) => symbol === "🍒")) {
        setBalance(balance + jackpot / 4);
      } else if (newResult.every((symbol) => symbol === "🔔")) {
        setBalance(balance + jackpot / 8);
      } else if (newResult.every((symbol) => symbol === "⭐")) {
        setBalance(balance + jackpot / 16);
      } else if (newResult.every((symbol) => symbol === "🍀")) {
        setBalance(balance + jackpot / 32);
      } else if (newResult.every((symbol) => symbol === newResult[0])) {
        setBalance(balance + jackpot / 64);
      }

      if (newResult.includes("🎰")) {
        toast({
          title: "Bonus Feature Triggered!",
          description: "Enjoy your free spins!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <Box borderWidth={1} borderRadius="lg" p={4} textAlign="center" boxShadow="md" transition="all 0.2s" _hover={{ boxShadow: "lg" }}>
      <Heading size="lg" mb={4}>
        {theme} Slot Machine
      </Heading>
      <Image src={`https://source.unsplash.com/featured/?${theme},slot,machine`} alt={`${theme} Slot Machine`} mb={4} mx="auto" />
      <Flex justify="center" mb={4}>
        <Text fontSize="4xl" mx={2}>
          {result[0]}
        </Text>
        <Text fontSize="4xl" mx={2}>
          {result[1]}
        </Text>
        <Text fontSize="4xl" mx={2}>
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
      3 x 💎 = 1/2 Jackpot <br />
      3 x 🍒 = 1/4 Jackpot <br />
      3 x 🔔 = 1/8 Jackpot <br />
      3 x ⭐ = 1/16 Jackpot <br />
      3 x 🍀 = 1/32 Jackpot <br />
      3 of any other matching symbol = 1/64 Jackpot <br />
      🎰 triggers the bonus feature!
    </Text>
  </Box>
);

const Index = () => {
  const toast = useToast();
  const [balance, setBalance] = useState(100);

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
      <Flex direction={["column", "row"]} justify="space-around" mb={8} wrap="wrap" bg="gray.800" p={[4, 8]} borderRadius="lg" boxShadow="lg">
        <SlotMachine theme="Classic" jackpot={5000} toast={toast} />
        <SlotMachine theme="Lucky 7" jackpot={2500} toast={toast} />
        <SlotMachine theme="Fruit Frenzy" jackpot={1000} toast={toast} />
        <SlotMachine theme="Golden Wheel" jackpot={500} toast={toast} />
        <SlotMachine theme="Diamond Deluxe" jackpot={250} toast={toast} />
        <SlotMachine theme="Mega Fortune" jackpot={100} toast={toast} />
        <SlotMachine theme="Royal Riches" jackpot={50} toast={toast} />
        <SlotMachine theme="Jackpot Jester" jackpot={25} toast={toast} />
        <SlotMachine theme="Cash Carnival" jackpot={10} toast={toast} />
        <SlotMachine theme="Bonus Bonanza" jackpot={5} toast={toast} />
      </Flex>
      <Text fontSize={["md", "xl"]} mb={4} textAlign="center" color="white">
        Your Balance: {balance} coins
      </Text>
      <Flex direction={["column", "row"]} justify="space-around" wrap="wrap">
        <PaymentOption icon={<FaCoins size={24} />} title="Deposit Coins" onSubmit={handleDeposit} />
        <PaymentOption icon={<FaCreditCard size={24} />} title="Visa/Mastercard" onSubmit={handleDeposit} />
        <PaymentOption icon={<FaBitcoin size={24} />} title="Cryptocurrency" onSubmit={handleDeposit} />
        <PaymentOption icon={<FaCoins size={24} />} title="Withdraw Coins" onSubmit={handleWithdrawal} />
      </Flex>
      <Rules />
    </Box>
  );
};

export default Index;
