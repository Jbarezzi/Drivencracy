import dayjs from "dayjs";
import { db, objectId } from "../../database/mongo";

async function checkIfPollIsOpen(req, res, next) {
    const id = req.params.id;
    try {
        const isPollOpen = await db.collection("polls").find({ _id: new objectId(id), expiredAt: { $gt: dayjs().format("YYYY-MM-DD HH-mm") } });
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