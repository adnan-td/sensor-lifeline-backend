import { gql } from "apollo-server-express";

export const Queries = gql`
  type Query {
    blood_groups: [blood_group]
    allergies: [allergy]
    tests: [test]
    prescription: [prescription]
    doctors(id: Int): [doctor]
    visits(id: Int): [visit]
    patients(id: Int): [patient]
    visits_by_doctor(id: Int!): [visit]
  }
`;
