import { Router } from "express";
import { createChoice, createVote } from "./../controllers/choiceController.js";
import checkIfPollIsValidFromBody from "./../middlewares/checkIfPollIsValidFromBody.js";
import checkIfChoiceExists from "../middlewares/choices/checkIfChoiceExists.js";
import checkIfPollIsOpen from "../middlewares/choices/checkIfPollIsOpen.js";
import validateChoice from "./../middlewares/validateChoice.js";

const choiceRouter = Router();

choiceRouter.post("/choice", checkIfPollIsValidFromBody, validateChoice, createChoice);
choiceRouter.post("/choice/:id/vote", checkIfChoiceExists, checkIfPollIsOpen, createVote);

export default choiceRouter;