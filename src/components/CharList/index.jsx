import { List } from "@chakra-ui/react";
import { GET_ALL_CHARS } from "../../apollo/char";
import { useQuery } from "@apollo/client";

const CharList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARS);

  return (
    <List>
      {data.map((item) => (
        <CharItem id={item.id} />
      ))}
    </List>
  );
};

export default CharList;
