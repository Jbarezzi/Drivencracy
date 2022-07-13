import { Router } from "express";

const choiceRouter = Router();

choiceRouter.post("/choice", checkIfPollExists, checkIfPollIsOpen, validateChoice, createChoice);
choiceRouter.post("/choice/:id/vote", checkIfChoiceExists, checkIfPollIsOpen, registerVote);
choiceRouter.get("/poll/:id/result", checkIfPollExists, checkIfPollIsOpen, getPollResults);

export default choiceRouter;