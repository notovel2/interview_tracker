import { UpdateComment } from "../../../types/repository/comment.repository";
import Model from "../../models";

const updateComment: UpdateComment = async (input) => {
    await Model.Comment.update(input.data, { where: { id: input.id }});
};

export default updateComment;
