import Joi from "joi";

const pollSchema = Joi.object({
    title: Joi.string().trim().required(),
    expiresAt: Joi.date().greater("now"),
});

export { pollSchema };