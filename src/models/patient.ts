import { DataTypes } from "sequelize";
import db from "../sequelize";
import { BloodGroup } from "./blood_group";

export const Patient = db.define(
  "patient",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    uid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    aadhar: {
      type: DataTypes.STRING(12),
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    father_name: {
      type: DataTypes.STRING(45),
    },
    mother_name: {
      type: DataTypes.STRING(45),
    },
    address: {
      type: DataTypes.TEXT,
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
    },
    blood_group: {
      type: DataTypes.INTEGER,
      references: {
        model: BloodGroup,
        key: "id",
      },
    },
    current_weight: {
      type: DataTypes.STRING(45),
    },
    current_height: {
      type: DataTypes.STRING(45),
    },
    gender: {
      type: DataTypes.STRING(45),
    },
    city: {
      type: DataTypes.STRING(45),
    },
    pin: {
      type: DataTypes.INTEGER,
    },
    state: {
      type: DataTypes.STRING(45),
    },
  },
  {}
);
