const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jasonwebtoken");

const register = async () => {
  const { username, password, email } = req.body;
  try {
    const user = await User.findOne(email);
    if (user) {
      return res.status(500).json({ message: "User already exists!" });
    }
    if (password.length < 8)
      res.status(500).json({ message: "Password too short!" });
    const passwordHash = await bcrypt.hash(password, 12);

    if (!isEmail(email))
      res.status(500).json({ message: "It's not a valid email!" });

    const newUser = await User.create({ ...req.body, password: passwordHash });

    const token = await jwt.sign(
      { id: newUser._id, isAdmin: newUser.isAdmin },
      "SECRET_KEY"
    );

    res
      .cookie("token", token, { httpOnly: true })
      .status(201)
      .json({ token, newUser });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const login = async () => {
  const { password, email } = req.body;
  try {
    const user = await User.findOne(email);
    if (!user) {
      return res.status(500).json({ message: "User not found!" });
    }
    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
      return res.status(500).json({ message: "Password is incorrect!" });
    }

    const token = await jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      "SECRET_KEY"
    );

    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ token, user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailAdress.match(regex)) return true;
  else return false;
}

module.exports = { register, login };
