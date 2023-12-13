import { UpdateInterview } from "../../../types/repository/interview.repository";
import Model from "../../models";

const updateInterview: UpdateInterview = async (input) => {
    await Model.Interview.update(input.data, { where: { id: input.id }});
};

export default updateInterview;
