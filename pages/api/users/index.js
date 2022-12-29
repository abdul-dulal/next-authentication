import dbConnect from "../../../dataBase/dbConnect";
import {
  addUser,
  deleteUser,
  getUser,
  updateUser,
} from "../../../lib/controler";

export default async function handeler(req, res) {
  dbConnect().catch(() => {
    res.status(405).json({ error: "Error in the Connection" });
  });
  const { method } = req;

  switch (method) {
    case "POST":
      addUser(req, res);
      break;

    case "GET":
      return getUser(req, res);
      break;
    case "DELETE":
      return deleteUser(req, res);
      break;
    case "PUT":
      return updateUser(req, res);
      break;

    default:
      break;
  }
}
