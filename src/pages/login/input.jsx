// components/Input.js

import React from 'react';
import { Input as ChakraInput } from '@chakra-ui/react';

function Input({ label, value, onChange, ...rest }) {
  return (
    <div>
      <label>{label}</label>
      <ChakraInput value={value} onChange={onChange} {...rest} />
    </div>
  );
}

export default Input;
