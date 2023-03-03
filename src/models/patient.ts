import { DataTypes, Model } from "sequelize";
import db from "../sequelize";
import { BloodGroup } from "./blood_group";

export class Patients extends Model {
  declare id: number;
  declare name: string;
  declare uid: number;
  declare aadhar: string;
  declare email: string;
  declare father_name: string;
  declare mother_name: string;
  declare address: string;
  declare date_of_birth: string;
  declare blood_group: number;
  declare current_weight: string;
  declare current_height: string;
  declare gender: string;
  declare city: string;
  declare pin: number;
  declare state: string;
}

Patients.init(
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
  {
    tableName: "patient",
    sequelize: db,
  }
);
