import React from "react";
import { Box, Flex, Spacer, Image, Heading } from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";

import { Link as ReactRouter } from "react-router-dom";

import "@fontsource/poppins"


const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      position="sticky"
      top="0"
      zIndex="100"
      bg="white"
      fontFamily="Poppins, sans-serif"
    >
      <Box display="flex" alignItems="flex-end">
        <Box w="50px" h="50px" borderRadius="50%" overflow="hidden">
          <Image
            src="https://i.ibb.co/56wrJrj/Credit-Wave.png"
            alt="CreditWave"
            w="100%"
            h="100%"
            objectFit="cover"
          />
        </Box>
        <Box pb={2} pl={2} display={{ base: "none", md: "block" }}>
          <Heading as="h4" size="md">
            CreditWave
          </Heading>
        </Box>
      </Box>

      <Spacer />

      <Box display={{ base: "none", sm: "block" }}>
        <ChakraLink as={ReactRouter} to="/" mr={8}>
          Home
        </ChakraLink>
        <ChakraLink as={ReactRouter} to="/payments" mr={8}>
          Payments
        </ChakraLink>
        <ChakraLink as={ReactRouter} to="/plans" mr={8}>
          Plans
        </ChakraLink>
        <ChakraLink as={ReactRouter} to="/about" mr={8}>
          About
        </ChakraLink>
        <ChakraLink as={ReactRouter} to="/login" mr={8}>
          Login
        </ChakraLink>
      </Box>

      <Spacer />
      <Box as="button" borderRadius="md" bg="black" color="white" px={4} h={8}>
       <ChakraLink as={ReactRouter} to="/register" mr={8}>
          Register
        </ChakraLink>
      </Box>
    </Flex>
  );
};

export default Navbar;
