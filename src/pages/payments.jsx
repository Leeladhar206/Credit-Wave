import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  useToast,
  Center,
  Spinner,
} from "@chakra-ui/react";

import { useAuth } from "../components/Authorization/authdetails";

const PaymentCard = ({ title, amount, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [password, setPassword] = useState("");
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const toast = useToast();

  const handleSubmit = () => {
    if (password === "123456") {
      onClose();
      toast({
        title: "Payment Success",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setIsPaymentCompleted(true);
    } else {
      toast({
        title: "Incorrect Password",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      p="4"
      bg="white"
      color="black"
      width="60%"
      boxShadow="md"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      border="2px solid black"
      m={4}
    >
      <Box>
        <Text fontSize="xl" fontWeight="semibold" mb="2">
          {title}
        </Text>
        <Text fontSize="lg" mb="4">
          {description}
        </Text>
        <Text fontSize="2xl" fontWeight="bold" mb="4">
          ₹{amount}
        </Text>
      </Box>
      <Box>
        {isPaymentCompleted ? (
          <Button bg="green.500" color="black" w="100%" disabled>
            Completed
          </Button>
        ) : (
          <Button bg="black" color="white" onClick={onOpen} w="100%">
            Pay Now
          </Button>
        )}
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm Payment</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize="xl" fontWeight="bold" mb="2">
              {title}
            </Text>
            <Text fontSize="lg" mb="4">
              {description}
            </Text>
            <Text fontSize="2xl" fontWeight="bold" mb="4">
              ₹{amount}
            </Text>
            <Text mb="2">Please enter your password to confirm:</Text>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text fontSize="sm" color="gray.500" mt={4}>10 credit points are added for this payment</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Button bg="black" color="white" ml={3} onClick={handleSubmit}>
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Payments = () => {
  const [paylist, setPaylist] = useState(2);
  const [isLoading, setIsLoading] = useState(false);
  const { isAuthenticated } = useAuth();

  const paymentOptions = [
    {
      title: "Electricity Bill",
      description: "Payment for the monthly electricity bill",
      amount: 800,
    },
    {
      title: "Mobile Phone Purchase",
      description: "Payment for the mobile ordered on Amazon",
      amount: 15000,
    },
    {
      title: "Biryani Ordered",
      description: "Payment for the food ordered from the Swiggy",
      amount: 399,
    },
    {
      title: "Internet Bill",
      description: "Payment for the high-speed internet service",
      amount: 1200,
    },

    {
      title: "Rent Payment",
      description: "Payment for the monthly apartment rent",
      amount: 18000,
    },
    {
      title: "Online Course Subscription",
      description: "Payment for an online programming course",
      amount: 2500,
    },
    {
      title: "Health Insurance Premium",
      description: "Payment for the monthly health insurance premium",
      amount: 2000,
    },
    {
      title: "Travel Booking",
      description: "Payment for flight tickets for upcoming travel",
      amount: 8500,
    },
    {
      title: "Charity Donation",
      description: "Payment for a charitable donation to XYZ Foundation",
      amount: 1000,
    },
  ];

  const handlePayment = () => {
    if (paylist == paymentOptions.length - 2) {
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      setPaylist(paylist + 1);
    }, 2000);
  };

  if (!isAuthenticated) {
    return (
      <Box height={"100vh"} mt={10}>
        <Text fontSize={"2xl"} fontWeight={700} textAlign="center">
          In order to make payments for all transactions, users must log in.
        </Text>
      </Box>
    );
  }

  return (
    <Box>
      <Center>
        <Button bg="black" color="white" m={10} onClick={handlePayment}>
          Show all payments
        </Button>
      </Center>

      {isLoading ? (
        <Box display="flex" justifyContent="center" height="100vh" mt={10}>
          <Spinner
            thickness="5px"
            speed="0.65s"
            emptyColor="gray.200"
            color="black"
            size="xl"
          />
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg="white"
        >
          {Array.from({ length: paylist }).map((_, index) => {
            const payment = paymentOptions[index];
            return (
              <PaymentCard
                key={index}
                title={payment.title}
                amount={payment.amount}
                description={payment.description}
              />
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Payments;
