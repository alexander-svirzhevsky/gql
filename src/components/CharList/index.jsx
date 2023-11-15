import { List, Spinner } from "@chakra-ui/react";
import { GET_ALL_CHARS, REMOVE_CHAR } from "../../apollo/char";
import { useMutation, useQuery } from "@apollo/client";
import CharItem from "../CharItem/";

const CharList = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARS);

  const [deleteChar, { loading: removeLoading, error: removeError }] =
    useMutation(REMOVE_CHAR, {
      update(cache, { data: { removePerson } }) {
        console.log(removePerson);
        cache.modify({
          fields: {
            allPeople(currChars = []) {
              return currChars.filter(
                (char) => char.__ref !== `Person:${removePerson.id}`
              );
            },
          },
        });
      },
    });

  if (loading || removeLoading) {
    return <Spinner />;
  }

  if (error || removeError) {
    return <>Error...</>;
  }

  return (
    <List spacing='0.5rem'>
      {data?.characters.map((item) => (
        <CharItem
          key={item.id}
          id={item.id}
          name={item.name}
          force={item.force}
          deleteChar={deleteChar}
        />
      ))}
    </List>
  );
};

export default CharList;
