const express = require("express");
const router = express.Router();
// const jwt = require("jsonwebtoken")
// const tokenAuth = require("../../middleware/tokenAuth")
const { Place } = require("../../models");

router.get("/", (req, res) => {
  Place.findAll()
    .then(userData => {
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.post("/", (req, res) => {
  Place.create({
    name: req.body.name,
    isJob: req.body.isJob,
    location: req.body.location,
    ref_id: req.body.ref_id
  })
    .then(newUser => {
      res.json(newUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
});

router.put("/:id", (req, res) => {
  Place.update(
    {
      name: req.body.name,
      isJob: req.body.isJob,
      location: req.body.location,
      ref_id: req.body.ref_id
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(updatedUser => {
      res.json(updatedUser);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err: err });
    });
});

router.delete("/:id", (req, res) => {
  Place.findByPk(req.params.id).then(() => {
    Place.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(delUser => {
        if (delUser) {
          res.json(delUser);
        } else {
          res.status(404).json({ err: "no such place found!" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ err });
      });
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });;
});

module.exports = router;