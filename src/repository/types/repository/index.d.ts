import { ChangelogRepository } from "./changelog.repository";
import { CommentRepository } from "./comment.repository";
import { InterviewRepository } from "./interview.repository";
import { UserRepository } from "./user.repository"

export type Repository = {
    user: UserRepository;
    interview: InterviewRepository;
    comment: CommentRepository;
    changelog: ChangelogRepository;
};
