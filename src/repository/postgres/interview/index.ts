import { InterviewRepository } from "../../types/repository/interview.repository";
import createInterview from "./createInterview/createInterview";
import getAllInterview from "./getAllInterview/getAllInterview";
import updateInterview from "./updateInterview/updateInterview";

const interviewRepository: InterviewRepository = {
    getAllInterview: getAllInterview,
    createInterview: createInterview,
    updateInterview: updateInterview,
};

export default interviewRepository;
