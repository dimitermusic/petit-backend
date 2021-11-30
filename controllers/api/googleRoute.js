const express = require("express");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth");
const axios = require("axios");

router.get("/", (req, res) => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.query.name}%20in%20${req.query.city}&key=${process.env.API_KEY}`)
      .then(function (response) {
        console.log(response.data.results);
        res.json(response.data.results);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err })
      })
});

module.exports = router