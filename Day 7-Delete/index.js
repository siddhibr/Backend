import express from "express";

const app = express();

const students = [
  { id: 1, name: "kajal", email: "kajal@gmail.com" },
  { id: 2, name: "yash", email: "yash@gmail.com" },
  { id: 3, name: "seema", email: "seema@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Workging,");
});

app.delete("/delete-user/:id", (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    if (!userId)
      return res
        .status(404)
        .json({ success: false, message: "User Id is required." });

    const user = students.findIndex((user) => user.id === userId);
    console.log(user, "user");

    if (user === -1)
      return res
        .status(404)
        .json({ success: false, message: "User not found." });

    students.splice(user, 1);
    res.status(200).json({
      success: true,
      message: "User deleted Successfully.",
      updatedUserList: students,
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error });
  }
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000.");
});