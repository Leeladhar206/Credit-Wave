import {
  Box,
  Flex,
  Spacer,
  Image,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";

import { Link as ChakraLink } from "@chakra-ui/react";

import { Link as ReactRouter } from "react-router-dom";

import { useAuth } from "../Authorization/authdetails";

import { useNavigate } from "react-router-dom";

import "@fontsource/poppins";

const Navbar = () => {
  const { isAuthenticated, userLogout } = useAuth();

  const navigate = useNavigate();

  const toast = useToast();

  const handleLogout = () => {
    toast({
      title: "Logout Successfully",
      description: "User redirected to Home page.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    userLogout();
    navigate("/");
  };

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
      boxShadow={"sm"}
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
        <ChakraLink as={ReactRouter} to="/plans" mr={8}>
          Plans
        </ChakraLink>
        <ChakraLink as={ReactRouter} to="/payments" mr={8}>
          Payments
        </ChakraLink>
        <ChakraLink as={ReactRouter} to="/about" mr={8}>
          About
        </ChakraLink>
      </Box>

      <Spacer />
      <Box textAlign={"center"} bg="black" color="white" p="3" w={100}>
        {isAuthenticated ? (
          <Text onClick={handleLogout} cursor={"pointer"}>
            Logout
          </Text>
        ) : (
          <ChakraLink as={ReactRouter} to="/login">
            Login
          </ChakraLink>
        )}
      </Box>
    </Flex>
  );
};

export default Navbar;
