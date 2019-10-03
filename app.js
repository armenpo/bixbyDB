import express from "express";
import bodyParser from "body-parser";

import globalRouter from "./routers/globalRouter";

const app = express();

//[CONFIGURE APP TO USE bodyParser]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", globalRouter);

export default app;