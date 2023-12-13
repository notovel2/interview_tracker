import { ChangelogModel } from "../../../model/Changelog";

type GetChangelogInput = Partial<Pick<ChangelogModel, 'id'>>;
export type GetChangelog = (input: GetChangelogInput) => Promise<ChangelogModel | undefined>;

export type GetAllChangelogInput = { page: number, pageSize: number, interviewId: string };
export type GetAllChangelog = (input: GetAllChangelogInput) => Promise<ChangelogModel[]>;

export type CreateChangelogInput = Pick<ChangelogModel, 'action' | 'userId' | 'interviewId'>;
export type CreateChangelog = (input: CreateChangelogInput) => Promise<void>;

export type ChangelogRepository = {
    getAllChangelog: GetAllChangelog;
    createChangelog: CreateChangelog;
};
