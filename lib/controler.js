import Users from "../modal/user";

// get User
export async function getUser(req, res) {
  try {
    const user = await Users.find({});
    res.status(200).json({ user });
  } catch (err) {
    res.json({ err: err.message });
  }
}

// post user

export async function addUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({ error: "Data not Found" });
    Users.create(formData, (err, data) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.json({ err: error.message });
  }
}

// delete user

export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;
    console.log(userId);
    if (userId) {
      await Users.findByIdAndDelete(userId);
      res.status(200).json({ deleteId: userId });
    }
  } catch (err) {
    res.json({ err: err.message });
  }
}

// update user

export async function updateUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;
    console.log(userId);
    const reuslt = await Users.findByIdAndUpdate(userId, formData);
    res.json({ reuslt });
  } catch (err) {
    res.json({ err: err.message });
  }
}
