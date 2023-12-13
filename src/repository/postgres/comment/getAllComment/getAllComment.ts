import { GetAllComment } from "../../../types/repository/comment.repository";
import Model from "../../models";

const getAllComment: GetAllComment = async (input) => {
    const offset = (input.page - 1) * input.pageSize;
    const comments = await Model.Comment.findAll({
        where: {
            interviewId: input.interviewId,
        },
        limit: input.pageSize,
        offset,
        attributes: {
            exclude: ['userId'],
        },
        include: {
            model: Model.User,
            attributes: ['email', 'name'],
        },
    });
    return comments.map((comment) => comment.toJSON());
};

export default getAllComment;
