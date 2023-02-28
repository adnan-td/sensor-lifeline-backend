import { Users } from "../../models/user";
import * as bcrypt from "bcrypt";
import { QueryResolvers } from "../../types/graphql";
import { createTokens, refreshOptions, accessOptions } from "../../auth";
import { isValidPassword, userResponse, isValidEmail } from "../utils";

export const registerResolver: QueryResolvers["register"] = async (
  parent,
  { email, password, role }
) => {
  if (isValidEmail(email) && isValidPassword(password)) {
    const isNew = !(await Users.findOne({
      where: {
        email: email,
      },
    }));
    if (isNew) {
      const encryptedpassword = await bcrypt.hash(password, 10);
      console.log(email, password, encryptedpassword);
      const data = role
        ? await Users.create({ email, password: encryptedpassword, role })
        : await Users.create({ email, password: encryptedpassword });

      return userResponse(200, true, "Registered Successfully", data);
    }
    return userResponse(400, false, "User already exists!");
  }
  return userResponse(400, false, "Enter Valid email and password!");
};

export const loginResolver: QueryResolvers["login"] = async (
  parent,
  { email, password },
  { res }
) => {
  const user = await Users.findOne({
    where: {
      email: email,
    },
  });
  if (!user) return userResponse(400, false, "User does not exist!");
  const isMatching = await bcrypt.compare(password, user.dataValues.password);
  if (!isMatching) return userResponse(400, false, "Password does not match!");

  const { refreshToken, accessToken } = createTokens({
    id: user.dataValues.id,
    email: user.dataValues.email,
    role: user.dataValues.role,
  });

  res.cookie("refresh-token", refreshToken, refreshOptions);
  res.cookie("access-token", accessToken, accessOptions);

  return userResponse(200, true, "Login was Successful!", user.dataValues);
};

export const isAuthenticatedResolver: QueryResolvers["isAuthenticated"] = async (
  parent,
  args,
  { user }
) => {
  if (user) {
    return user;
  }
  return null;
};

export const logoutResolver: QueryResolvers["logout"] = async (parent, args, { res }) => {
  res.clearCookie("access-token");
  res.clearCookie("refresh-token");
  return "Logged out Successfully!";
};
