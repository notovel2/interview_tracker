import { Repository } from "../types/repository";
import changelogRepository from "./changelog";
import commentRepository from "./comment";
import interviewRepository from "./interview";
import userRepositoryPostgres from "./users";

export const postgresRepository: Repository = {
    user: userRepositoryPostgres,
    interview: interviewRepository,
    changelog: changelogRepository,
    comment: commentRepository,
};
