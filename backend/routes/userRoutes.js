const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers); // before accessing all users we are checking wherther he is authenticated or not by custom middleware protect
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
