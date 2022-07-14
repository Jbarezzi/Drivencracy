import { db } from "./../database/mongo.js";

async function createChoice(req, res) {
    const choice = req.body;
    try {
        await db.collection("choices").insertOne(choice);
        res.sendStatus(201);
    } catch(error) {
        res.sendStatus(503);
    }
}

export { createChoice };