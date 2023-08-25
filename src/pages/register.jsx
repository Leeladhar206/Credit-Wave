// components/SignUp.js

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
import { saveUserToLocalStorage } from './login/localstorage';
import Form from './login/login';

function SignUp() {
//   const history = useHistory();
  const toast = useToast();
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    
    if (!username || !email || !password) {
      toast({
        title: 'Invalid Details',
        description: 'Please fill in all fields.',
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
      return;
    }

    
    saveUserToLocalStorage({ username, email, password });

    // Redirect to login page
    // history.push('/login');
  };

  const formFields = [
    {
      name: 'username',
      label: 'Username',
      value: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      name: 'email',
      label: 'Email',
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      name: 'password',
      label: 'Password',
      value: password,
      type: 'password',
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <Form onSubmit={handleSignUp} fields={formFields} />
  );
}

export default SignUp;

