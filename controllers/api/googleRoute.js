const express = require("express");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth");
const axios = require("axios");

router.post("/", (req, res) => {
    console.log(req);
    return axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.body.name}%20in%20${req.body.city}&key=${process.env.API_KEY}`)
      .then(function (response) {
        console.log(response);
        res.json(response.data.results);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err })
      })
});

module.exports = router