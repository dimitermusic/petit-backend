const router = require('express').Router();
const tokenAuth = require('../../middleware/tokenAuth');
const { Place, Vote, Comment, Reaction } = require('../../models');

// find all the places that exist within our database
router.get('/', (req, res) => {
  Place.findAll({include:[Comment, Vote]})
    .then(placeData => {
      res.json(placeData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ err })
    })
});

// get info for one specific place based on the ref_id from Google API. Will either create new entry or return back with info already in database depending
router.post("/:ref_id", tokenAuth, (req, res) => {
  Place.findOne({
    where: {
      ref_id: req.params.ref_id,
      isJob: req.body.isJob
    },
    include: [Comment, Vote]
  })
  .then(placeData => {
    if (!placeData) {
      Place.create({
        name: req.body.name,
        isJob: req.body.isJob,
        ref_id: req.params.ref_id,
        location: req.body.location
      }).then(newPlace => {
          console.log(newPlace);
          Vote.create({
            UserId:req.user.id,
            PlaceId:newPlace.id
          })
          .then(voteData =>{
            Place.findByPk(newPlace.id, {
              include:[Comment,Vote]
            })
            .then(myPlace => {
              res.json(myPlace)
            })
            .catch(err=>{
              console.log(err);
            })
          })
          .catch(err=>{
            console.log(err);
          })
      }).catch(err=>{
          console.log(err);
      })
    } else {
      Vote.create({
        UserId:req.user.id,
        PlaceId:placeData.id
      })
      .then(anotherVote=>{
        Place.findByPk(placeData.id,{
          include:[Comment,Vote]
        })
        .then(finalPlace=>{
          res.json(finalPlace)
        })
      })
      .catch(err=>{
        res.status(404).json("oh no!")
      })
    };
  }).catch(err => {
    res.status(404).json('unable to get info');
    console.log(err);
  })
});


module.exports = router;