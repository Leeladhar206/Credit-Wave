

import React from "react";
import {
  Box,
  Flex,
  Spacer,
  IconButton,
  Button,
  chakra,
  Image,
  Heading,
  Link
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
    >
     <Box  display="flex" alignItems="flex-end">
      <Box w="50px" h="50px" borderRadius="50%" overflow="hidden">
        <Image src="https://i.ibb.co/56wrJrj/Credit-Wave.png" alt="CreditWave" w="100%" h="100%" objectFit="cover" />
      </Box>
      <Box pb={2} pl={2} display={{ base: "none", md : "block", }}>
        <Heading as="h4" size="md">CreditWave</Heading>
      </Box>
     </Box>   

      <Spacer />
      <Box display={{ base: "none", sm: "block", }}>
        
        <Link href="/" mr={8}>Home</Link> 
        <Link href="/payments" mr={8}>Payments</Link>
        <Link href="/plans" mr={8}>Plans</Link>
        <Link href="/about" mr={8}>About</Link>
        <Link href="/login" mr={8}>Login</Link> 
 
      </Box>

      <Spacer />
        <Box as='button' borderRadius='md' bg='black' color='white' px={4} h={8}>
         Register
        </Box>
    </Flex>
  );
};

export default Navbar;
