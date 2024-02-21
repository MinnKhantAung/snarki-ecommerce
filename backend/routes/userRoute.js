import express from "express";
import { createUser, getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/create", createUser);

export const userRouter = router;
