import { DataTypes, Model } from "sequelize";
import db from "../../../infrastructure/db/postgres";
import { InterviewModel } from "../../../model/interview";
import { CreateInterviewInput } from "../../types/repository/interview.repository";

const Interview = db.define<Model<InterviewModel, CreateInterviewInput>>('interviews', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    title: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status: {
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
    }
});

export default Interview;
