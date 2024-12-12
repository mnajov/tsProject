import { ResData } from "../../../lib/resData";

export interface IPark {
  id: number;
  name: string;
  phone: string | null;
  owner: number;
}



export interface IDtoPark{
  id:number;
  name:string;
  phone:string;
  owner:number;

}

export interface IParkService {
  getAll(): Promise<ResData<Array<IPark>>>;
  delete(id:number):Promise<ResData<IPark>>;
  getId(id:number):Promise<ResData<IPark>>;
  create(dto:Omit<IDtoPark,'id'>):Promise<ResData<IDtoPark>>
}
