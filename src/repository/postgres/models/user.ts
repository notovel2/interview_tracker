import { DataTypes, Model } from "sequelize";
import db from "../../../infrastructure/db/postgres";
import { UserModel } from "../../../model/user";
import { CreateUserInput } from "../../types/repository/user.repository";

const User = db.define<Model<UserModel, CreateUserInput>>('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: {
              tableName: 'interviews',
            },
            key: 'userId',
          },
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
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
});

export default User;
