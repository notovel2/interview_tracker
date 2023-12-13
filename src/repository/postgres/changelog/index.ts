import { ChangelogRepository } from "../../types/repository/changelog.repository";
import createChangelog from "./createChangelog/createChangelog";
import getAllChangelog from "./getAllChangelog/getAllChangelog";

const changelogRepository: ChangelogRepository = {
    getAllChangelog: getAllChangelog,
    createChangelog: createChangelog,
};

export default changelogRepository;
