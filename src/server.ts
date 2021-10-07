import express, { Request, Response, Application } from "express";
import { DB } from "./config/database";
import { BlogInstances as blog } from "./model/model";
import dotenv from "dotenv";
dotenv.config();
const app: Application = express();
const Port = process.env.port || 3000;

DB.sync({
    force: true
}).then(() => {
    console.log("Connected to Db")
});

async function createPost(name: string, content: Text): Promise<void> {
    await blog.create({
        title: name,
        description: content,
    });
}

app.use(express.json());

app.get('/', async(req: Request, res: Response) => {
    const result = await blog.findAll();
    return res.send(result);
});

app.post('/', (req: Request, res: Response, next) => {
    createPost(req.body.name, req.body.content)
        .then(() => res.send(`The post is created successfully`))
        .finally(next);
    }
);
app.listen(3000, () => {
    console.log(`server running at http://localhost:${Port}`);
})
