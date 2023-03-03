import { DataTypes, Model, BuildOptions } from "sequelize";
import db from "../sequelize";
import { Visits } from "./visits";

export class Tests extends Model {
  declare id: number;
  declare name: string;
}

Tests.init(
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
    tableName: "test",
    sequelize: db,
  }
);

export class TestsList extends Model {
  declare id: number;
  declare visit_id: number;
  declare test: number;
  declare comments: string;
  declare date: string;
}

TestsList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    visit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Visits,
        key: "id",
      },
    },
    test: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Tests,
        key: "id",
      },
    },
    comments: {
      type: DataTypes.TEXT,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
  },
  {
    tableName: "test_list",
    sequelize: db,
  }
);
