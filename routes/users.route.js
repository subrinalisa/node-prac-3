const {
  getAllUsers,
  createUser,
  updateUser,
  deleteUSer,
} = require("../controllers/users.controller");
const router = require("express").Router();

router.get("/", getAllUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUSer);

module.exports = router;
