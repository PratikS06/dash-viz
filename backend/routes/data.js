const express = require("express");
const DATA = require('../models/data');

const router = express.Router();

router.post('/create/data', async (req, res) => {
    const newdata = new DATA(req.body);

    try {
        const ad = await newdata.save();
        res.json({ ad });
    } catch (error) {
        res.status(400).json({
            message: "Failed to create newdata",
        });
    }
});

router.get('/alldata', (req, res) => {
    DATA.find()
      .then(alldata => {
        res.json(alldata);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

module.exports = router
