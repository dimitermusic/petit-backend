const router = require('express').Router();
const tokenAuth = require('../../middleware/tokenAuth');
const { Place, Vote, Comment, User } = require('../../models');

router.get('/', (req, res) => {
  Place.findAll()
    .then(placeData => {
      res.json(placeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err })
    })
});

router.get("/:ref_id", (req, res) => {
  Place.findOne({
    where: {
      ref_id: req.params.ref_id,
      isJob: req.body.isJob
    },
    include: [Comment, User, Vote]
  })
  .then(placeData => {
    if (!placeData) {
      Place.create({
        name: req.body.name,
        isJob: req.body.isJob,
        location: req.body.location,
        ref_id: req.params.ref_id,
        website: req.body.website
      }).then(newPlace => {
        res.json(newPlace)
      }).catch(err => {
        console.log(err);
      })
    } else {
      res.json(placeData);
    };
  }).catch(err => {
    res.statusMessage("404").json('unable to get info');
    console.log(err);
  })
});

module.exports = router;