import { InterviewModel } from "../../../model/interview";

type GetInterviewInput = Partial<Pick<InterviewModel, 'id'>>;
export type GetInterview = (input: GetInterviewInput) => Promise<InterviewModel | undefined>;

export type GetAllInterviewInput = { page: number, pageSize: number };
export type GetAllInterview = (input: GetAllInterviewInput) => Promise<InterviewModel[]>;

export type CreateInterviewInput = Pick<InterviewModel, 'title' | 'description' | 'userId' | 'status'>;
export type CreateInterview = (input: CreateInterviewInput) => Promise<void>;

export type UpdateInterviewInput = {
    id: string;
    data: Pick<InterviewModel, 'status'>;
};
export type UpdateInterview = (input: UpdateInterviewInput) => Promise<void>;

export type InterviewRepository = {
    getAllInterview: GetAllInterview;
    createInterview: CreateInterview;
    updateInterview: UpdateInterview;
};
