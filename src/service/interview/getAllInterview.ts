import { postgresRepository } from "../../repository/postgres";

export const getAllInterView = (page: number) => {
    return postgresRepository.interview.getAllInterview({ page, pageSize: 10 });
};
