import { DataTypes, Model } from "sequelize";
import db from "../../../infrastructure/db/postgres";
import { CreateChangelogInput } from "../../types/repository/changelog.repository";
import { ChangelogModel } from "../../../model/Changelog";

const Changelog = db.define<Model<ChangelogModel, CreateChangelogInput>>('changelogs', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    action: {
        type: DataTypes.STRING(31),
        allowNull: false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id',
        },
    },
    interviewId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: {
          tableName: 'interviews',
        },
        key: 'id',
      },
  },
});

export default Changelog;
