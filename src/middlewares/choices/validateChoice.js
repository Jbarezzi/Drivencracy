import { db, objectId } from "../../database/mongo.js";
import { choiceSchema } from "../schemas/index.js";

async function validateChoice(req, res, next) {
    const { title, poolId } = req.body;
    try {
        await choiceSchema.validateAsync({ title, poolId });
        const titleExist = await db.collection("choices").findOne({ poolId: new objectId(poolId), title: title });
        if(!!titleExist) {
            res.sendStatus(409);
            return;
        }
        next();
    } catch(error) {
        const errors = error.details.map(detail => detail.message);
        res.status(422).send(errors);
    }   
}

export default validateChoice;