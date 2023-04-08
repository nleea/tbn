import { Request, Response } from "express";
import { Iuser } from "./models";
import { createUser, listUser } from "./repository";

export const insertOne = async (req: Request, res: Response) => {
  const body: Iuser = req.body;
  const resp = await createUser(body);

  return res.status(resp.status).json(resp.message);
};

export const listUsers = async (req: Request, res: Response) => {
  const resp = await listUser();

  return res
    .status(resp.status)
    .json({ data: resp.data, message: resp.message });
};
