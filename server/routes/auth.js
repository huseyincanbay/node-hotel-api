const AuthController = require('./controllers/auth.js');

const express = express();
const router = express.Router();

router.post('/register', AuthController.register);
router.post('/login', AuthController.login);

module.exports = router;