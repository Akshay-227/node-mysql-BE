import { Router } from "express";
import { create, findAll, findOne, update, deleteAll, deleteOne, findAllPublished } from "../controllers/tutorial.controller.js";

const tutorialRouter = Router();

// Create a new Tutorial
tutorialRouter.post("/", create);

// Retrieve all Tutorials
tutorialRouter.get("/", findAll);

// Retrieve all published Tutorials
tutorialRouter.get("/published", findAllPublished);

// Retrieve a single Tutorial with id
tutorialRouter.get("/:id", findOne);

// Update a Tutorial with id
tutorialRouter.put("/:id", update);

// Delete a Tutorial with id
tutorialRouter.delete("/:id", deleteOne);

// Create a new Tutorial
tutorialRouter.delete("/", deleteAll);

export  default tutorialRouter