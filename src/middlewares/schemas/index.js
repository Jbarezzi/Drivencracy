import Joi from "joi";

const pollSchema = Joi.object({
    title: Joi.string().trim().required(),
    expiresAt: Joi.date().greater("now"),
});

const choiceSchema = Joi.object({
    title: Joi.string().trim().required(),
    poolId: Joi.string().trim().required()
});

export { pollSchema, choiceSchema };