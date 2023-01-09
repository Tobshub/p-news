import { Router } from "express";
import userRouter from "users/userRouter";

const router = Router();

router.use("/user", userRouter);

export default router;
