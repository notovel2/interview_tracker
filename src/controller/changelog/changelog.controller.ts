import { RequestHandler } from "express";
import changelogService from "../../service/changelog";
import { HttpStatus } from "../../constant/http";

export const getAllChangelogController: RequestHandler = async (req, res) => {
    const page = parseInt(req.query.page as string ?? '1');
    const interviewId = req.query.interviewId as string;

    if (!interviewId) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: 'interviewId is required' });
    }

    const changelogs = await changelogService.getAllChangelog(page, interviewId);
    res.json({ data: changelogs });
};
