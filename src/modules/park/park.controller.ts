import { NextFunction, Request, Response } from "express";
import { IParkService } from "./interfaces/park.service";
import { parkService } from "./park.service";

class ParkController {
  constructor(private parkService: IParkService) {}

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    const resData = await this.parkService.getAll();

    res.status(resData.meta.statusCode).json(resData);
  }
}

export const parkController = new ParkController(parkService);
