import { and, or, rule, shield } from "graphql-shield";
import { constants } from "../constants";

const isAuthenticated = rule()(async (parent, args, context, info) => {
  if (context.user == null) return constants.errAuthentication;
  return true;
});

const isOperator = rule()(async (parent, args, context, info) => {
  if (context?.user?.role !== "operator") return constants.errPermission;
  return true;
});

const isDoctor = rule()(async (parent, args, context, info) => {
  if (context?.user?.role !== "doctor") return constants.errPermission;
  return true;
});

const isPatient = rule()(async (parent, args, context, info) => {
  if (context?.user?.role !== "patient") return constants.errPermission;
  return true;
});

const isAuthAndDoctorOrOperator = and(isAuthenticated, or(isDoctor, isOperator));

export const permissions = shield({
  Query: {
    logout: isAuthenticated,
    doctors: isAuthenticated,
    visits: isAuthenticated,
    patients: isAuthenticated,
    visits_by_doctor: isAuthenticated,
  },
  Mutation: {
    addDoctor: and(isAuthenticated, isDoctor),
    updateDoctor: and(isAuthenticated, isDoctor),

    addPatient: and(isAuthenticated),
    updatePatient: and(isAuthenticated, isPatient),

    addAllergy: isAuthAndDoctorOrOperator,
    updateAllergy: isAuthAndDoctorOrOperator,
    deleteAllergy: isAuthAndDoctorOrOperator,

    addPatientAllergy: isAuthAndDoctorOrOperator,
    updatePatientAllergy: isAuthAndDoctorOrOperator,
    deletePatientAllergy: isAuthAndDoctorOrOperator,

    addTest: isAuthAndDoctorOrOperator,
    updateTest: isAuthAndDoctorOrOperator,
    deleteTest: isAuthAndDoctorOrOperator,

    addVisitTest: isAuthAndDoctorOrOperator,
    updateVisitTest: isAuthAndDoctorOrOperator,
    deleteVisitTest: isAuthAndDoctorOrOperator,

    addPrescription: isAuthAndDoctorOrOperator,
    updatePrescription: isAuthAndDoctorOrOperator,
    deletePrescription: isAuthAndDoctorOrOperator,

    addVisitPrescription: isAuthAndDoctorOrOperator,
    updateVisitPrescription: isAuthAndDoctorOrOperator,
    deleteVisitPrescription: isAuthAndDoctorOrOperator,

    addVisit: isAuthAndDoctorOrOperator,
    updateVisit: isAuthAndDoctorOrOperator,
  },
});
