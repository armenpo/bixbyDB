import express from "express";
import routes from "../routes";
import { home, getFood } from "../controllers/globalController";

const globalRouter = express.Router();

globalRouter.get(routes.home,home);
globalRouter.get(routes.login,getFood);

export default globalRouter;