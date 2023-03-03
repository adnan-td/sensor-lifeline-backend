import { DataTypes, Model } from "sequelize";
import db from "../sequelize";
import { Doctors } from "./doctor";
import { Patients } from "./patient";

export class Visits extends Model {
  declare id: number;
  declare patient: number;
  declare date: string;
  declare weight: string;
  declare height: string;
  declare temperature: string;
  declare bp: string;
  declare ecg: string;
  declare doctor_visited: number;
}

Visits.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    patient: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Patients,
        key: "id",
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    weight: {
      type: DataTypes.STRING(45),
    },
    height: {
      type: DataTypes.STRING(45),
    },
    temperature: {
      type: DataTypes.STRING(45),
    },
    bp: {
      type: DataTypes.STRING(45),
    },
    ecg: {
      type: DataTypes.TEXT,
    },
    doctor_visited: {
      type: DataTypes.INTEGER,
      references: {
        model: Doctors,
        key: "id",
      },
    },
  },
  {
    tableName: "visits",
    sequelize: db,
  }
);
