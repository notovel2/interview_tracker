import { DataTypes, Model } from "sequelize";
import db from "../../../infrastructure/db/postgres";
import { CreateCommentInput } from "../../types/repository/comment.repository";
import { CommentModel } from "../../../model/comment";

const Comment = db.define<Model<CommentModel, CreateCommentInput>>('comments', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
    },
    description: {
        type: DataTypes.TEXT,
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

export default Comment;
