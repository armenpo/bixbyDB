import express from "express";
import routes from "../routes";
import { getFood } from "../controllers/apiController";

const apiRouter = express.Router();

apiRouter.get(routes.getfood,getFood);