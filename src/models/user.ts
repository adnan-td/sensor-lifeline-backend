import { DataTypes, Model } from "sequelize";
import db from "../sequelize";

export class Users extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
  declare role: string;
}

Users.init(
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
  {
    tableName: "user",
    sequelize: db,
  }
);
