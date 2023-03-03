import { Model, DataTypes } from "sequelize";
import db from "../sequelize";

export class Doctors extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare branch: string;
}

Doctors.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    branch: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    tableName: "doctors",
    sequelize: db,
  }
);
