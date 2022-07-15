import { db, objectId } from "../database/mongo.js"

async function checkIfPollIsValidFromBody(req, res, next) {
    const { poolId }= req.body;
    try {
        const isPollValid = await db.collection("polls").findOne({ _id: objectId(poolId)});
        const isExpired = isPollValid.expiresAt > Date.now();
        if(isPollValid === false) {
            res.sendStatus(404);
        }
        if(isExpired) {
            res.sendStatus(403);
        }
        next();
    } catch {
        res.sendStatus(503);
    }
}

export default checkIfPollIsValidFromBody;