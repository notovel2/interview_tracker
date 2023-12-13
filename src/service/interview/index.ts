import { createInterview } from "./createInterview";
import { getAllInterView } from "./getAllInterview";
import { updateInterviewStatus } from "./updateInterviewStatus";

const interviewService = {
    createInterview: createInterview,
    getAllInterview: getAllInterView,
    updateInterviewStatus: updateInterviewStatus,
};

export default interviewService;
