import {Router} from "express";
import { refrigeranteController } from '../controllers/refrigerante.controller'

const refrigeranteRouter = Router();


refrigeranteRouter.get("/", refrigeranteController.getRefrigerantes)
refrigeranteRouter.post("/", refrigeranteController.createRefrigerante)
export default refrigeranteRouter;