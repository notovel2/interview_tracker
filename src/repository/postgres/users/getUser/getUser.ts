import { GetUser } from "../../../types/repository/user.repository";
import Model from "../../models";

const getUser: GetUser = async (input) => {
    const user = await Model.User.findOne({ where: input});
    return user?.toJSON();
};

export default getUser;
