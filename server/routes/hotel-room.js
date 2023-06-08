const HotelRoomController = require('./controllers/hotel-room.js');

const express = require('express');
const router = express.Router();

router.post('/createRoom/:id/:hotelid', HotelRoomController.createRoom);
router.put('/updateRoom/:id', HotelRoomController.updateRoom);
router.delete('/deleteRoom/:id/:hotelid', HotelRoomController.deleteRoom);
router.get('/getDetailRoom/:id', HotelRoomController.getDetailRoom);
router.get('/getAllRoom', HotelRoomController.getAllRoom);

module.exports = router;