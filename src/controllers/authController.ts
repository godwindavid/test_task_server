import { Request, Response, Router } from "express";
import { errorResponse, responseCreater } from "../common/helper";
import { login } from "../services/authService";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const response = await login(req.body);
    res.status(200).send(responseCreater("success", "Logged in Successfullty", response));
  } catch (error) {
    res.status(400).send(errorResponse(error));
  }
});

export default router;
