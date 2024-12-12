import { Router } from "express";
import { parkController } from "./park.controller";

const router = Router();

router.get("/", parkController.getAll.bind(parkController));
router.delete("/", parkController.delet.bind(parkController));
router.post("/id", parkController.getId.bind(parkController));
router.post("/", parkController.create.bind(parkController));

export default { router };
