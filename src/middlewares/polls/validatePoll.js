import { pollSchema } from "./../schemas/index.js";

async function validatePoll(req, res, next) {
    const poll = req.body;
    try {
        await pollSchema.validateAsync(poll, { abortEarly: false });
        next();
    } catch(error) {
        const errors = error.details.map(detail => detail.message);
        res.status(422).send(errors);
    }
}

export default validatePoll;