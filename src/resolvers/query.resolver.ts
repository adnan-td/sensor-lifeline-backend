import { QueryResolvers } from "../types/graphql";
import { Allergies } from "../models/allergies";
import { BloodGroup } from "../models/blood_group";
import { Doctors } from "../models/doctor";
import { Patient } from "../models/patient";
import { Prescription } from "../models/prescriptions";
import { Tests } from "../models/tests";
import { Visits } from "../models/visits";
import { isAuthenticatedResolver, loginResolver, logoutResolver, registerResolver } from "./auth";

export const Query: QueryResolvers = {
  blood_groups: () => {
    return BloodGroup.findAll();
  },
  allergies: () => {
    return Allergies.findAll();
  },
  tests: () => {
    return Tests.findAll();
  },
  prescription: () => {
    return Prescription.findAll();
  },
  visits: (_, args) => {
    if (args.id) {
      return Visits.findAll({
        where: {
          id: args.id,
        },
      });
    }
    return Visits.findAll();
  },
  patients: (_, args) => {
    if (args.id) {
      return Patient.findAll({
        where: {
          id: args.id,
        },
      });
    }
    return Patient.findAll();
  },
  doctors: (_, args) => {
    if (args.id) {
      return Doctors.findAll({
        where: {
          id: args.id,
        },
      });
    }
    return Doctors.findAll();
  },
  visits_by_doctor: (_, arg) => {
    return Visits.findAll({
      where: {
        doctor_visited: arg.id,
      },
    });
  },
  register: registerResolver,
  login: loginResolver,
  isAuthenticated: isAuthenticatedResolver,
  logout: logoutResolver,
};
