require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/records', require('./routes/recordRoutes'));

const PORT = process.env.PORT || 3500;

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI).then(res => console.log('Sikeres csatlakozás!')).catch(err => console.log(err)); 
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});