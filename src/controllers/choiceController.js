import dayjs from "dayjs";
import { db, objectId } from "./../database/mongo.js";

async function createChoice(req, res) {
    const choice = req.body;
    try {
        await db.collection("choices").insertOne(choice);
        res.sendStatus(201);
    } catch(error) {
        res.sendStatus(503);
    }
}

async function createVote(req, res) {
    const id = req.params.id;
    const vote = {
        createdAt: dayjs().format("YYYY-MM-DD HH-mm"),
        choiceId: new objectId(id),
    }
    try {
        await db.collection("votes").insertOne(vote);
        res.sendStatus(201);
    } catch {
        res.sendStatus(503);
    }
}

export { createChoice, createVote };