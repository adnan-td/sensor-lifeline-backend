import { Users } from "../models/user";
import { MutationResolvers } from "../types/graphql";
import * as bcrypt from "bcrypt";
import { accessOptions, createTokens, refreshOptions } from "../auth";
import { Doctors } from "../models/doctor";
import { Patient } from "../models/patient";

export const Mutation: MutationResolvers = {
  register: async (parent, { email, password, role }) => {
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
  },
  login: async (parent, { email, password }, { res }) => {
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
  },

  isAuthenticated: async (parent, args, { user }) => {
    if (user) {
      return user;
    }
    return null;
  },

  logout: async (parent, args, { res }) => {
    res.clearCookie("access-token");
    res.clearCookie("refresh-token");
    return "Logged out Successfully!";
  },

  addDoctor: async (parent, data) => {
    if (await isValidEmailAndNew(data.email, Doctors)) {
      const doctor = await Doctors.create(data);
      return response(true, "Added!");
    }
    return response(false, "Invalid email or email is taken already");
  },

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

function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function isValidPassword(password: string): boolean {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return process.env.NODE_ENV === "production" ? regex.test(password) : true;
}

async function isValidEmailAndNew(email: string | null, model: any) {
  if (!isValidEmail(email || "")) return false;
  const isNew = !(await model.findOne({
    where: {
      email: email,
    },
  }));
  if (isNew) return true;
  return false;
}

function userResponse(code: number, success: boolean, message: string, data: any = null) {
  return {
    code: code,
    success: success,
    message: message,
    data: data,
  };
}

function response(success: boolean, message: string) {
  return {
    success: success,
    message: message,
  };
}
