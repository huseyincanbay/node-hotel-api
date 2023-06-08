const HotelController = require("./controllers/hotel.js");
const { verifyAdmin } = require("./middleware/verify.js");

const express = require("express");
const router = express.Router();

router.post("/createHotel", verifyAdmin, HotelController.createHotel);
router.put("/updateHotel/:id", verifyAdmin, HotelController.updateHotel);
router.delete("/deleteHotel/:id", verifyAdmin, HotelController.deleteHotel);
router.get("/getSingleHotel/:id", HotelController.getSingleHotel);
router.get("/getAllHotel", HotelController.getAllHotel);
router.get("/typeByCount", HotelController.typeByCount);
router.get("/typeByCity", HotelController.typeByCity);

module.exports = router;
