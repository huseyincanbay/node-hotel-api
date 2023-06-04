const express = require('express');
const router = express.Router();

const HotelController = require("./controllers/hotel.js");

router.post('/createHotel', HotelController.createHotel);
router.put('/updateHotel/:id', HotelController.updateHotel);
router.delete('/deleteHotel/:id', HotelController.deleteHotel);
router.get('/getSingleHotel/:id', HotelController.getSingleHotel);
router.get('/getAllHotel', HotelController.getAllHotel);
router.get('/typeByCount', HotelController.typeByCount);
router.get('/typeByCity', HotelController.typeByCity);

module.exports = router;