import { NextFunction, Request, Response } from "express";
import { IParkService } from "./interfaces/park.service";
import { parkService } from "./park.service";

class ParkController {
  constructor(private parkService: IParkService) {}

  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    
    try {
      const resData = await this.parkService.getAll();
      res.status(resData.meta.statusCode).json(resData);
      
    } catch (error) {
      next(error)
    }
  }



  async delet(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {

      const resData = await this.parkService.delete(req.body.id);
      res.status(resData.meta.statusCode).json(resData);
      
    } catch (error) {
      next(error)
    }
  }



  async getId(req:Request, res:Response, next:NextFunction){

    try {
      const resData = await this.parkService.getId(req.body.id);
      res.status(resData.meta.statusCode).json(resData);
      
    } catch (error) {
      next(error)
    }


  }


  async create(req:Request,res:Response, next:NextFunction):Promise<void>{

  try {

    const resData = await this.parkService.create(req.body);
    res.status(resData.meta.statusCode).json(resData);

    
  } catch (error) {
    next(error);
  }



  }
}

export const parkController = new ParkController(parkService);
