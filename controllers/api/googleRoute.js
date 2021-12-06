const express = require("express");
const router = express.Router();
const axios = require("axios");

router.post("/", (req, res) => {
    return axios.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.body.name}%20in%20${req.body.city}&key=${process.env.API_KEY}`)
      .then(function (response) {
        res.json(response.data.results);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err })
      })
});

module.exports = router