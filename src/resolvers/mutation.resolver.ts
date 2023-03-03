import { Allergies, AllergiesList } from "../models/allergies";
import { Prescriptions, PrescriptionList } from "../models/prescriptions";
import { Tests, TestsList } from "../models/tests";
import { Visits } from "../models/visits";
import { MutationResolvers } from "../types/graphql";
import { doctorMutation } from "./mutation/doctor";
import { patientMutation } from "./mutation/patient";
import { addIntoModel, deleteModel, updateModel } from "./utils";

export const Mutation: MutationResolvers = {
  ...doctorMutation,
  ...patientMutation,
  addAllergy: async (parent, data) => {
    return addIntoModel(Allergies, data);
  },
  updateAllergy: async (parent, data) => {
    return updateModel(Allergies, data);
  },
  deleteAllergy: async (parent, { id }) => {
    return deleteModel(Allergies, id);
  },
  addPatientAllergy: async (parent, data) => {
    return addIntoModel(AllergiesList, data);
  },
  updatePatientAllergy: async (parent, data) => {
    return updateModel(AllergiesList, data);
  },
  deletePatientAllergy: async (parent, { id }) => {
    return deleteModel(AllergiesList, id);
  },

  addTest: async (parent, data) => {
    return addIntoModel(Tests, data);
  },
  updateTest: async (parent, data) => {
    return updateModel(Tests, data);
  },
  deleteTest: async (parent, { id }) => {
    return deleteModel(Tests, id);
  },
  addVisitTest: async (parent, data) => {
    return addIntoModel(TestsList, data);
  },
  updateVisitTest: async (parent, data) => {
    return updateModel(TestsList, data);
  },
  deleteVisitTest: async (parent, { id }) => {
    return deleteModel(TestsList, id);
  },

  addPrescription: async (parent, data) => {
    return addIntoModel(Prescriptions, data);
  },
  updatePrescription: async (parent, data) => {
    return updateModel(Prescriptions, data);
  },
  deletePrescription: async (parent, { id }) => {
    return deleteModel(Prescriptions, id);
  },
  addVisitPrescription: async (parent, data) => {
    return addIntoModel(PrescriptionList, data);
  },
  updateVisitPrescription: async (parent, data) => {
    return updateModel(PrescriptionList, data);
  },
  deleteVisitPrescription: async (parent, { id }) => {
    return deleteModel(PrescriptionList, id);
  },

  addVisit: async (parent, data) => {
    return addIntoModel(Visits, data);
  },
  updateVisit: async (parent, data) => {
    return updateModel(Visits, data);
  },
};
