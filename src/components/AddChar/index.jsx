import { Checkbox, FormControl, FormLabel, Input } from "@chakra-ui/react";

const AddChar = () => {
  return (
    <FormControl display='flex' flexDir='column' gap='1rem'>
      <FormLabel>Add a new character</FormLabel>
      <Input
        placeholder='Type name'
        type='text'
        maxW='30rem'
        borderColor='white'
        _placeholder={{ opacity: 0.7, color: "white" }}
      />
      <Checkbox colorScheme='green'>Does he/she have a force?</Checkbox>
    </FormControl>
  );
};

export default AddChar;
