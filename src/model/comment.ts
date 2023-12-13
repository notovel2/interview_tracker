export interface CommentModel {
    id: string;
    description: string;
    userId: string;
    interviewId: string;
    createdAt: Date;
    updatedAt: Date;
}