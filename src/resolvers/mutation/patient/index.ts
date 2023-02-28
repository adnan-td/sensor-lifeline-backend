import { MutationResolvers } from "../../../types/graphql";
import { Patient } from "../../../models/patient";
import { isValidEmailAndNew, response } from "../../utils";

export const patientMutation: MutationResolvers = {
  addPatient: async (parent, data) => {
    if (await isValidEmailAndNew(data.email, Patient)) {
      const patientData = { ...data, uid: "" + new Date().getTime() };
      const patient = await Patient.create(patientData);
      return response(true, "Added!");
    }
    return response(false, "Invalid email or email is taken already");
  },

  updatePatient: async (parent, data) => {
    const patient = await Patient.findOne({
      where: {
        id: data.id,
      },
    });
    if (!patient) return response(false, "Does not exist!");
    if (data.email && !(await isValidEmailAndNew(data.email, Patient)))
      return response(false, "Invalid Email");
    await patient?.update(data);
    return response(true, "Updated");
  },
};
