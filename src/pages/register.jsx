import { useState } from "react";
import {
  Input,
  Text,
  useToast,
  Image,
  FormControl,
  Button,
  Box,
  Flex,
  FormLabel,
} from "@chakra-ui/react";
import { saveUserToLocalStorage } from "./login/localstorage";
import { getUserFromLocalStorage } from "./login/localstorage";
import { useNavigate } from "react-router-dom";

function Register() {
  const toast = useToast();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const ans = getUserFromLocalStorage();

    if (!username || !email || !password) {
      toast({
        title: "Invalid Details",
        description: "Please fill in all fields.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    if (ans.length === 0) {
      ans.push({ username, email, password });

      saveUserToLocalStorage(ans);

      console.log(ans);

      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      navigate("/login");
    } else {
      const isEmailRegistered = ans.some((el) => el.email == email);

      if (isEmailRegistered) {
        toast({
          title: "ALready a customer",
          description: "this email is already registered.",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      } else {
        ans.push({ username, email, password });

        saveUserToLocalStorage(ans);

        console.log(ans);

        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        navigate("/login");
      }
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

          <form onSubmit={handleRegister}>
            <FormLabel>User Name*</FormLabel>
            <FormControl>
              <Input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                border="2px solid white"
                w="50%"
                borderRadius={0}
              />
            </FormControl>

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
                w="50%"
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
                Register
              </Button>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
