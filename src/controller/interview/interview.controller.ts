import { RequestHandler } from "express";
import { HttpStatus } from "../../constant/http";
import interviewService from "../../service/interview";
import { InterviewStatus, interviewFlows } from "../../constant/interview";

export const getAllInterviewController: RequestHandler = async (req, res)  => {
    const page = parseInt(req.query.page as string ?? '1');
    const interviews = await interviewService.getAllInterview(page);
    res.json({ data: interviews });
};

export const createInterviewController: RequestHandler = async (req, res) => {
    const body = req.body;
    await interviewService.createInterview(body.title, body.description, req.userId);
    res.status(HttpStatus.CREATED).json({ message: 'create_interview_successfully' });
};

export const updateInterviewStatusController: RequestHandler = async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
    if (!interviewFlows.includes(status)) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'invalid_status' });
    }
    await interviewService.updateInterviewStatus(id, req.userId, status);
    res.json({ message: 'update_status_succesfully' });
};
