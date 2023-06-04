const mongoose = require("mongoose");

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  photos: {
    type: [String],
  },
  rooms: {
    type: [String],
  },
  features: {
    type: Boolean,
    default: false,
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
