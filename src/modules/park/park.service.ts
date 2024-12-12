import { CustomError } from "../../lib/customError";
import { repository, Repository } from "../../lib/repository";
import { ResData } from "../../lib/resData";
import { IDtoPark, IPark, IParkService } from "./interfaces/park.service";

class ParkService implements IParkService {
  constructor(private repository: Repository) {}

  async getAll(): Promise<ResData<Array<IPark>>> {
    const data = await this.repository.multiple<IPark, undefined>(
      "select * from parks"
    );

    return new ResData<Array<IPark>>(200, "success", data);
  }
  async delete(id:number):Promise<ResData<IPark>>{

    const data:IPark|undefined = await this.repository.single<IPark,number>(" delete from parks where id=$1 returning *;", id)
    if(!data) throw new CustomError(400,'bunday id li park topilmadi')

    return new ResData<IPark>(200, "deleted",data)

  }

  async getId(id:number):Promise<ResData<IPark>>{

    const data:IPark|undefined = await repository.single<IPark, number>("select * from parks where id=$1;", id);

    if(!data) throw new CustomError(400,"bunda park topilmadi")
    return new ResData<IPark>(200,"siznin idli parkingiz", data)

  }


  async create(dto:Omit<IDtoPark,'id'>):Promise<ResData<IDtoPark>>{

    const data:IDtoPark|undefined= await repository.single<IDtoPark,any>("insert into parks(name,phone,owner) values($1,$2,$3) returning *;",dto.name,dto.phone,dto.owner);
    if(!data) throw new CustomError(400,"yaratilmadi");

    return new ResData<IDtoPark>(200, "created park", data);
  }

    

}




export const parkService = new ParkService(repository);
