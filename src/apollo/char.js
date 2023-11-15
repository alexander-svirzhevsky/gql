import { gql } from "@apollo/client";

export const GET_ALL_CHARS = gql`
  query getAllChars {
    characters: allPeople {
      name
      force
      id
    }
  }
`;

export const CREATE_CHAR = gql`
  mutation creatCharacter($name: String!, $force: Boolean!) {
    createPerson(name: $name, force: $force) {
      name
      force
      id
    }
  }
`;

export const REMOVE_CHAR = gql`
  mutation removePerson($id: ID!) {
    removePerson(id: $id) {
      id
    }
  }
`;
