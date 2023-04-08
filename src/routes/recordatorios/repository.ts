import { client } from "../../db";
import { Iuser } from "./models";

export const createUser = async (body: Iuser) => {
  try {
    await client.connect();
    const database = client.db("db_0");
    const collection = database.collection<Iuser>("user");
    await collection.insertOne(body);
    await client.close();
    return { message: "Ok", status: 200 };
  } catch (error) {
    console.log(error);
    await client.close();
    return { message: "Bad Request", status: 404 };
  }
};

export const listUser = async () => {
  try {
    await client.connect();
    const database = client.db("db_0");
    const collection = database.collection<Iuser>("user");
    const users = await collection.find().toArray();
    await client.close();
    return { message: "Ok", data: users, status: 200 };
  } catch (error) {
    console.log(error);
    await client.close();
    return { message: "Bad Request", status: 404 };
  }
};
