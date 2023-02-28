import { gql } from "apollo-server-express";

export const Mutations = gql`
  type Mutation {
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

    addAllergy(name: String): response
    updateAllergy(id: Int!, name: String!): response
    deleteAllergy(id: Int!): response

    addPatientAllergy(patient_id: Int!, allergy: Int!): response
    updatePatientAllergy(id: Int!, patient_id: Int, allergy: Int): response
    deletePatientAllergy(id: Int!): response

    addTest(name: String): response
    updateTest(id: Int!, name: String!): response
    deleteTest(id: Int!): response

    addVisitTest(visit_id: Int!, test: Int!, comments: String, date: String!): response
    updateVisitTest(id: Int!, test: Int, comments: String, date: String): response
    deleteVisitTest(id: Int!): response

    addPrescription(drug: String!, dosage: String!, interval: String!): response
    updatePrescription(id: Int!, drug: String, dosage: String, interval: String): response
    deletePrescription(id: Int!): response

    addVisitPrescription(visit_id: Int!, prescription: Int!): response
    updateVisitPrescription(id: Int!, prescription: Int): response
    deleteVisitPrescription(id: Int!): response

    addVisit(
      patient: Int!
      weight: String
      height: String
      temperature: String
      bp: String
      ecg: String
      doctor_visited: Int
      date: String
    ): response
    updateVisit(
      id: Int!
      weight: String
      height: String
      temperature: String
      bp: String
      ecg: String
      doctor_visited: Int
      date: String
    ): response
  }

  type response {
    success: Boolean!
    message: String
  }
`;
