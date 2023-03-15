import { QueryResolvers } from "../types/graphql";
import { Allergies } from "../models/allergies";
import { BloodGroup } from "../models/blood_group";
import { Doctors } from "../models/doctor";
import { Patients } from "../models/patient";
import { Prescriptions } from "../models/prescriptions";
import { Tests } from "../models/tests";
import { Visits } from "../models/visits";
import { isAuthenticatedResolver, logoutResolver } from "./auth";
import { Operators } from "../models/operators";

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
    return Prescriptions.findAll();
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
      return Patients.findAll({
        where: {
          id: args.id,
        },
      });
    }
    return Patients.findAll();
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
  operatorById: (_, { id }) => {
    return Operators.findOne({
      where: {
        id: id,
      },
    });
  },
  isAuthenticated: isAuthenticatedResolver,
  logout: logoutResolver,
};
