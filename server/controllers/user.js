const User = require("../models/User.js");

const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted successfully..." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getUserDetail = async (req, res, next) => {
  try {
    const User = await User.findById(req.params.id);
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const User = await User.find();
    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = { updateUser, deleteUser, getUserDetail, getAllUser };
