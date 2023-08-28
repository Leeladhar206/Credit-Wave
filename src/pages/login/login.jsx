import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  FormLabel,
  Image,
  Text,
  Input,
  useToast,
  FormControl,
} from "@chakra-ui/react";
import { getUserFromLocalStorage } from "./localstorage";
import { useAuth } from "../../components/Authorization/authdetails";

function Login() {
  const toast = useToast();
  const navigate = useNavigate();

  const { userLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    navigate("/register");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast({
        title: "Invalid Details",
        description: "Please fill in all fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    const ans = getUserFromLocalStorage();
    const user = ans.find(
      (el) => el.email === email && el.password === password
    );

    if (user) {
      toast({
        title: "Login Successful",
        description: "You're redirected to the Home page",
        status: "success",
        duration: 7000,
        isClosable: true,
      });
      userLogin();
      navigate("/");
    } else {
      toast({
        title: "Wrong Credentials",
        description: "You've entered Incorrect Credentials",
        status: "error",
        duration: 7000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="100%" p="1% 20% 2% 20%" bg={"blackAlpha.100"}>
      <Box display="flex" bg="black" color="white">
        <Box>
          <Image
            src="https://i.ibb.co/7XLs2Yn/Screenshot-2023-08-26-232324.png"
            w="80%"
          />
        </Box>

        <Box
          w="50%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Text fontSize="3xl" fontWeight={700} mb={10}>
            CreditWave
          </Text>

          <form onSubmit={handleSubmit}>
            <FormLabel>Email*</FormLabel>

            <FormControl>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                border="2px solid white"
                w="60%"
                borderRadius={0}
              />
            </FormControl>
            <FormLabel>Password*</FormLabel>

            <FormControl>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                border="2px solid white"
                w="60%"
                borderRadius={0}
              />
            </FormControl>

            <FormControl>
              <Button
                type="submit"
                mt={10}
                color={"black"}
                bg={"white"}
                borderRadius={0}
              >
                Submit
              </Button>
            </FormControl>

            <Text mt={5} cursor={"pointer"} onClick={handleRegister}>
              Not have an account ? Register Here
            </Text>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
