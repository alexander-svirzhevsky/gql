import { ListItem, Text } from "@chakra-ui/react";

const CharItem = ({ name, force, id }) => {
  return (
    <ListItem>
      <Text>{name}</Text>
      <Text>{force}</Text>
    </ListItem>
  );
};

export default CharItem;
