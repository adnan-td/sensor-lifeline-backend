import { DataTypes, Model } from "sequelize";
import db from "../sequelize";

export class Operators extends Model {
  declare id: number;
  declare uid: number;
  declare name: string;
  declare aadhar: string;
  declare email: string;
  declare father_name: string;
  declare mother_name: string;
  declare date_of_birth: string;
  declare gender: string;
  declare address: string;
  declare state: string;
  declare city: string;
  declare pin: number;
}

Operators.init(
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
    date_of_birth: {
      type: DataTypes.DATEONLY,
    },
    gender: {
      type: DataTypes.STRING(45),
    },
    address: {
      type: DataTypes.TEXT,
    },
    state: {
      type: DataTypes.STRING(45),
    },
    city: {
      type: DataTypes.STRING(45),
    },
    pin: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "operator",
    sequelize: db,
  }
);
