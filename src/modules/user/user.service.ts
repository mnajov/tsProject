import { CustomError } from "../../lib/customError";
import { repository, Repository } from "../../lib/repository";
import { ResData } from "../../lib/resData";
import { IUser, IUserService } from "./interfaces/user.service";

class UserService implements IUserService {
  constructor(private repository: Repository) {}

  async getById(id: number): Promise<ResData<IUser>> {
    const data: IUser | undefined = await this.repository.single<IUser, number>(
      "SELECT * from users WHERE id = $1",
      id
    );

    if (!data) {
      throw new CustomError(404, "user not found");
    }

    return new ResData<IUser>(200, "success", data);
  }
}

export const userService = new UserService(repository);
