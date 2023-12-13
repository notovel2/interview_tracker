import { Op } from "sequelize";
import { GetAllInterview } from "../../../types/repository/interview.repository";
import Model from "../../models";
import { InterviewStatus } from "../../../../constant/interview";

const getAllInterview: GetAllInterview = async (input) => {
    const offset = (input.page - 1) * input.pageSize;
    const interviews = await Model.Interview.findAll({
        where: {
            status: {
                [Op.not]: InterviewStatus.ARCHRIVED,
            },
        },
        limit: input.pageSize,
        offset,
        attributes: {
            exclude: ['userId'],
        },
        include: {
            model: Model.User,
            attributes: ['email', 'name'],
        },
    });
    return interviews.map((interview) => interview.toJSON());
};

export default getAllInterview;
