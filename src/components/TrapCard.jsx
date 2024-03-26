import React from "react";
import { Box, Text } from "@chakra-ui/react";

const TrapCard = ({ card, onActivate }) => {
  return (
    <Box borderWidth={2} borderRadius="md" p={4} bg="gray.700" onClick={onActivate} cursor="pointer">
      <Text fontSize="lg" color="white" mb={2}>
        {card.name}
      </Text>
      <Text color="gray.400">{card.description}</Text>
    </Box>
  );
};

export default TrapCard;
