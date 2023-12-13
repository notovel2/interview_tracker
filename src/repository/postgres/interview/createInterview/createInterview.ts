import { CreateInterview } from "../../../types/repository/interview.repository";
import Model from "../../models";

const createInterview: CreateInterview = async (input) => {
    await Model.Interview.create(input);
};

export default createInterview;
