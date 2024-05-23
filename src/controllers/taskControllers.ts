import { Request, NextFunction, Response } from "express";
import { taskSchema } from "../validations/taskSchema";
import { taskServices } from "../services/taskServices";
import { taskRepository } from "../repositories/taskRepository";
import { paginationSchema } from "../validations/paginationSchema";

export const taskControllers = {

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      paginationSchema 
      return res.status(200).json({ message: "User read!" });
    } catch (error) {
      return next(error);
    }
  },

};
