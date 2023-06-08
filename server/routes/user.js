const UserController = require("./controllers/user.js");
const { verifyAdmin, verifyUser } = require("./middleware/verify.js");

const express = express();
const router = express.Router();

router.put("/updateUser/:id", verifyUser, UserController.updateUser);
router.delete("/deleteUser/id", verifyUser, UserController.deleteUser);
router.get("/getAllUser", verifyAdmin, UserController.getAllUser);
router.get("/getUserDetail/:id", verifyUser, UserController.getUserDetail);

module.exports = router;
