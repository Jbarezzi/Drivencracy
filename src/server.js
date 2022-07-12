import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(cors(), express.json());
dotenv.config();

app.listen(process.env.PORT);