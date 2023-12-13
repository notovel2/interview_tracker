import { CommentRepository } from "../../types/repository/comment.repository";
import createComment from "./createComment/createComment";
import deleteComment from "./deleteComment/deleteComment";
import getAllComment from "./getAllComment/getAllComment";
import getComment from "./getComment/getComment";
import updateComment from "./updateComment/updateComment";

const commentRepository: CommentRepository = {
    getComment: getComment,
    getAllComment: getAllComment,
    createComment: createComment,
    updateComment: updateComment,
    deleteComment: deleteComment,
};

export default commentRepository;
