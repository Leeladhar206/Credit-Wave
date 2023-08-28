import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/common/navbar";
import { AllRoutes } from "./pages/AllRoutes";
import Footer from "./components/common/footer";
import { AuthProvider } from "./components/Authorization/authdetails";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <AllRoutes />
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
