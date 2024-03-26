import React from "react";
import { Box, Text } from "@chakra-ui/react";

const FusionCard = ({ card }) => {
  return (
    <Box borderWidth={2} borderRadius="md" p={4} bg="purple.800">
      <Text fontSize="lg" color="white" mb={2}>
        {card.name}
      </Text>
      <Text fontSize="sm" color="purple.200">
        Fusion Card
      </Text>
      <Text color="white" mt={2}>
        {card.description}
      </Text>
    </Box>
  );
};

export default FusionCard;
