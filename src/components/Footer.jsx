import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.800" color="white" p={4} textAlign="center" display="flex" justifyContent="space-around" alignItems="center">
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
