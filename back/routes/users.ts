import * as express from "express";
import { userController } from "../controllers/UserController";
import { registerValidator } from "../validators/register";

const router = express.Router();

router.get("/", userController.index);

router.post("/", registerValidator, userController.create);

export const usersRouter = router;
