import React from 'react';
import { Box, Flex, Text, chakra } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="black" color="white" py={4}>
      <Flex direction="column" align="center">
        <Text fontSize="sm" mb={2}>
          &copy; 2023 CreditWave. All rights reserved.
        </Text>
        <Flex>
          <chakra.a href="/privacy-policy" mx={2}>
            Privacy Policy
          </chakra.a>
          <chakra.a href="/terms-of-use" mx={2}>
            Terms of Use
          </chakra.a>
          <chakra.a href="/contact" mx={2}>
            Contact Us
          </chakra.a>
          <chakra.a href="/faq" mx={2}>
            FAQ
          </chakra.a>
          <chakra.a href="/blog" mx={2}>
            Blog
          </chakra.a>
        </Flex>
        <Text mt={4}>
          For support or inquiries, please email us at{' '}
          <chakra.a href="mailto:info@creditcardwebsite.com" color="white">
            info@creditwavewebsite.com
          </chakra.a>
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;


