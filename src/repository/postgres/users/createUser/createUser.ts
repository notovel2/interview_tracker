import { CreateUser } from "../../../types/repository/user.repository";
import Model from "../../models";

const createUser: CreateUser = async (input) => {
    await Model.User.create(input);
};

export default createUser;
