import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";
import apiRouter from "./routers/apiRouter";

const app = express();

app.set("view engine", "pug");
//[CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(routes.home, globalRouter);
app.get(routes.api, apiRouter);

export default app;