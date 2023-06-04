const mongoose = require("mongoose");

const hotelRoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [
      {
        type: Number,
        unavailableDates: {
          type: [Date],
        },
      },
    ],
  },
  { timestamps: true }
);

const HotelRoom = mongoose.model("HotelRoom", hotelRoomSchema);

module.exports = HotelRoom;
