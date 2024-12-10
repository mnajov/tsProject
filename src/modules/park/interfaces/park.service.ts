import { ResData } from "../../../lib/resData";

export interface IPark {
  id: number;
  name: string;
  phone: string | null;
  owner: number;
}

export interface IParkService {
  getAll(): Promise<ResData<Array<IPark>>>;
}
