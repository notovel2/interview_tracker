import { RequestHandler } from "express";
import authService from "../../service/auth";

export const loginController: RequestHandler = async (req, res) => {
    const body = req.body;
    const response = await authService.login(body.username, body.password);
    res.json(response);
};
