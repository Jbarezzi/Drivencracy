import { Router } from "express";
import { createChoice } from "../controllers/choiceController.js";
import checkIfPollIsValidFromBody from "../middlewares/checkIfPollIsValidFromBody.js";
import validateChoice from "../middlewares/validateChoice.js";

const choiceRouter = Router();

choiceRouter.post("/choice", checkIfPollIsValidFromBody, validateChoice, createChoice);
// choiceRouter.post("/choice/:id/vote", checkIfChoiceExists, checkIfPollIsOpen, registerVote);
// choiceRouter.get("/poll/:id/result", checkIfPollExists, getPollResults);

export default choiceRouter;