import { gql } from "@apollo/client";

export const GET_ALL_CHARS = gql`
  query getAllChars {
    allPeople {
      name
      force
    }
  }
`;
