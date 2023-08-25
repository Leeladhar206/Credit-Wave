// components/Form.js

import React from 'react';
import Input from './input';
import { Button } from '@chakra-ui/react';

function Form({ onSubmit, fields }) {
  
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields?.map((field) => (
        <Input
          key={field.name}
          label={field.label}
          value={field.value}
          onChange={field.onChange}
          type={field.type}
          // Add any other props you need
        />
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
}

export default Form;
