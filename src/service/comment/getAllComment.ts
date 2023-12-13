import { postgresRepository } from "../../repository/postgres";

export const getAllComment = (page: number, interviewId: string) => {
    return postgresRepository.comment.getAllComment({ page, pageSize: 10, interviewId });
};
