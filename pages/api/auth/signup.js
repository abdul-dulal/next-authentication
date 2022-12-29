import { hash } from "bcrypt";
import dbConnect from "../../../dataBase/dbConnect";
import { Login } from "../../../modal/login";
export default async function handeler(req, res) {
  dbConnect().catch(() => {
    res.status(405).json({ error: "Error in the Connection" });
  });
  try {
    const { method } = req;
    if (method === "POST") {
      if (!req.body) return res.status(404).json({ error: "data not found" });

      const { name, email, password } = req.body;

      const checkExisting = await Login.findOne({ email });
      if (checkExisting) {
        return res.status(422).json({ error: "User Already exist" });
      }

      Login.create(
        { name, email, password: await hash(password, 12) },
        function (err, data) {
          if (err) {
            return res.status(404).json({ message: err.message });
          }
          res.status(201).json({ status: true, user: data });
        }
      );
    }
  } catch (err) {
    res.json({ err: err.message });
  }
}
