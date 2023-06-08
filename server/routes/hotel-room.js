const HotelRoomController = require('./controllers/hotel-room.js');
const {verifyAdmin} = require("./middleware/verify.js");

const express = require('express');
const router = express.Router();

router.post('/createRoom/:id/:hotelid', verifyAdmin, HotelRoomController.createRoom);
router.put('/updateRoom/:id', verifyAdmin, HotelRoomController.updateRoom);
router.delete('/deleteRoom/:id/:hotelid', verifyAdmin, HotelRoomController.deleteRoom);
router.get('/getDetailRoom/:id', HotelRoomController.getDetailRoom);
router.get('/getAllRoom', HotelRoomController.getAllRoom);

module.exports = router;