import { createChangelog } from "./createChangelog";
import { getAllChangelog } from "./getAllChangelog";

const changelogService = {
    createChangelog: createChangelog,
    getAllChangelog: getAllChangelog,
};

export default changelogService;
