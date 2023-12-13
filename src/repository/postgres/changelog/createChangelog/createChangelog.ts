import { CreateChangelog } from "../../../types/repository/changelog.repository";
import Model from "../../models";

const createChangelog: CreateChangelog = async (input) => {
    await Model.Changelog.create(input);
};

export default createChangelog;
