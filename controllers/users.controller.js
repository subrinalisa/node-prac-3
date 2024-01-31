let users = require("../models/users.model");
const { v4: uuidv4 } = require("uuid");

exports.getAllUsers = (req, res) => {
  res.status(200).json(users);
};
exports.createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    title: req.body.title,
    body: req.body.body,
  };
  users.push(newUser);
  res.status(200).json({ message: "Created", users });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  users
    .filter((user) => user.id == id)
    .map((selectedUser) => {
      selectedUser.title = title;
      selectedUser.body = body;
    });
  res.status(200).json({ message: "Updated", users });
};

exports.deleteUSer = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);

  res.status(200).json(users);
};
