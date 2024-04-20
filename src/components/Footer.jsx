import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { FaHome, FaBook, FaGavel } from "react-icons/fa";

function Footer() {
  return (
    <Box bg="gray.900" color="white" p={4} textAlign="center" display="flex" justifyContent="space-around" alignItems="center" _hover={{ color: "yellow.300", transform: "scale(1.05)" }}>
      <Text>
        <FaHome /> © 2024 Casino Site. All rights reserved.
      </Text>
      <Text>
        <FaBook /> Privacy Policy
      </Text>
      <Text>
        <FaGavel /> Terms of Service
      </Text>
    </Box>
  );
}

export default Footer;
