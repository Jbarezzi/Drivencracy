import { Router } from "express";
import validatePoll from "./../middlewares/validatePoll";

const pollRouter = Router();

pollRouter.post("/poll", validatePoll, createPoll);
pollRouter.get("/poll", getPolls);
pollRouter.get("/poll/:id/choice", checkIfPollExists, getPollChoices);
pollRouter.get("/poll/:id/result", checkIfPollExists, getPollResults);


export default pollRouter;