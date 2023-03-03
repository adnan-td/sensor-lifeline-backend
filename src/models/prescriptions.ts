import { DataTypes, Model } from "sequelize";
import db from "../sequelize";
import { Visits } from "./visits";

export class Prescriptions extends Model {
  declare id: number;
  declare drug: string;
  declare dosage: string;
  declare interval: string;
}

Prescriptions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    drug: DataTypes.TEXT,
    dosage: DataTypes.TEXT,
    interval: DataTypes.TEXT,
  },
  {
    tableName: "prescription",
    sequelize: db,
  }
);

export class PrescriptionList extends Model {
  declare id: number;
  declare prescription: number;
  declare visit_id: number;
}

PrescriptionList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    prescription: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Prescriptions,
        key: "id",
      },
    },
    visit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Visits,
        key: "id",
      },
    },
  },
  {
    tableName: "prescription_list",
    sequelize: db,
  }
);
