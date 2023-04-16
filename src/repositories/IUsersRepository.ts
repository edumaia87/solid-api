import { User } from "../entities/User";

export interface IUsersRepository {
  finByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
}
