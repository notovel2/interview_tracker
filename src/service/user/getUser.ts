import { postgresRepository } from "../../repository/postgres";

export const getUser = (id: string) => {
    return postgresRepository.user.getUser({ id });
};
