import { NextFunction, Request, Response } from "express";
import { errorResponse } from "../common/helper";
import * as jwt from "jsonwebtoken";

const authorization = async (req: any, res: Response, next: NextFunction) => {
  try {
    const authToken: string = req?.headers?.auth_token as string;
    if (authToken) {
      const decoded = jwt.verify(authToken, process.env.JWT_SECRET_KEY as string);
      req.user = decoded;
      next();
    } else {
      res.status(404).send(errorResponse({ message: "authToken invalid" }));
    }
  } catch (error) {
    res.status(404).send(errorResponse({ message: "authToken invalid" }));
  }
};

export default authorization;
