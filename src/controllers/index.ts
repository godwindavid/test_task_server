import express from "express"
import userRouter from "./userController"
import authRouter from "./authController"
import authorization from "../authorization";

const router = express.Router()

router.use("/user", authorization, userRouter)
router.use("/auth", authRouter)

export default router;