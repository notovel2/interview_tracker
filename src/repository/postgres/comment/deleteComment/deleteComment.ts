import { DeleteComment } from "../../../types/repository/comment.repository";
import Model from "../../models";

const deleteComment: DeleteComment = async (input) => {
    await Model.Comment.destroy({ where: { id: input.id }});
};

export default deleteComment;
