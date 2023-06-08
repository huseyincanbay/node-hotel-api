const Hotel = require("../models/Hotel.js");
const HotelRoom = require("../models/HotelRoom.js");

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    const room = await HotelRoom.create(req.body);
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: room._id } });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const updateRoom = async (req, res, next) => {
  try {
    const room = await HotelRoom.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const deleteRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await HotelRoom.findByIdAndDelete(req.params.id);
    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id } });
    res.status(200).json({ message: "Room is deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getDetailRoom = async (req, res, next) => {
  try {
    const room = await HotelRoom.findById(req.params.id);
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const getAllRoom = async (req, res, next) => {
  try {
    const room = await HotelRoom.find();
    res.status(200).json(room);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  createRoom,
  updateRoom,
  deleteRoom,
  getDetailRoom,
  getAllRoom,
};
