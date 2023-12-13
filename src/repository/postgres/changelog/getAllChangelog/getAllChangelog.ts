import { GetAllChangelog } from "../../../types/repository/changelog.repository";
import Model from "../../models";

const getAllChangelog: GetAllChangelog = async (input) => {
    const offset = (input.page - 1) * input.pageSize;
    const changelogs = await Model.Changelog.findAll({
        where: {
            interviewId: input.interviewId,
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
    return changelogs.map((log) => log.toJSON());
};

export default getAllChangelog;
