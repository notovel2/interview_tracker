import { GetComment } from "../../../types/repository/comment.repository";
import Model from "../../models";

const getComment: GetComment = async (input) => {
    const comment = await Model.Comment.findOne({
        where: {
            id: input.id,
        },
    });
    return comment?.toJSON();
};

export default getComment;
