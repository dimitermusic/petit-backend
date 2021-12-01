const router = require('express').Router();
const tokenAuth = require('../../middleware/tokenAuth');
const { Place, Vote, Comment, Reaction } = require('../../models');

// find all the places that exist within our database
router.get('/', (req, res) => {
  Place.findAll({include:[Comment]})
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
    include: [Comment]
  })
  .then(placeData => {
    if (!placeData) {
      Place.create({
        name: req.body.name,
        isJob: req.body.isJob,
        ref_id: req.params.ref_id,
        location: req.body.location
      }).then(newPlace => {
        Vote.create({
            PlaceId: newPlace.id,
            UserId: req.user.id            
        }).then(voteData => {
            res.json(voteData)
        }).catch(err=>{
            console.log(err);
            res.status(404).json('no vote created')
        })
      }).catch(err => {
        console.log(err);
      })
    } else {
      res.json(placeData);
    };
  }).catch(err => {
    res.status(404).json('unable to get info');
    console.log(err);
  })
});

// FOR TESTING PURPOSES ONLY!! DELETE AFTER TESTING
router.post("/", tokenAuth,(req,res) =>{
    Place.create({
        name: req.body.name,
        isJob: req.body.isJob,
        ref_id:req.body.ref_id,
        location:req.body.location
    }).then(myPlace => {
        res.json(myPlace)
        Vote.create({
            PlaceId: myPlace.id,
            UserId: req.user.id            
        }).then(voteData => {
            res.json(voteData)
        }).catch(err=>{
            console.log(err);
            res.status(404).json('no vote created')
        })
    }).catch(err => {
        console.log(err);
        res.status(403).json("bad request")
    })
})

module.exports = router;