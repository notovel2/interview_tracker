import { randomUUID } from "crypto";
import { postgresRepository } from "../../repository/postgres";
import { compare } from "../../utils/encrypt";
import redisClient from "../../infrastructure/cache/redis";

const getTokenByUserId = async (userId: string) => {
    const userToken = await redisClient.get(`userId:${userId}`);
    if (userToken) {
        return userToken;
    }
    const token = randomUUID();

    await redisClient.setEx(`atk:${token}`, 900, userId);
    await redisClient.setEx(`userId:${userId}`, 900, token);

    return token;
};

export const login = async (username: string, password: string) => {
    const user = await postgresRepository.user.getUser({ username });
    if (!user) {
        return null;
    }
    const isEqual = compare(password, user.password);
    if (!isEqual) {
        return null;
    }

    const token = await getTokenByUserId(user.id);
    return {
        atk: token,
    };
};
