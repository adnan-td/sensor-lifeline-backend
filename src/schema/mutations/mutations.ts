import { gql } from "apollo-server-express";

export const Mutations = gql`
  type Mutation {
    register(email: String!, password: String!, role: String): userResponse
    login(email: String!, password: String!): userResponse
    isAuthenticated: user
    logout: String
    addDoctor(name: String!, email: String!, branch: String!): response
    updateDoctor(id: Int!, name: String, email: String, branch: String): response
    addPatient(
      name: String!
      aadhar: String
      email: String!
      father_name: String
      mother_name: String
      address: String
      date_of_birth: String
      blood_group: Int
      current_weight: String
      current_height: String
      gender: String
      city: String
      pin: String
      state: String
    ): response
    updatePatient(
      id: Int!
      name: String
      aadhar: String
      email: String
      father_name: String
      mother_name: String
      address: String
      date_of_birth: String
      blood_group: Int
      current_weight: String
      current_height: String
      gender: String
      city: String
      pin: String
      state: String
    ): response

    upsertAllergy: String
    deleteAllergy: String

    upsertPatientAllergy: String
    deletePatientAllergy: String

    upsertTest: String
    deleteTest: String

    upsertVisitTest: String
    deleteVisitTest: String

    upsertPrescription: String
    deletePrescription: String

    upsertPatientPrescription: String
    deletePatientPrescription: String

    addVisit: String
    updateVisit: String
  }

  type userResponse {
    code: Int!
    success: Boolean!
    message: String
    data: user
  }

  type response {
    success: Boolean!
    message: String
  }
`;
