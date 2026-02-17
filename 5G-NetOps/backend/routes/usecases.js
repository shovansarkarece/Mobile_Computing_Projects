import express from "express";
import { activateUseCases } from "../controllers/usecaseController.js";

const router = express.Router();

router.post("/activate", activateUseCases);

export default router;
