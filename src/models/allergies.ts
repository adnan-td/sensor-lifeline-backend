import { Patients } from "./patient";
import { Model, DataTypes } from "sequelize";
import db from "../sequelize";

export class Allergies extends Model {
  declare id: number;
  declare name: string;
}

Allergies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "allergy",
    sequelize: db,
  }
);

export class AllergiesList extends Model {
  declare id: number;
  declare patient_id: number;
  declare allergy: number;
}

AllergiesList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    patient_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Patients,
        key: "id",
      },
    },
    allergy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Allergies,
        key: "id",
      },
    },
  },
  {
    tableName: "allergy_list",
    sequelize: db,
  }
);
