import { ResData } from "../../../lib/resData";

export interface IUser {
  id: number;
  phone: string;
  password: string;
  fullname?: string;
}

export interface IUserService {
  getById(id: number): Promise<ResData<IUser>>;
}
