import { postgresRepository } from "../../repository/postgres";

export const updateInterviewStatus = async (id: string, userId: string, status: string) => {
    await postgresRepository.interview.updateInterview({ data: { status }, id });
    await postgresRepository.changelog.createChangelog({ interviewId: id, userId, action: status });
};
