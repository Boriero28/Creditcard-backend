import { NextFunction, Response, Request } from "express";
import UserService from "./user.service";

export const me = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json(req.user!);
  
}


//getAll User
export const listAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.getAllUsers();
    res.json(users);
  } catch (error) {
    
  }
};