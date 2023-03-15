import { gql } from "apollo-server-express";

export const Queries = gql`
  type Query {
    isAuthenticated: user
    logout: String
    blood_groups: [blood_group]
    allergies: [allergy]
    tests: [test]
    prescription: [prescription]
    doctors(id: Int): [doctor]
    visits(id: Int): [visit]
    patients(id: Int): [patient]
    operatorById(id: Int!): operator
  }

  type userResponse {
    code: Int!
    success: Boolean!
    message: String
    data: user
  }
`;
