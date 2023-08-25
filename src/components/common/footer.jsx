import React from "react";

import { Box, Flex, Text, chakra, Icon } from "@chakra-ui/react";

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import "@fontsource/poppins"


const Footer = () => {
  return (
    <Box as="footer" fontFamily="Poppins, sans-serif" bg="black" color="white" py={4}>
      <Flex direction="column" align="center">
        <Flex mt={4} mb={6} align="center">
          <Icon as={FaFacebook} boxSize={6} mx={2} cursor="pointer" />
          <Icon as={FaTwitter} boxSize={6} mx={2} cursor="pointer" />
          <Icon as={FaInstagram} boxSize={6} mx={2} cursor="pointer" />
        </Flex>

        <Text fontSize="sm" mb={4}>
          &copy; 2023 CreditWave. All rights reserved.
        </Text>
        <Flex>
          <Text mx={2}>Privacy Policy</Text>
          <Text mx={2}>Terms of Use</Text>
          <Text mx={2}>Contact US</Text>
          <Text mx={2}>FAQ</Text>
          <Text mx={2}>Blog</Text>
        </Flex>

        <Text mt={4}>
          For support or inquiries, please email us at{" "}
          <chakra.a href="mailto:info@creditcardwebsite.com" color="white">
            info@creditwavewebsite.com
          </chakra.a>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
