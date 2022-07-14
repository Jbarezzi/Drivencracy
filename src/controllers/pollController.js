import dayjs from "dayjs";
import { db } from "./../database/mongo.js";

async function createPoll(req, res) {
    const poll = req.body;
    if(!poll.expiresAt) {
        poll.expiresAt = dayjs().add(30, "day").format("YYYY-MM-DD HH-mm");
    }
    try {
        await db.collection("polls").insertOne(poll);
        res.sendStatus(201);
    } catch(error) {
        res.sendStatus(503);
    }
}

async function getPolls(_req, res) {
    try {
        const polls = await db.collection("polls").find().toArray();
        res.send(polls);
    } catch {
        res.send(503);
    }
}

export { createPoll, getPolls };