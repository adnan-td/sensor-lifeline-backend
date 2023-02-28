import { gql } from "apollo-server-express";

export const Queries = gql`
  type Query {
    register(email: String!, password: String!, role: String): userResponse
    login(email: String!, password: String!): userResponse
    isAuthenticated: user
    logout: String
    blood_groups: [blood_group]
    allergies: [allergy]
    tests: [test]
    prescription: [prescription]
    doctors(id: Int): [doctor]
    visits(id: Int): [visit]
    patients(id: Int): [patient]
    visits_by_doctor(id: Int!): [visit]
  }

  type userResponse {
    code: Int!
    success: Boolean!
    message: String
    data: user
  }
`;
