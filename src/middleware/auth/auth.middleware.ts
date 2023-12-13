import { RequestHandler } from "express";
import { HttpStatus } from "../../constant/http";
import redisClient from "../../infrastructure/cache/redis";

export const useAuth: () => RequestHandler = () => async (req, res, next) => {
    const authorizationHeader = req.header('Authorization');
    if (!authorizationHeader) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }
    const [, token] = authorizationHeader.split(' ');

    const userId = await redisClient.get(`atk:${token}`);

    if (!userId) {
        return res.status(HttpStatus.UNAUTHORIZED).json({ message: 'Unauthorized' });
    }

    req.userId = userId;
    
    next();
};
