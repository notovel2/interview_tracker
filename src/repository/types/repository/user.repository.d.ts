import { UserModel } from "../../../model/user";

type GetUserInput = Partial<Pick<UserModel, 'id' | 'username'>>;
export type GetUser = (input: GetUserInput) => Promise<UserModel | undefined>;

export type CreateUserInput = Pick<UserModel, 'name' | 'email' | 'username' | 'password'>;
export type CreateUser = (input: CreateUserInput) => Promise<void>;

export type UserRepository = {
    getUser: GetUser;
    createUser: CreateUser;
};
