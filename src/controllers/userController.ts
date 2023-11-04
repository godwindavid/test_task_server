import express, { Request, Response, Router } from "express";
import { errorResponse, responseCreater } from "../common/helper";
import { createUser, deleteUser, editUser, getUser } from "../services/userService";

const router: Router = express.Router();

router.post("/addUser", async (req: Request, res: Response) => {
  try {
    const response = await createUser(req.body)
    res.status(200).send(responseCreater("success", "Added Successfullty", response));
  } catch (error) {
    res.status(400).send(errorResponse(error))
  }
});

router.get("/getUser", async (req: Request, res: Response) => {
    try {
      const response = await getUser(req.query)
      res.status(200).send(responseCreater("success", "Fetched Successfully", response));
    } catch (error) {
      res.status(400).send(errorResponse(error))
    }
});

router.put("/editUser", async (req: Request, res: Response) => {
  try {
    const response = await editUser(req.query, req.body)
    res.status(200).send(responseCreater("success", "Edited Successfully",response));
  } catch (error) {
    res.status(400).send(errorResponse(error))
  }
});

router.delete("/deleteUser", async (req: Request, res: Response) => {
  try {
    const response = await deleteUser(req.query)
    res.status(200).send(responseCreater("success", "Deleted Successfully", null, response));
  } catch (error) {
    res.status(400).send(errorResponse(error))
  }
});

export default router;
