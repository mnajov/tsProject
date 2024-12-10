import { Router } from "express";
import { parkController } from "./park.controller";

const router = Router();

router.get("/", parkController.getAll.bind(parkController));

export default { router };
