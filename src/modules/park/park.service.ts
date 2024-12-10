import { repository, Repository } from "../../lib/repository";
import { ResData } from "../../lib/resData";
import { IPark, IParkService } from "./interfaces/park.service";

class ParkService implements IParkService {
  constructor(private repository: Repository) {}

  async getAll(): Promise<ResData<Array<IPark>>> {
    const data = await this.repository.multiple<IPark, undefined>(
      "select * from parks"
    );

    return new ResData<Array<IPark>>(200, "success", data);
  }
}

export const parkService = new ParkService(repository);
