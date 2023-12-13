import { CreateComment } from "../../../types/repository/comment.repository";
import Model from "../../models";

const createComment: CreateComment = async (input) => {
    await Model.Comment.create(input);
};

export default createComment;
