import { db, objectId } from "./../../database/mongo.js";

async function checkIfPollExists(req, res, next) {
    const id = req.params.id;
    try {
        const isPollValid = await db.collection("polls").findOne({ _id: objectId(id) });
        if(!!isPollValid) {
            next();
        }
        res.sendStatus(404);
    } catch{
        res.sendStatus(503)
    }
}

export default checkIfPollExists;