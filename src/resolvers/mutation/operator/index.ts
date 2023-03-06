import { MutationResolvers } from "../../../types/graphql";
import { Operators } from "../../../models/operators";
import { isValidEmailAndNew, response } from "../../utils";

export const operatorMutation: MutationResolvers = {
  addOperator: async (parent, data) => {
    if (await isValidEmailAndNew(data.email, Operators)) {
      const operatorData = { ...data, uid: "" + new Date().getTime() };
      const operator = await Operators.create(operatorData);
      return response(true, "Added!");
    }
    return response(false, "Invalid email or email is taken already");
  },

  updateOperator: async (parent, data) => {
    const operator = await Operators.findOne({
      where: {
        id: data.id,
      },
    });
    if (!operator) return response(false, "Does not exist!");
    if (data.email && !(await isValidEmailAndNew(data.email, Operators)))
      return response(false, "Invalid Email");
    await operator?.update(data);
    return response(true, "Updated");
  },
};
