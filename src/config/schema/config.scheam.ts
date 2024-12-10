import * as Joi from "joi";
import { IConfig } from "../interfaces/config.interface";

export const configScheam = Joi.object<IConfig, true>({
  PORT: Joi.number().min(1000).max(9999).required(),
  DB_URL: Joi.string().min(3).required(),
  JWT_ACCESS_SECRET: Joi.string().min(3).required(),
  JWT_REFRESH_SECRET: Joi.string().min(3).required(),
});
