import React from "react";
import { Box, Flex, Heading, Spacer, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1rem" bg="brand.900" color="white" boxShadow="0px 4px 10px rgba(0,0,0,0.5)" _hover={{ bg: "brand.850", transform: "scale(1.02)" }}>
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          Double Diamond Slots
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }}>
        <Menu>
          <MenuButton as={IconButton} icon={<FaBars />} variant="outline" aria-label="Options" />
          <MenuList>
            <MenuItem as={Link} to="/">
              Home
            </MenuItem>
            <MenuItem as={Link} to="/classic">
              Classic
            </MenuItem>
            <MenuItem as={Link} to="/lucky7">
              Lucky 7
            </MenuItem>
            <MenuItem as={Link} to="/fruitfrenzy">
              Fruit Frenzy
            </MenuItem>
            <MenuItem as={Link} to="/cashcarnival">
              Cash Carnival
            </MenuItem>
            <MenuItem as={Link} to="/diamonddeluxe">
              Diamond Deluxe
            </MenuItem>
            <MenuItem as={Link} to="/bonusbonanza">
              Bonus Bonanza
            </MenuItem>
            <MenuItem as={Link} to="/profile">
              Profile
            </MenuItem>
            <MenuItem as={Link} to="/settings">
              Settings
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Box display={{ base: "none", md: "flex" }} width={{ base: "full", md: "auto" }} alignItems="center">
        <Link to="/" style={{ marginRight: "1rem", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/classic" style={{ marginRight: "1rem" }}>
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
        <Link to="/profile" style={{ marginRight: "1rem" }}>
          Profile
        </Link>
        <Link to="/settings" style={{ marginRight: "1rem" }}>
          Settings
        </Link>
        <Link to="/bonusbonanza" style={{ marginRight: "1rem" }}>
          Bonus Bonanza
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
