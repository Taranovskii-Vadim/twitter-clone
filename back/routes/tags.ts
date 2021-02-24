import { Router } from "express";
import { tagController } from "../controllers/TagController";

const router = Router();

router.get("/", tagController.index);

export { router as TagRouter };
