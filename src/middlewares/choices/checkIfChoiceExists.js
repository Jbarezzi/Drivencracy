import { db, objectId } from "../../database/mongo.js";

async function checkIfChoiceExists(req, res, next) {
    const id = req.params.id;
    try {
        const choice = await db.collection("choices").findOne({ _id: objectId(id) });
        if(!!choice) {
            next();
            return;
        }
        res.sendStatus(404);
    } catch {
        res.sendStatus(503);
    }
}

export default checkIfChoiceExists;