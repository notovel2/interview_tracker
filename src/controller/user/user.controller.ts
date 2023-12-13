import { RequestHandler } from "express";
import userService from "../../service/user";
import { HttpStatus } from "../../constant/http";

export const getUserController: RequestHandler = async (req, res)  => {
    const id = req.query.id as string;
    const user = await userService.getUser(id);
    if (!user) {
        res.status(HttpStatus.BAD_REQUEST).json({ message: 'user_not_found' });
    }
    res.json(user);
};

export const createUserController: RequestHandler = async (req, res) => {
    const body = req.body;
    await userService.createUser(body.name, body.username, body.password, body.email);
    res.status(HttpStatus.CREATED).json({ message: 'create_user_successfully' });
};
