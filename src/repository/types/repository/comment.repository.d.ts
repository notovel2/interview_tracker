import { CommentModel } from "../../../model/Comment";

type GetCommentInput = Partial<Pick<CommentModel, 'id'>>;
export type GetComment = (input: GetCommentInput) => Promise<CommentModel | undefined>;

export type GetAllCommentInput = { page: number, pageSize: number, interviewId: string };
export type GetAllComment = (input: GetAllCommentInput) => Promise<CommentModel[]>;

export type CreateCommentInput = Pick<CommentModel, 'description' | 'userId' | 'interviewId'>;
export type CreateComment = (input: CreateCommentInput) => Promise<void>;

export type UpdateCommentInput = {
    id: string;
    data: Pick<CommentModel, 'description'>;
};
export type UpdateComment = (input: UpdateCommentInput) => Promise<void>;

export type DeleteCommentInput = {
    id: string;
};
export type DeleteComment = (input: DeleteCommentInput) => Promise<void>;

export type CommentRepository = {
    getComment: GetComment;
    getAllComment: GetAllComment;
    createComment: CreateComment;
    deleteComment: DeleteComment;
    updateComment: UpdateComment;
};
