import { MutationResolvers } from "../../../types/graphql";
import { Patients } from "../../../models/patient";
import { isValidEmailAndNew, response } from "../../utils";

export const patientMutation: MutationResolvers = {
  addPatient: async (parent, data) => {
    if (await isValidEmailAndNew(data.email, Patients)) {
      const patientData = { ...data, uid: "" + new Date().getTime() };
      const patient = await Patients.create(patientData);
      return response(true, "Added!");
    }
    return response(false, "Invalid email or email is taken already");
  },

  updatePatient: async (parent, data) => {
    const patient = await Patients.findOne({
      where: {
        id: data.id,
      },
    });
    if (!patient) return response(false, "Does not exist!");
    if (data.email && !(await isValidEmailAndNew(data.email, Patients)))
      return response(false, "Invalid Email");
    await patient?.update(data);
    return response(true, "Updated");
  },
};
