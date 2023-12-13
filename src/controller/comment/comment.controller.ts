import { RequestHandler } from "express";
import { HttpStatus } from "../../constant/http";
import commentService from "../../service/comment";

export const getAllCommentController: RequestHandler = async (req, res)  => {
    const page = parseInt(req.query.page as string ?? '1');
    const interviewId = req.query.interviewId as string;

    if (!interviewId) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'interviewId is required' });
    }

    const comments = await commentService.getAllComment(page, interviewId);
    res.json({ data: comments });
};

export const createCommentController: RequestHandler = async (req, res) => {
    const { description, interviewId } = req.body;
    if (!description || !interviewId) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'interviewId and description are required' });
    }
    await commentService.createComment(description, req.userId, interviewId);
    res.status(HttpStatus.CREATED).json({ message: 'create_comment_successfully' });
};

export const updateCommentController: RequestHandler = async (req, res, next) => {
    const id = req.params.id;
    const { description } = req.body;
    if (!description || !id) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'interviewId and description are required' });
    }
    try {
        await commentService.updateComment(id, req.userId, description);
        res.json({ message: 'update_comment_successfully' });
    } catch (error) {
        next(error);
    }
};

export const deleteCommentController: RequestHandler = async (req, res, next) => {
    const { interviewId } = req.body;
    if (!interviewId) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'interviewId is required' });
    }
    try {
        await commentService.deleteCommment(interviewId, req.userId);
        res.json({ message: 'delete_comment_successfully' });
    } catch (error) {
        next(error);
    }
};
