export interface ChangelogModel {
    id: string;
    action: string;
    userId: string;
    interviewId: string;
    createdAt: Date;
    updatedAt: Date;
}