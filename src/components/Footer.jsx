import React from "react";
import { Box, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Box bg="gray.700" color="white" p={4} textAlign="center" display="flex" justifyContent="space-between">
      <Text>© 2024 Casino Site. All rights reserved.</Text>
      <Text>Privacy Policy</Text>
      <Text>Terms of Service</Text>
    </Box>
  );
}

export default Footer;
