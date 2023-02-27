import { gql } from "apollo-server-express";

export const Queries = gql`
  type Query {
    blood_groups: [blood_group]
    allergies: [allergy]
    tests: [test]
    prescription: [prescription]
    doctors: [doctor]
    visits: [visit]
    patients: [patient]
    visits_by_doctor(id: ID!): [visit]
  }
`;
