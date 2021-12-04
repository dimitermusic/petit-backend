const express = require("express");
const { route } = require(".");
const router = express.Router();
const tokenAuth = require("../../middleware/tokenAuth")
const { Vote, Place } = require("../../models");

router.get("/", tokenAuth, (req, res) => {
    Vote.findAll({where:{UserId:req.user.id}})
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

// FOR DEVELOPMENT ONLY
router.get("/test", (req, res) => {
    Vote.findAll()
        .then(userData => {
            res.json(userData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ err });
        });
});

// user will be able to vote via this route
router.put("/", tokenAuth, (req, res) => {
    Vote.update(
        {
            hasStipendUp: req.body.hasStipendUp,
            hasStipendDown: req.body.hasStipendDown,
            canBringUp: req.body.canBringUp,
            canBringDown: req.body.canBringDown,
            hasMenuUp: req.body.hasMenuUp,
            hasMenuDown: req.body.hasMenuDown,
            petTimeOffUp: req.body.petTimeOffUp,
            petTimeOffDown: req.body.petTimeOffDown
        },
        {
            where:{
                UserId:req.user.id,
                PlaceId:req.body.placeId
            }
        }
    )
    .then(updatedVote => {
        Place.findByPk(req.body.placeId,{include:[Vote]})
        .then(newPlace=>{
            res.json(newPlace)
        })
        .catch(err=>{
            console.log(err);
            res.status(404).json('oh nooooo place')
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ err: err });
    });
});


module.exports = router;