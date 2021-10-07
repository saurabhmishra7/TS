import express, { Request, Response, Application } from "express";
import {DB} from "./config/database";
import { BlogInstances } from "./model/model";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();
const Port=process.env.port;

DB.sync({
    force  : true
}).then(() => {
    console.log("Connected to Db")
});

app.get('/', (req: Request, res: Response) => {
    return res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Listening on Port");
})
