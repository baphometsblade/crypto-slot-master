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
        <Link to="/">Classic</Link>
        <Spacer />
        <Link to="/lucky7">Lucky 7</Link>
        <Spacer />
        <Link to="/fruitfrenzy">Fruit Frenzy</Link>
        <Spacer />
        <Link to="/cashcarnival">Cash Carnival</Link>
        <Spacer />
        <Link to="/diamonddeluxe">Diamond Deluxe</Link>
        <Spacer />
        <Link to="/bonusbonanza">Bonus Bonanza</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
