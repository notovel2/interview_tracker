import { postgresRepository } from "../../repository/postgres";

export const createChangelog = (action: string, userId: string, interviewId: string) => {
    return postgresRepository.changelog.createChangelog({ userId, action, interviewId });
};
