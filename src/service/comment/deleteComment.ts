import { postgresRepository } from "../../repository/postgres";

export const deleteComment = async (id: string, userId: string) => {
    const comment = await postgresRepository.comment.getComment({ id });
    if (!comment) {
        throw new Error('NotFound');
    }
    if (comment.userId !== userId) {
        throw new Error('Forbidden');
    }
    return postgresRepository.comment.deleteComment({ id });
};
