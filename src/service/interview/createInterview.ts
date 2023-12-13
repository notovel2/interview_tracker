import { InterviewStatus } from "../../constant/interview";
import { postgresRepository } from "../../repository/postgres";

export const createInterview = (title: string, description: string, userId: string) => {
    return postgresRepository.interview.createInterview({ title, description, userId: userId, status: InterviewStatus.TO_DO });
};
