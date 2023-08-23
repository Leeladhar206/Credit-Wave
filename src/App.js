import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter  } from 'react-router-dom';
import Home from './pages/home';

import Navbar from './components/common/navbar';
import { AllRoutes } from './pages/AllRoutes';
import Footer from './components/common/footer';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
       <Navbar/>
       <AllRoutes />
       <Footer />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;

