import { createComment } from "./createComment";
import { deleteComment } from "./deleteComment";
import { getAllComment } from "./getAllComment";
import { updateComment } from "./updateComment";

const commentService = {
    createComment: createComment,
    getAllComment: getAllComment,
    updateComment: updateComment,
    deleteCommment: deleteComment,
};

export default commentService;
