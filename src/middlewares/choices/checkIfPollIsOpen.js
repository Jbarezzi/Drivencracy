import dayjs from "dayjs";
import { db, objectId } from "./../../database/mongo.js";

async function checkIfPollIsOpen(req, res, next) {
    const id = req.params.id;
    try {
        const choice = await db.collection("choices").findOne({ _id: new objectId(id) });
        const pollId = choice.poolId;
        const isPollOpen = await db.collection("polls").findOne({ _id: new objectId(pollId), expiresAt: { $gt: dayjs().format("YYYY-MM-DD HH-mm") } });
        if(!!isPollOpen) {
            next();
            return;
        }
        res.sendStatus(403);
    } catch {
        res.sendStatus(503);
    }
}

export default checkIfPollIsOpen;