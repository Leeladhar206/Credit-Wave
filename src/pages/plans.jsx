import React, { useState } from "react";
import {
  Button,
  Select,
  Box,
  Heading,
  Text,
  useToast,
  Image,
  Flex,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Spacer,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Plans = () => {
  const toast = useToast();
  const navigate = useNavigate();

  const plans = [
    {
      id: "basic",
      name: "Basic Plan",
      image:
        "https://i.pinimg.com/564x/4a/71/1e/4a711ee02922b97a39d9c1e56a3189f2.jpg",
      dec1: "No annual fee.",
      dec2: "Lower credit limit",
      dec3: "Limited rewards and benefits",
    },
    {
      id: "gold",
      name: "Gold Plan",
      image:
        "https://i.pinimg.com/564x/07/94/91/079491e5dd416534468310f669ac9fc4.jpg",
      dec1: "Moderate annual fee.",
      dec2: "Higher credit limit",
      dec3: "Enhanced rewards, cahbacks",
    },
    {
      id: "premium",
      name: "Premium Plan",
      image:
        "https://i.pinimg.com/736x/04/be/19/04be1909cfa03684b9a0d99673194702.jpg",
      dec1: "High annual fee.",
      dec2: "Generous credit limit",
      dec3: "Exclusive events and offers",
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    gender: "",
    phone: "",
    account: "",
    ifsc: "",
  });

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.ifsc ||
      !formData.account
    ) {
      toast({
        title: "Invalid Form",
        description: "Please fill in all fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    console.log(formData);

    localStorage.setItem(
      "creditApplication",
      JSON.stringify({ selectedPlan, ...formData })
    );

    toast({
      title: "Credit Card Applied",
      description: "Now you can pay with the CreditWave.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });

    navigate("/payments");
  };

  return (
    <Box p={"3%"}>
      <Box>
        <Image src="https://i.ibb.co/xjdC81Z/Screenshot-2023-08-26-180736-1.png" />
        <Flex
          textAlign={"center"}
          justifyContent={"space-between"}
          m="auto"
          mt={6}
          w={"75%"}
        >
          <Box>
            <Text fontWeight={700}>Seach&Comapre</Text>
            <Text fontSize={"sm"}>
              First, You'll need to search and compare
            </Text>
            <Text fontSize={"sm"}>credit cards offerd on</Text>
          </Box>
          <Box>
            <Text fontWeight={700}>Select a Card</Text>
            <Text fontSize={"sm"}>Once you've compared cards</Text>
            <Text fontSize={"sm"}>select a card</Text>
          </Box>
          <Box>
            <Text fontWeight={700}>Apply for Card</Text>
            <Text fontSize={"sm"}>Proceed with the card, you'll be</Text>
            <Text fontSize={"sm"}>redirected to another page</Text>
          </Box>
          <Box>
            <Text fontWeight={700}>Get Approved</Text>
            <Text fontSize={"sm"}>If you're approved for card, you'll</Text>
            <Text fontSize={"sm"}>receive confirmation message</Text>
          </Box>
        </Flex>
      </Box>

      <Spacer h={20} />

      <Text fontSize="4xl" fontWeight={700} textAlign={"center"}>
        Select a Credit Card Plan
      </Text>
      <Spacer h={10} />

      <Box display="flex" justifyContent="space-between">
        {plans.map((plan) => (
          <Box
            key={plan.id}
            onClick={() => handlePlanSelect(plan)}
            p={4}
            border={
              selectedPlan === plan
                ? "3px solid black"
                : "2px solid transparent"
            }
            borderRadius="md"
            cursor="pointer"
            transition="border 0.3s"
            _hover={{ borderColor: "black" }}
            width="30%"
            boxShadow={"xl"}
          >
            <Image src={plan.image} w="80%"></Image>
            <Heading size="md" mt={3} ml={1}>
              {plan.name}
            </Heading>
            <Text mt={2} ml={1}>
              {plan.dec1}
            </Text>
            <Text mt={2} ml={1}>
              {plan.dec2}
            </Text>
            <Text mt={2} ml={1}>
              {plan.dec3}
            </Text>
          </Box>
        ))}
      </Box>

      <Spacer h={20} />

      <Text fontSize="4xl" fontWeight={700} textAlign={"center"}>
        Credit Card Application
        <Button
          bg={"black"}
          color="white"
          onClick={() => setShowForm(true)}
          _hover={{ color: "white" }}
          borderRadius={0}
          ml={10}
        >
          Apply Now
        </Button>
      </Text>

      <Spacer h={10} />

      <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
        <ModalOverlay />
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backdropFilter: showForm ? "blur(10px)" : "none",
            pointerEvents: showForm ? "none" : "auto",
          }}
        />
        <ModalContent bg="white" color="black" borderRadius="md" p={2}>
          <ModalHeader textAlign="center" fontWeight="bold">
            Application Form
          </ModalHeader>

          <ModalBody>
            <form onSubmit={handleSubmit}>
              <Box display={"flex"}>
                <Text fontSize={"2xl"} fontWeight={700} mb={4}>
                  Card Plan: {selectedPlan ? selectedPlan.name : "None"}
                </Text>
                {selectedPlan ? <Image src={selectedPlan.image} w="50%" /> : ""}
              </Box>

              <Box>
                <HStack>
                  <FormControl>
                    <FormLabel>First name*</FormLabel>
                    <Input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                      border="2px solid black"
                      w={"200px"}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last name*</FormLabel>
                    <Input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                      border="2px solid black"
                    />
                  </FormControl>
                </HStack>

                <FormLabel>Address*</FormLabel>
                <Input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                  border="2px solid black"
                />

                <HStack>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <Select
                      name="gender"
                      value={formData.gender}
                      onChange={handleFormChange}
                      border="2px solid black"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Select>
                  </FormControl>

                  <FormControl>
                    <FormLabel>Phone</FormLabel>
                    <Input
                      type="number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      border="2px solid black"
                    />
                  </FormControl>
                </HStack>
                <FormControl>
                  <FormLabel> Bank Account No*</FormLabel>
                  <Input
                    type="number"
                    name="account"
                    value={formData.account}
                    onChange={handleFormChange}
                    border="2px solid black"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>IFSC Code*</FormLabel>
                  <Input
                    type="number"
                    name="ifsc"
                    value={formData.ifsc}
                    onChange={handleFormChange}
                    border="2px solid black"
                  />
                </FormControl>
              </Box>
            </form>
          </ModalBody>

          <ModalFooter justifyContent="center">
            <Button bg="black" color="white" onClick={() => setShowForm(false)}>
              Cancel
            </Button>
            <Button
              bg="black"
              color="white"
              ml={3}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Plans;
