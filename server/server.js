import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import bodyParser from "body-parser";

import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import dbconnection from "./dbconfig/dbconnection.js";
import router from "./routes/index.js";

const app=express()

dotenv.config();
const PORT = process.env.PORT || 8800;

dbconnection();

app.use(express.json());
app.use(cors());
app.use(xss());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(mongoSanitize());
app.use(express.json({limit: "10mb"}));
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));

app.use(router);

app.listen(PORT, () => {
    console.log(`Dev Server running on port: ${PORT}`);
  });

