import { gql } from "apollo-server-express";

export const Mutations = gql`
  type Mutation {
    temp: String
  }
`;
