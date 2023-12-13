import { postgresRepository } from "../../repository/postgres";

export const createComment = (description: string, userId: string, interviewId: string) => {
    return postgresRepository.comment.createComment({ userId, description, interviewId });
};
