const UserController = require('./controllers/user.js');

const express = express();
const router = express.Router();

router.put('/updateUser/:id', UserController.updateUser);
router.delete('/deleteUser/id', UserController.deleteUser);
router.get('/getAllUser', UserController.getAllUser);
router.get('/getUserDetail/:id', UserController.getUserDetail);

module.exports = router;