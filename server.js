const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

PORT = process.env.PORT || 8000;

mongoose.connect('mongodb://localhost:27017/node-practice').then(() => {
	console.log("node-practice Database connected");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

require('./app/routes/route')(app);

app.listen(PORT, () => {
	console.log(`Server is running on port http://localhost:${PORT}`)
})