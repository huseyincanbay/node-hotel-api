const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const db = require('./config/db.js');

//routes
const hotelRoutes = require('./routes/hotel.js');
const hotelRoomRoutes = require('./routes/hotel-room.js');
const authRoutes = require('./routes/auth.js');
const userRoutes = require('./routes/user.js');


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cookieParser());

app.use('/', hotelRoutes);
app.use('/', hotelRoomRoutes);
app.use('/', authRoutes);
app.use('/', userRoutes);

db();

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});