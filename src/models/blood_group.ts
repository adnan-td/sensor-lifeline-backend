import { Model, DataTypes } from "sequelize";
import db from "../sequelize";

export class BloodGroup extends Model {
  declare id: number;
  declare name: string;
}

BloodGroup.init(
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
    tableName: "blood_group",
    sequelize: db,
  }
);
