import { postgresRepository } from "../../repository/postgres";
import { encrypt } from "../../utils/encrypt";

export const createUser = (name: string, username: string, password: string, email: string) => {
    return postgresRepository.user.createUser({
        name,
        email,
        username,
        password: encrypt(password),
    });
};
