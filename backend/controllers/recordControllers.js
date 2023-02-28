const Record = require('../models/Record');

const getRecords = async (req, res) => {
    try {
        const Records = await Record.find();
        res.json(Records);
    } catch (error) {
        console.log(error);
    }
};

const postRecord = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;
        console.log(req.body);
        const newRecord = new Record({ name, description, price, image });
        await newRecord.save();
        res.json(newRecord);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { getRecords, postRecord };