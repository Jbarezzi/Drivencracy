import dayjs from "dayjs";
import { db } from "./../database/mongo.js";

async function createPoll(req, res) {
    const poll = req.body;
    if(!poll.expiresAt) {
        poll.expiresAt = dayjs().add(30, "day");
    }
    try {
        await db.collection("polls").insertOne(poll);
        res.sendStatus(201);
    } catch(error) {
        res.sendStatus(500);
    }
    
}