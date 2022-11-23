const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

/* App Settings */
const app = express();
const PORT = process.env.PORT || 9000;

/* MongoDB Database Connection */
const connectMongoDB = require('./database/MongoDB/connectMongoDB');
connectMongoDB(process.env.MONGODB_CONNECTION_STRING);

/* Middleware */
app.use(express.json());
app.use(cors());

/* Routes */
app.use('/accounts', require('./routes/accounts.route'));
app.use('*', require('./errors/404'));

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));