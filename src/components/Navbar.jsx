import React from "react";
import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.800" color="white">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Double Diamond Slots
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>{}</Box>

      <Box display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center">
        <Link to="/" style={{ marginRight: "1rem", fontWeight: "bold" }}>
          Classic
        </Link>
        <Link to="/lucky7" style={{ marginRight: "1rem" }}>
          Lucky 7
        </Link>
        <Link to="/fruitfrenzy" style={{ marginRight: "1rem" }}>
          Fruit Frenzy
        </Link>
        <Link to="/cashcarnival" style={{ marginRight: "1rem" }}>
          Cash Carnival
        </Link>
        <Link to="/diamonddeluxe" style={{ marginRight: "1rem" }}>
          Diamond Deluxe
        </Link>
        <Link to="/bonusbonanza" style={{ marginRight: "1rem" }}>
          Bonus Bonanza
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
