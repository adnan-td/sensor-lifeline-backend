import { gql } from "apollo-server-express";

export const AllTypes = gql`
  type user {
    id: ID!
    email: String!
    role: String!
  }

  type blood_group {
    id: ID!
    name: String!
  }

  type allergy {
    id: ID!
    name: String!
  }

  type patient_allergy {
    id: ID!
    patient_id: ID!
    allergy: allergy
  }

  type doctor {
    id: ID!
    name: String!
    email: String!
    branch: String!
    visits: [visit]
  }

  type prescription {
    id: ID
    drug: String
    dosage: String
    interval: String
  }

  type patient_prescription {
    id: ID!
    visit_id: ID!
    prescription: prescription
  }

  type test {
    id: ID!
    name: String!
  }

  type patient_test {
    id: ID!
    visit_id: ID!
    test: test!
    comments: String
    date: String
  }

  type visit {
    id: ID!
    patient: patient
    date: String
    weight: String
    height: String
    temperature: String
    bp: String
    ecg: String
    prescriptions: [patient_prescription]
    tests: [patient_test]
    doctor_visited: doctor
  }

  type patient {
    id: ID!
    uid: ID!
    name: String
    aadhar: String
    email: String
    father_name: String
    mother_name: String
    address: String
    date_of_birth: String
    blood_group: blood_group
    allergies: [patient_allergy]
    current_weight: String
    current_height: String
    gender: String
    city: String
    pin: String
    state: String
    visits: [visit]
  }

  type operator {
    id: ID!
    uid: ID!
    name: String
    email: String
    aadhar: String
    father_name: String
    mother_name: String
    date_of_birth: String
    gender: String
    address: String
    state: String
    city: String
    pin: String
    visits: [visit]
  }
`;
