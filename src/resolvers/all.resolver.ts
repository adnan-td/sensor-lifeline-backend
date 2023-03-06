import { Allergies, AllergiesList } from "../models/allergies";
import { BloodGroup } from "../models/blood_group";
import { Doctors } from "../models/doctor";
import { Patients } from "../models/patient";
import { Prescriptions, PrescriptionList } from "../models/prescriptions";
import { Tests, TestsList } from "../models/tests";
import { Visits } from "../models/visits";
import { Resolvers } from "../types/graphql";

export const allResolvers: Resolvers = {
  visit: {
    prescriptions: (parent) => {
      return PrescriptionList.findAll({
        where: {
          visit_id: parent.id,
        },
      });
    },
    tests: (parent) => {
      return TestsList.findAll({
        where: {
          visit_id: parent.id,
        },
      });
    },
    doctor_visited: (parent) => {
      return Doctors.findOne({
        where: {
          id: parent.doctor_visited,
        },
      });
    },
    patient: (parent) => {
      return Patients.findOne({
        where: {
          id: parent.patient,
        },
      });
    },
  },
  patient_prescription: {
    prescription: (parent) => {
      return Prescriptions.findOne({
        where: {
          id: parent.prescription,
        },
      });
    },
  },
  patient_test: {
    test: (parent) => {
      return Tests.findOne({
        where: {
          id: parent.test,
        },
      });
    },
  },

  patient_allergy: {
    allergy: (parent) => {
      return Allergies.findOne({
        where: {
          id: parent.allergy,
        },
      });
    },
  },

  patient: {
    blood_group: (parent) => {
      return BloodGroup.findOne({
        where: {
          id: parent.blood_group,
        },
      });
    },
    allergies: (parent) => {
      return AllergiesList.findAll({
        where: {
          patient_id: parent.id,
        },
      });
    },
    visits: (parent) => {
      return Visits.findAll({
        where: {
          patient: parent.id,
        },
      });
    },
  },
  doctor: {
    visits: (parent) => {
      return Visits.findAll({
        where: {
          doctor_visited: parent.id,
        },
      });
    },
  },
  operator: {
    visits: (parent) => {
      return Visits.findAll({
        where: {
          operator: parent.id,
        },
      });
    },
  },
};
