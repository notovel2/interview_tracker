import { createUser } from "./createUser";
import { getUser } from "./getUser";

const userService = {
    getUser: getUser,
    createUser: createUser,
};

export default userService;
