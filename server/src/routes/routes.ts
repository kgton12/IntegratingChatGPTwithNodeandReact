import express from "express";
import * as promptController from "../controllers/promptController";

export const routes = express.Router();

routes.post("/api/prompt", promptController.postText);
