import dayjs from "dayjs";
import { db, objectId } from "./../../database/mongo.js"

async function checkIfPollIsValidFromBody(req, res, next) {
    const { poolId }= req.body;
    try {
        const poll = await db.collection("polls").findOne({ _id: new objectId(poolId)});
        const isExpired = dayjs(poll.expiresAt) < dayjs();
        if(isExpired) {
            res.sendStatus(403);
            return;
        }
        next();
    } catch {
        res.sendStatus(404);
    }
}

export default checkIfPollIsValidFromBody;