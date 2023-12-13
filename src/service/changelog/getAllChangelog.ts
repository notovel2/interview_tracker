import { postgresRepository } from "../../repository/postgres";

export const getAllChangelog = (page: number, interviewId: string) => {
    return postgresRepository.changelog.getAllChangelog({ page, pageSize: 10, interviewId });
};
