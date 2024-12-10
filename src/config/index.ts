import { IConfig } from "./interfaces/config.interface";
import dotenv from "dotenv";

dotenv.config();

export const config: IConfig = {
  PORT: Number(process.env.PORT),
  DB_URL: process.env.DB_URL || "",
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "",
};
