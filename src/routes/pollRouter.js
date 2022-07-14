import { Router } from "express";
import validatePoll from "./../middlewares/validatePoll.js";
import checkIfPollExists from "../middlewares/checkIfPollExists.js";
import { createPoll, getPolls, getPollChoices } from "./../controllers/pollController.js";

const pollRouter = Router();

pollRouter.post("/poll", validatePoll, createPoll);
pollRouter.get("/poll", getPolls);
pollRouter.get("/poll/:id/choice", checkIfPollExists, getPollChoices);
// pollRouter.get("/poll/:id/result", checkIfPollExists, getPollResults);


export default pollRouter;