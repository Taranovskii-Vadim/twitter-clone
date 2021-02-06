import * as express from "express";

import { tagController } from "../controllers/TagController";

const router = express.Router();

router.get("/", tagController.index);

export const tagsRouter = router;
