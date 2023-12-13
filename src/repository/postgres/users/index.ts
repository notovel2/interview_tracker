import { UserRepository } from "../../types/repository/user.repository";
import createUser from "./createUser/createUser";
import getUser from "./getUser/getUser";

const userRepositoryPostgres: UserRepository = {
    getUser: getUser,
    createUser: createUser,
};

export default userRepositoryPostgres;
