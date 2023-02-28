import { Doctors } from "../../../models/doctor";
import { MutationResolvers } from "../../../types/graphql";
import { response, isValidEmailAndNew } from "../../utils";

export const doctorMutation: MutationResolvers = {
  updateDoctor: async (parent, data) => {
    const doctor = await Doctors.findOne({
      where: {
        id: data.id,
      },
    });
    if (!doctor) return response(false, "Does not exist!");
    if (data.email && !(await isValidEmailAndNew(data.email, Doctors))) {
      return response(false, "Invalid email or email is taken already");
    }
    await doctor?.update(data);
    return response(true, "Updated!");
  },
  addDoctor: async (parent, data) => {
    if (await isValidEmailAndNew(data.email, Doctors)) {
      const doctor = await Doctors.create(data);
      return response(true, "Added!");
    }
    return response(false, "Invalid email or email is taken already");
  },
};
