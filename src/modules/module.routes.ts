import { Router } from "express";
import parkRoutes from "./park/park.routes";

const router = Router();

router.use("/park", parkRoutes.router);

export default { router };
