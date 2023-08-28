import React from "react";

import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Icon,
  Spacer,
  Divider,
} from "@chakra-ui/react";

import { FaYoutube, FaHandshake, FaShieldAlt } from "react-icons/fa";
import { useAuth } from "../components/Authorization/authdetails";

import { useState, useEffect } from "react";

import { getUserFromLocalStorage } from "./login/localstorage";

import "@fontsource/poppins";

function Home() {
  const faqs = [
    {
      question: "What is a credit card?",
      answer:
        "A credit card is a financial tool that allows you to borrow money from a financial institution up to a certain credit limit...",
    },
    {
      question: "How do I apply for a credit card?",
      answer:
        "Applying for a credit card is easy. Simply visit our website and fill out the online application form...",
    },
    {
      question: "What is an APR?",
      answer:
        "APR stands for Annual Percentage Rate. It's the annualized interest rate that you'll be charged on any outstanding balances on your credit card. Understanding your card's APR is important to manage your finances effectively.",
    },
    {
      question: "What are credit card rewards?",
      answer:
        "Credit card rewards are incentives offered by some credit card companies for using their cards. These rewards can include cashback, travel points, or discounts on specific purchases.",
    },
    {
      question: "What is a credit score?",
      answer:
        "A credit score is a numerical representation of your creditworthiness. It's based on factors such as your payment history, credit utilization, and length of credit history. A higher credit score is generally better and can help you qualify for better credit card offers.",
    },
    {
      question: "What should I do if my credit card is lost or stolen?",
      answer:
        "If your credit card is lost or stolen, contact our customer support immediately. We'll help you report the loss, block the card, and issue a replacement to ensure the security of your account.",
    },
    {
      question: "What is a grace period?",
      answer:
        "A grace period is the time between the end of your billing cycle and the due date for your payment. During this period, you can pay off your balance without incurring any interest charges",
    },
  ];

  const { isAuthenticated} = useAuth();

  const [name, setName]= useState("")

  const ans= getUserFromLocalStorage()

  if(ans.length>0){
    setName(ans[ans.length-1].username)
  }

  console.log(name)

  return (
    <Box m={20}>

      {
        isAuthenticated ? <Text fontSize={"3xl"} fontWeight={600} textAlign={"center"}
        mt={-10} mb={10}
        >Welcome back, {name} ! </Text> : null
      }

      <Flex
        fontFamily="Poppins, sans-serif"
        fontSize="md"
        justifyContent="space-between"
      >
        <Box mt={-3}>
          <Text>
            GET 20% OFF THE FIRST PURCHASE
            <Button h="30px" m={3}>
              more
            </Button>
          </Text>
          <Text fontWeight={800} fontSize="6xl">
            Buy now.
          </Text>
          <Text fontWeight={800} fontSize="6xl">
            Pay later.
          </Text>
          <Text fontWeight={800} fontSize="6xl">
            Simply
          </Text>
          <Text fontWeight={600} mt={10}>
            Get what you love and split the
          </Text>
          <Text fontWeight={600} mb={6}>
            payments up over weeks or months
          </Text>
          <Button mt={7} color="white" bg="black">
            Get the App
          </Button>
        </Box>

        <Box mr={-6} display={{ base: "none", md: "block" }} >
          <Image
            src="https://i.ibb.co/pfXTcX5/Screenshot-2023-08-25-151059.png"
            alt="credit-card"
          />
        </Box>

        <Box mt={3}>
          <Text fontSize={"lg"}>Time and flexibility are on your</Text>
          <Text fontSize={"lg"}>side. Download our app and get</Text>
          <Text fontSize={"lg"}>you own limitless virtual card</Text>
          <Text fontSize={"2xl"} mt={10}>
            {" "}
            <Icon as={FaYoutube} boxSize={10} mr={2} mb={-2} />
            See how it works
          </Text>
          <Text fontSize="sm" mt={10} fontWeight={800}>
            CREDITWAVE IN NUMBERS
          </Text>
          <Text fontSize="5xl" fontWeight={800} mt={6}>
            1.45M
          </Text>
          <Text>Total count of active users</Text>
          <Text fontSize="5xl" fontWeight={800} mt={6}>
            175K
          </Text>
          <Text>Downloads from all types of store</Text>
        </Box>
      </Flex>
      <Divider />

      <Text fontSize="5xl" fontWeight={600} textAlign={"center"} mt={10}>
        Why Choose Us
      </Text>

      <Flex>
        <Box w="50%">
          <Image
            src="https://i.ibb.co/PrRqByS/credit-Card.png"
            alt="credit-card"
          />
        </Box>

        <Box>
          <Spacer h={20} />
          <Text fontSize={"3xl"} fontWeight={700}>
            The Benefits of Our Credit Card
          </Text>
          <Text fontSize={"3xl"} fontWeight={700}>
            Marketplace
          </Text>
          <Text mt={4}>
            Looking for the perfect credit card can be time-consuming,
          </Text>
          <Text>which is why our credit card marketplace is here to help.</Text>{" "}
          <Spacer h={10} />
          <Text fontSize={"3xl"} fontWeight={500}>
            {" "}
            <Icon as={FaHandshake} mr={2} mb={-2} />
            Trustworthiness
          </Text>
          <Text>
            Your credit card marketplace has a reputation for being trustworthy
          </Text>
          <Spacer h={10} />
          <Text fontSize={"3xl"} fontWeight={500}>
            {" "}
            <Icon as={FaShieldAlt} mr={2} />
            Security & Support
          </Text>
          <Text>
            Your website offers exceptional customer support, with responsive
          </Text>
        </Box>
      </Flex>

      <Box bg="white" color="black" w="60%" mx="auto" borderRadius="md">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" m={8}>
          What Our Customers Say
        </Text>

        <Text fontSize="md" textAlign="center" p={6} mb={5}>
          "I've been using this credit card service for years and it has been a
          game changer for managing my finances. The rewards and benefits are
          amazing."
          <Text fontSize="2xl" textAlign="right" fontWeight={700}>
            - Vivek Agarwal
          </Text>
        </Text>

        <Text fontSize="md" textAlign="center" p={6} mb={5}>
          "Excellent service! CreditWave made managing my credit card payments
          so easy. The app is user-friendly, and I love the flexibility it
          offers for payment plans."
          <Text fontSize="2xl" textAlign="right" fontWeight={700}>
            - Labdhi Sheth
          </Text>
        </Text>

        <Text fontSize="md" textAlign="center" p={6}>
          'CreditWave has been a game changer for me. As someone who often
          forgets due dates, this app has saved me from late fees multiple
          times. Plus, their clean and simple design is a breath of fresh air."
          <Text fontSize="2xl" textAlign="right" fontWeight={700} mt={2}>
            - Vaibhav Sulthane
          </Text>
        </Text>
      </Box>

      <Box p={8}>
        <Text fontSize="3xl" fontWeight="bold" mb={4} ml={5}>
          Frequently Asked Questions
        </Text>
        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <Text fontSize="lg" fontWeight={600} p={3}>
                      {faq.question}
                    </Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text fontSize="lg" p={3}>
                  {faq.answer}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Box>
  );
}

export default Home;
