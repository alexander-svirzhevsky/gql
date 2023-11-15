import { useMutation } from "@apollo/client";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { CREATE_CHAR, GET_ALL_CHARS } from "../../apollo/char";

const AddChar = () => {
  const [name, setName] = useState("");
  const [hasForce, setHasForce] = useState(false);

  const [createChar] = useMutation(CREATE_CHAR, {
    // refetchQueries: [{ query: GET_ALL_CHARS }],
    update(cache, { data: { createPerson } }) {
      const { characters } = cache.readQuery({ query: GET_ALL_CHARS });

      cache.writeQuery({
        query: GET_ALL_CHARS,
        data: {
          characters: [...characters, createPerson],
        },
      });
    },
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeCkeckbox = (e) => {
    setHasForce(e.target.checked);
  };

  const resetForm = () => {
    setName("");
    setHasForce(false);
  };

  const onSubmit = () => {
    if (name.trim().length) {
      createChar({
        variables: {
          name,
          force: hasForce,
        },
      });
      resetForm();
    }
  };

  return (
    <FormControl
      display='flex'
      flexDir='column'
      gap='1rem'
      maxW='30rem'
      mb='2rem'
    >
      <FormLabel>Add a new character</FormLabel>
      <Input
        placeholder='Type name'
        type='text'
        borderColor='white'
        _placeholder={{ opacity: 0.7, color: "white" }}
        value={name}
        onChange={handleChangeName}
      />
      <Checkbox
        isChecked={hasForce}
        colorScheme='green'
        onChange={handleChangeCkeckbox}
      >
        Does he/she have a force?
      </Checkbox>
      <Button colorScheme='green' onClick={onSubmit}>
        Create
      </Button>
    </FormControl>
  );
};

export default AddChar;
