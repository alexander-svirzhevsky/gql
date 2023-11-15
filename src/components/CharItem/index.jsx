import { CheckCircleIcon, DeleteIcon, NotAllowedIcon } from "@chakra-ui/icons";
import { Button, Icon, ListItem, Text } from "@chakra-ui/react";

const CharItem = ({ name, force, id, deleteChar }) => {
  const onDeleteChar = () => {
    deleteChar({
      variables: {
        id,
      },
    });
  };

  return (
    <ListItem
      key={id}
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      borderBottom='1px solid gray'
      pb='0.5rem'
    >
      <Text>{name}</Text>
      <Text>{force}</Text>
      <Text>
        Has force:{" "}
        <Icon
          as={force ? CheckCircleIcon : NotAllowedIcon}
          color={force ? "green" : "red"}
        />
      </Text>
      <Button
        onClick={onDeleteChar}
        variant='outline'
        borderColor='red.400'
        colorScheme='red'
      >
        <DeleteIcon />
      </Button>
    </ListItem>
  );
};

export default CharItem;
