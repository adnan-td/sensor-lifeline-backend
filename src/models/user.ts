import { DataTypes } from "sequelize";
import db from "../sequelize";

export const Users = db.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(45),
      allowNull: false,
      defaultValue: "patient",
    },
  },
  {}
);
